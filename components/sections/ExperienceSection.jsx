"use client";

/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  SHREE SWAMI SAMARTHA — EXPERIENCE SECTION                     ║
 * ║  Real destinations · Local images · Full premium UI            ║
 * ║  Stack: Next.js · Framer Motion · GSAP ScrollTrigger           ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiMapPin, FiClock, FiUsers, FiStar } from "react-icons/fi";
import {
    HiOutlineLightningBolt,
    HiOutlineGlobe,
    HiOutlineHeart,
} from "react-icons/hi";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

/* ══════════════════════════════════════════════════════════════════════
   DESIGN TOKENS
══════════════════════════════════════════════════════════════════════ */
const G = "#c9a84c";
const GL = "#e8c97a";
const GD = "#7d5e1f";
const ease = [0.16, 1, 0.3, 1];

/* ══════════════════════════════════════════════════════════════════════
   DESTINATIONS — real data with local images
══════════════════════════════════════════════════════════════════════ */
const DESTINATIONS = [
    {
        id: 1,
        name: "Anjaneri Fort",
        tagline: "Birthplace of Lord Hanuman",
        region: "Nashik, Maharashtra",
        duration: "1–2 Days",
        groupSize: "6–20 Pax",
        rating: "4.9",
        tag: "Adventure · Spiritual",
        tagColor: "#f97316",
        img: "/images/anjaneri-fort.jpeg",
        imgAlt: "Anjaneri Fort Nashik Maharashtra Sahyadri trekking",
        desc: "Anjaneri Fort is a scenic trekking destination near Trimbakeshwar, believed to be the birthplace of Lord Hanuman. Surrounded by Sahyadri landscapes, it offers breathtaking sunrise views and a deeply spiritual atmosphere.",
        highlights: ["Sahyadri Trekking", "Sunrise Views", "Spiritual Destination", "Photography Spot"],
        extra: "The trail winds through dense forest before opening to sweeping valley panoramas — a perfect blend of physical challenge and divine serenity.",
    },
    {
        id: 2,
        name: "Bhavali Dam",
        tagline: "Monsoon Paradise",
        region: "Igatpuri, Maharashtra",
        duration: "1–2 Days",
        groupSize: "6–20 Pax",
        rating: "4.8",
        tag: "Nature · Scenic",
        tagColor: "#4ade80",
        img: "/images/bhavali-dam.jpg",
        imgAlt: "Bhavali Dam Igatpuri Maharashtra monsoon scenic",
        desc: "Bhavali Dam is a peaceful getaway surrounded by green mountains and calm waters. During monsoon, the atmosphere becomes cinematic and ideal for relaxing road trips along misty hill roads.",
        highlights: ["Nature Escape", "Monsoon Views", "Relaxing Environment", "Road Trip Spot"],
        extra: "With the dam brimming over lush green banks and mist curling off the water at dawn, Bhavali is Maharashtra's best-kept secret.",
    },
    {
        id: 3,
        name: "Harihar Fort",
        tagline: "The Iconic Rock Staircase",
        region: "Nashik, Maharashtra",
        duration: "1 Day",
        groupSize: "6–15 Pax",
        rating: "4.9",
        tag: "Trekking · Sahyadri",
        tagColor: "#38bdf8",
        img: "/images/harihar-fort.jpg",
        imgAlt: "Harihar Fort rock cut staircase Nashik Sahyadri Maharashtra",
        desc: "Harihar Fort is famous for its iconic near-vertical rock-cut staircase — a thrilling climb rewarded by panoramic Sahyadri views. One of Maharashtra's most dramatic and adventurous destinations.",
        highlights: ["Adventure Trek", "Historic Fort", "Sahyadri Views", "Thrilling Climb"],
        extra: "The 80-degree rock steps carved into the cliff face are unlike anything else in Maharashtra — a bucket-list ascent for any trekking enthusiast.",
    },
    {
        id: 4,
        name: "Shirdi",
        tagline: "Sai Baba's Sacred Abode",
        region: "Ahmednagar, Maharashtra",
        duration: "2–3 Days",
        groupSize: "6–30 Pax",
        rating: "4.9",
        tag: "Spiritual Journey",
        tagColor: "#f59e0b",
        img: "/images/shirdi-sai-baba.jpg",
        imgAlt: "Shirdi Sai Baba temple Maharashtra spiritual pilgrimage",
        desc: "Shirdi is one of India's most visited spiritual destinations dedicated to Sai Baba. A peaceful pilgrimage journey attracting millions of devotees from across the country seeking blessings and inner peace.",
        highlights: ["Sai Baba Temple", "Spiritual Tourism", "Family Trips", "Peaceful Atmosphere"],
        extra: "Our dedicated pilgrimage fleet ensures a comfortable, dignified journey — arriving rested and ready for the sacred experience that awaits.",
    },
    {
        id: 5,
        name: "Kalsubai Peak",
        tagline: "Roof of Maharashtra",
        region: "Ahmednagar, Maharashtra",
        duration: "1–2 Days",
        groupSize: "6–20 Pax",
        rating: "4.8",
        tag: "Peak · Adventure",
        tagColor: "#86efac",
        img: "/images/kalsubai-fort.webp",
        imgAlt: "Kalsubai Peak highest mountain Maharashtra trekking adventure",
        desc: "Kalsubai Peak, at 1,646 metres, is the highest mountain in Maharashtra — a dream destination for trekking enthusiasts and nature lovers seeking cloud-level panoramas over the Sahyadri ranges.",
        highlights: ["Highest Peak", "Mountain Trek", "Cloud Views", "Adventure Tourism"],
        extra: "Standing at the summit feels like standing above Maharashtra itself — a golden sunrise seen from the state's rooftop is an image that never leaves you.",
    },
    {
        id: 6,
        name: "Umbrella Falls",
        tagline: "Monsoon's Finest Cascade",
        region: "Bhandardara, Maharashtra",
        duration: "1 Day",
        groupSize: "6–20 Pax",
        rating: "4.9",
        tag: "Waterfall · Monsoon",
        tagColor: "#38bdf8",
        img: "/images/umbrella-falls.jpg",
        imgAlt: "Umbrella Falls Bhandardara Maharashtra monsoon waterfall",
        desc: "Umbrella Falls is one of Maharashtra's most beautiful seasonal waterfalls — the Pravara River cascades over the Wilson Dam's edge in a perfect circular curtain of white water, especially magnificent during monsoon season.",
        highlights: ["Waterfall Experience", "Monsoon Tourism", "Scenic Beauty", "Photography Spot"],
        extra: "The falls are best witnessed from the base during peak monsoon — a roaring wall of water that sends cool mist across the valley floor.",
    },
];

