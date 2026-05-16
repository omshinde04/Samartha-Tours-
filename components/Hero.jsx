"use client";

/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  SHREE SWAMI SAMARTHA TOURS & TRAVELS                          ║
 * ║  Unified Hero + Navbar · Hydration-safe · Mobile-first         ║
 * ║  Stack: Next.js · Framer Motion · GSAP ScrollTrigger           ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 * Place at:  app/components/Hero.jsx
 * Use in:    app/page.jsx  →  <Hero />
 *
 * DELETE your separate Navbar component — this file includes both.
 * npm install gsap framer-motion react-icons
 */

import { useEffect, useRef, useState, useCallback } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    AnimatePresence,
} from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    FiArrowRight,
    FiChevronDown,
    FiCompass,
    FiMenu,
    FiX,
} from "react-icons/fi";
import {
    HiOutlineHome,
    HiOutlineUser,
    HiOutlineBriefcase,
    HiOutlinePhotograph,
    HiOutlinePhone,
} from "react-icons/hi";

/* ── GSAP client-safe registration ──────────────────────────────────── */
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

/* ══════════════════════════════════════════════════════════════════════
   DESIGN TOKENS
══════════════════════════════════════════════════════════════════════ */
const T = {
    gold: "#c9a84c",
    goldLt: "#e8c97a",
    goldDk: "#a07830",
    ivory: "#f5f0e8",
    charcoal: "#0e0d0b",
    ease: [0.16, 1, 0.3, 1],
};

/* ══════════════════════════════════════════════════════════════════════
   NAV ITEMS  (single source of truth — used in desktop + mobile)
══════════════════════════════════════════════════════════════════════ */
const NAV_ITEMS = [
    { name: "Home", href: "#home", icon: <HiOutlineHome /> },
    { name: "About", href: "#about", icon: <HiOutlineUser /> },
    { name: "Services", href: "#services", icon: <HiOutlineBriefcase /> },
    { name: "Gallery", href: "#gallery", icon: <HiOutlinePhotograph /> },
    { name: "Contact", href: "#contact", icon: <HiOutlinePhone /> },
];

/* ══════════════════════════════════════════════════════════════════════
   PARTICLES  — seeded so server & client produce identical markup
   We use a simple LCG so there's zero randomness on each hydration.
══════════════════════════════════════════════════════════════════════ */
const PARTICLE_COUNT = 22;

function lcg(seed) {
    // returns a fn that yields the next pseudo-random float [0,1)
    let s = seed;
    return () => {
        s = (s * 1664525 + 1013904223) & 0xffffffff;
        return (s >>> 0) / 0x100000000;
    };
}

function mkParticles() {
    const rng = lcg(42); // fixed seed → same on server & client
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        x: rng() * 100,
        y: rng() * 100,
        size: rng() * 2.5 + 0.8,
        opacity: rng() * 0.35 + 0.08,
        duration: rng() * 9 + 6,
        delay: rng() * 5,
        driftX: rng() * 24 - 12,
    }));
}

/* Pre-compute once at module level — identical on server & client */
const PARTICLES = mkParticles();

/* ══════════════════════════════════════════════════════════════════════
   FRAMER MOTION VARIANTS
══════════════════════════════════════════════════════════════════════ */
const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.45 } },
};
const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40, skewY: 1.2 },
    show: {
        opacity: 1, y: 0, skewY: 0,
        transition: { duration: 1.35, ease: T.ease, delay },
    },
});
const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 22 },
    show: {
        opacity: 1, y: 0,
        transition: { duration: 1.1, ease: T.ease, delay },
    },
});
const popIn = {
    hidden: { opacity: 0, scale: 0.88 },
    show: {
        opacity: 1, scale: 1,
        transition: { duration: 0.72, ease: T.ease },
    },
};

/* ══════════════════════════════════════════════════════════════════════
   MAGNETIC HOOK  (no-op on touch)
══════════════════════════════════════════════════════════════════════ */
function useMagnetic(s = 0.3) {
    const ref = useRef(null);
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const sx = useSpring(mx, { stiffness: 180, damping: 18 });
    const sy = useSpring(my, { stiffness: 180, damping: 18 });

    const onMove = useCallback((e) => {
        if (!ref.current) return;
        if (window.matchMedia("(pointer:coarse)").matches) return;
        const r = ref.current.getBoundingClientRect();
        mx.set((e.clientX - (r.left + r.width / 2)) * s);
        my.set((e.clientY - (r.top + r.height / 2)) * s);
    }, [mx, my, s]);

    const onLeave = useCallback(() => { mx.set(0); my.set(0); }, [mx, my]);
    return { ref, sx, sy, onMove, onLeave };
}

/* ══════════════════════════════════════════════════════════════════════
   SUB-COMPONENTS
══════════════════════════════════════════════════════════════════════ */

