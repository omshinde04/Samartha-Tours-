"use client";

/**
 * ServicesGrid.jsx
 * 7 service cards in an asymmetric editorial grid.
 * First card is large (featured), rest are standard.
 * Hover: subtle gold border glow + slight lift.
 * No icons overload — use elegant number glyphs + one line tag.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    FiMapPin, FiSunrise, FiCalendar, FiKey,
    FiHeart, FiNavigation, FiBriefcase,
} from "react-icons/fi";

const G = "#c9a84c";
const ease = [0.16, 1, 0.3, 1];

const SERVICES = [
    {
        num: "01",
        icon: <FiMapPin size={16} />,
        tag: "Most Popular",
        title: "Custom Tour Packages",
        body: "Maharashtra-wide tours, Goa trips, family travel, group outings — planned around your schedule, preferences, and comfort. Every package is built specifically for you.",
        highlights: ["Maharashtra Tours", "Goa Trips", "Family & Group Travel", "Custom Planning"],
        featured: true,
    },
    {
        num: "02",
        icon: <FiSunrise size={16} />,
        tag: "Spiritual",
        title: "Temple & Pilgrimage Tours",
        body: "Sacred circuits across Maharashtra's most revered shrines — Trimbakeshwar, Bhimashankar, Jejuri, Tuljapur, Kolhapur Mahalaxmi, and Shani Shingnapur.",
        highlights: ["Trimbakeshwar", "Bhimashankar", "Kolhapur", "Shani Shingnapur"],
        featured: false,
    },
    {
        num: "03",
        icon: <FiCalendar size={16} />,
        tag: "Weekend Escape",
        title: "Weekend Getaways",
        body: "Short breaks to Maharashtra's scenic retreats. Mahabaleshwar, Lonavala, Pawna Lake, Bhandardara, Alibaug, and Kashid — reachable and refreshing.",
        highlights: ["Mahabaleshwar", "Lonavala", "Pawna Lake", "Alibaug"],
        featured: false,
    },
    {
        num: "04",
        icon: <FiKey size={16} />,
        tag: "Daily Service",
        title: "One Day Rentals",
        body: "Hourly bookings, local rides, short trips, personal errands, or business travel. Available for flexible pick-up and drop across the region.",
        highlights: ["Hourly Booking", "Local Rides", "Personal Travel", "Business Rides"],
        featured: false,
    },
    {
        num: "05",
        icon: <FiHeart size={16} />,
        tag: "Events",
        title: "Wedding & Function Travel",
        body: "Reliable group transport for weddings, family functions, and social events. Comfortable vehicles, timely arrivals, and stress-free coordination.",
        highlights: ["Wedding Transport", "Family Functions", "Group Pickup/Drop", "Event Travel"],
        featured: false,
    },
    {
        num: "06",
        icon: <FiNavigation size={16} />,
        tag: "Transfer",
        title: "Airport & Railway Transfers",
        body: "Smooth, punctual pickup and drop for flights and trains. Comfortable ride, driver on time, no last-minute stress.",
        highlights: ["Airport Pickup", "Railway Drop", "Flight Transfers", "Timely Service"],
        featured: false,
    },
    {
        num: "07",
        icon: <FiBriefcase size={16} />,
        tag: "Corporate",
        title: "Corporate Travel",
        body: "Professional, reliable transport for business rides, team outings, and office travel. Clean vehicles, presentable drivers, and dependable timing.",
        highlights: ["Business Rides", "Team Transport", "Office Transfers", "Professional Travel"],
        featured: false,
    },
];

function ServiceCard({ svc, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-8% 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease, delay: index * 0.07 }}
            whileHover={{ y: -5 }}
            style={{
                position: "relative",
                padding: svc.featured
                    ? "clamp(28px,4vw,44px)"
                    : "clamp(22px,3vw,32px)",
                borderRadius: 20,
                background: svc.featured
                    ? "rgba(201,168,76,0.04)"
                    : "rgba(255,255,255,0.025)",
                border: svc.featured
                    ? "1px solid rgba(201,168,76,0.22)"
                    : "1px solid rgba(255,255,255,0.07)",
                overflow: "hidden",
                cursor: "default",
                gridColumn: svc.featured ? "span 2" : "span 1",
                transition: "border-color 0.35s",
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)"}
            onMouseLeave={e => e.currentTarget.style.borderColor = svc.featured
                ? "rgba(201,168,76,0.22)"
                : "rgba(255,255,255,0.07)"}
        >
            {/* Ambient glow on featured */}
            {svc.featured && (
                <div style={{
                    position: "absolute", top: "-30%", right: "-10%",
                    width: "50%", height: "80%", borderRadius: "50%",
                    background: "radial-gradient(circle,rgba(201,168,76,0.06) 0%,transparent 70%)",
                    pointerEvents: "none",
                }} />
            )}

            {/* Top row: number + tag */}
            <div style={{
                display: "flex", alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "clamp(18px,3vw,26px)",
            }}>
                <span style={{
                    fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
                    fontWeight: 300, fontSize: "clamp(28px,4vw,44px)",
                    color: "rgba(201,168,76,0.2)", lineHeight: 1,
                }}>{svc.num}</span>

                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: "rgba(201,168,76,0.55)", display: "flex" }}>{svc.icon}</span>
                    <span style={{
                        padding: "4px 12px", borderRadius: 99,
                        background: "rgba(201,168,76,0.07)",
                        border: "1px solid rgba(201,168,76,0.15)",
                        fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                        fontSize: "clamp(7px,1.4vw,9px)", letterSpacing: "0.24em",
                        textTransform: "uppercase", color: "rgba(201,168,76,0.65)",
                    }}>{svc.tag}</span>
                </div>
            </div>

            {/* Title */}
            <h3 style={{
                fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                fontSize: svc.featured
                    ? "clamp(26px,4.5vw,44px)"
                    : "clamp(20px,3vw,30px)",
                lineHeight: 1.05, letterSpacing: "-0.015em",
                color: "rgba(245,240,232,0.94)",
                margin: "0 0 clamp(12px,2vw,18px)",
            }}>{svc.title}</h3>

            {/* Body */}
            <p style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                fontSize: "clamp(12px,1.7vw,15px)", lineHeight: 1.82,
                color: "rgba(245,240,232,0.46)",
                margin: "0 0 clamp(16px,2.5vw,24px)",
                maxWidth: svc.featured ? 560 : "none",
            }}>{svc.body}</p>

            {/* Highlights */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 8px" }}>
                {svc.highlights.map((h, i) => (
                    <span key={i} style={{
                        padding: "5px 12px", borderRadius: 99,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                        fontSize: "clamp(9px,1.4vw,11px)", letterSpacing: "0.08em",
                        color: "rgba(245,240,232,0.45)",
                    }}>{h}</span>
                ))}
            </div>
        </motion.div>
    );
}

