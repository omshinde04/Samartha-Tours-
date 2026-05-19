"use client";

/**
 * ServicesHero.jsx
 * Cinematic minimal hero for the Services page.
 * Full-viewport, editorial typography, ambient gold glow.
 */

import { motion } from "framer-motion";

const G = "#c9a84c";
const ease = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 36 },
    show: { opacity: 1, y: 0, transition: { duration: 1.1, ease, delay } },
});

export default function ServicesHero() {
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
        >
            {/* Ambient gold glow — top left */}
            <div style={{
                position: "absolute", top: 0, left: 0,
                width: "50%", height: "55%",
                background: "radial-gradient(ellipse at 10% 0%, rgba(201,168,76,0.07) 0%, transparent 65%)",
                pointerEvents: "none",
            }} />

            {/* Ambient — bottom right */}
            <div style={{
                position: "absolute", bottom: 0, right: 0,
                width: "40%", height: "40%",
                background: "radial-gradient(ellipse at 90% 100%, rgba(201,168,76,0.04) 0%, transparent 65%)",
                pointerEvents: "none",
            }} />

            {/* Corner marks */}
            {[
                { top: "clamp(22px,3.5vw,40px)", left: "clamp(22px,3.5vw,40px)", borderTop: `1px solid rgba(201,168,76,0.25)`, borderLeft: `1px solid rgba(201,168,76,0.25)` },
                { bottom: "clamp(22px,3.5vw,40px)", right: "clamp(22px,3.5vw,40px)", borderBottom: `1px solid rgba(201,168,76,0.25)`, borderRight: `1px solid rgba(201,168,76,0.25)` },
            ].map((s, i) => (
                <div key={i} style={{ position: "absolute", width: 24, height: 24, pointerEvents: "none", ...s }} />
            ))}

            <motion.div
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } } }}
                initial="hidden"
                animate="show"
                style={{ maxWidth: 860 }}
            >
                {/* Eyebrow */}
                <motion.div variants={fadeUp(0)}
                    style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "clamp(22px,3.5vw,32px)" }}>
                    <div style={{ width: 28, height: 1, background: G }} />
                    <span style={{
                        fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                        fontSize: "clamp(8px,1.8vw,10px)", letterSpacing: "0.38em",
                        textTransform: "uppercase", color: "rgba(201,168,76,0.7)",
                    }}>Our Services</span>
                </motion.div>

                {/* Heading line 1 */}
                <div style={{ overflow: "hidden" }}>
                    <motion.h1 variants={fadeUp(0.1)}
                        style={{
                            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                            fontSize: "clamp(46px,10vw,118px)", lineHeight: 0.92,
                            letterSpacing: "-0.025em", color: "rgba(245,240,232,0.97)",
                            margin: "0 0 clamp(4px,1vw,8px)",
                        }}>
                        Every Journey,
                    </motion.h1>
                </div>

                {/* Heading line 2 — gold */}
                <div style={{ overflow: "hidden", marginBottom: "clamp(24px,4vw,40px)" }}>
                    <motion.div variants={fadeUp(0.2)}>
                        <span style={{
                            fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300,
                            fontSize: "clamp(46px,10vw,118px)", lineHeight: 0.92, letterSpacing: "-0.025em",
                            background: `linear-gradient(135deg,${G} 0%,#e8c97a 45%,#a07830 75%,${G} 100%)`,
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                            backgroundClip: "text", display: "inline-block",
                        }}>Crafted for You.</span>
                    </motion.div>
                </div>

                {/* Rule */}
                <motion.div variants={{
                    hidden: { scaleX: 0, originX: 0 },
                    show: { scaleX: 1, transition: { duration: 1.1, ease, delay: 0.32 } },
                }}
                    style={{ width: 56, height: 1, background: G, marginBottom: "clamp(22px,3.5vw,32px)", transformOrigin: "left" }}
                />

                {/* Sub copy */}
                <motion.p variants={fadeUp(0.38)}
                    style={{
                        fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                        fontSize: "clamp(13px,2vw,18px)", lineHeight: 1.8,
                        color: "rgba(245,240,232,0.48)", maxWidth: 520, margin: 0,
                    }}>
                    From weekend hill escapes to spiritual circuits, corporate rides to
                    wedding transport — we handle every kilometre with care, comfort,
                    and genuine warmth.
                </motion.p>

                {/* Location tag */}
                <motion.div variants={fadeUp(0.5)}
                    style={{ display: "flex", alignItems: "center", gap: 10, marginTop: "clamp(36px,5vw,52px)" }}>
                    <div style={{ width: 1, height: 36, background: "rgba(201,168,76,0.28)" }} />
                    <span style={{
                        fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                        fontSize: 9, letterSpacing: "0.3em",
                        textTransform: "uppercase", color: "rgba(201,168,76,0.42)",
                    }}>Ghoti · Maharashtra · India</span>
                </motion.div>
            </motion.div>
        </section>
    );
}