"use client";

/**
 * JourneySection.jsx
 * Cinematic full-bleed emotional section about the experience of road travel.
 * Background image with parallax. Large editorial quote. Minimal UI.
 */

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const G = "#c9a84c";
const ease = [0.16, 1, 0.3, 1];

const MOMENTS = [
    { label: "The Road", body: "Every highway, every mountain pass, every coastal stretch — becomes part of your story." },
    { label: "The Comfort", body: "Clean seats, cool air, smooth drive. You rest. We handle the kilometres." },
    { label: "The Memories", body: "Arrive not just at a destination — but at a feeling that stays long after the journey ends." },
];

export default function JourneySection() {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

    return (
        <section
            ref={sectionRef}
            style={{
                position: "relative",
                overflow: "hidden",
                background: "#0e0d0b",
            }}
        >
            {/* Top rule */}
            <div style={{
                position: "absolute", top: 0,
                left: "clamp(20px,6vw,80px)", right: "clamp(20px,6vw,80px)",
                height: 1,
                background: "linear-gradient(to right,transparent,rgba(255,255,255,0.06),transparent)",
            }} />

            {/* ── Full-bleed image hero ── */}
            <div style={{ position: "relative", minHeight: "clamp(320px,50vw,520px)", overflow: "hidden" }}>
                <motion.div style={{ position: "absolute", inset: "-12%", y: bgY, willChange: "transform" }}>
                    <img
                        src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1400&h=600&fit=crop&q=75"
                        alt="Scenic mountain road Maharashtra — cinematic journey"
                        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.45, filter: "saturate(0.7)" }}
                        loading="lazy"
                    />
                </motion.div>

                {/* Dark overlay */}
                <div style={{
                    position: "absolute", inset: 0,
                    background: [
                        "linear-gradient(to bottom, rgba(14,13,11,0.75) 0%, rgba(14,13,11,0.55) 50%, rgba(14,13,11,0.85) 100%)",
                        "linear-gradient(to right, rgba(14,13,11,0.6) 0%, transparent 40%, rgba(14,13,11,0.6) 100%)",
                    ].join(", "),
                }} />

                {/* Gold ambient */}
                <div style={{
                    position: "absolute", inset: 0,
                    background: "radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.07) 0%, transparent 60%)",
                    pointerEvents: "none",
                }} />

                {/* Central quote */}
                <div style={{
                    position: "absolute", inset: 0,
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    padding: "clamp(40px,6vw,80px) clamp(24px,8vw,120px)",
                    textAlign: "center",
                }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.9, ease }}
                        style={{
                            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                            fontSize: "clamp(50px,10vw,100px)",
                            color: "rgba(201,168,76,0.15)", lineHeight: 0.7,
                            marginBottom: "clamp(12px,2vw,18px)",
                        }}
                    >"</motion.div>

                    <motion.blockquote
                        initial={{ opacity: 0, y: 28 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.2, ease, delay: 0.2 }}
                        style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontStyle: "italic", fontWeight: 300,
                            fontSize: "clamp(20px,4.5vw,50px)", lineHeight: 1.25,
                            letterSpacing: "-0.01em",
                            color: "rgba(245,240,232,0.88)",
                            margin: "0 0 clamp(16px,2.5vw,24px)",
                        }}
                    >
                        The best journeys are felt,{" "}
                        <span style={{
                            background: `linear-gradient(135deg,${G},#e8c97a)`,
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}>not just driven.</span>
                    </motion.blockquote>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 1, ease, delay: 0.45 }}
                        style={{
                            display: "flex", alignItems: "center", gap: 12,
                        }}
                    >
                        <div style={{ width: 24, height: 1, background: "rgba(201,168,76,0.35)" }} />
                        <span style={{
                            fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                            fontSize: "clamp(8px,1.5vw,10px)", letterSpacing: "0.3em",
                            textTransform: "uppercase", color: "rgba(201,168,76,0.5)",
                        }}>Shree Swami Samartha Tours &amp; Travels</span>
                        <div style={{ width: 24, height: 1, background: "rgba(201,168,76,0.35)" }} />
                    </motion.div>
                </div>
            </div>

            {/* ── Three journey moments ── */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
                background: "#0e0d0b",
                borderTop: "1px solid rgba(255,255,255,0.05)",
            }}>
                {MOMENTS.map((m, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 24 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease, delay: 0.3 + i * 0.14 }}
                        style={{
                            padding: "clamp(28px,4vw,44px) clamp(20px,3.5vw,36px)",
                            borderRight: i < MOMENTS.length - 1
                                ? "1px solid rgba(255,255,255,0.05)"
                                : "none",
                        }}
                    >
                        {/* Step number */}
                        <div style={{
                            fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
                            fontWeight: 300, fontSize: "clamp(36px,5vw,52px)",
                            color: "rgba(201,168,76,0.12)", lineHeight: 1,
                            marginBottom: 14,
                        }}>0{i + 1}</div>

                        <h4 style={{
                            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                            fontSize: "clamp(18px,3vw,26px)", lineHeight: 1.15,
                            color: "rgba(245,240,232,0.85)",
                            margin: "0 0 clamp(10px,1.5vw,14px)",
                        }}>{m.label}</h4>

                        <p style={{
                            fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                            fontSize: "clamp(12px,1.7vw,14px)", lineHeight: 1.8,
                            color: "rgba(245,240,232,0.42)", margin: 0,
                        }}>{m.body}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}