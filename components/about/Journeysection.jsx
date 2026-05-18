"use client";

/**
 * JourneySection.jsx
 * Editorial timeline — realistic brand story.
 * Local beginnings → growing trust → reliable travel partner.
 * No fake dates, no inflated milestones.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const G = "#c9a84c";
const ease = [0.16, 1, 0.3, 1];

const CHAPTERS = [
    {
        phase: "The Beginning",
        label: "Where it started",
        body: "It began close to home — in Ghoti, a town that knows the rhythm of roads. Om Vilas Shinde started with a simple idea: that the people around him deserved reliable, comfortable travel. Not just a vehicle. A trustworthy companion for the road.",
        img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&h=480&fit=crop&q=80",
        imgAlt: "Western Ghats road journey Maharashtra beginnings",
    },
    {
        phase: "Growing Trust",
        label: "Word of mouth",
        body: "The first customers became the loudest advocates. Not through advertising — through experience. Families who felt safe. Groups who felt cared for. Pilgrims who felt the journey was as sacred as the destination. Trust spread the way it always does: one honest journey at a time.",
        img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=700&h=480&fit=crop&q=80",
        imgAlt: "Travellers group journey Maharashtra roads",
    },
    {
        phase: "Today",
        label: "What we stand for",
        body: "We are still the same team with the same values — just more experienced at delivering them. From mountain escapes to coastal roads to spiritual circuits, we carry every traveller with the same attention to detail we gave our very first guest.",
        img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=700&h=480&fit=crop&q=80",
        imgAlt: "Lonavala Western Ghats scenic road Maharashtra present day",
    },
];

function Chapter({ ch, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-12% 0px" });
    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 48 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.15, ease, delay: 0.1 }}
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "clamp(28px,5vw,60px)",
                alignItems: "center",
                /* Alternate layout on desktop */
                flexFlow: isEven ? "row wrap" : "row-reverse wrap",
                marginBottom: "clamp(64px,10vw,100px)",
            }}
        >
            {/* ── Text side ── */}
            <div style={{ flex: "1 1 300px", minWidth: 0 }}>

                {/* Phase label */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "clamp(14px,2.5vw,20px)" }}>
                    <div style={{ width: 16, height: 1, background: "rgba(201,168,76,0.5)" }} />
                    <span style={{
                        fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                        fontSize: "clamp(8px,1.6vw,10px)", letterSpacing: "0.34em",
                        textTransform: "uppercase", color: "rgba(201,168,76,0.55)",
                    }}>{ch.label}</span>
                </div>

                {/* Phase heading */}
                <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                    fontSize: "clamp(28px,5.5vw,58px)", lineHeight: 0.95,
                    letterSpacing: "-0.018em",
                    color: "rgba(245,240,232,0.94)",
                    margin: "0 0 clamp(16px,2.5vw,24px)",
                }}>
                    {ch.phase}
                </h3>

                {/* Body */}
                <p style={{
                    fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                    fontSize: "clamp(13px,1.9vw,17px)", lineHeight: 1.85,
                    color: "rgba(245,240,232,0.5)",
                    margin: 0, maxWidth: 480,
                }}>{ch.body}</p>
            </div>

            {/* ── Image side ── */}
            <div style={{ flex: "1 1 280px", minWidth: 0, maxWidth: 480 }}>
                <div style={{
                    position: "relative",
                    borderRadius: 20,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.07)",
                    aspectRatio: "4/3",
                }}>
                    <img
                        src={ch.img}
                        alt={ch.imgAlt}
                        style={{
                            width: "100%", height: "100%",
                            objectFit: "cover", display: "block",
                            opacity: 0.7,
                            transition: "opacity 0.6s, transform 0.6s",
                        }}
                        loading="lazy"
                        onMouseEnter={(e) => { e.target.style.opacity = "0.9"; e.target.style.transform = "scale(1.03)"; }}
                        onMouseLeave={(e) => { e.target.style.opacity = "0.7"; e.target.style.transform = "scale(1)"; }}
                    />
                    {/* Gradient polish */}
                    <div style={{
                        position: "absolute", inset: 0,
                        background: "linear-gradient(135deg,rgba(14,13,11,0.35),rgba(14,13,11,0.1))",
                        pointerEvents: "none",
                    }} />
                    {/* Phase number watermark */}
                    <div style={{
                        position: "absolute", bottom: 14, right: 18,
                        fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
                        fontWeight: 300, fontSize: "clamp(36px,6vw,56px)",
                        color: "rgba(201,168,76,0.18)", lineHeight: 1,
                        pointerEvents: "none",
                    }}>0{index + 1}</div>
                </div>
            </div>
        </motion.div>
    );
}

export default function JourneySection() {
    const headingRef = useRef(null);
    const inView = useInView(headingRef, { once: true, margin: "-10% 0px" });

    return (
        <section
            style={{
                position: "relative",
                background: "#0a0908",   /* very slightly warmer dark */
                padding: "clamp(72px,10vw,120px) clamp(20px,6vw,80px)",
                overflow: "hidden",
            }}
            aria-label="Our journey story"
        >
            {/* ── Divider top ── */}
            <div style={{
                position: "absolute", top: 0, left: "clamp(20px,6vw,80px)", right: "clamp(20px,6vw,80px)",
                height: 1,
                background: "linear-gradient(to right,transparent,rgba(255,255,255,0.06),transparent)",
            }} />

            {/* ── Ambient ── */}
            <div style={{
                position: "absolute", bottom: "10%", left: "-6%",
                width: "38vw", height: "38vw", borderRadius: "50%",
                background: "radial-gradient(circle,rgba(201,168,76,0.04) 0%,transparent 70%)",
                pointerEvents: "none",
            }} />

            <div style={{ maxWidth: 1200, margin: "0 auto" }}>

                {/* ── Section heading ── */}
                <motion.div
                    ref={headingRef}
                    initial={{ opacity: 0, y: 36 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, ease }}
                    style={{ marginBottom: "clamp(56px,8vw,96px)" }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "clamp(16px,2.8vw,24px)" }}>
                        <div style={{ width: 20, height: 1, background: G }} />
                        <span style={{
                            fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                            fontSize: "clamp(8px,1.8vw,10px)", letterSpacing: "0.36em",
                            textTransform: "uppercase", color: "rgba(201,168,76,0.6)",
                        }}>Our Journey</span>
                    </div>

                    <h2 style={{
                        fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                        fontSize: "clamp(34px,7vw,80px)", lineHeight: 0.95,
                        letterSpacing: "-0.02em", color: "rgba(245,240,232,0.95)",
                        margin: 0, maxWidth: 640,
                    }}>
                        Built on roads,{" "}
                        <span style={{ fontStyle: "italic", color: G }}>not boardrooms.</span>
                    </h2>
                </motion.div>

                {/* ── Chapters ── */}
                {CHAPTERS.map((ch, i) => (
                    <Chapter key={i} ch={ch} index={i} />
                ))}

            </div>
        </section>
    );
}