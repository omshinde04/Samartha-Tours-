"use client";

/**
 * Founderstory.jsx — CINEMATIC MAGAZINE EDITION
 *
 * Design concept:
 *  • Full-bleed section with the founder's name rendered at 25vw+
 *    as a ghosted watermark across the entire background — not a heading
 *  • Asymmetric stacked image collage (3 images at different angles/sizes)
 *    that overlap the text zone — grid-breaking
 *  • A vertical "film strip" motif on the left edge (editorial / cinematic)
 *  • Horizontal marquee quote strip mid-section
 *  • Story text laid out as editorial pull-quotes + body, not a paragraph dump
 *  • Subtle GSAP scroll-driven image depth & rotation
 *  • Every element enters with a staggered cinematic reveal
 */

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

/* ── Tokens ─────────────────────────────────────────────────────────── */
const G = "#c9a84c";
const GL = "#e8c97a";
const GD = "#a07830";
const ease = [0.16, 1, 0.3, 1];

/* ── Three overlapping image slots ─────────────────────────────────── */
const IMAGES = [
    {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop&q=80",
        alt: "Western Ghats misty mountains — founder's home Maharashtra",
        /* Top image — tall portrait */
        style: {
            position: "absolute",
            top: "0%", right: "0%",
            width: "clamp(180px,28vw,340px)",
            aspectRatio: "2/3",
            borderRadius: 18,
            overflow: "hidden",
            border: "1px solid rgba(201,168,76,0.2)",
            zIndex: 3,
            rotate: "-2deg",
        },
    },
    {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&h=500&fit=crop&q=80",
        alt: "Bhandardara Sahyadri lake Maharashtra road journey",
        /* Middle — landscape, shifted left, overlaps first */
        style: {
            position: "absolute",
            top: "28%", right: "clamp(120px,18vw,220px)",
            width: "clamp(150px,22vw,280px)",
            aspectRatio: "4/3",
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.07)",
            zIndex: 4,
            rotate: "1.5deg",
        },
    },
    {
        src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=450&fit=crop&q=80",
        alt: "Lonavala valley foggy hills Western Ghats",
        /* Bottom — smallest, punches through */
        style: {
            position: "absolute",
            bottom: "2%", right: "clamp(30px,6vw,80px)",
            width: "clamp(130px,18vw,240px)",
            aspectRatio: "3/2",
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(201,168,76,0.15)",
            zIndex: 5,
            rotate: "-1deg",
        },
    },
];

/* ── Marquee strip ───────────────────────────────────────────────────── */
const MARQUEE_TEXT = [
    "Ghoti · Maharashtra",
    "◆",
    "Trust Over Speed",
    "◆",
    "Every Road Tells a Story",
    "◆",
    "Om Vilas Shinde",
    "◆",
    "Comfort First",
    "◆",
];

function MarqueeStrip() {
    const repeated = [...MARQUEE_TEXT, ...MARQUEE_TEXT, ...MARQUEE_TEXT];
    return (
        <div style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            borderTop: "1px solid rgba(201,168,76,0.12)",
            borderBottom: "1px solid rgba(201,168,76,0.12)",
            padding: "14px 0",
            margin: "clamp(40px,6vw,64px) 0",
            background: "rgba(201,168,76,0.03)",
        }}>
            <motion.div
                animate={{ x: ["0%", "-33.33%"] }}
                transition={{ duration: 22, ease: "linear", repeat: Infinity }}
                style={{
                    display: "flex",
                    gap: "clamp(24px,4vw,48px)",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                    width: "max-content",
                }}
            >
                {repeated.map((t, i) => (
                    <span key={i} style={{
                        fontFamily: t === "◆" ? "serif" : "'Cormorant Garamond', serif",
                        fontStyle: t === "◆" ? "normal" : "italic",
                        fontWeight: 300,
                        fontSize: t === "◆"
                            ? "clamp(8px,1.5vw,12px)"
                            : "clamp(13px,2.2vw,18px)",
                        color: t === "◆"
                            ? "rgba(201,168,76,0.35)"
                            : "rgba(245,240,232,0.45)",
                        letterSpacing: t === "◆" ? "0" : "0.04em",
                    }}>{t}</span>
                ))}
            </motion.div>
        </div>
    );
}

