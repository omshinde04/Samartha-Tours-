"use client";

/**
 * WhyChooseUs.jsx
 * Elegant editorial layout — 6 trust reasons as horizontal strip items.
 * Not cards. Not icons with colored backgrounds.
 * Clean, legible, premium.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const G = "#c9a84c";
const ease = [0.16, 1, 0.3, 1];

const REASONS = [
    {
        num: "◆",
        title: "Customer Comfort First",
        body: "Every vehicle, every stop, every route decision is made with your comfort as the primary consideration.",
    },
    {
        num: "◈",
        title: "Reasonable, Honest Pricing",
        body: "No hidden charges. No last-minute surprises. What we quote is what you pay.",
    },
    {
        num: "◇",
        title: "Clean, Well-Maintained Vehicles",
        body: "Our vehicles are kept clean, serviced regularly, and in ready condition for every departure.",
    },
    {
        num: "◉",
        title: "Friendly, Professional Drivers",
        body: "Our drivers know the roads, speak to passengers with respect, and make the journey feel easy.",
    },
    {
        num: "◎",
        title: "Local Expertise",
        body: "Based in Ghoti, we know Maharashtra's roads, seasons, routes, and hidden stops better than any outsider.",
    },
    {
        num: "○",
        title: "Reliable & Punctual",
        body: "On time, every time. We understand that your schedule matters — and we respect it.",
    },
];

export default function WhyChooseUs() {
    const headRef = useRef(null);
    const inView = useInView(headRef, { once: true, margin: "-10% 0px" });

    return (
        <section
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

            {/* Subtle ambient */}
            <div style={{
                position: "absolute", top: "30%", right: "-8%",
                width: "32vw", height: "32vw", borderRadius: "50%",
                background: "radial-gradient(circle,rgba(201,168,76,0.04) 0%,transparent 70%)",
                pointerEvents: "none",
            }} />

            <div style={{ maxWidth: 1200, margin: "0 auto" }}>

                {/* Section heading */}
                <div style={{
                    display: "flex", flexWrap: "wrap",
                    gap: "clamp(24px,4vw,56px)", alignItems: "flex-end",
                    marginBottom: "clamp(44px,7vw,72px)",
                }}>
                    <motion.div
                        ref={headRef}
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease }}
                        style={{ flex: "1 1 300px" }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "clamp(14px,2.5vw,20px)" }}>
                            <div style={{ width: 18, height: 1, background: G }} />
                            <span style={{
                                fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                                fontSize: "clamp(8px,1.6vw,10px)", letterSpacing: "0.36em",
                                textTransform: "uppercase", color: "rgba(201,168,76,0.6)",
                            }}>Why Choose Us</span>
                        </div>
                        <h2 style={{
                            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                            fontSize: "clamp(30px,6vw,64px)", lineHeight: 0.95,
                            letterSpacing: "-0.02em", color: "rgba(245,240,232,0.94)",
                            margin: 0,
                        }}>
                            Trust that rides{" "}
                            <span style={{ fontStyle: "italic", color: G }}>with you.</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 22 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease, delay: 0.2 }}
                        style={{
                            flex: "1 1 260px", maxWidth: 380,
                            fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                            fontSize: "clamp(12px,1.8vw,15px)", lineHeight: 1.82,
                            color: "rgba(245,240,232,0.42)", margin: 0,
                            alignSelf: "flex-end", paddingBottom: 4,
                        }}
                    >
                        These are not marketing promises. They are the standards we hold
                        ourselves to on every single trip — because your trust is the only
                        thing we cannot afford to lose.
                    </motion.p>
                </div>

                {/* Two-column strip layout */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
                    gap: "0 clamp(40px,7vw,96px)",
                }}>
                    {[REASONS.slice(0, 3), REASONS.slice(3)].map((col, ci) => (
                        <div key={ci}>
                            {col.map((r, i) => {
                                const delay = ci * 0.15 + i * 0.1;
                                return (
                                    <ReasonRow key={r.title} r={r} delay={delay} inView={inView} i={ci * 3 + i} />
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ReasonRow({ r, delay, inView, i }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease, delay }}
            style={{
                display: "flex", gap: "clamp(16px,2.5vw,28px)", alignItems: "flex-start",
                padding: "clamp(22px,3.5vw,34px) 0",
                borderBottom: "1px solid rgba(255,255,255,0.055)",
            }}
        >
            <div style={{
                flexShrink: 0,
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(14px,2.2vw,18px)",
                color: "rgba(201,168,76,0.3)", lineHeight: 1.6,
                paddingTop: 2,
            }}>{r.num}</div>

            <div>
                <h4 style={{
                    fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                    fontSize: "clamp(17px,2.8vw,26px)", lineHeight: 1.15,
                    letterSpacing: "-0.01em",
                    color: "rgba(245,240,232,0.9)",
                    margin: "0 0 clamp(7px,1.2vw,10px)",
                }}>{r.title}</h4>
                <p style={{
                    fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                    fontSize: "clamp(12px,1.7vw,14px)", lineHeight: 1.8,
                    color: "rgba(245,240,232,0.44)", margin: 0, maxWidth: 400,
                }}>{r.body}</p>
            </div>
        </motion.div>
    );
}