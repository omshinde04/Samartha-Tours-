"use client";

/**
 * AboutCTA.jsx
 * Elegant final CTA for the About page.
 * WhatsApp + Contact Us — premium glassmorphism buttons.
 * Minimal, emotional, human.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight, FiPhone } from "react-icons/fi";

const G = "#c9a84c";
const GD = "#a07830";
const ease = [0.16, 1, 0.3, 1];

/* WhatsApp icon inline */
const WAIcon = () => (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

export default function AboutCTA() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-10% 0px" });

    const waLink = "https://wa.me/919373545169?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20tours.";

    return (
        <section
            ref={ref}
            style={{
                position: "relative",
                background: "#0e0d0b",
                padding: "clamp(72px,10vw,120px) clamp(20px,6vw,80px)",
                overflow: "hidden",
            }}
            aria-label="Contact and book"
        >
            {/* ── Divider top ── */}
            <div style={{
                position: "absolute", top: 0, left: "clamp(20px,6vw,80px)", right: "clamp(20px,6vw,80px)",
                height: 1,
                background: "linear-gradient(to right,transparent,rgba(255,255,255,0.06),transparent)",
            }} />

            {/* ── Ambient glow: centred ── */}
            <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%,-50%)",
                width: "60vw", height: "60vw", borderRadius: "50%",
                background: "radial-gradient(circle,rgba(201,168,76,0.06) 0%,transparent 65%)",
                pointerEvents: "none",
            }} />

            {/* ── Corner marks ── */}
            <div style={{
                position: "absolute", top: "clamp(20px,3vw,32px)", left: "clamp(20px,4vw,40px)",
                width: 22, height: 22,
                borderTop: "1px solid rgba(201,168,76,0.22)",
                borderLeft: "1px solid rgba(201,168,76,0.22)",
            }} />
            <div style={{
                position: "absolute", bottom: "clamp(20px,3vw,32px)", right: "clamp(20px,4vw,40px)",
                width: 22, height: 22,
                borderBottom: "1px solid rgba(201,168,76,0.22)",
                borderRight: "1px solid rgba(201,168,76,0.22)",
            }} />

            <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>

                {/* ── Label ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9, ease }}
                    style={{
                        display: "inline-flex", alignItems: "center", gap: 10,
                        padding: "7px 20px", borderRadius: 99, marginBottom: "clamp(24px,4vw,36px)",
                        background: "rgba(201,168,76,0.08)",
                        border: "1px solid rgba(201,168,76,0.2)",
                    }}
                >
                    <span style={{
                        fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                        fontSize: "clamp(8px,1.8vw,10px)", letterSpacing: "0.36em",
                        textTransform: "uppercase", color: "rgba(201,168,76,0.75)",
                    }}>Begin Your Journey</span>
                </motion.div>

                {/* ── Heading ── */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, ease, delay: 0.1 }}
                    style={{
                        fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                        fontSize: "clamp(32px,7vw,80px)", lineHeight: 0.95,
                        letterSpacing: "-0.02em", color: "rgba(245,240,232,0.95)",
                        margin: "0 0 clamp(18px,3vw,26px)",
                    }}
                >
                    Let's Create
                    <br />
                    <span style={{ fontStyle: "italic", color: G }}>Meaningful Journeys</span>
                    <br />
                    Together.
                </motion.h2>

                {/* ── Sub copy ── */}
                <motion.p
                    initial={{ opacity: 0, y: 28 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease, delay: 0.22 }}
                    style={{
                        fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                        fontSize: "clamp(13px,2vw,17px)", lineHeight: 1.8,
                        color: "rgba(245,240,232,0.48)",
                        margin: "0 auto clamp(36px,5vw,52px)",
                        maxWidth: 500,
                    }}
                >
                    Reach out on WhatsApp for quick assistance, or use our contact page
                    to plan your next Maharashtra journey with us.
                </motion.p>

                {/* ── Buttons ── */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease, delay: 0.34 }}
                    style={{
                        display: "flex", flexWrap: "wrap", gap: "clamp(10px,2vw,16px)",
                        justifyContent: "center",
                        marginBottom: "clamp(44px,7vw,72px)",
                    }}
                >
                    {/* WhatsApp — primary */}
                    <motion.a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04, boxShadow: "0 12px 48px rgba(201,168,76,0.45)" }}
                        whileTap={{ scale: 0.96 }}
                        style={{
                            display: "flex", alignItems: "center", gap: 10,
                            padding: "clamp(13px,2.5vw,16px) clamp(24px,4vw,36px)",
                            borderRadius: 99,
                            background: `linear-gradient(135deg,${G},${GD})`,
                            border: "none", cursor: "pointer",
                            fontFamily: "'Outfit', sans-serif", fontWeight: 500,
                            fontSize: "clamp(10px,2vw,13px)", letterSpacing: "0.18em",
                            textTransform: "uppercase", color: "#0e0d0b",
                            textDecoration: "none",
                            boxShadow: "0 8px 32px rgba(201,168,76,0.28)",
                        }}
                    >
                        <WAIcon />
                        WhatsApp Us
                    </motion.a>

                    {/* Contact Us — glass secondary */}
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.03, background: "rgba(255,255,255,0.08)" }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            display: "flex", alignItems: "center", gap: 9,
                            padding: "clamp(13px,2.5vw,16px) clamp(24px,4vw,36px)",
                            borderRadius: 99,
                            background: "rgba(255,255,255,0.05)",
                            backdropFilter: "blur(16px)",
                            WebkitBackdropFilter: "blur(16px)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            cursor: "pointer",
                            fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                            fontSize: "clamp(10px,2vw,13px)", letterSpacing: "0.16em",
                            textTransform: "uppercase", color: "rgba(245,240,232,0.78)",
                            textDecoration: "none",
                            transition: "background 0.3s",
                        }}
                    >
                        <FiPhone size={13} />
                        Contact Us
                        <FiArrowRight size={12} />
                    </motion.a>
                </motion.div>

                {/* ── Contact detail ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, ease, delay: 0.5 }}
                    style={{
                        display: "flex", flexWrap: "wrap", justifyContent: "center",
                        gap: "clamp(20px,4vw,40px)",
                    }}
                >
                    {[
                        { label: "Call / WhatsApp", value: "+91 93735 45169", href: "tel:+919373545169" },
                        { label: "Located In", value: "Ghoti, Maharashtra", href: null },
                    ].map((item, i) => (
                        <div key={i} style={{ textAlign: "center" }}>
                            <div style={{
                                fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                                fontSize: 8, letterSpacing: "0.3em",
                                textTransform: "uppercase", color: "rgba(201,168,76,0.45)",
                                marginBottom: 5,
                            }}>{item.label}</div>
                            {item.href ? (
                                <a href={item.href} style={{
                                    fontFamily: "'Outfit', sans-serif", fontWeight: 400,
                                    fontSize: "clamp(13px,2vw,16px)", letterSpacing: "0.04em",
                                    color: "rgba(245,240,232,0.75)", textDecoration: "none",
                                }}>{item.value}</a>
                            ) : (
                                <span style={{
                                    fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                                    fontSize: "clamp(13px,2vw,16px)", letterSpacing: "0.04em",
                                    color: "rgba(245,240,232,0.6)",
                                }}>{item.value}</span>
                            )}
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}