/* ── Film strip left edge ─────────────────────────────────────────────── */
function FilmStrip() {
    const holes = Array.from({ length: 12 });
    return (
        <div style={{
            position: "absolute",
            top: 0, left: 0, bottom: 0,
            width: 28,
            background: "rgba(0,0,0,0.55)",
            borderRight: "1px solid rgba(201,168,76,0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            zIndex: 10,
            pointerEvents: "none",
        }}>
            {holes.map((_, i) => (
                <div key={i} style={{
                    width: 10, height: 7,
                    borderRadius: 2,
                    background: "rgba(201,168,76,0.18)",
                    border: "1px solid rgba(201,168,76,0.1)",
                }} />
            ))}
        </div>
    );
}

/* ── Animated image card ──────────────────────────────────────────────── */
function ImageCard({ img, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-5% 0px" });
    const [loaded, setLoaded] = useState(false);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40, rotate: parseFloat(img.style.rotate || "0") - 4 }}
            animate={inView
                ? { opacity: 1, y: 0, rotate: parseFloat(img.style.rotate || "0") }
                : {}
            }
            transition={{ duration: 1.2, ease, delay: 0.2 + index * 0.18 }}
            whileHover={{ scale: 1.04, rotate: 0, zIndex: 20, transition: { duration: 0.4 } }}
            style={img.style}
        >
            {!loaded && (
                <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(135deg,#1a1400,#0e0d0b)",
                }} />
            )}
            <img
                src={img.src}
                alt={img.alt}
                onLoad={() => setLoaded(true)}
                style={{
                    width: "100%", height: "100%",
                    objectFit: "cover", display: "block",
                    opacity: loaded ? 0.82 : 0,
                    transition: "opacity 0.8s",
                    filter: "saturate(0.85) contrast(1.05)",
                }}
                loading="lazy"
            />
            {/* Gold shimmer overlay */}
            <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(135deg,rgba(201,168,76,0.04),transparent 60%)",
                pointerEvents: "none",
            }} />
        </motion.div>
    );
}

/* ── Pull quote block ─────────────────────────────────────────────────── */
function PullQuote({ text, delay }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-8% 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease, delay }}
            style={{
                borderLeft: `2px solid rgba(201,168,76,0.4)`,
                paddingLeft: "clamp(16px,2.5vw,24px)",
                margin: "clamp(20px,3vw,28px) 0",
            }}
        >
            <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic", fontWeight: 300,
                fontSize: "clamp(16px,2.8vw,24px)",
                lineHeight: 1.5,
                color: "rgba(245,240,232,0.75)",
                margin: 0,
            }}>{text}</p>
        </motion.div>
    );
}