const GoldRule = ({ w = 22 }) => (
    <span style={{
        display: "inline-block", flexShrink: 0,
        width: w, height: 1, background: "rgba(201,168,76,0.7)",
    }} />
);

const Eyebrow = ({ children }) => (
    <div style={{
        display: "flex", alignItems: "center", gap: 10,
        marginBottom: "clamp(14px,3vw,22px)",
    }}>
        <GoldRule />
        <span style={{
            fontFamily: "'Outfit',sans-serif", fontWeight: 300,
            fontSize: "clamp(8px,2.2vw,11px)", letterSpacing: "0.28em",
            textTransform: "uppercase", color: "rgba(201,168,76,0.82)",
            whiteSpace: "nowrap",
        }}>{children}</span>
    </div>
);

function Particles() {
    return (
        <div style={{
            position: "absolute", inset: 0,
            pointerEvents: "none", zIndex: 9, overflow: "hidden",
        }}>
            {PARTICLES.map(p => (
                <motion.div key={p.id}
                    style={{
                        position: "absolute",
                        left: `${p.x}%`, top: `${p.y}%`,
                        width: p.size, height: p.size, borderRadius: "50%",
                        background: `radial-gradient(circle,rgba(201,168,76,${p.opacity}) 0%,transparent 70%)`,
                    }}
                    animate={{
                        y: [0, -38, 0], x: [0, p.driftX, 0],
                        opacity: [p.opacity * 0.35, p.opacity, p.opacity * 0.28],
                        scale: [1, 1.7, 1],
                    }}
                    transition={{ repeat: Infinity, duration: p.duration, delay: p.delay, ease: "easeInOut" }}
                />
            ))}
        </div>
    );
}

function Stat({ value, label }) {
    return (
        <div style={{
            flex: "1 1 0", minWidth: 0,
            display: "flex", flexDirection: "column", alignItems: "center",
            padding: "clamp(8px,2vw,12px) clamp(6px,1.5vw,10px)",
            borderRadius: 10,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(201,168,76,0.15)",
            backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
        }}>
            <span style={{
                fontFamily: "'Cormorant Garamond',serif", fontWeight: 300,
                fontSize: "clamp(18px,4.5vw,28px)", color: T.gold, lineHeight: 1,
            }}>{value}</span>
            <span style={{
                fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                fontSize: "clamp(7px,1.8vw,10px)", letterSpacing: "0.18em",
                textTransform: "uppercase", color: "rgba(245,240,232,0.42)",
                marginTop: 3, whiteSpace: "nowrap",
            }}>{label}</span>
        </div>
    );
}

function Shimmer() {
    return (
        <motion.span style={{
            position: "absolute", inset: 0, borderRadius: 99,
            background: "linear-gradient(105deg,transparent 20%,rgba(255,255,255,0.26) 50%,transparent 80%)",
            backgroundSize: "300% 100%",
        }}
            animate={{ backgroundPosition: ["220% center", "-220% center"] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "linear", repeatDelay: 0.8 }}
        />
    );
}

function BookBtn() {
    const { ref, sx, sy, onMove, onLeave } = useMagnetic(0.28);
    return (
        <motion.button ref={ref} variants={popIn}
            style={{
                x: sx, y: sy,
                position: "relative", overflow: "hidden",
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: 10, width: "100%",
                padding: "clamp(13px,2.5vw,16px) 24px",
                borderRadius: 99,
                background: `linear-gradient(135deg,${T.gold} 0%,${T.goldDk} 100%)`,
                color: T.charcoal, border: "none",
                fontFamily: "'Outfit',sans-serif", fontWeight: 500,
                fontSize: "clamp(10px,2.6vw,13px)", letterSpacing: "0.18em",
                textTransform: "uppercase",
                boxShadow: "0 8px 38px rgba(201,168,76,0.3)",
                cursor: "pointer",
            }}
            onMouseMove={onMove} onMouseLeave={onLeave}
            whileTap={{ scale: 0.96 }}
            whileHover={{ boxShadow: "0 12px 52px rgba(201,168,76,0.52)" }}
            aria-label="Book your tour"
        >
            <Shimmer />
            <span style={{ position: "relative", zIndex: 1 }}>Book Now</span>
            <motion.span style={{ position: "relative", zIndex: 1 }}
                whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 320 }}>
                <FiArrowRight size={14} strokeWidth={2.5} />
            </motion.span>
        </motion.button>
    );
}

