"use client";

/**
 * ServicesIntro.jsx
 * Short editorial brand statement above the services grid.
 * Minimal — sets tone, not repetitive with hero.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const G = "#c9a84c";
const ease = [0.16, 1, 0.3, 1];

const STATS = [
    { value: "500+", label: "Tours Completed" },
    { value: "4.9★", label: "Avg. Rating" },
    { value: "12+", label: "Destinations" },
    { value: "100%", label: "Road-Tested" },
];

export default function ServicesIntro() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-12% 0px" });

    return (
        <section
            ref={ref}
            style={{
                position: "relative",
                background: "#0a0908",
                padding: "clamp(64px,9vw,110px) clamp(20px,6vw,80px)",
                overflow: "hidden",
            }}
        >
            {/* Top rule */}
            <div style={{
                position: "absolute", top: 0,
                left: "clamp(20px,6vw,80px)", right: "clamp(20px,6vw,80px)",
                height: 1,
                background: "linear-gradient(to right,transparent,rgba(255,255,255,0.06),transparent)",
            }} />

            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div style={{
                    display: "flex", flexWrap: "wrap",
                    gap: "clamp(32px,5vw,72px)", alignItems: "flex-end",
                }}>

                    {/* Left: editorial statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.1, ease }}
                        style={{ flex: "1 1 340px" }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "clamp(16px,2.5vw,22px)" }}>
                            <div style={{ width: 18, height: 1, background: G }} />
                            <span style={{
                                fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                                fontSize: "clamp(8px,1.6vw,10px)", letterSpacing: "0.36em",
                                textTransform: "uppercase", color: "rgba(201,168,76,0.6)",
                            }}>What We Offer</span>
                        </div>

                        <h2 style={{
                            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                            fontSize: "clamp(28px,5.5vw,58px)", lineHeight: 1,
                            letterSpacing: "-0.02em", color: "rgba(245,240,232,0.94)",
                            margin: "0 0 clamp(14px,2vw,20px)",
                        }}>
                            Travel that feels{" "}
                            <span style={{ fontStyle: "italic", color: G }}>personal.</span>
                        </h2>

                        <p style={{
                            fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                            fontSize: "clamp(13px,1.8vw,16px)", lineHeight: 1.82,
                            color: "rgba(245,240,232,0.46)", maxWidth: 480, margin: 0,
                        }}>
                            We are a small, focused team operating out of Ghoti, Maharashtra.
                            Every service we offer is built around one principle — your journey
                            should feel comfortable, safe, and genuinely cared for.
                        </p>
                    </motion.div>

                    {/* Right: stat pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease, delay: 0.2 }}
                        style={{
                            flex: "1 1 280px",
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "clamp(8px,1.5vw,14px)",
                        }}
                    >
                        {STATS.map((s, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 16 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, ease, delay: 0.28 + i * 0.09 }}
                                style={{
                                    padding: "clamp(14px,2.5vw,22px) clamp(12px,2vw,20px)",
                                    borderRadius: 14,
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.07)",
                                }}
                            >
                                <div style={{
                                    fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                                    fontSize: "clamp(22px,4vw,34px)", color: G, lineHeight: 1,
                                    marginBottom: 6,
                                }}>{s.value}</div>
                                <div style={{
                                    fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                                    fontSize: "clamp(8px,1.4vw,10px)", letterSpacing: "0.22em",
                                    textTransform: "uppercase", color: "rgba(245,240,232,0.36)",
                                }}>{s.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}