/* ══════════════════════════════════════════════════════════════════════
   FEATURES STRIPS — 3 experience categories
══════════════════════════════════════════════════════════════════════ */
const FEATURES = [
    {
        icon: <HiOutlineLightningBolt />,
        emoji: "⚡",
        title: "Adventure Escapes",
        desc: "Harihar's vertical rock stairs, Kalsubai's summit skies, Anjaneri's sacred ridgelines — crafted for the soul that craves altitude and thrill.",
        accent: "#4ade80",
    },
    {
        icon: <HiOutlineHeart />,
        emoji: "🙏",
        title: "Spiritual Circuits",
        desc: "Shirdi's divine calm, Trimbakeshwar's ancient ghats, Nashik's Godavari banks — sacred journeys made comfortable and meaningful.",
        accent: "#f59e0b",
    },
    {
        icon: <HiOutlineGlobe />,
        emoji: "🌊",
        title: "Monsoon Journeys",
        desc: "Bhavali's misty dams, Umbrella Falls at full roar, Bhandardara's rain-soaked lakeside — Maharashtra is most alive in the rains.",
        accent: "#38bdf8",
    },
];

/* ══════════════════════════════════════════════════════════════════════
   DETAIL PANEL
══════════════════════════════════════════════════════════════════════ */
function DetailPanel({ dest, onClose }) {
    return (
        <motion.div
            key={dest.id}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.5, ease }}
            style={{
                borderRadius: 28, overflow: "hidden",
                border: "1px solid rgba(201,168,76,0.28)",
                background: "rgba(14,13,11,0.88)",
                backdropFilter: "blur(28px)", WebkitBackdropFilter: "blur(28px)",
                marginTop: 20,
                boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.1) inset",
            }}
        >
            <div style={{ display: "flex", flexDirection: "column" }}>

                {/* Image */}
                <div style={{ position: "relative", height: "clamp(200px,38vw,360px)", overflow: "hidden" }}>
                    <img
                        src={dest.img}
                        alt={dest.imgAlt}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        loading="lazy"
                    />
                    <div style={{
                        position: "absolute", inset: 0,
                        background: "linear-gradient(to bottom,rgba(14,13,11,0) 30%,rgba(14,13,11,0.97) 100%)",
                    }} />
                    {/* Gold shimmer bar on top */}
                    <div style={{
                        position: "absolute", top: 0, left: 0, right: 0, height: 2,
                        background: `linear-gradient(90deg,transparent,${G},${GL},${G},transparent)`,
                    }} />
                    {/* Tag */}
                    <div style={{
                        position: "absolute", top: 18, left: 18, zIndex: 2,
                        padding: "5px 14px", borderRadius: 99,
                        background: "rgba(14,13,11,0.75)",
                        border: `1px solid ${dest.tagColor}44`,
                        backdropFilter: "blur(10px)",
                        fontFamily: "'Outfit',sans-serif", fontWeight: 400,
                        fontSize: 9, letterSpacing: "0.24em",
                        textTransform: "uppercase", color: dest.tagColor,
                    }}>{dest.tag}</div>
                    {/* Close */}
                    <button onClick={onClose} style={{
                        position: "absolute", top: 16, right: 16, zIndex: 2,
                        width: 38, height: 38, borderRadius: "50%",
                        background: "rgba(14,13,11,0.75)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "rgba(255,255,255,0.8)", cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 18, lineHeight: 1,
                    }}>×</button>
                    {/* Rating badge */}
                    <div style={{
                        position: "absolute", bottom: 20, right: 20, zIndex: 2,
                        display: "flex", alignItems: "center", gap: 5,
                        padding: "7px 14px", borderRadius: 99,
                        background: "rgba(14,13,11,0.8)",
                        border: "1px solid rgba(201,168,76,0.3)",
                        backdropFilter: "blur(10px)",
                    }}>
                        <FiStar size={11} color={G} fill={G} />
                        <span style={{
                            fontFamily: "'Outfit',sans-serif", fontWeight: 500,
                            fontSize: 13, color: G,
                        }}>{dest.rating}</span>
                        <span style={{
                            fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                            fontSize: 10, color: "rgba(201,168,76,0.6)",
                        }}>/ 5.0</span>
                    </div>
                </div>

                {/* Content */}
                <div style={{ padding: "clamp(22px,4vw,40px)" }}>
                    <div style={{
                        fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                        fontSize: "clamp(9px,2vw,10px)", letterSpacing: "0.32em",
                        textTransform: "uppercase", color: G, marginBottom: 8,
                    }}>{dest.tagline}</div>

                    <h3 style={{
                        fontFamily: "'Cormorant Garamond',serif", fontWeight: 300,
                        fontSize: "clamp(30px,6vw,56px)", lineHeight: 0.95,
                        color: "#f5f0e8", margin: "0 0 clamp(14px,3vw,22px)",
                    }}>{dest.name}</h3>

                    <p style={{
                        fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                        fontSize: "clamp(13px,2vw,15px)", lineHeight: 1.78,
                        color: "rgba(245,240,232,0.6)",
                        marginBottom: 16,
                    }}>{dest.desc}</p>

                    {/* Extra flavour copy */}
                    <div style={{
                        padding: "14px 18px", borderRadius: 14,
                        background: "rgba(201,168,76,0.06)",
                        border: "1px solid rgba(201,168,76,0.14)",
                        marginBottom: "clamp(18px,3vw,26px)",
                    }}>
                        <p style={{
                            fontFamily: "'Cormorant Garamond',serif",
                            fontStyle: "italic", fontWeight: 300,
                            fontSize: "clamp(14px,2.2vw,18px)", lineHeight: 1.65,
                            color: "rgba(201,168,76,0.82)", margin: 0,
                        }}>{dest.extra}</p>
                    </div>

                    {/* Meta row */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: "clamp(18px,3vw,26px)" }}>
                        {[
                            { icon: <FiMapPin size={11} />, text: dest.region },
                            { icon: <FiClock size={11} />, text: dest.duration },
                            { icon: <FiUsers size={11} />, text: dest.groupSize },
                        ].map((m, i) => (
                            <div key={i} style={{
                                display: "flex", alignItems: "center", gap: 7,
                                padding: "7px 14px", borderRadius: 99,
                                background: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                color: "rgba(245,240,232,0.6)",
                                fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                                fontSize: 11, letterSpacing: "0.06em",
                            }}>
                                <span style={{ color: G }}>{m.icon}</span>{m.text}
                            </div>
                        ))}
                    </div>

                    {/* Highlights */}
                    <div style={{ marginBottom: "clamp(22px,4vw,32px)" }}>
                        <div style={{
                            fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                            fontSize: 8, letterSpacing: "0.32em",
                            textTransform: "uppercase", color: "rgba(201,168,76,0.5)",
                            marginBottom: 12,
                        }}>Highlights</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                            {dest.highlights.map((h, i) => (
                                <span key={i} style={{
                                    padding: "7px 14px", borderRadius: 99,
                                    background: "rgba(201,168,76,0.08)",
                                    border: "1px solid rgba(201,168,76,0.22)",
                                    fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                                    fontSize: 11, color: "rgba(201,168,76,0.85)",
                                    letterSpacing: "0.08em",
                                }}>{h}</span>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.04, boxShadow: "0 12px 48px rgba(201,168,76,0.45)" }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                display: "flex", alignItems: "center", gap: 10,
                                padding: "13px 28px", borderRadius: 99,
                                background: `linear-gradient(135deg,${G},${GD})`,
                                border: "none", cursor: "pointer",
                                fontFamily: "'Outfit',sans-serif", fontWeight: 500,
                                fontSize: 12, letterSpacing: "0.18em",
                                textTransform: "uppercase", color: "#0e0d0b",
                                boxShadow: "0 8px 32px rgba(201,168,76,0.28)",
                                textDecoration: "none",
                            }}
                        >
                            Book This Tour <FiArrowRight size={13} strokeWidth={2.5} />
                        </motion.a>
                        <motion.a
                            href="https://wa.me/919373545169"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                display: "flex", alignItems: "center", gap: 8,
                                padding: "13px 24px", borderRadius: 99,
                                background: "rgba(255,255,255,0.04)",
                                backdropFilter: "blur(12px)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                cursor: "pointer",
                                fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                                fontSize: 12, letterSpacing: "0.14em",
                                textTransform: "uppercase", color: "rgba(245,240,232,0.72)",
                                textDecoration: "none",
                            }}
                        >
                            WhatsApp Enquiry
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