export default function ServicesGrid() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-10% 0px" });

    return (
        <section
            style={{
                position: "relative",
                background: "#0e0d0b",
                padding: "clamp(64px,9vw,110px) clamp(20px,6vw,80px)",
            }}
        >
            <div style={{
                position: "absolute", top: 0,
                left: "clamp(20px,6vw,80px)", right: "clamp(20px,6vw,80px)",
                height: 1,
                background: "linear-gradient(to right,transparent,rgba(255,255,255,0.06),transparent)",
            }} />

            <div style={{ maxWidth: 1200, margin: "0 auto" }}>

                {/* Heading */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease }}
                    style={{ marginBottom: "clamp(40px,6vw,64px)" }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "clamp(14px,2.5vw,20px)" }}>
                        <div style={{ width: 18, height: 1, background: G }} />
                        <span style={{
                            fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                            fontSize: "clamp(8px,1.6vw,10px)", letterSpacing: "0.36em",
                            textTransform: "uppercase", color: "rgba(201,168,76,0.6)",
                        }}>All Services</span>
                    </div>
                    <h2 style={{
                        fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                        fontSize: "clamp(30px,6vw,64px)", lineHeight: 0.95,
                        letterSpacing: "-0.02em", color: "rgba(245,240,232,0.94)",
                        margin: 0,
                    }}>
                        Seven ways we{" "}
                        <span style={{ fontStyle: "italic", color: G }}>serve you.</span>
                    </h2>
                </motion.div>

                {/* Grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
                    gap: "clamp(12px,2vw,18px)",
                }}>
                    {SERVICES.map((svc, i) => (
                        <ServiceCard key={i} svc={svc} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}