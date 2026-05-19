"use client";

/**
 * ServiceProcess.jsx
 * Clean 4-step booking process.
 * Horizontal on desktop, stacked on mobile.
 * Minimal premium design — no icons overload.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const G = "#c9a84c";
const ease = [0.16, 1, 0.3, 1];

const STEPS = [
    {
        num: "01",
        title: "Choose Your Destination",
        body: "Browse our services or tell us where you want to go. Maharashtra, Goa, temples, or a simple local ride — we cover it all.",
    },
    {
        num: "02",
        title: "Plan Your Ride",
        body: "Share your date, group size, and preferences. We suggest the right vehicle and route for your needs.",
    },
    {
        num: "03",
        title: "Confirm Your Booking",
        body: "A quick call or WhatsApp message is all it takes. We confirm everything clearly — no confusing process.",
    },
    {
        num: "04",
        title: "Enjoy Your Journey",
        body: "We pick you up on time, handle the drive with care, and make sure you arrive relaxed and comfortable.",
    },
];

export default function ServiceProcess() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-10% 0px" });

    return (
        <section
            style={{
                position: "relative",
                background: "#0e0d0b",
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

            {/* Ambient */}
            <div style={{
                position: "absolute", top: "40%", left: "-6%",
                width: "30vw", height: "30vw", borderRadius: "50%",
                background: "radial-gradient(circle,rgba(201,168,76,0.04) 0%,transparent 70%)",
                pointerEvents: "none",
            }} />

            <div style={{ maxWidth: 1200, margin: "0 auto" }}>

                {/* Heading */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease }}
                    style={{
                        textAlign: "center",
                        marginBottom: "clamp(44px,7vw,72px)",
                    }}
                >
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: 10,
                        marginBottom: "clamp(14px,2.5vw,20px)",
                    }}>
                        <div style={{ width: 18, height: 1, background: G }} />
                        <span style={{
                            fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                            fontSize: "clamp(8px,1.6vw,10px)", letterSpacing: "0.36em",
                            textTransform: "uppercase", color: "rgba(201,168,76,0.6)",
                        }}>How It Works</span>
                        <div style={{ width: 18, height: 1, background: G }} />
                    </div>

                    <h2 style={{
                        fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                        fontSize: "clamp(30px,6vw,64px)", lineHeight: 0.95,
                        letterSpacing: "-0.02em", color: "rgba(245,240,232,0.94)",
                        margin: 0,
                    }}>
                        Simple.{" "}
                        <span style={{ fontStyle: "italic", color: G }}>Straightforward.</span>
                    </h2>
                </motion.div>

                {/* Steps */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
                    gap: "0",
                    position: "relative",
                }}>
                    {/* Connecting line on desktop */}
                    <div style={{
                        position: "absolute",
                        top: "clamp(20px,3vw,28px)",
                        left: "12%", right: "12%",
                        height: 1,
                        background: "linear-gradient(to right,transparent,rgba(201,168,76,0.15),rgba(201,168,76,0.15),transparent)",
                        pointerEvents: "none",
                    }} className="process-line" />

                    {STEPS.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 36 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, ease, delay: i * 0.12 }}
                            style={{
                                padding: "clamp(0px,0vw,0px) clamp(16px,2.5vw,28px)",
                                paddingTop: 0,
                                borderRight: i < STEPS.length - 1
                                    ? "1px solid rgba(255,255,255,0.05)"
                                    : "none",
                                textAlign: "center",
                            }}
                        >
                            {/* Step number circle */}
                            <div style={{
                                width: "clamp(44px,6vw,56px)",
                                height: "clamp(44px,6vw,56px)",
                                borderRadius: "50%",
                                background: "rgba(201,168,76,0.08)",
                                border: "1px solid rgba(201,168,76,0.22)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                margin: "0 auto clamp(20px,3vw,28px)",
                                position: "relative", zIndex: 1,
                            }}>
                                <span style={{
                                    fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
                                    fontWeight: 300, fontSize: "clamp(14px,2vw,18px)",
                                    color: G, lineHeight: 1,
                                }}>{step.num}</span>
                            </div>

                            <h3 style={{
                                fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                                fontSize: "clamp(17px,2.6vw,24px)", lineHeight: 1.2,
                                letterSpacing: "-0.01em",
                                color: "rgba(245,240,232,0.88)",
                                margin: "0 0 clamp(10px,1.5vw,14px)",
                            }}>{step.title}</h3>

                            <p style={{
                                fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                                fontSize: "clamp(11px,1.6vw,13px)", lineHeight: 1.8,
                                color: "rgba(245,240,232,0.4)", margin: 0,
                            }}>{step.body}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Hide connecting line on mobile */}
            <style>{`
        .process-line { display: none; }
        @media (min-width: 768px) { .process-line { display: block; } }
      `}</style>
        </section>
    );
}