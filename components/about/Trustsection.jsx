"use client";

/**
 * TrustSection.jsx
 * Elegant editorial trust values.
 * NOT service cards — feels like a luxury brand manifesto.
 * Horizontal-scroll on mobile, grid on desktop.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const G = "#c9a84c";
const ease = [0.16, 1, 0.3, 1];

const VALUES = [
    {
        glyph: "◆",
        title: "Friendly Environment",
        body: "From the moment you book to the last kilometre, you are with people who genuinely enjoy making your journey smooth.",
    },
    {
        glyph: "◈",
        title: "Comfortable Experience",
        body: "Well-maintained vehicles, thoughtful stops, and attention to the small details that make long roads feel short.",
    },
    {
        glyph: "◇",
        title: "Safe Travel",
        body: "Safety is not a feature — it is our baseline. Every driver, every route, every departure is treated with the same careful responsibility.",
    },
    {
        glyph: "◉",
        title: "Customer Satisfaction",
        body: "We measure success not in kilometers covered, but in how many people feel glad they travelled with us.",
    },
    {
        glyph: "◎",
        title: "Premium Feel",
        body: "Premium does not mean expensive. It means thoughtful — clean, punctual, well-organized, and genuinely caring.",
    },
    {
        glyph: "○",
        title: "Reasonable Pricing",
        body: "We believe quality travel should be accessible. Our pricing reflects honest value — transparent, fair, and free from hidden costs.",
    },
];

function ValueItem({ v, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-8% 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease, delay: index * 0.09 }}
            style={{
                padding: "clamp(24px,3.5vw,36px) 0",
                borderBottom: "1px solid rgba(255,255,255,0.055)",
                display: "flex",
                gap: "clamp(18px,3vw,32px)",
                alignItems: "flex-start",
            }}
        >
            {/* Glyph */}
            <div style={{
                flexShrink: 0, width: "clamp(32px,5vw,44px)",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(16px,2.5vw,20px)",
                color: "rgba(201,168,76,0.35)",
                paddingTop: 4,
                lineHeight: 1,
            }}>{v.glyph}</div>

            {/* Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
                <h4 style={{
                    fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                    fontSize: "clamp(18px,3vw,28px)", lineHeight: 1.15,
                    letterSpacing: "-0.01em",
                    color: "rgba(245,240,232,0.9)",
                    margin: "0 0 clamp(8px,1.5vw,12px)",
                }}>{v.title}</h4>
                <p style={{
                    fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                    fontSize: "clamp(12px,1.8vw,15px)", lineHeight: 1.8,
                    color: "rgba(245,240,232,0.46)",
                    margin: 0, maxWidth: 420,
                }}>{v.body}</p>
            </div>
        </motion.div>
    );
}

export default function TrustSection() {
    const headingRef = useRef(null);
    const inView = useInView(headingRef, { once: true, margin: "-10% 0px" });

    /* Split values into two columns for desktop */
    const left = VALUES.slice(0, 3);
    const right = VALUES.slice(3);

    return (
        <section
            style={{
                position: "relative",
                background: "#0e0d0b",
                padding: "clamp(72px,10vw,120px) clamp(20px,6vw,80px)",
                overflow: "hidden",
            }}
            aria-label="What we stand for"
        >
            {/* ── Divider top ── */}
            <div style={{
                position: "absolute", top: 0, left: "clamp(20px,6vw,80px)", right: "clamp(20px,6vw,80px)",
                height: 1,
                background: "linear-gradient(to right,transparent,rgba(255,255,255,0.06),transparent)",
            }} />

            {/* ── Gold right-side ambient ── */}
            <div style={{
                position: "absolute", top: "25%", right: "-8%",
                width: "32vw", height: "32vw", borderRadius: "50%",
                background: "radial-gradient(circle,rgba(201,168,76,0.04) 0%,transparent 70%)",
                pointerEvents: "none",
            }} />

            <div style={{ maxWidth: 1200, margin: "0 auto" }}>

                {/* ── Section heading ── */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: "clamp(32px,5vw,64px)",
                        alignItems: "flex-end",
                        marginBottom: "clamp(48px,7vw,80px)",
                    }}
                >
                    {/* Heading */}
                    <motion.div
                        ref={headingRef}
                        initial={{ opacity: 0, y: 36 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.1, ease }}
                        style={{ flex: "1 1 300px" }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "clamp(16px,2.5vw,22px)" }}>
                            <div style={{ width: 20, height: 1, background: G }} />
                            <span style={{
                                fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                                fontSize: "clamp(8px,1.8vw,10px)", letterSpacing: "0.36em",
                                textTransform: "uppercase", color: "rgba(201,168,76,0.6)",
                            }}>What We Stand For</span>
                        </div>

                        <h2 style={{
                            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                            fontSize: "clamp(34px,7vw,80px)", lineHeight: 0.95,
                            letterSpacing: "-0.02em", color: "rgba(245,240,232,0.95)",
                            margin: 0,
                        }}>
                            Values that<br />
                            <span style={{ fontStyle: "italic", color: G }}>travel with you.</span>
                        </h2>
                    </motion.div>

                    {/* Side note */}
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.1, ease, delay: 0.2 }}
                        style={{
                            flex: "1 1 260px",
                            fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                            fontSize: "clamp(13px,1.9vw,17px)", lineHeight: 1.8,
                            color: "rgba(245,240,232,0.45)",
                            margin: 0,
                            maxWidth: 380,
                            alignSelf: "flex-end",
                            paddingBottom: 4,
                        }}
                    >
                        These are not policies we wrote on paper.
                        They are the things our team genuinely believes in —
                        and the standards we hold ourselves to on every trip.
                    </motion.p>
                </div>

                {/* ── Values grid: two columns desktop, one mobile ── */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
                    gap: "0 clamp(40px,7vw,96px)",
                }}>

                    {/* Column A */}
                    <div>
                        {left.map((v, i) => (
                            <ValueItem key={v.title} v={v} index={i} />
                        ))}
                    </div>

                    {/* Column B */}
                    <div>
                        {right.map((v, i) => (
                            <ValueItem key={v.title} v={v} index={i + 3} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}