/* ══════════════════════════════════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════════════════════════════════ */
export default function FounderStory() {
    const sectionRef = useRef(null);
    const nameRef = useRef(null);
    const img0Ref = useRef(null);
    const img1Ref = useRef(null);
    const img2Ref = useRef(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true); }, []);

    /* Scroll-driven parallax on the giant name watermark */
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const nameX = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
    const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

    /* GSAP: image tilt-parallax on scroll */
    useEffect(() => {
        if (!mounted) return;
        const mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            const refs = [img0Ref, img1Ref, img2Ref];
            const offsets = ["0%", "-6%", "4%"];
            const rotations = ["-1deg", "0.5deg", "-0.5deg"];
            refs.forEach((r, i) => {
                if (!r.current) return;
                gsap.to(r.current, {
                    y: offsets[i],
                    rotation: rotations[i],
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.4 + i * 0.3,
                    },
                });
            });
        });
        return () => mm.revert();
    }, [mounted]);

    const isInView = useInView(sectionRef, { once: true, margin: "-8% 0px" });

    return (
        <section
            ref={sectionRef}
            style={{
                position: "relative",
                background: "#0e0d0b",
                overflow: "hidden",
                padding: "clamp(80px,11vw,130px) 0 clamp(80px,11vw,140px) 40px",
            }}
            aria-label="Founder — Om Vilas Shinde"
        >

            {/* ══════════════════════════════════════
          FILM STRIP — left edge
      ══════════════════════════════════════ */}
            <FilmStrip />

            {/* ══════════════════════════════════════
          GIANT NAME WATERMARK — background
          Scrolls at a different speed for depth
      ══════════════════════════════════════ */}
            <motion.div
                style={{
                    position: "absolute",
                    top: "50%", left: "50%",
                    translateX: "-50%", translateY: "-50%",
                    x: nameX, y: nameY,
                    zIndex: 0, pointerEvents: "none",
                    userSelect: "none",
                    whiteSpace: "nowrap",
                }}
            >
                <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300, fontStyle: "italic",
                    fontSize: "clamp(80px,18vw,240px)",
                    letterSpacing: "-0.04em",
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(201,168,76,0.07)",
                    lineHeight: 1,
                    display: "block",
                }}>
                    Om Vilas
                </span>
            </motion.div>

            {/* ══════════════════════════════════════
          SECTION LABEL — top
      ══════════════════════════════════════ */}
            <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, ease }}
                style={{
                    position: "relative", zIndex: 6,
                    display: "flex", alignItems: "center",
                    gap: 12,
                    padding: "0 clamp(24px,5vw,60px)",
                    marginBottom: "clamp(40px,6vw,60px)",
                }}
            >
                <div style={{
                    padding: "6px 16px", borderRadius: 99,
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                    fontSize: "clamp(8px,1.6vw,10px)", letterSpacing: "0.38em",
                    textTransform: "uppercase", color: "rgba(201,168,76,0.7)",
                }}>The Founder</div>
                <div style={{ flex: 1, height: 1, background: "rgba(201,168,76,0.1)" }} />
                <span style={{
                    fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                    fontSize: "clamp(8px,1.4vw,9px)", letterSpacing: "0.28em",
                    textTransform: "uppercase", color: "rgba(245,240,232,0.22)",
                }}>Ghoti · Maharashtra</span>
            </motion.div>

            {/* ══════════════════════════════════════
          MAIN GRID
          Left: content  |  Right: image collage
          On mobile: stacked vertically
      ══════════════════════════════════════ */}
            <div style={{
                position: "relative", zIndex: 6,
                display: "grid",
                gridTemplateColumns: "1fr clamp(260px,42vw,540px)",
                gridTemplateRows: "auto",
                gap: 0,
                maxWidth: 1360,
                margin: "0 auto",
                padding: "0 clamp(24px,5vw,60px)",
                alignItems: "start",
            }}
                className="founder-grid"
            >

                {/* ── LEFT: All text content ── */}
                <div style={{ paddingRight: "clamp(24px,5vw,60px)", paddingBottom: 80 }}>

                    {/* HERO NAME — massive editorial heading */}
                    <div style={{ overflow: "hidden", marginBottom: 4 }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 80 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1.3, ease, delay: 0.1 }}
                            style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontWeight: 300,
                                fontSize: "clamp(52px,10vw,130px)",
                                lineHeight: 0.88,
                                letterSpacing: "-0.03em",
                                color: "rgba(245,240,232,0.96)",
                                margin: 0,
                            }}
                        >
                            Om Vilas
                        </motion.h2>
                    </div>

                    <div style={{ overflow: "hidden", marginBottom: "clamp(24px,4vw,36px)" }}>
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1.3, ease, delay: 0.2 }}
                        >
                            <span style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontStyle: "italic", fontWeight: 300,
                                fontSize: "clamp(52px,10vw,130px)",
                                lineHeight: 0.88, letterSpacing: "-0.03em",
                                background: `linear-gradient(135deg,${G} 0%,${GL} 45%,${GD} 80%,${G} 100%)`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                display: "inline-block",
                            }}>Shinde.</span>
                        </motion.div>
                    </div>

                    {/* Subtitle row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 1, ease, delay: 0.35 }}
                        style={{
                            display: "flex", alignItems: "center",
                            gap: 14, marginBottom: "clamp(28px,4.5vw,44px)",
                            flexWrap: "wrap",
                        }}
                    >
                        <span style={{
                            fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                            fontSize: "clamp(9px,1.8vw,12px)", letterSpacing: "0.28em",
                            textTransform: "uppercase", color: "rgba(201,168,76,0.5)",
                        }}>Founder</span>
                        <div style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(201,168,76,0.3)" }} />
                        <span style={{
                            fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                            fontSize: "clamp(9px,1.8vw,12px)", letterSpacing: "0.28em",
                            textTransform: "uppercase", color: "rgba(245,240,232,0.3)",
                        }}>Shree Swami Samartha Tours &amp; Travels</span>
                    </motion.div>

                    {/* Pull quote 1 */}
                    <PullQuote
                        text='"A journey should make you feel cared for — not just transported."'
                        delay={0.42}
                    />

                    {/* Body text blocks */}
                    {[
                        "Om Vilas Shinde grew up in Ghoti, Maharashtra — a small town surrounded by the Western Ghats, where every road tells a story. Watching travellers move through the region, he understood early that a journey is not just about reaching a destination. It is about how you feel along the way.",
                        "What started as a deep personal passion for road travel gradually shaped itself into something larger. Om Vilas began with a simple belief — that people deserve to travel comfortably, safely, and without worry. He built Shree Swami Samartha Tours & Travels on that single, human principle.",
                    ].map((para, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 22 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, ease, delay: 0.55 + i * 0.14 }}
                            style={{
                                fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                                fontSize: "clamp(13px,1.8vw,16px)", lineHeight: 1.88,
                                color: "rgba(245,240,232,0.48)",
                                marginBottom: "clamp(14px,2vw,20px)",
                                maxWidth: 520,
                            }}
                        >{para}</motion.p>
                    ))}

                    {/* Pull quote 2 */}
                    <PullQuote
                        text='"Not speed. Not scale. Just genuine care for every traveller who trusts us."'
                        delay={0.82}
                    />

                    {/* Contact + signature row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease, delay: 1 }}
                        style={{
                            display: "flex", alignItems: "center",
                            flexWrap: "wrap", gap: 20,
                            marginTop: "clamp(24px,4vw,36px)",
                        }}
                    >
                        {/* Signature block */}
                        <div style={{
                            display: "flex", flexDirection: "column", gap: 4,
                        }}>
                            <span style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontStyle: "italic", fontWeight: 300,
                                fontSize: "clamp(22px,3.5vw,32px)",
                                color: "rgba(201,168,76,0.65)",
                                letterSpacing: "0.02em",
                                lineHeight: 1,
                            }}>Om Vilas Shinde</span>
                            <div style={{ width: "100%", height: 1, background: "rgba(201,168,76,0.2)" }} />
                            <span style={{
                                fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                                fontSize: 9, letterSpacing: "0.28em",
                                textTransform: "uppercase", color: "rgba(201,168,76,0.4)",
                            }}>Founder &amp; Director</span>
                        </div>

                        {/* Divider */}
                        <div style={{ width: 1, height: 44, background: "rgba(255,255,255,0.08)" }} />

                        {/* Phone */}
                        <a
                            href="tel:+919373545169"
                            style={{
                                display: "flex", flexDirection: "column", gap: 3,
                                textDecoration: "none",
                            }}
                        >
                            <span style={{
                                fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                                fontSize: 8, letterSpacing: "0.3em",
                                textTransform: "uppercase", color: "rgba(201,168,76,0.45)",
                            }}>Direct Line</span>
                            <span style={{
                                fontFamily: "'Outfit', sans-serif", fontWeight: 400,
                                fontSize: "clamp(13px,1.8vw,15px)",
                                color: "rgba(245,240,232,0.72)",
                                letterSpacing: "0.04em",
                            }}>+91 93735 45169</span>
                        </a>
                    </motion.div>
                </div>

                {/* ── RIGHT: Stacked asymmetric image collage ── */}
                <div
                    style={{
                        position: "relative",
                        height: "clamp(480px,70vw,780px)",
                    }}
                >
                    {/* Gold vertical accent line */}
                    <div style={{
                        position: "absolute",
                        top: "8%", right: "clamp(60px,12vw,150px)",
                        width: 1, height: "60%",
                        background: `linear-gradient(to bottom,transparent,${G}44,transparent)`,
                        zIndex: 2,
                    }} />

                    {/* Image 0 — tall portrait top-right */}
                    <motion.div
                        ref={img0Ref}
                        initial={{ opacity: 0, y: 50, rotate: -4 }}
                        animate={isInView ? { opacity: 1, y: 0, rotate: -2 } : {}}
                        transition={{ duration: 1.3, ease, delay: 0.3 }}
                        whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }}
                        style={{
                            position: "absolute",
                            top: "0%", right: "0%",
                            width: "clamp(160px,24vw,300px)",
                            aspectRatio: "2/3",
                            borderRadius: 18,
                            overflow: "hidden",
                            border: "1px solid rgba(201,168,76,0.22)",
                            zIndex: 3,
                            willChange: "transform",
                            cursor: "pointer",
                            boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
                        }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=750&fit=crop&q=80"
                            alt="Western Ghats mountains Maharashtra"
                            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.8) contrast(1.08)" }}
                            loading="lazy"
                        />
                        <div style={{
                            position: "absolute", inset: 0,
                            background: "linear-gradient(to top,rgba(14,13,11,0.7) 0%,transparent 50%)",
                        }} />
                        {/* Caption */}
                        <div style={{
                            position: "absolute", bottom: 12, left: 14,
                            fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                            fontSize: 8, letterSpacing: "0.26em",
                            textTransform: "uppercase", color: "rgba(201,168,76,0.6)",
                        }}>Western Ghats</div>
                    </motion.div>

                    {/* Image 1 — landscape, centre-left, overlapping */}
                    <motion.div
                        ref={img1Ref}
                        initial={{ opacity: 0, y: 60, rotate: 3 }}
                        animate={isInView ? { opacity: 1, y: 0, rotate: 1.5 } : {}}
                        transition={{ duration: 1.3, ease, delay: 0.5 }}
                        whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }}
                        style={{
                            position: "absolute",
                            top: "30%",
                            right: "clamp(100px,16vw,200px)",
                            width: "clamp(140px,20vw,250px)",
                            aspectRatio: "4/3",
                            borderRadius: 14,
                            overflow: "hidden",
                            border: "1px solid rgba(255,255,255,0.07)",
                            zIndex: 4,
                            willChange: "transform",
                            cursor: "pointer",
                            boxShadow: "0 16px 48px rgba(0,0,0,0.55)",
                        }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=450&fit=crop&q=80"
                            alt="Bhandardara lake Sahyadri Maharashtra"
                            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.78) contrast(1.06)" }}
                            loading="lazy"
                        />
                        <div style={{
                            position: "absolute", inset: 0,
                            background: "linear-gradient(135deg,rgba(14,13,11,0.4),transparent)",
                        }} />
                        <div style={{
                            position: "absolute", bottom: 10, left: 12,
                            fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                            fontSize: 8, letterSpacing: "0.26em",
                            textTransform: "uppercase", color: "rgba(201,168,76,0.55)",
                        }}>Bhandardara</div>
                    </motion.div>

                    {/* Image 2 — small, bottom, punches through */}
                    <motion.div
                        ref={img2Ref}
                        initial={{ opacity: 0, y: 40, rotate: -2 }}
                        animate={isInView ? { opacity: 1, y: 0, rotate: -1 } : {}}
                        transition={{ duration: 1.2, ease, delay: 0.72 }}
                        whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
                        style={{
                            position: "absolute",
                            bottom: "4%", right: "clamp(20px,4vw,48px)",
                            width: "clamp(120px,17vw,220px)",
                            aspectRatio: "3/2",
                            borderRadius: 12,
                            overflow: "hidden",
                            border: "1px solid rgba(201,168,76,0.16)",
                            zIndex: 5,
                            willChange: "transform",
                            cursor: "pointer",
                            boxShadow: "0 12px 36px rgba(0,0,0,0.6)",
                        }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&h=340&fit=crop&q=80"
                            alt="Lonavala fog valley Maharashtra hills"
                            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.75) contrast(1.1)" }}
                            loading="lazy"
                        />
                        <div style={{
                            position: "absolute", inset: 0,
                            background: "rgba(14,13,11,0.2)",
                        }} />
                        <div style={{
                            position: "absolute", bottom: 8, left: 10,
                            fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                            fontSize: 8, letterSpacing: "0.26em",
                            textTransform: "uppercase", color: "rgba(201,168,76,0.5)",
                        }}>Lonavala</div>
                    </motion.div>

                    {/* Floating location badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.9, ease, delay: 0.9 }}
                        style={{
                            position: "absolute",
                            top: "18%", left: "4%",
                            padding: "12px 18px",
                            borderRadius: 14,
                            background: "rgba(14,13,11,0.88)",
                            border: "1px solid rgba(201,168,76,0.22)",
                            backdropFilter: "blur(16px)",
                            WebkitBackdropFilter: "blur(16px)",
                            zIndex: 8,
                            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                        }}
                    >
                        <div style={{
                            fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                            fontSize: 7, letterSpacing: "0.3em",
                            textTransform: "uppercase", color: "rgba(201,168,76,0.5)",
                            marginBottom: 5,
                        }}>Based In</div>
                        <div style={{
                            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                            fontSize: "clamp(15px,2.2vw,19px)", color: "rgba(245,240,232,0.88)",
                            lineHeight: 1.2,
                        }}>Ghoti,<br />Maharashtra</div>
                    </motion.div>

                    {/* Floating year badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.9, ease, delay: 1.05 }}
                        style={{
                            position: "absolute",
                            bottom: "18%", left: "2%",
                            zIndex: 8,
                        }}
                    >
                        <div style={{
                            width: "clamp(56px,9vw,80px)",
                            height: "clamp(56px,9vw,80px)",
                            borderRadius: "50%",
                            background: "rgba(201,168,76,0.09)",
                            border: "1px solid rgba(201,168,76,0.22)",
                            display: "flex", flexDirection: "column",
                            alignItems: "center", justifyContent: "center",
                        }}>
                            <span style={{
                                fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
                                fontWeight: 300, fontSize: "clamp(8px,1.4vw,11px)",
                                color: "rgba(201,168,76,0.6)", lineHeight: 1,
                                textAlign: "center",
                            }}>Est.<br />Ghoti</span>
                        </div>
                    </motion.div>

                    {/* Decorative dot grid */}
                    <div style={{
                        position: "absolute", bottom: "20%", left: "18%",
                        display: "grid", gridTemplateColumns: "repeat(4, 8px)",
                        gap: 8, opacity: 0.25, zIndex: 1, pointerEvents: "none",
                    }}>
                        {Array.from({ length: 16 }).map((_, i) => (
                            <div key={i} style={{
                                width: 2, height: 2, borderRadius: "50%",
                                background: G,
                            }} />
                        ))}
                    </div>
                </div>

            </div>

            {/* ══════════════════════════════════════
          MARQUEE STRIP — mid-section
      ══════════════════════════════════════ */}
            <div style={{ position: "relative", zIndex: 6 }}>
                <MarqueeStrip />
            </div>

            {/* ══════════════════════════════════════
          BOTTOM PHILOSOPHY ROW — 3 columns
      ══════════════════════════════════════ */}
            <div style={{
                position: "relative", zIndex: 6,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,220px), 1fr))",
                gap: "0",
                maxWidth: 1360, margin: "0 auto",
                padding: "0 clamp(24px,5vw,60px)",
                borderTop: "1px solid rgba(255,255,255,0.05)",
            }}>
                {[
                    { num: "I", label: "Comfort First", body: "Every decision begins with how the traveller will feel on the road." },
                    { num: "II", label: "Trust Is Earned", body: "Not through promises — through consistent, honest journeys delivered." },
                    { num: "III", label: "People Over Profit", body: "We measure success in returning customers, not just completed bookings." },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease, delay: 0.3 + i * 0.15 }}
                        style={{
                            padding: "clamp(24px,3.5vw,36px) clamp(20px,3vw,32px)",
                            borderRight: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none",
                        }}
                    >
                        <div style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontStyle: "italic", fontWeight: 300,
                            fontSize: "clamp(28px,4vw,44px)",
                            color: "rgba(201,168,76,0.18)", lineHeight: 1,
                            marginBottom: 14,
                        }}>{item.num}</div>
                        <h4 style={{
                            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                            fontSize: "clamp(16px,2.5vw,22px)", color: "rgba(245,240,232,0.82)",
                            margin: "0 0 10px", letterSpacing: "-0.01em",
                        }}>{item.label}</h4>
                        <p style={{
                            fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                            fontSize: "clamp(11px,1.6vw,13px)", lineHeight: 1.75,
                            color: "rgba(245,240,232,0.38)", margin: 0,
                        }}>{item.body}</p>
                    </motion.div>
                ))}
            </div>

            {/* ── Mobile responsive overrides ── */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Outfit:wght@200;300;400;500&display=swap');

        .founder-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 860px) {
          .founder-grid {
            grid-template-columns: 1fr clamp(260px,42vw,540px);
          }
        }
      `}</style>
        </section>
    );
}