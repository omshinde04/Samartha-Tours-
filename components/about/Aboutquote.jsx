"use client";

/**
 * AboutQuote.jsx
 * Full-bleed cinematic quote section.
 * Luxury typography. Minimal UI. Maximum atmosphere.
 * Background: real Maharashtra landscape image.
 */

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const G = "#c9a84c";
const GL = "#e8c97a";
const ease = [0.16, 1, 0.3, 1];

export default function AboutQuote() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-8% 0px" });

    /* Subtle parallax on the background */
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

    return (
        <section
            ref={ref}
            style={{
                position: "relative",
                overflow: "hidden",
                minHeight: "clamp(380px,55vw,600px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            aria-label="Brand quote"
        >
            {/* ── Background image with parallax ── */}
            <motion.div
                style={{
                    position: "absolute",
                    inset: "-12%",
                    y: bgY,
                    willChange: "transform",
                }}
            >
                <img
                    src="https://images.unsplash.com/photo-1626015365107-338c19ef7264?w=1400&h=700&fit=crop&q=75"
                    alt="Mahabaleshwar misty mountains Maharashtra"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    loading="lazy"
                />
            </motion.div>

            {/* ── Overlay: dark cinematic ── */}
            <div style={{
                position: "absolute", inset: 0,
                background: [
                    "linear-gradient(to bottom, rgba(14,13,11,0.88) 0%, rgba(14,13,11,0.72) 50%, rgba(14,13,11,0.92) 100%)",
                    "linear-gradient(to right, rgba(14,13,11,0.6) 0%, rgba(14,13,11,0.0) 50%, rgba(14,13,11,0.6) 100%)",
                ].join(", "),
            }} />

            {/* ── Ambient gold glow ── */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                background: "radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.08) 0%, transparent 60%)",
            }} />

            {/* ── Content ── */}
            <div style={{
                position: "relative", zIndex: 1,
                textAlign: "center",
                padding: "clamp(60px,10vw,100px) clamp(24px,8vw,120px)",
                maxWidth: 900,
            }}>

                {/* Opening mark */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.9, ease, delay: 0.1 }}
                    style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(60px,12vw,120px)",
                        color: "rgba(201,168,76,0.2)",
                        lineHeight: 0.6,
                        marginBottom: "clamp(20px,3vw,28px)",
                        display: "block",
                        fontWeight: 300,
                        userSelect: "none",
                    }}
                >"</motion.div>

                {/* Quote text */}
                <motion.blockquote
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.2, ease, delay: 0.25 }}
                    style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 300, fontStyle: "italic",
                        fontSize: "clamp(22px,5vw,54px)",
                        lineHeight: 1.3,
                        letterSpacing: "-0.01em",
                        color: "rgba(245,240,232,0.9)",
                        margin: "0 0 clamp(20px,3.5vw,32px)",
                    }}
                >
                    Every journey becomes{" "}
                    <span style={{
                        background: `linear-gradient(135deg,${G},${GL})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}>
                        memorable
                    </span>{" "}
                    when comfort, trust,<br className="hide-mobile" />
                    and people come together.
                </motion.blockquote>

                {/* Attribution */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, ease, delay: 0.55 }}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 14,
                    }}
                >
                    <div style={{ width: 28, height: 1, background: "rgba(201,168,76,0.4)" }} />
                    <span style={{
                        fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                        fontSize: "clamp(9px,1.6vw,11px)", letterSpacing: "0.28em",
                        textTransform: "uppercase", color: "rgba(201,168,76,0.6)",
                    }}>
                        Shree Swami Samartha Tours &amp; Travels
                    </span>
                    <div style={{ width: 28, height: 1, background: "rgba(201,168,76,0.4)" }} />
                </motion.div>

            </div>

            {/* ── Thin gold top/bottom rules ── */}
            <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 1,
                background: "linear-gradient(to right,transparent,rgba(201,168,76,0.15),transparent)",
            }} />
            <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: 1,
                background: "linear-gradient(to right,transparent,rgba(201,168,76,0.15),transparent)",
            }} />

            {/* Mobile line break helper */}
            <style>{`.hide-mobile { display:none; } @media(min-width:640px){.hide-mobile{display:inline;}}`}</style>
        </section>
    );
}