function GlassBtn({ children, borderClr = "rgba(255,255,255,0.13)",
    textClr = "rgba(245,240,232,0.82)", ariaLabel, href }) {
    const { ref, sx, sy, onMove, onLeave } = useMagnetic(0.28);
    const Tag = href ? motion.a : motion.button;
    return (
        <Tag ref={ref} variants={popIn} href={href}
            style={{
                x: sx, y: sy,
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: 7, flex: "1 1 0", minWidth: 0,
                padding: "clamp(12px,2.3vw,15px) clamp(10px,2vw,16px)",
                borderRadius: 99,
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)",
                border: `1px solid ${borderClr}`,
                color: textClr,
                fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                fontSize: "clamp(9px,2.4vw,12px)", letterSpacing: "0.14em",
                textTransform: "uppercase", cursor: "pointer",
                textDecoration: "none",
            }}
            onMouseMove={onMove} onMouseLeave={onLeave}
            whileTap={{ scale: 0.96 }}
            whileHover={{ background: "rgba(255,255,255,0.09)" }}
            aria-label={ariaLabel}
        >{children}</Tag>
    );
}

function ScrollDot() {
    return (
        <motion.div style={{
            position: "absolute", bottom: "clamp(80px,11vw,36px)", left: "50%",
            translateX: "-50%",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
            zIndex: 30, pointerEvents: "none",
        }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 1 }}
        >
            <span style={{
                fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                fontSize: 8, letterSpacing: "0.34em", textTransform: "uppercase",
                color: "rgba(201,168,76,0.55)",
            }}>Scroll</span>
            <motion.div style={{
                width: 1, height: 38,
                background: "linear-gradient(to bottom,transparent,rgba(201,168,76,0.8),transparent)",
            }}
                animate={{ scaleY: [0.2, 1, 0.2], opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 2.3, ease: "easeInOut" }}
            />
            <motion.div animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
                <FiChevronDown size={11} color="rgba(201,168,76,0.55)" />
            </motion.div>
        </motion.div>
    );
}

function Corners() {
    const b = "1px solid rgba(201,168,76,0.26)";
    const c = (extra) => ({
        position: "absolute", width: 24, height: 24,
        pointerEvents: "none", zIndex: 30, ...extra,
    });
    return (
        <motion.div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 1.3 }}>
            <div style={c({ top: 14, left: 14, borderTop: b, borderLeft: b })} />
            <div style={c({ top: 14, right: 14, borderTop: b, borderRight: b })} />
            <div style={c({ bottom: 14, right: 14, borderBottom: b, borderRight: b })} />
            <div style={c({ bottom: 14, left: 14, borderBottom: b, borderLeft: b })} />
        </motion.div>
    );
}

