"use client";

/**
 * VisionSection.jsx
 * Emotional, minimal vision statement.
 * Full-width cinematic text block — no cards, no lists.
 * Pure editorial atmosphere.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const G = "#c9a84c";
const GL = "#e8c97a";
const ease = [0.16, 1, 0.3, 1];

/* Three vision pillars — displayed as elegant horizontal strips */
const PILLARS = [
    {
        number: "01",
        title: "Comfort First",
        body: "Every seat, every stop, every stretch of road — designed around the traveller's comfort. We believe ease of travel is not a luxury, it is a basic right.",
    },
    {
        number: "02",
        title: "Trust Built Slowly",
        body: "We do not rush relationships. Trust is earned mile by mile, journey by journey — through consistency, care, and honest service. That is the only way we know.",
    },
    {
        number: "03",
        title: "Memorable, Not Expensive",
        body: "A meaningful journey should not require an extravagant budget. Our promise is premium experience delivered at a price that feels fair and reasonable.",
    },
];

function Pillar({ p, index, total }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-12% 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.05, ease, delay: index * 0.14 }}
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "clamp(16px,3vw,28px)",
                alignItems: "flex-start",
                padding: "clamp(28px,4vw,44px) 0",
                borderBottom: index < total - 1
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "none",
            }}
        >
            {/* Number */}
            <div style={{
                fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                fontStyle: "italic",
                fontSize: "clamp(32px,5vw,52px)",
                color: "rgba(201,168,76,0.22)",
                lineHeight: 1, flexShrink: 0,
                width: "clamp(48px,6vw,72px)",
            }}>{p.number}</div>

            {/* Vertical rule */}
            <div style={{
                width: 1, alignSelf: "stretch", flexShrink: 0,
                background: "rgba(201,168,76,0.14)",
                display: "none", /* shown via responsive */
            }} className="pillar-rule" />

            {/* Content */}
            <div style={{ flex: "1 1 240px", minWidth: 0 }}>
                <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                    fontSize: "clamp(22px,4vw,38px)", lineHeight: 1.1,
                    letterSpacing: "-0.015em",
                    color: "rgba(245,240,232,0.92)",
                    margin: "0 0 clamp(10px,1.8vw,16px)",
                }}>{p.title}</h3>
                <p style={{
                    fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                    fontSize: "clamp(13px,1.8vw,16px)", lineHeight: 1.82,
                    color: "rgba(245,240,232,0.48)",
                    maxWidth: 520, margin: 0,
                }}>{p.body}</p>
            </div>
        </motion.div>
    );
}

export default function VisionSection() {
    const headingRef = useRef(null);
    const inView = useInView(headingRef, { once: true, margin: "-10% 0px" });

    return (
        <section
            style={{
                position: "relative",
                background: "#0e0d0b",
                padding: "clamp(72px,10vw,120px) clamp(20px,6vw,80px)",
                overflow: "hidden",
            }}
            aria-label="Our Vision"
        >
            {/* ── Top rule ── */}
            <div style={{
                position: "absolute", top: 0, left: "clamp(20px,6vw,80px)", right: "clamp(20px,6vw,80px)",
                height: 1,
                background: "linear-gradient(to right,transparent,rgba(255,255,255,0.06),transparent)",
            }} />

            {/* ── Ambient ── */}
            <div style={{
                position: "absolute", top: "30%", right: "-8%",
                width: "35vw", height: "35vw", borderRadius: "50%",
                background: "radial-gradient(circle,rgba(201,168,76,0.04) 0%,transparent 70%)",
                pointerEvents: "none",
            }} />

            <div style={{ maxWidth: 1200, margin: "0 auto" }}>

                {/* ── Heading block ── */}
                <motion.div
                    ref={headingRef}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, ease }}
                    style={{ marginBottom: "clamp(48px,7vw,80px)" }}
                >
                    {/* Label */}
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "clamp(18px,3vw,26px)" }}>
                        <div style={{ width: 20, height: 1, background: G }} />
                        <span style={{
                            fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                            fontSize: "clamp(8px,1.8vw,10px)", letterSpacing: "0.36em",
                            textTransform: "uppercase", color: "rgba(201,168,76,0.6)",
                        }}>Our Belief</span>
                    </div>

                    {/* Headline */}
                    <h2 style={{
                        fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                        fontSize: "clamp(34px,7vw,80px)", lineHeight: 0.95,
                        letterSpacing: "-0.02em", color: "rgba(245,240,232,0.95)",
                        margin: "0 0 clamp(18px,3vw,24px)",
                        maxWidth: 700,
                    }}>
                        Travel that feels{" "}
                        <span style={{ fontStyle: "italic", color: G }}>human.</span>
                    </h2>

                    {/* Pull quote */}
                    <p style={{
                        fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                        fontSize: "clamp(14px,2vw,18px)", lineHeight: 1.75,
                        color: "rgba(245,240,232,0.48)",
                        maxWidth: 560, margin: 0,
                    }}>
                        We are not chasing numbers. We are building something that our
                        community feels proud to recommend — journey after journey.
                    </p>
                </motion.div>

                {/* ── Pillars ── */}
                <div>
                    {PILLARS.map((p, i) => (
                        <Pillar key={i} p={p} index={i} total={PILLARS.length} />
                    ))}
                </div>

            </div>

            {/* Responsive pillar rule CSS */}
            <style>{`
        @media (min-width: 640px) {
          .pillar-rule { display: block !important; }
        }
      `}</style>
        </section>
    );
}