/* ══════════════════════════════════════════════════════════════════════
   DESTINATION CARD
══════════════════════════════════════════════════════════════════════ */
function DestCard({ dest, isActive, onClick }) {
    return (
        <motion.div
            onClick={onClick}
            whileHover={{ y: -6, scale: 1.016 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.42, ease }}
            style={{
                position: "relative", overflow: "hidden",
                borderRadius: 22,
                border: isActive
                    ? "1px solid rgba(201,168,76,0.5)"
                    : "1px solid rgba(255,255,255,0.07)",
                background: "#111",
                cursor: "pointer",
                height: "clamp(260px,34vw,350px)",
                boxShadow: isActive
                    ? "0 20px 60px rgba(201,168,76,0.22), 0 0 0 1px rgba(201,168,76,0.28)"
                    : "0 4px 20px rgba(0,0,0,0.45)",
                transition: "box-shadow 0.4s, border-color 0.4s",
            }}
        >
            {/* Fallback bg */}
            <div style={{
                position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
                background: "linear-gradient(135deg,#1a1400,#0e0d0b)",
            }} />

            {/* Image */}
            <img
                src={dest.img}
                alt={dest.imgAlt}
                style={{
                    position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
                    width: "100%", height: "100%",
                    objectFit: "cover", display: "block",
                    transition: "transform 0.6s ease",
                    transform: isActive ? "scale(1.07)" : "scale(1)",
                }}
                loading="lazy"
            />

            {/* Overlay gradient */}
            <div style={{
                position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
                background: isActive
                    ? "linear-gradient(to top,rgba(14,13,11,0.96) 0%,rgba(14,13,11,0.25) 55%,transparent 100%)"
                    : "linear-gradient(to top,rgba(14,13,11,0.92) 0%,rgba(14,13,11,0.18) 60%,transparent 100%)",
                transition: "background 0.45s",
            }} />

            {/* Top: tag */}
            <div style={{
                position: "absolute", top: 14, left: 14, zIndex: 2,
                padding: "5px 12px", borderRadius: 99,
                background: "rgba(14,13,11,0.68)",
                border: `1px solid ${dest.tagColor}33`,
                backdropFilter: "blur(8px)",
                fontFamily: "'Outfit',sans-serif", fontWeight: 400,
                fontSize: 9, letterSpacing: "0.22em",
                textTransform: "uppercase", color: dest.tagColor,
            }}>{dest.tag}</div>

            {/* Top: rating */}
            <div style={{
                position: "absolute", top: 14, right: 14, zIndex: 2,
                padding: "5px 10px", borderRadius: 99,
                background: "rgba(14,13,11,0.68)",
                backdropFilter: "blur(8px)",
                display: "flex", alignItems: "center", gap: 4,
            }}>
                <FiStar size={9} color={G} />
                <span style={{
                    fontFamily: "'Outfit',sans-serif", fontWeight: 500,
                    fontSize: 10, color: G,
                }}>{dest.rating}</span>
            </div>

            {/* Bottom content */}
            <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                zIndex: 2, padding: "clamp(14px,3vw,22px)",
            }}>
                <div style={{
                    fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                    fontSize: "clamp(7px,1.5vw,9px)", letterSpacing: "0.28em",
                    textTransform: "uppercase", color: "rgba(201,168,76,0.72)",
                    marginBottom: 4,
                }}>{dest.tagline}</div>

                <h3 style={{
                    fontFamily: "'Cormorant Garamond',serif", fontWeight: 300,
                    fontSize: "clamp(22px,4vw,30px)", lineHeight: 1,
                    color: "#f5f0e8", margin: "0 0 8px",
                }}>{dest.name}</h3>

                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
                    <span style={{
                        display: "flex", alignItems: "center", gap: 4,
                        fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                        fontSize: "clamp(9px,1.8vw,11px)", color: "rgba(245,240,232,0.5)",
                    }}>
                        <FiMapPin size={9} color={G} />{dest.region}
                    </span>
                    <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(201,168,76,0.3)" }} />
                    <span style={{
                        display: "flex", alignItems: "center", gap: 4,
                        fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                        fontSize: "clamp(9px,1.8vw,11px)", color: "rgba(245,240,232,0.5)",
                    }}>
                        <FiClock size={9} color={G} />{dest.duration}
                    </span>
                </div>

                {/* Explore hint */}
                <motion.div
                    animate={{ opacity: isActive ? 1 : 0.65, x: isActive ? 4 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ display: "flex", alignItems: "center", gap: 6, color: G }}
                >
                    <span style={{
                        fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                        fontSize: 9, letterSpacing: "0.26em", textTransform: "uppercase",
                    }}>{isActive ? "View Details ↓" : "Tap to Explore"}</span>
                    <FiArrowRight size={10} />
                </motion.div>
            </div>

            {/* Active ring */}
            {isActive && (
                <motion.div
                    layoutId="active-ring"
                    style={{
                        position: "absolute", inset: -1, borderRadius: 22,
                        border: "2px solid rgba(201,168,76,0.55)",
                        pointerEvents: "none",
                    }}
                />
            )}
        </motion.div>
    );
}