const WA = () => (
    <svg width={13} height={13} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

/* Custom cursor — fine-pointer only, rendered client-side */
function CustomCursor() {
    const mx = useMotionValue(-200);
    const my = useMotionValue(-200);
    const sx = useSpring(mx, { stiffness: 720, damping: 42 });
    const sy = useSpring(my, { stiffness: 720, damping: 42 });
    const lx = useSpring(mx, { stiffness: 140, damping: 20 });
    const ly = useSpring(my, { stiffness: 140, damping: 20 });

    useEffect(() => {
        if (window.matchMedia("(pointer:coarse)").matches) return;
        const h = (e) => { mx.set(e.clientX); my.set(e.clientY); };
        window.addEventListener("mousemove", h);
        return () => window.removeEventListener("mousemove", h);
    }, [mx, my]);

    return (
        <>
            <motion.div style={{
                position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 9999,
                width: 8, height: 8, borderRadius: "50%", background: T.gold,
                x: sx, y: sy, translateX: "-50%", translateY: "-50%",
            }} />
            <motion.div style={{
                position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 9998,
                width: 34, height: 34, borderRadius: "50%",
                border: "1px solid rgba(201,168,76,0.36)",
                x: lx, y: ly, translateX: "-50%", translateY: "-50%",
            }} />
        </>
    );
}

/* ══════════════════════════════════════════════════════════════════════
   DESKTOP TOP NAVBAR  — luxury glass bar
══════════════════════════════════════════════════════════════════════ */
function DesktopNav({ activeItem, setActive }) {
    return (
        <motion.header
            style={{
                position: "absolute", top: 0, left: 0, right: 0, zIndex: 50,
                padding: "clamp(12px,2.5vw,24px) clamp(16px,4vw,48px)",
            }}
            initial={{ opacity: 0, y: -28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: T.ease }}
        >
            {/* Ambient glow behind bar */}
            <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to bottom,rgba(201,168,76,0.06),transparent)",
                pointerEvents: "none", filter: "blur(24px)",
            }} />

            <div style={{
                position: "relative",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                height: 72,
                borderRadius: 30,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(14,13,11,0.35)",
                backdropFilter: "blur(28px)", WebkitBackdropFilter: "blur(28px)",
                padding: "0 clamp(16px,3vw,32px)",
            }}>

                {/* ── Logo ── */}
                <div style={{ position: "relative" }}>
                    <div style={{
                        position: "absolute", inset: -20, borderRadius: "50%",
                        background: "rgba(201,168,76,0.15)", filter: "blur(28px)",
                        pointerEvents: "none",
                    }} />
                    <div style={{ position: "relative" }}>
                        <h1 style={{
                            fontFamily: "'Cormorant Garamond',serif", fontWeight: 600,
                            fontSize: "clamp(14px,2vw,20px)", color: T.ivory,
                            letterSpacing: "0.04em", margin: 0, lineHeight: 1.1,
                        }}>Shree Swami Samartha</h1>
                        <p style={{
                            fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                            fontSize: "clamp(7px,0.9vw,9px)", letterSpacing: "0.45em",
                            textTransform: "uppercase", color: T.gold,
                            margin: "2px 0 0", lineHeight: 1,
                        }}>Tours &amp; Travels</p>
                    </div>
                </div>

                {/* ── Nav links ── */}
                <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    {NAV_ITEMS.map((item, i) => (
                        <motion.a
                            key={i}
                            href={item.href}
                            onClick={() => setActive(item.name)}
                            style={{
                                position: "relative", overflow: "hidden",
                                display: "flex", alignItems: "center", gap: 8,
                                padding: "10px 18px", borderRadius: 99,
                                border: "1px solid transparent",
                                textDecoration: "none", cursor: "pointer",
                                fontFamily: "'Outfit',sans-serif", fontWeight: 400,
                                fontSize: "clamp(9px,1.1vw,12px)", letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                color: activeItem === item.name
                                    ? T.gold
                                    : "rgba(245,240,232,0.6)",
                                transition: "color 0.4s",
                            }}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            animate={activeItem === item.name ? {
                                borderColor: "rgba(201,168,76,0.2)",
                                background: "rgba(255,255,255,0.04)",
                            } : {
                                borderColor: "transparent",
                                background: "transparent",
                            }}
                            transition={{ duration: 0.35 }}
                        >
                            {/* Hover glow */}
                            <motion.div style={{
                                position: "absolute", inset: 0, borderRadius: 99,
                                background: "rgba(201,168,76,0)",
                                filter: "blur(18px)",
                            }}
                                whileHover={{ background: "rgba(201,168,76,0.08)" }}
                                transition={{ duration: 0.4 }}
                            />

                            {/* Icon */}
                            <span style={{
                                position: "relative", fontSize: 15,
                                color: activeItem === item.name
                                    ? T.gold
                                    : "rgba(245,240,232,0.45)",
                                transition: "color 0.4s",
                                display: "flex", alignItems: "center",
                            }}>
                                {item.icon}
                            </span>

                            {/* Label */}
                            <span style={{ position: "relative" }}>{item.name}</span>

                            {/* Bottom underline */}
                            <motion.span style={{
                                position: "absolute", bottom: 0, left: "50%",
                                height: 2, borderRadius: 99,
                                background: `linear-gradient(90deg,${T.goldDk},${T.gold})`,
                                translateX: "-50%",
                            }}
                                animate={{ width: activeItem === item.name ? "55%" : "0%" }}
                                transition={{ duration: 0.4, ease: T.ease }}
                            />
                        </motion.a>
                    ))}
                </nav>

                {/* ── CTA ── */}
                <motion.button
                    style={{
                        position: "relative", overflow: "hidden",
                        display: "flex", alignItems: "center", gap: 8,
                        padding: "11px 24px", borderRadius: 99,
                        background: `linear-gradient(135deg,${T.gold},${T.goldDk})`,
                        border: "none", cursor: "pointer",
                        fontFamily: "'Outfit',sans-serif", fontWeight: 500,
                        fontSize: "clamp(9px,1.1vw,12px)", letterSpacing: "0.18em",
                        textTransform: "uppercase", color: T.charcoal,
                        boxShadow: "0 6px 30px rgba(201,168,76,0.28)",
                    }}
                    whileHover={{ scale: 1.04, boxShadow: "0 10px 44px rgba(201,168,76,0.48)" }}
                    whileTap={{ scale: 0.96 }}
                >
                    <Shimmer />
                    <span style={{ position: "relative", zIndex: 1 }}>Book Now</span>
                    <FiArrowRight size={12} strokeWidth={2.5} style={{ position: "relative", zIndex: 1 }} />
                </motion.button>
            </div>
        </motion.header>
    );
}

