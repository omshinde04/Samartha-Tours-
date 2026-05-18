"use client";

/**
 * AboutHero.jsx
 * Cinematic hero for the About page.
 * Large editorial heading + minimal luxury copy.
 * No video, no heavy effects — pure typography and atmosphere.
 */

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ── Shared design tokens ──────────────────────────────────────── */
const G = "#c9a84c";
const GL = "#e8c97a";
const GD = "#a07830";
const ease = [0.16, 1, 0.3, 1];

/* ── Animation variants ──────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1.1, ease, delay } },
});

const lineReveal = (delay = 0) => ({
    hidden: { scaleX: 0, originX: 0 },
    show: { scaleX: 1, transition: { duration: 1.2, ease, delay } },
});

export default function AboutHero() {
    return (
        <section
            style={{
                position: "relative",
                width: "100%",
                minHeight: "100svh",
                background: "#0e0d0b",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                overflow: "hidden",
                padding: "clamp(100px,14vw,160px) clamp(20px,6vw,80px) clamp(80px,10vw,120px)",
            }}
            aria-label="About Shree Swami Samartha Tours & Travels"
        >

            {/* ── Ambient light bleed ── */}
            <div style={{
                position: "absolute", top: 0, left: 0, right: 0,
                height: "40%", pointerEvents: "none",
                background: `radial-gradient(ellipse at 20% 0%, rgba(201,168,76,0.07) 0%, transparent 65%)`,
            }} />
            <div style={{
                position: "absolute", bottom: 0, right: 0,
                width: "50%", height: "40%", pointerEvents: "none",
                background: `radial-gradient(ellipse at 80% 100%, rgba(160,120,48,0.05) 0%, transparent 65%)`,
            }} />

            {/* ── Vertical rule, left ── */}
            <div style={{
                position: "absolute",
                top: 0, bottom: 0, left: "clamp(20px,5vw,60px)",
                width: 1,
                background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.18) 30%, rgba(201,168,76,0.18) 70%, transparent)",
                pointerEvents: "none",
            }} />

            {/* ── Corner bracket top-left ── */}
            <div style={{
                position: "absolute", top: "clamp(24px,4vw,44px)", left: "clamp(24px,4vw,44px)",
                width: 28, height: 28,
                borderTop: "1px solid rgba(201,168,76,0.28)",
                borderLeft: "1px solid rgba(201,168,76,0.28)",
            }} />
            <div style={{
                position: "absolute", bottom: "clamp(24px,4vw,44px)", right: "clamp(24px,4vw,44px)",
                width: 28, height: 28,
                borderBottom: "1px solid rgba(201,168,76,0.28)",
                borderRight: "1px solid rgba(201,168,76,0.28)",
            }} />

            {/* ── Main content ── */}
            <motion.div
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } } }}
                initial="hidden"
                animate="show"
                style={{ maxWidth: 900, width: "100%" }}
            >

                {/* Eyebrow */}
                <motion.div
                    variants={fadeUp(0)}
                    style={{
                        display: "flex", alignItems: "center", gap: 12,
                        marginBottom: "clamp(24px,4vw,36px)",
                    }}
                >
                    <motion.div
                        variants={lineReveal(0.1)}
                        style={{ width: 32, height: 1, background: G, transformOrigin: "left" }}
                    />
                    <span style={{
                        fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                        fontSize: "clamp(8px,2vw,10px)", letterSpacing: "0.38em",
                        textTransform: "uppercase", color: "rgba(201,168,76,0.75)",
                    }}>
                        Shree Swami Samartha Tours &amp; Travels
                    </span>
                </motion.div>

                {/* Main heading — split for stagger effect */}
                <div style={{ overflow: "hidden", marginBottom: "clamp(4px,1vw,8px)" }}>
                    <motion.h1
                        variants={fadeUp(0.1)}
                        style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontWeight: 300, lineHeight: 0.9,
                            letterSpacing: "-0.025em",
                            fontSize: "clamp(48px,10vw,120px)",
                            color: "rgba(245,240,232,0.97)",
                            margin: 0,
                        }}
                    >
                        More Than Travel.
                    </motion.h1>
                </div>

                <div style={{ overflow: "hidden", marginBottom: "clamp(28px,5vw,48px)" }}>
                    <motion.div variants={fadeUp(0.22)}>
                        <span style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontStyle: "italic", fontWeight: 300,
                            lineHeight: 0.9, letterSpacing: "-0.025em",
                            fontSize: "clamp(48px,10vw,120px)",
                            background: `linear-gradient(135deg,${G} 0%,${GL} 40%,${GD} 70%,${G} 100%)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            display: "inline-block",
                        }}>
                            It's About Trust.
                        </span>
                    </motion.div>
                </div>

                {/* Separator */}
                <motion.div
                    variants={lineReveal(0.35)}
                    style={{
                        width: "clamp(48px,8vw,80px)", height: 1,
                        background: `linear-gradient(to right, ${G}, transparent)`,
                        marginBottom: "clamp(24px,4vw,36px)",
                        transformOrigin: "left",
                    }}
                />

                {/* Sub copy */}
                <motion.p
                    variants={fadeUp(0.4)}
                    style={{
                        fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                        fontSize: "clamp(14px,2.2vw,20px)", lineHeight: 1.8,
                        letterSpacing: "0.01em",
                        color: "rgba(245,240,232,0.52)",
                        maxWidth: 560,
                        margin: 0,
                    }}
                >
                    We believe every journey should feel comfortable, meaningful, and safe.
                    At Shree Swami Samartha Tours &amp; Travels, we put people before
                    destinations — because the real experience is how you feel on the road.
                </motion.p>

                {/* Scroll cue */}
                <motion.div
                    variants={fadeUp(0.6)}
                    style={{
                        display: "flex", alignItems: "center", gap: 10,
                        marginTop: "clamp(44px,7vw,64px)",
                    }}
                >
                    <div style={{ width: 1, height: 40, background: "rgba(201,168,76,0.3)" }} />
                    <span style={{
                        fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                        fontSize: 9, letterSpacing: "0.32em",
                        textTransform: "uppercase", color: "rgba(201,168,76,0.45)",
                    }}>Our Story Below</span>
                </motion.div>

            </motion.div>

            {/* ── Location tag, bottom-right ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                style={{
                    position: "absolute",
                    bottom: "clamp(24px,4vw,40px)",
                    right: "clamp(20px,5vw,56px)",
                    display: "flex", alignItems: "center", gap: 8,
                }}
            >
                <span style={{
                    fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                    fontSize: 9, letterSpacing: "0.3em",
                    textTransform: "uppercase", color: "rgba(201,168,76,0.35)",
                }}>
                    Ghoti · Maharashtra · India
                </span>
            </motion.div>

        </section>
    );
}