/* ══════════════════════════════════════════════════════════════════════
   FEATURE CARD
══════════════════════════════════════════════════════════════════════ */
function FeatureCard({ f, fRef }) {
    return (
        <motion.div
            ref={fRef}
            style={{
                position: "relative", overflow: "hidden",
                borderRadius: 20, flex: "1 1 280px",
                minHeight: "clamp(200px,28vw,260px)",
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.025)",
                cursor: "default",
            }}
            whileHover={{ y: -5, scale: 1.018 }}
            transition={{ duration: 0.38, ease }}
        >
            {/* Accent corner glow */}
            <div style={{
                position: "absolute", inset: 0,
                background: `radial-gradient(circle at top left,${f.accent}12 0%,transparent 60%)`,
                pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute", bottom: 0, right: 0,
                width: 80, height: 80,
                background: `radial-gradient(circle at bottom right,${f.accent}10,transparent 70%)`,
                pointerEvents: "none",
            }} />

            {/* Content */}
            <div style={{
                position: "relative", zIndex: 1,
                padding: "clamp(22px,4vw,32px)",
                height: "100%",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
            }}>
                <div>
                    <span style={{ fontSize: "clamp(28px,5vw,36px)", lineHeight: 1 }}>{f.emoji}</span>
                    <h4 style={{
                        fontFamily: "'Cormorant Garamond',serif", fontWeight: 300,
                        fontSize: "clamp(20px,3.5vw,27px)", lineHeight: 1.1,
                        color: "#f5f0e8", margin: "14px 0 12px",
                    }}>{f.title}</h4>
                    <p style={{
                        fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                        fontSize: "clamp(12px,1.9vw,14px)", lineHeight: 1.7,
                        color: "rgba(245,240,232,0.5)",
                    }}>{f.desc}</p>
                </div>
                <div style={{
                    display: "flex", alignItems: "center", gap: 6, marginTop: 18,
                    fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                    fontSize: 10, letterSpacing: "0.22em",
                    textTransform: "uppercase", color: f.accent,
                }}>
                    Explore <FiArrowRight size={10} />
                </div>
            </div>

            {/* Top border accent */}
            <div style={{
                position: "absolute", top: 0, left: "20%", right: "20%", height: 1,
                background: `linear-gradient(90deg,transparent,${f.accent}50,transparent)`,
            }} />
        </motion.div>
    );
}

