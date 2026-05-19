"use client";

/**
 * ServicesCTA.jsx
 * Elegant final call-to-action for the Services page.
 * Cinematic background. Two buttons: Contact + Explore.
 * Minimal, emotional, premium.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight, FiCompass } from "react-icons/fi";

const G = "#c9a84c";
const GD = "#a07830";
const ease = [0.16, 1, 0.3, 1];

const WA = () => (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

export default function ServicesCTA() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-10% 0px" });

    const waLink = "https://wa.me/919373545169?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20a%20tour%20or%20service.";

    return (
        <section
            ref={ref}
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

            {/* Central ambient glow */}
            <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%,-50%)",
                width: "55vw", height: "55vw", borderRadius: "50%",
                background: "radial-gradient(circle,rgba(201,168,76,0.06) 0%,transparent 65%)",
                pointerEvents: "none",
            }} />

            {/* Corner brackets */}
            {[
                { top: "clamp(18px,3vw,32px)", left: "clamp(18px,3.5vw,36px)", borderTop: "1px solid rgba(201,168,76,0.2)", borderLeft: "1px solid rgba(201,168,76,0.2)" },
                { bottom: "clamp(18px,3vw,32px)", right: "clamp(18px,3.5vw,36px)", borderBottom: "1px solid rgba(201,168,76,0.2)", borderRight: "1px solid rgba(201,168,76,0.2)" },
            ].map((s, i) => (
                <div key={i} style={{ position: "absolute", width: 22, height: 22, pointerEvents: "none", ...s }} />
            ))}

            <div style={{
                maxWidth: 760, margin: "0 auto",
                textAlign: "center", position: "relative", zIndex: 1,
            }}>

                {/* Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9, ease }}
                    style={{
                        display: "inline-flex", alignItems: "center", gap: 10,
                        padding: "6px 18px", borderRadius: 99,
                        background: "rgba(201,168,76,0.07)",
                        border: "1px solid rgba(201,168,76,0.18)",
                        marginBottom: "clamp(20px,3.5vw,30px)",
                    }}
                >
                    <span style={{
                        fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                        fontSize: "clamp(8px,1.6vw,10px)", letterSpacing: "0.36em",
                        textTransform: "uppercase", color: "rgba(201,168,76,0.7)",
                    }}>Ready to Travel</span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 36 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, ease, delay: 0.1 }}
                    style={{
                        fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                        fontSize: "clamp(32px,7vw,80px)", lineHeight: 0.95,
                        letterSpacing: "-0.02em", color: "rgba(245,240,232,0.95)",
                        margin: "0 0 clamp(16px,2.5vw,24px)",
                    }}
                >
                    Let's Plan Your
                    <br />
                    <span style={{ fontStyle: "italic", color: G }}>Next Journey.</span>
                </motion.h2>

                {/* Sub copy */}
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease, delay: 0.22 }}
                    style={{
                        fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                        fontSize: "clamp(13px,1.9vw,17px)", lineHeight: 1.8,
                        color: "rgba(245,240,232,0.44)",
                        margin: "0 auto clamp(32px,5vw,48px)",
                        maxWidth: 480,
                    }}
                >
                    Whether it's a weekend escape, a temple circuit, or a simple local ride —
                    reach out and we'll plan it around you.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease, delay: 0.34 }}
                    style={{
                        display: "flex", flexWrap: "wrap", gap: "clamp(10px,2vw,14px)",
                        justifyContent: "center",
                        marginBottom: "clamp(44px,7vw,64px)",
                    }}
                >
                    {/* WhatsApp — primary */}
                    <motion.a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04, boxShadow: "0 12px 44px rgba(201,168,76,0.42)" }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            display: "flex", alignItems: "center", gap: 10,
                            padding: "clamp(13px,2.5vw,16px) clamp(24px,4vw,36px)",
                            borderRadius: 99,
                            background: `linear-gradient(135deg,${G},${GD})`,
                            border: "none", cursor: "pointer",
                            fontFamily: "'Outfit', sans-serif", fontWeight: 500,
                            fontSize: "clamp(10px,1.8vw,13px)", letterSpacing: "0.18em",
                            textTransform: "uppercase", color: "#0e0d0b",
                            textDecoration: "none",
                            boxShadow: "0 8px 32px rgba(201,168,76,0.26)",
                        }}
                    >
                        <WA /> Contact Us
                    </motion.a>

                    {/* Explore — secondary glass */}
                    <motion.a
                        href="/services#destinations"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            display: "flex", alignItems: "center", gap: 9,
                            padding: "clamp(13px,2.5vw,16px) clamp(24px,4vw,36px)",
                            borderRadius: 99,
                            background: "rgba(255,255,255,0.05)",
                            backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
                            border: "1px solid rgba(255,255,255,0.09)",
                            cursor: "pointer",
                            fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                            fontSize: "clamp(10px,1.8vw,13px)", letterSpacing: "0.16em",
                            textTransform: "uppercase", color: "rgba(245,240,232,0.75)",
                            textDecoration: "none",
                        }}
                    >
                        <FiCompass size={13} /> Explore Destinations <FiArrowRight size={11} />
                    </motion.a>
                </motion.div>

                {/* Contact detail row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, ease, delay: 0.52 }}
                    style={{
                        display: "flex", flexWrap: "wrap", justifyContent: "center",
                        gap: "clamp(16px,3vw,36px)",
                        paddingTop: "clamp(24px,3.5vw,32px)",
                        borderTop: "1px solid rgba(255,255,255,0.055)",
                    }}
                >
                    {[
                        { label: "Call / WhatsApp", value: "+91 93735 45169", href: "tel:+919373545169" },
                        { label: "Location", value: "Ghoti, Maharashtra", href: null },
                    ].map((item, i) => (
                        <div key={i} style={{ textAlign: "center" }}>
                            <div style={{
                                fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                                fontSize: 8, letterSpacing: "0.3em",
                                textTransform: "uppercase", color: "rgba(201,168,76,0.4)",
                                marginBottom: 5,
                            }}>{item.label}</div>
                            {item.href ? (
                                <a href={item.href} style={{
                                    fontFamily: "'Outfit', sans-serif", fontWeight: 400,
                                    fontSize: "clamp(13px,1.9vw,15px)",
                                    color: "rgba(245,240,232,0.72)", textDecoration: "none",
                                }}>{item.value}</a>
                            ) : (
                                <span style={{
                                    fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                                    fontSize: "clamp(13px,1.9vw,15px)",
                                    color: "rgba(245,240,232,0.55)",
                                }}>{item.value}</span>
                            )}
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}