/* ══════════════════════════════════════════════════════════════════════
   MOBILE MENU OVERLAY (hamburger → full screen on mobile)
══════════════════════════════════════════════════════════════════════ */
function MobileMenuOverlay({ open, onClose, activeItem, setActive }) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: "fixed", inset: 0, zIndex: 200,
                        background: "rgba(14,13,11,0.96)",
                        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
                        display: "flex", flexDirection: "column",
                        alignItems: "center", justifyContent: "center", gap: 8,
                    }}
                >
                    {/* Close */}
                    <motion.button
                        onClick={onClose}
                        style={{
                            position: "absolute", top: 24, right: 24,
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(201,168,76,0.2)",
                            borderRadius: "50%", width: 44, height: 44,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            color: T.gold, cursor: "pointer",
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FiX size={18} />
                    </motion.button>

                    {/* Logo inside overlay */}
                    <div style={{ marginBottom: 32, textAlign: "center" }}>
                        <h2 style={{
                            fontFamily: "'Cormorant Garamond',serif", fontWeight: 400,
                            fontSize: 26, color: T.ivory, letterSpacing: "0.04em",
                            margin: 0, lineHeight: 1.1,
                        }}>Shree Swami Samartha</h2>
                        <p style={{
                            fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                            fontSize: 8, letterSpacing: "0.45em",
                            textTransform: "uppercase", color: T.gold, margin: "4px 0 0",
                        }}>Tours &amp; Travels</p>
                    </div>

                    {/* Gold divider */}
                    <div style={{
                        width: 48, height: 1,
                        background: `linear-gradient(90deg,transparent,${T.gold},transparent)`,
                        marginBottom: 24,
                    }} />

                    {NAV_ITEMS.map((item, i) => (
                        <motion.a
                            key={i}
                            href={item.href}
                            onClick={() => { setActive(item.name); onClose(); }}
                            initial={{ opacity: 0, x: -24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.07 + 0.1, ease: T.ease }}
                            style={{
                                display: "flex", alignItems: "center", gap: 16,
                                padding: "14px 32px", borderRadius: 14, width: "80%", maxWidth: 280,
                                background: activeItem === item.name
                                    ? "rgba(201,168,76,0.1)" : "transparent",
                                border: `1px solid ${activeItem === item.name
                                    ? "rgba(201,168,76,0.25)" : "rgba(255,255,255,0.05)"}`,
                                textDecoration: "none", cursor: "pointer",
                                color: activeItem === item.name
                                    ? T.gold : "rgba(245,240,232,0.7)",
                                fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                                fontSize: 14, letterSpacing: "0.18em",
                                textTransform: "uppercase",
                            }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <span style={{ fontSize: 20, display: "flex" }}>{item.icon}</span>
                            {item.name}
                        </motion.a>
                    ))}

                    <motion.button
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        style={{
                            marginTop: 28,
                            display: "flex", alignItems: "center", gap: 10,
                            padding: "14px 36px", borderRadius: 99,
                            background: `linear-gradient(135deg,${T.gold},${T.goldDk})`,
                            border: "none", cursor: "pointer",
                            fontFamily: "'Outfit',sans-serif", fontWeight: 500,
                            fontSize: 12, letterSpacing: "0.2em",
                            textTransform: "uppercase", color: T.charcoal,
                            boxShadow: "0 8px 30px rgba(201,168,76,0.35)",
                        }}
                        whileTap={{ scale: 0.96 }}
                    >
                        Book Now <FiArrowRight size={13} strokeWidth={2.5} />
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ══════════════════════════════════════════════════════════════════════
   MAIN HERO EXPORT
══════════════════════════════════════════════════════════════════════ */
export default function Hero() {

    const heroRef = useRef(null);
    const videoWrapRef = useRef(null);
    const videoRef = useRef(null);
    const contentRef = useRef(null);
    const overlayRef = useRef(null);
    const glowRef = useRef(null);
    const leakRef = useRef(null);

    /* ── Client-only state: no mismatch with SSR ── */
    const [mounted, setMounted] = useState(false);
    const [videoReady, setVR] = useState(false);
    const [isCoarse, setIC] = useState(false);        // default false matches server render
    const [activeItem, setActive] = useState("Home");
    const [mobileMenuOpen, setMobileMenu] = useState(false);

    /* Set client-only state AFTER mount to avoid hydration mismatch */
    useEffect(() => {
        setMounted(true);
        setIC(window.matchMedia("(pointer:coarse)").matches);
    }, []);

    const onCanPlay = useCallback(() => {
        setVR(true);
        videoRef.current?.play().catch(() => { });
    }, []);

    /* ── GSAP SCROLL ── */
    useEffect(() => {
        if (!mounted) return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                gsap.to(videoWrapRef.current, {
                    scale: 1.16, y: "7%", ease: "none",
                    scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1.6 },
                });
                gsap.to(contentRef.current, {
                    y: "-20%", opacity: 0.08, ease: "none",
                    scrollTrigger: { trigger: heroRef.current, start: "top top", end: "75% top", scrub: 1.3 },
                });
                gsap.to(overlayRef.current, {
                    opacity: 0.95, ease: "none",
                    scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
                });
                gsap.to(glowRef.current, {
                    scale: 1.7, opacity: 0.36, ease: "none",
                    scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 2.2 },
                });
                gsap.to(leakRef.current, {
                    x: "18%", opacity: 0.1, ease: "none",
                    scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1.9 },
                });
                gsap.to(glowRef.current, {
                    y: "+=16", duration: 5.5, ease: "sine.inOut", yoyo: true, repeat: -1,
                });
            });

            mm.add("(max-width: 767px)", () => {
                gsap.to(videoWrapRef.current, {
                    scale: 1.06, y: "3%", ease: "none",
                    scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 2.5 },
                });
                gsap.to(contentRef.current, {
                    y: "-8%", opacity: 0.15, ease: "none",
                    scrollTrigger: { trigger: heroRef.current, start: "top top", end: "80% top", scrub: 1.8 },
                });
                gsap.to(overlayRef.current, {
                    opacity: 0.9, ease: "none",
                    scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
                });
            });
        }, heroRef);

        return () => ctx.revert();
    }, [mounted]);

    /* ════════════════════════════════════════════════════════
       RENDER
    ════════════════════════════════════════════════════════ */
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Outfit:wght@200;300;400;500&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        html { scroll-behavior:smooth; }
        body {
          background:#0e0d0b; color:#f5f0e8;
          -webkit-font-smoothing:antialiased;
          -moz-osx-font-smoothing:grayscale;
          overflow-x:hidden;
        }
        ::-webkit-scrollbar       { width:3px; }
        ::-webkit-scrollbar-track { background:#0e0d0b; }
        ::-webkit-scrollbar-thumb { background:rgba(201,168,76,.32); border-radius:99px; }
        ::selection               { background:rgba(201,168,76,.2); color:#f5f0e8; }
        button { -webkit-tap-highlight-color:transparent; }

        /* Film grain */
        .vg-hero::after {
          content:'';
          position:absolute; inset:0;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          opacity:.023; pointer-events:none; z-index:24; mix-blend-mode:overlay;
        }

        /* Hide desktop nav on mobile, show mobile dock on mobile */
        .sss-desktop-nav { display:none; }
        .sss-mobile-top  { display:flex; }
        @media (min-width:1024px) {
          .sss-desktop-nav { display:block; }
          .sss-mobile-top  { display:none; }
        }


      `}</style>

            {/* Custom cursor — only mounted client-side, no SSR */}
            {mounted && !isCoarse && <CustomCursor />}

            {/* Mobile fullscreen menu */}
            {mounted && (
                <MobileMenuOverlay
                    open={mobileMenuOpen}
                    onClose={() => setMobileMenu(false)}
                    activeItem={activeItem}
                    setActive={setActive}
                />
            )}

            {/* ═══════════════════ HERO ═══════════════════ */}
            <section ref={heroRef} id="home" className="vg-hero"
                style={{
                    position: "relative", width: "100%",
                    height: "100svh", minHeight: 580, maxHeight: 1000,
                    overflow: "hidden", background: T.charcoal,
                }}
                aria-label="Shree Swami Samartha Tours & Travels"
            >

                {/* ── VIDEO ── */}
                <div ref={videoWrapRef} style={{
                    position: "absolute", inset: "-8%", zIndex: 1,
                    transformOrigin: "center center", willChange: "transform",
                }}>
                    <video ref={videoRef}
                        src="/videos/travel.mp4"
                        autoPlay muted loop playsInline preload="metadata"
                        onCanPlay={onCanPlay}
                        style={{
                            position: "absolute", inset: 0, width: "100%", height: "100%",
                            objectFit: "cover",
                            opacity: videoReady ? 1 : 0,
                            transition: "opacity 2.8s ease",
                            willChange: "transform",
                        }}
                    />
                    {!videoReady && (
                        <div style={{
                            position: "absolute", inset: 0,
                            background: "radial-gradient(ellipse at 35% 55%,#1c1200 0%,#0e0d0b 65%)",
                        }} />
                    )}
                </div>

                {/* ── OVERLAYS ── */}
                <div ref={overlayRef} style={{
                    position: "absolute", inset: 0, zIndex: 2, opacity: .78,
                    pointerEvents: "none",
                    background: [
                        "linear-gradient(90deg,rgba(14,13,11,.92) 0%,rgba(14,13,11,.55) 52%,rgba(14,13,11,.28) 100%)",
                        "linear-gradient(180deg,rgba(14,13,11,.65) 0%,rgba(14,13,11,.0) 36%,rgba(14,13,11,.0) 54%,rgba(14,13,11,1) 100%)",
                    ].join(", "),
                }} />

                {/* ── GOLDEN GLOW ── */}
                <div ref={glowRef} style={{
                    position: "absolute", zIndex: 3, pointerEvents: "none",
                    width: "80vmax", height: "80vmax",
                    top: "50%", left: "30%", transform: "translate(-50%,-62%)",
                    background: "radial-gradient(ellipse,rgba(201,168,76,.17) 0%,rgba(180,100,20,.06) 48%,transparent 70%)",
                    filter: "blur(50px)", willChange: "transform",
                }} />

                {/* ── LIGHT LEAK ── */}
                <div ref={leakRef} style={{
                    position: "absolute", zIndex: 4, pointerEvents: "none",
                    width: "55vw", height: "100%", top: 0, left: "-8%",
                    background: "linear-gradient(108deg,rgba(201,168,76,.07) 0%,transparent 55%)",
                    filter: "blur(28px)",
                }} />

                {/* ── BOTTOM VIGNETTE ── */}
                <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 5,
                    height: "44%", pointerEvents: "none",
                    background: "linear-gradient(to top,rgba(14,13,11,1) 0%,rgba(14,13,11,.72) 36%,transparent 100%)",
                }} />

                {/* ── TOP VIGNETTE ── */}
                <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, zIndex: 5,
                    height: "22%", pointerEvents: "none",
                    background: "linear-gradient(to bottom,rgba(14,13,11,.8) 0%,transparent 100%)",
                }} />

                {/* ── PARTICLES (desktop fine-pointer only, client-side) ── */}
                {mounted && !isCoarse && <Particles />}

                {/* ══════════════════════════════════════════
                    DESKTOP TOP NAVBAR (lg and up)
                ══════════════════════════════════════════ */}
                <div className="sss-desktop-nav" style={{ position: "absolute", inset: 0, zIndex: 50, pointerEvents: "none" }}>
                    <div style={{ pointerEvents: "auto" }}>
                        <DesktopNav activeItem={activeItem} setActive={setActive} />
                    </div>
                </div>

                {/* ══════════════════════════════════════════
                    MOBILE TOP BAR (logo + hamburger)
                ══════════════════════════════════════════ */}
                <motion.div
                    className="sss-mobile-top"
                    style={{
                        position: "absolute", top: 0, left: 0, right: 0, zIndex: 50,
                        alignItems: "center", justifyContent: "space-between",
                        padding: "18px 20px",
                    }}
                    initial={{ opacity: 0, y: -18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: T.ease }}
                >
                    {/* Logo */}
                    <div>
                        <h1 style={{
                            fontFamily: "'Cormorant Garamond',serif", fontWeight: 600,
                            fontSize: 17, color: T.ivory,
                            letterSpacing: "0.03em", margin: 0, lineHeight: 1.15,
                        }}>Shree Swami Samartha</h1>
                        <p style={{
                            fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                            fontSize: 7, letterSpacing: "0.44em",
                            textTransform: "uppercase", color: T.gold,
                            margin: "2px 0 0",
                        }}>Tours &amp; Travels</p>
                    </div>

                    {/* Hamburger */}
                    <motion.button
                        onClick={() => setMobileMenu(true)}
                        style={{
                            display: "flex", flexDirection: "column", gap: 5,
                            background: "rgba(14,13,11,0.4)",
                            border: "1px solid rgba(201,168,76,0.2)",
                            borderRadius: 12, padding: "10px 12px",
                            cursor: "pointer",
                        }}
                        whileTap={{ scale: 0.92 }}
                        aria-label="Open menu"
                    >
                        {[0, 1, 2].map(i => (
                            <span key={i} style={{
                                display: "block", height: 1, borderRadius: 99,
                                background: "rgba(201,168,76,0.75)",
                                width: i === 1 ? 14 : 20,
                                transformOrigin: "left",
                            }} />
                        ))}
                    </motion.button>
                </motion.div>

                {/* ══════════════════════════════════════════
                    MAIN CONTENT — BOTTOM-ANCHORED
                    Mobile: extra bottom padding for dock
                ══════════════════════════════════════════ */}
                <div ref={contentRef} style={{
                    position: "absolute", inset: 0, zIndex: 20,
                    display: "flex", flexDirection: "column", justifyContent: "flex-end",
                    willChange: "transform",
                    /* bottom padding:
                       - mobile: 110px (scroll dot 36 + dock ~74)
                       - desktop: 90px (scroll dot only)
                    */
                    padding: "80px clamp(16px,5vw,72px) clamp(110px,14vw,90px)",
                }}>
                    <motion.div
                        style={{ width: "100%", maxWidth: 680 }}
                        variants={stagger}
                        initial="hidden"
                        animate="show"
                    >

                        {/* Eyebrow */}
                        <motion.div variants={fadeIn(0)}>
                            <Eyebrow>Maharashtra's Premier Luxury Fleet</Eyebrow>
                        </motion.div>

                        {/* H1 line 1 */}
                        <div style={{ overflow: "hidden", marginBottom: "clamp(0px,0.8vw,5px)" }}>
                            <motion.h1 variants={fadeUp(0.08)}
                                style={{
                                    fontFamily: "'Cormorant Garamond',serif",
                                    fontWeight: 300, lineHeight: 0.93,
                                    letterSpacing: "-0.025em",
                                    fontSize: "clamp(42px,10vw,118px)",
                                    color: "rgba(245,240,232,.97)",
                                    margin: 0,
                                }}
                            >Luxury Travel</motion.h1>
                        </div>

                        {/* H1 line 2 — gold italic */}
                        <div style={{ overflow: "hidden", marginBottom: "clamp(12px,2.5vw,22px)" }}>
                            <motion.div variants={fadeUp(0.16)}>
                                <span style={{
                                    fontFamily: "'Cormorant Garamond',serif",
                                    fontStyle: "italic", fontWeight: 300,
                                    lineHeight: 0.93, letterSpacing: "-0.025em",
                                    fontSize: "clamp(42px,10vw,118px)",
                                    background: `linear-gradient(135deg,${T.gold} 0%,${T.goldLt} 42%,${T.goldDk} 72%,${T.gold} 100%)`,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    display: "inline-block",
                                }}>Redefined.</span>
                            </motion.div>
                        </div>

                        {/* Location accent */}
                        <motion.div variants={fadeIn(0.26)}
                            style={{
                                display: "flex", alignItems: "center", gap: 10,
                                marginBottom: "clamp(10px,2.2vw,18px)",
                            }}>
                            <span style={{
                                fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                                fontSize: "clamp(8px,2vw,12px)", letterSpacing: "0.22em",
                                textTransform: "uppercase", color: "rgba(201,168,76,.56)",
                            }}>Across Maharashtra</span>
                            <GoldRule w={36} />
                        </motion.div>

                        {/* Body copy */}
                        <motion.p variants={fadeIn(0.32)}
                            style={{
                                fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                                fontSize: "clamp(11px,1.9vw,15px)", lineHeight: 1.72,
                                letterSpacing: "0.016em",
                                color: "rgba(245,240,232,.48)",
                                maxWidth: "min(100%,460px)",
                                marginBottom: "clamp(20px,3.5vw,32px)",
                            }}
                        >
                            Experience the raw magnificence of Maharashtra through our curated
                            fleet of Force Travellers — where every journey becomes a cinematic
                            memory etched in golden light and sacred silence.
                        </motion.p>

                        {/* ── BUTTONS ── */}
                        <motion.div variants={fadeIn(0.4)}
                            style={{
                                display: "flex", flexDirection: "column",
                                gap: "clamp(9px,1.8vw,12px)",
                                marginBottom: "clamp(18px,3.5vw,30px)",
                                width: "100%",
                            }}
                        >
                            <motion.div variants={stagger} style={{ width: "100%" }}>
                                <BookBtn />
                            </motion.div>

                            <motion.div variants={stagger}
                                style={{ display: "flex", gap: "clamp(8px,1.8vw,12px)", width: "100%" }}>
                                <GlassBtn
                                    borderClr="rgba(255,255,255,0.13)"
                                    textClr="rgba(245,240,232,0.8)"
                                    ariaLabel="Contact on WhatsApp"
                                >
                                    <WA /><span>WhatsApp</span>
                                </GlassBtn>
                                <GlassBtn
                                    href="#services"
                                    borderClr="rgba(201,168,76,0.22)"
                                    textClr="rgba(201,168,76,0.85)"
                                    ariaLabel="Explore tours"
                                >
                                    <FiCompass size={13} /><span>Explore</span>
                                </GlassBtn>
                            </motion.div>
                        </motion.div>

                        {/* ── STATS BAR ── */}
                        <motion.div variants={fadeIn(0.5)}
                            style={{ display: "flex", gap: "clamp(6px,1.6vw,12px)", width: "100%" }}>
                            <Stat value="500+" label="Tours Done" />
                            <div style={{ width: 1, background: "rgba(201,168,76,.15)", alignSelf: "stretch" }} />
                            <Stat value="4.9★" label="Rated Luxury" />
                            <div style={{ width: 1, background: "rgba(201,168,76,.15)", alignSelf: "stretch" }} />
                            <Stat value="12+" label="Destinations" />
                        </motion.div>

                    </motion.div>
                </div>

                {/* ── FLOATING SIDE LABEL (desktop only) ── */}
                <motion.div
                    style={{
                        position: "absolute", right: 22, top: "50%",
                        translateY: "-50%", zIndex: 30,
                        flexDirection: "column", alignItems: "center", gap: 14,
                        pointerEvents: "none",
                        display: "none",   /* handled by CSS below */
                    }}
                    className="sss-desktop-nav"
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.2, duration: 1.2, ease: T.ease }}
                >
                    <div style={{
                        width: 1, height: 50,
                        background: "linear-gradient(to bottom,transparent,rgba(201,168,76,.35))",
                    }} />
                    <span style={{
                        writingMode: "vertical-rl", transform: "rotate(180deg)",
                        fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                        fontSize: 7.5, letterSpacing: "0.34em", textTransform: "uppercase",
                        color: "rgba(201,168,76,.38)",
                    }}>Since 2014 · Maharashtra</span>
                    <div style={{
                        width: 1, height: 50,
                        background: "linear-gradient(to top,transparent,rgba(201,168,76,.35))",
                    }} />
                </motion.div>

                {/* ── SCROLL INDICATOR ──
                <ScrollDot /> */}

                {/* ── CORNER BRACKETS ── */}
                <Corners />

            </section>

        </>
    );
}