/* ══════════════════════════════════════════════════════════════════════
   WHY CHOOSE US — extra content block
══════════════════════════════════════════════════════════════════════ */
const WHY_US = [
    {
        num: "01",
        title: "Premium Force Traveller Fleet",
        desc: "Every journey is aboard our meticulously maintained Force Traveller vehicles — spacious, air-conditioned, and built for Maharashtra's diverse terrain.",
    },
    {
        num: "02",
        title: "Experienced Local Drivers",
        desc: "Our drivers know every mountain pass, monsoon shortcut, and pilgrim route across Maharashtra. Safety and local knowledge in every kilometre.",
    },
    {
        num: "03",
        title: "Custom Group Packages",
        desc: "From family pilgrimages to corporate offsite trips, we craft packages tailored to your group size, budget, and preferred pace.",
    },
    {
        num: "04",
        title: "Transparent Pricing",
        desc: "No hidden charges. No last-minute surprises. Full cost clarity before you book — because trust is the foundation of every great journey.",
    },
];

/* ══════════════════════════════════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════════════════════════════════ */
export default function ExperienceSection() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const subRef = useRef(null);
    const gridRef = useRef(null);
    const featureRefs = useRef([]);
    const whyRef = useRef(null);
    const statsRef = useRef(null);
    const ctaRef = useRef(null);

    const [activeId, setActiveId] = useState(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true); }, []);

    /* GSAP scroll animations */
    useEffect(() => {
        if (!mounted) return;
        const ctx = gsap.context(() => {

            gsap.fromTo(headingRef.current,
                { opacity: 0, y: 80, clipPath: "inset(0 0 100% 0)" },
                {
                    opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)",
                    duration: 1.4, ease: "power4.out",
                    scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
                }
            );
            gsap.fromTo(subRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 1.1, ease: "power3.out", delay: 0.2,
                    scrollTrigger: { trigger: headingRef.current, start: "top 82%" },
                }
            );

            if (gridRef.current) {
                const cards = gridRef.current.querySelectorAll(".dest-card-wrap");
                gsap.fromTo(cards,
                    { opacity: 0, y: 60, scale: 0.94 },
                    {
                        opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "power3.out", stagger: 0.1,
                        scrollTrigger: { trigger: gridRef.current, start: "top 88%" },
                    }
                );
            }

            featureRefs.current.forEach((el, i) => {
                if (!el) return;
                gsap.fromTo(el,
                    { opacity: 0, y: 50, scale: 0.95 },
                    {
                        opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "power3.out", delay: i * 0.12,
                        scrollTrigger: { trigger: el, start: "top 90%" },
                    }
                );
            });

            if (whyRef.current) {
                const items = whyRef.current.querySelectorAll(".why-item");
                gsap.fromTo(items,
                    { opacity: 0, x: -30 },
                    {
                        opacity: 1, x: 0, duration: 1, ease: "power3.out", stagger: 0.12,
                        scrollTrigger: { trigger: whyRef.current, start: "top 88%" },
                    }
                );
            }

            if (statsRef.current) {
                const nums = statsRef.current.querySelectorAll(".stat-num");
                gsap.fromTo(nums,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1, y: 0, duration: 0.9, ease: "power2.out", stagger: 0.1,
                        scrollTrigger: { trigger: statsRef.current, start: "top 88%" },
                    }
                );
            }

            gsap.fromTo(ctaRef.current,
                { opacity: 0, y: 60, scale: 0.96 },
                {
                    opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out",
                    scrollTrigger: { trigger: ctaRef.current, start: "top 90%" },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, [mounted]);

    const handleCardClick = (id) => setActiveId(prev => prev === id ? null : id);
    const activeDestination = DESTINATIONS.find(d => d.id === activeId);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Outfit:wght@200;300;400;500&display=swap');

        @keyframes goldShimmer {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .gold-shimmer-text {
          background: linear-gradient(90deg,#c9a84c,#e8c97a,#c9a84c,#a07830,#c9a84c);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: goldShimmer 5s linear infinite;
        }

        .exp-section::before {
          content:'';
          position:absolute; inset:0;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          opacity:0.018; pointer-events:none; z-index:0; mix-blend-mode:overlay;
        }

        .exp-section { font-family:'Outfit',sans-serif; }
      `}</style>

            <section
                ref={sectionRef}
                className="exp-section"
                style={{
                    position: "relative",
                    background: "#0B0B0B",
                    color: "#f5f0e8",
                    overflow: "hidden",
                    padding: "clamp(80px,12vw,140px) 0",
                }}
            >
                {/* ── Ambient orbs ── */}
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
                    <div style={{
                        position: "absolute", top: "-15%", left: "-10%",
                        width: "clamp(300px,50vw,600px)", height: "clamp(300px,50vw,600px)",
                        borderRadius: "50%",
                        background: "radial-gradient(circle,rgba(201,168,76,0.09) 0%,transparent 65%)",
                        filter: "blur(60px)",
                    }} />
                    <div style={{
                        position: "absolute", bottom: "-15%", right: "-10%",
                        width: "clamp(300px,50vw,600px)", height: "clamp(300px,50vw,600px)",
                        borderRadius: "50%",
                        background: "radial-gradient(circle,rgba(180,80,20,0.07) 0%,transparent 65%)",
                        filter: "blur(60px)",
                    }} />
                </div>

                {/* ═══════════════════════════════════
                    CONTAINER
                ═══════════════════════════════════ */}
                <div style={{
                    position: "relative", zIndex: 1,
                    width: "100%", maxWidth: 1280,
                    margin: "0 auto",
                    padding: "0 clamp(16px,5vw,56px)",
                }}>

                    {/* ═══════════════
                        SECTION HEADING
                    ═══════════════ */}
                    <div ref={headingRef} style={{ textAlign: "center", marginBottom: "clamp(48px,8vw,80px)" }}>

                        {/* Eyebrow pill */}
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: 10,
                            padding: "8px 22px", borderRadius: 99,
                            background: "rgba(201,168,76,0.08)",
                            border: "1px solid rgba(201,168,76,0.22)",
                            marginBottom: "clamp(20px,4vw,30px)",
                        }}>
                            <span style={{
                                fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                                fontSize: "clamp(8px,2vw,10px)", letterSpacing: "0.36em",
                                textTransform: "uppercase", color: G,
                            }}>Real Maharashtra Travel Experience</span>
                        </div>

                        {/* Heading */}
                        <h2 style={{
                            fontFamily: "'Cormorant Garamond',serif", fontWeight: 300,
                            fontSize: "clamp(40px,9vw,108px)", lineHeight: 0.92,
                            letterSpacing: "-0.02em", margin: 0, color: "#f5f0e8",
                        }}>
                            Beyond
                            <span className="gold-shimmer-text" style={{
                                fontStyle: "italic",
                                display: "inline-block",
                                margin: "0 clamp(8px,2vw,18px)",
                            }}>Destinations</span>
                            <br />
                            <span style={{ color: "rgba(245,240,232,0.82)" }}>Into</span>
                            {" "}
                            <span style={{ fontStyle: "italic" }}>Stories.</span>
                        </h2>

                        {/* Sub */}
                        <p ref={subRef} style={{
                            fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                            fontSize: "clamp(13px,2vw,18px)", lineHeight: 1.75,
                            color: "rgba(245,240,232,0.48)",
                            maxWidth: 640, margin: "clamp(18px,3vw,28px) auto 0",
                        }}>
                            Six legendary circuits across Maharashtra — each handcrafted for our
                            Force Traveller fleet, where every road becomes a cinematic frame.
                        </p>
                    </div>

                    {/* ═══════════════
                        DESTINATION GRID
                    ═══════════════ */}
                    <div
                        ref={gridRef}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill,minmax(clamp(260px,30vw,340px),1fr))",
                            gap: "clamp(12px,2vw,20px)",
                            marginBottom: "clamp(12px,2vw,20px)",
                        }}
                    >
                        {DESTINATIONS.map((dest) => (
                            <div key={dest.id} className="dest-card-wrap">
                                <DestCard
                                    dest={dest}
                                    isActive={activeId === dest.id}
                                    onClick={() => handleCardClick(dest.id)}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Detail panel */}
                    <AnimatePresence mode="wait">
                        {activeDestination && (
                            <DetailPanel
                                key={activeDestination.id}
                                dest={activeDestination}
                                onClose={() => setActiveId(null)}
                            />
                        )}
                    </AnimatePresence>

                    {/* ═══════════════
                        STATS ROW
                    ═══════════════ */}
                    <div
                        ref={statsRef}
                        style={{
                            display: "flex", flexWrap: "wrap", justifyContent: "center",
                            gap: 0,
                            margin: "clamp(56px,9vw,96px) 0",
                            padding: "clamp(24px,4vw,40px) clamp(16px,4vw,48px)",
                            borderRadius: 24,
                            background: "rgba(255,255,255,0.025)",
                            border: "1px solid rgba(255,255,255,0.07)",
                            backdropFilter: "blur(12px)",
                        }}
                    >
                        {[
                            { num: "500+", label: "Tours Completed" },
                            { num: "4.9★", label: "Average Rating" },
                            { num: "12+", label: "Destinations" },
                            { num: "10+", label: "Years Experience" },
                            { num: "15K+", label: "Happy Travellers" },
                        ].map((s, i, arr) => (
                            <div key={i} style={{
                                flex: "1 1 120px",
                                display: "flex", flexDirection: "column", alignItems: "center",
                                padding: "clamp(14px,3vw,20px) clamp(12px,2vw,24px)",
                                borderRight: i < arr.length - 1
                                    ? "1px solid rgba(255,255,255,0.07)" : "none",
                            }}>
                                <span className="stat-num" style={{
                                    fontFamily: "'Cormorant Garamond',serif", fontWeight: 300,
                                    fontSize: "clamp(26px,5vw,44px)", lineHeight: 1, color: G,
                                }}>{s.num}</span>
                                <span style={{
                                    fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                                    fontSize: "clamp(8px,1.5vw,10px)", letterSpacing: "0.24em",
                                    textTransform: "uppercase", color: "rgba(245,240,232,0.36)",
                                    marginTop: 6, textAlign: "center",
                                }}>{s.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* ═══════════════
                        EXPERIENCE CATEGORIES
                    ═══════════════ */}
                    <div style={{ marginBottom: "clamp(56px,9vw,96px)" }}>
                        <div style={{
                            display: "flex", alignItems: "center", gap: 12,
                            marginBottom: "clamp(24px,4vw,36px)",
                        }}>
                            <div style={{ width: 20, height: 1, background: G }} />
                            <span style={{
                                fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                                fontSize: "clamp(8px,1.8vw,10px)", letterSpacing: "0.32em",
                                textTransform: "uppercase", color: "rgba(201,168,76,0.6)",
                            }}>Experience Categories</span>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(12px,2vw,18px)" }}>
                            {FEATURES.map((f, i) => (
                                <FeatureCard
                                    key={i} f={f}
                                    fRef={(el) => featureRefs.current[i] = el}
                                />
                            ))}
                        </div>
                    </div>

                    {/* ═══════════════
                        WHY CHOOSE US
                    ═══════════════ */}
                    <div
                        ref={whyRef}
                        style={{ marginBottom: "clamp(56px,9vw,96px)" }}
                    >
                        {/* Section label */}
                        <div style={{
                            display: "flex", alignItems: "center", gap: 12,
                            marginBottom: "clamp(30px,5vw,48px)",
                        }}>
                            <div style={{ width: 20, height: 1, background: G }} />
                            <span style={{
                                fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                                fontSize: "clamp(8px,1.8vw,10px)", letterSpacing: "0.32em",
                                textTransform: "uppercase", color: "rgba(201,168,76,0.6)",
                            }}>Why Travel With Us</span>
                        </div>

                        {/* Two-column grid */}
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill,minmax(clamp(260px,45%,560px),1fr))",
                            gap: "clamp(16px,2.5vw,24px)",
                        }}>
                            {WHY_US.map((w, i) => (
                                <div key={i} className="why-item" style={{
                                    display: "flex", gap: 20,
                                    padding: "clamp(20px,3.5vw,32px)",
                                    borderRadius: 20,
                                    background: "rgba(255,255,255,0.025)",
                                    border: "1px solid rgba(255,255,255,0.07)",
                                    backdropFilter: "blur(10px)",
                                }}>
                                    {/* Number */}
                                    <div style={{
                                        fontFamily: "'Cormorant Garamond',serif",
                                        fontStyle: "italic", fontWeight: 300,
                                        fontSize: "clamp(32px,5vw,52px)", lineHeight: 1,
                                        color: "rgba(201,168,76,0.25)",
                                        flexShrink: 0, width: 56,
                                    }}>{w.num}</div>
                                    <div>
                                        <h4 style={{
                                            fontFamily: "'Cormorant Garamond',serif", fontWeight: 400,
                                            fontSize: "clamp(16px,2.5vw,22px)", lineHeight: 1.2,
                                            color: "#f5f0e8", margin: "0 0 10px",
                                        }}>{w.title}</h4>
                                        <p style={{
                                            fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                                            fontSize: "clamp(12px,1.8vw,14px)", lineHeight: 1.72,
                                            color: "rgba(245,240,232,0.5)", margin: 0,
                                        }}>{w.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ═══════════════
                        BOTTOM CTA BANNER
                    ═══════════════ */}
                    <div
                        ref={ctaRef}
                        style={{
                            borderRadius: 28, overflow: "hidden",
                            position: "relative",
                            padding: "clamp(40px,7vw,72px) clamp(24px,5vw,64px)",
                            textAlign: "center",
                            border: "1px solid rgba(201,168,76,0.2)",
                            background: "rgba(14,13,11,0.75)",
                            backdropFilter: "blur(16px)",
                        }}
                    >
                        {/* BG image */}
                        <img
                            src="/images/kalsubai-fort.webp"
                            alt="Maharashtra landscape"
                            style={{
                                position: "absolute", inset: 0,
                                width: "100%", height: "100%",
                                objectFit: "cover", opacity: 0.12,
                            }}
                            loading="lazy"
                        />
                        <div style={{
                            position: "absolute", inset: 0,
                            background: "linear-gradient(135deg,rgba(14,13,11,0.92),rgba(14,13,11,0.72))",
                        }} />

                        {/* Gold shimmer top line */}
                        <div style={{
                            position: "absolute", top: 0, left: "15%", right: "15%", height: 1,
                            background: `linear-gradient(90deg,transparent,${G},${GL},${G},transparent)`,
                        }} />

                        <div style={{ position: "relative", zIndex: 1 }}>
                            <div style={{
                                display: "inline-block",
                                padding: "7px 22px", borderRadius: 99, marginBottom: "clamp(18px,3vw,24px)",
                                background: "rgba(201,168,76,0.1)",
                                border: "1px solid rgba(201,168,76,0.25)",
                                fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                                fontSize: "clamp(8px,1.8vw,10px)", letterSpacing: "0.36em",
                                textTransform: "uppercase", color: G,
                            }}>
                                Shree Swami Samartha Tours &amp; Travels
                            </div>

                            <h3 style={{
                                fontFamily: "'Cormorant Garamond',serif", fontWeight: 300,
                                fontSize: "clamp(28px,6vw,72px)", lineHeight: 0.95,
                                letterSpacing: "-0.02em", color: "#f5f0e8",
                                margin: "0 0 clamp(14px,2.5vw,20px)",
                            }}>
                                Discover roads that feel{" "}
                                <span className="gold-shimmer-text" style={{ fontStyle: "italic" }}>
                                    cinematic.
                                </span>
                            </h3>

                            <p style={{
                                fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                                fontSize: "clamp(12px,2vw,16px)", lineHeight: 1.75,
                                color: "rgba(245,240,232,0.5)",
                                maxWidth: 520, margin: "0 auto clamp(28px,4vw,40px)",
                            }}>
                                Premium Force Traveller tours across Nashik, Shirdi, and all of
                                Maharashtra — comfort, safety, and elegance for groups of any size.
                            </p>

                            <div style={{
                                display: "flex", flexWrap: "wrap", gap: 12,
                                justifyContent: "center",
                            }}>
                                <motion.a
                                    href="/contact"
                                    whileHover={{ scale: 1.05, boxShadow: "0 12px 48px rgba(201,168,76,0.5)" }}
                                    whileTap={{ scale: 0.96 }}
                                    style={{
                                        display: "flex", alignItems: "center", gap: 10,
                                        padding: "clamp(13px,2.5vw,16px) clamp(24px,4vw,36px)",
                                        borderRadius: 99,
                                        background: `linear-gradient(135deg,${G},${GD})`,
                                        border: "none", cursor: "pointer",
                                        fontFamily: "'Outfit',sans-serif", fontWeight: 500,
                                        fontSize: "clamp(10px,2vw,13px)", letterSpacing: "0.18em",
                                        textTransform: "uppercase", color: "#0e0d0b",
                                        boxShadow: "0 8px 32px rgba(201,168,76,0.3)",
                                        textDecoration: "none",
                                    }}
                                >
                                    Start Your Journey <FiArrowRight size={14} strokeWidth={2.5} />
                                </motion.a>

                                <motion.a
                                    href="https://wa.me/919373545169"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.97 }}
                                    style={{
                                        display: "flex", alignItems: "center", gap: 8,
                                        padding: "clamp(13px,2.5vw,16px) clamp(24px,4vw,36px)",
                                        borderRadius: 99,
                                        background: "rgba(255,255,255,0.05)",
                                        backdropFilter: "blur(16px)",
                                        border: "1px solid rgba(255,255,255,0.12)",
                                        cursor: "pointer",
                                        fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                                        fontSize: "clamp(10px,2vw,13px)", letterSpacing: "0.16em",
                                        textTransform: "uppercase", color: "rgba(245,240,232,0.8)",
                                        textDecoration: "none",
                                    }}
                                >
                                    WhatsApp Us
                                </motion.a>
                            </div>
                        </div>
                    </div>

                </div>{/* /container */}
            </section>
        </>
    );
}