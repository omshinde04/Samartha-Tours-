"use client";

/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  SHREE SWAMI SAMARTHA TOURS & TRAVELS                          ║
 * ║  Navbar.jsx — Standalone · Desktop + Mobile · Luxury Glass     ║
 * ║  Stack: Next.js App Router · Framer Motion · react-icons       ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 * Place at:  app/components/Navbar.jsx
 * Use in:    app/layout.jsx  OR  app/page.jsx  →  <Navbar />
 *
 * npm install framer-motion react-icons
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiX } from "react-icons/fi";
import {
    HiOutlineHome,
    HiOutlineUser,
    HiOutlineBriefcase,
    HiOutlinePhotograph,
    HiOutlinePhone,
} from "react-icons/hi";

/* ══════════════════════════════════════════════════════════════════════
   DESIGN TOKENS  (keep in sync with Hero.jsx)
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
   NAV ITEMS  — single source of truth
══════════════════════════════════════════════════════════════════════ */
export const NAV_ITEMS = [
    { name: "Home", href: "/", icon: <HiOutlineHome /> },
    { name: "About", href: "/about", icon: <HiOutlineUser /> },
    { name: "Services", href: "/services", icon: <HiOutlineBriefcase /> },
    { name: "Gallery", href: "/gallery", icon: <HiOutlinePhotograph /> },
    { name: "Contact", href: "/contact", icon: <HiOutlinePhone /> },
];

/* ══════════════════════════════════════════════════════════════════════
   SHIMMER — reusable sweep animation for CTA buttons
══════════════════════════════════════════════════════════════════════ */
function Shimmer() {
    return (
        <motion.span
            style={{
                position: "absolute", inset: 0, borderRadius: 99,
                background:
                    "linear-gradient(105deg,transparent 20%,rgba(255,255,255,0.26) 50%,transparent 80%)",
                backgroundSize: "300% 100%",
                pointerEvents: "none",
            }}
            animate={{ backgroundPosition: ["220% center", "-220% center"] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "linear", repeatDelay: 0.8 }}
        />
    );
}

/* ══════════════════════════════════════════════════════════════════════
   DESKTOP NAVBAR
   — luxury glassmorphism pill · fixed at top
══════════════════════════════════════════════════════════════════════ */
function DesktopNav({ activeItem, setActive }) {
    return (
        <motion.header
            style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
                padding: "clamp(10px,2vw,20px) clamp(16px,4vw,48px)",
                /* only visible on lg+ — CSS handles this via the class */
            }}
            className="sss-desktop-nav"
            initial={{ opacity: 0, y: -28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: T.ease }}
        >
            {/* Soft ambient glow behind bar */}
            <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to bottom,rgba(201,168,76,0.06),transparent)",
                pointerEvents: "none", filter: "blur(24px)",
            }} />

            <div style={{
                position: "relative",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                height: 68,
                borderRadius: 30,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(14,13,11,0.38)",
                backdropFilter: "blur(28px)", WebkitBackdropFilter: "blur(28px)",
                padding: "0 clamp(16px,3vw,32px)",
                boxShadow: "0 4px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}>

                {/* ── Logo ── */}
                <div style={{ position: "relative" }}>
                    {/* Logo glow halo */}
                    <div style={{
                        position: "absolute", inset: -24, borderRadius: "50%",
                        background: "rgba(201,168,76,0.12)", filter: "blur(28px)",
                        pointerEvents: "none",
                    }} />
                    <div style={{ position: "relative" }}>
                        <h1 style={{
                            fontFamily: "'Cormorant Garamond',serif", fontWeight: 600,
                            fontSize: "clamp(13px,1.8vw,19px)", color: T.ivory,
                            letterSpacing: "0.04em", margin: 0, lineHeight: 1.1,
                        }}>
                            Shree Swami Samartha
                        </h1>
                        <p style={{
                            fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                            fontSize: "clamp(6px,0.8vw,8px)", letterSpacing: "0.45em",
                            textTransform: "uppercase", color: T.gold,
                            margin: "2px 0 0", lineHeight: 1,
                        }}>
                            Tours &amp; Travels
                        </p>
                    </div>
                </div>

                {/* ── Nav links ── */}
                <nav style={{ display: "flex", alignItems: "center", gap: 2 }}>
                    {NAV_ITEMS.map((item, i) => (
                        <motion.a
                            key={i}
                            href={item.href}
                            onClick={() => setActive(item.name)}
                            style={{
                                position: "relative", overflow: "hidden",
                                display: "flex", alignItems: "center", gap: 7,
                                padding: "9px 16px", borderRadius: 99,
                                border: "1px solid transparent",
                                textDecoration: "none", cursor: "pointer",
                                fontFamily: "'Outfit',sans-serif", fontWeight: 400,
                                fontSize: "clamp(8px,1vw,11px)", letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                color: activeItem === item.name
                                    ? T.gold
                                    : "rgba(245,240,232,0.58)",
                                transition: "color 0.35s",
                            }}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            animate={activeItem === item.name
                                ? { borderColor: "rgba(201,168,76,0.22)", background: "rgba(255,255,255,0.04)" }
                                : { borderColor: "transparent", background: "transparent" }
                            }
                            transition={{ duration: 0.32 }}
                        >
                            {/* Hover radial glow */}
                            <motion.div style={{
                                position: "absolute", inset: 0, borderRadius: 99,
                                background: "rgba(201,168,76,0)", filter: "blur(16px)",
                            }}
                                whileHover={{ background: "rgba(201,168,76,0.09)" }}
                                transition={{ duration: 0.36 }}
                            />

                            {/* Icon */}
                            <span style={{
                                position: "relative", fontSize: 14,
                                color: activeItem === item.name
                                    ? T.gold : "rgba(245,240,232,0.42)",
                                transition: "color 0.35s",
                                display: "flex", alignItems: "center",
                            }}>
                                {item.icon}
                            </span>

                            {/* Label */}
                            <span style={{ position: "relative" }}>{item.name}</span>

                            {/* Active underline bar */}
                            <motion.span style={{
                                position: "absolute", bottom: 0, left: "50%",
                                height: 2, borderRadius: 99,
                                background: `linear-gradient(90deg,${T.goldDk},${T.gold})`,
                                translateX: "-50%",
                            }}
                                animate={{ width: activeItem === item.name ? "55%" : "0%" }}
                                transition={{ duration: 0.38, ease: T.ease }}
                            />
                        </motion.a>
                    ))}
                </nav>

                {/* ── Book Now CTA ── */}
                <motion.button
                    style={{
                        position: "relative", overflow: "hidden",
                        display: "flex", alignItems: "center", gap: 8,
                        padding: "10px 22px", borderRadius: 99,
                        background: `linear-gradient(135deg,${T.gold},${T.goldDk})`,
                        border: "none", cursor: "pointer",
                        fontFamily: "'Outfit',sans-serif", fontWeight: 500,
                        fontSize: "clamp(8px,1vw,11px)", letterSpacing: "0.18em",
                        textTransform: "uppercase", color: T.charcoal,
                        boxShadow: "0 6px 30px rgba(201,168,76,0.28)",
                    }}
                    whileHover={{ scale: 1.04, boxShadow: "0 10px 44px rgba(201,168,76,0.5)" }}
                    whileTap={{ scale: 0.96 }}
                    aria-label="Book your tour now"
                >
                    <Shimmer />
                    <span style={{ position: "relative", zIndex: 1 }}>Book Now</span>
                    <FiArrowRight
                        size={12} strokeWidth={2.5}
                        style={{ position: "relative", zIndex: 1 }}
                    />
                </motion.button>

            </div>
        </motion.header>
    );
}

/* ══════════════════════════════════════════════════════════════════════
   MOBILE TOP BAR
   — logo + hamburger · fixed at top
══════════════════════════════════════════════════════════════════════ */
function MobileTopBar({ onOpen }) {
    return (
        <motion.div
            className="sss-mobile-top"
            style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
                alignItems: "center", justifyContent: "space-between",
                padding: "16px 20px",
                background: "linear-gradient(to bottom,rgba(14,13,11,0.72),transparent)",
                backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
            }}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: T.ease }}
        >
            {/* Logo */}
            <div>
                <h1 style={{
                    fontFamily: "'Cormorant Garamond',serif", fontWeight: 600,
                    fontSize: 16, color: T.ivory,
                    letterSpacing: "0.03em", margin: 0, lineHeight: 1.15,
                }}>
                    Shree Swami Samartha
                </h1>
                <p style={{
                    fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                    fontSize: 7, letterSpacing: "0.44em",
                    textTransform: "uppercase", color: T.gold,
                    margin: "2px 0 0",
                }}>
                    Tours &amp; Travels
                </p>
            </div>

            {/* Hamburger button */}
            <motion.button
                onClick={onOpen}
                style={{
                    display: "flex", flexDirection: "column", gap: 5,
                    background: "rgba(14,13,11,0.45)",
                    border: "1px solid rgba(201,168,76,0.22)",
                    borderRadius: 12, padding: "10px 12px",
                    cursor: "pointer",
                }}
                whileTap={{ scale: 0.9 }}
                aria-label="Open navigation menu"
            >
                {[0, 1, 2].map(i => (
                    <span key={i} style={{
                        display: "block", height: 1, borderRadius: 99,
                        background: "rgba(201,168,76,0.78)",
                        width: i === 1 ? 14 : 20,
                        transformOrigin: "left",
                    }} />
                ))}
            </motion.button>
        </motion.div>
    );
}

/* ══════════════════════════════════════════════════════════════════════
   MOBILE FULLSCREEN MENU OVERLAY
══════════════════════════════════════════════════════════════════════ */
function MobileMenuOverlay({ open, onClose, activeItem, setActive }) {
    /* Lock body scroll when open */
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: T.ease }}
                    style={{
                        position: "fixed", inset: 0, zIndex: 200,
                        background: "rgba(14,13,11,0.97)",
                        backdropFilter: "blur(22px)", WebkitBackdropFilter: "blur(22px)",
                        display: "flex", flexDirection: "column",
                        alignItems: "center", justifyContent: "center", gap: 10,
                    }}
                >
                    {/* Close button */}
                    <motion.button
                        onClick={onClose}
                        style={{
                            position: "absolute", top: 22, right: 20,
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(201,168,76,0.22)",
                            borderRadius: "50%", width: 44, height: 44,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            color: T.gold, cursor: "pointer",
                        }}
                        whileTap={{ scale: 0.88 }}
                        aria-label="Close menu"
                    >
                        <FiX size={18} />
                    </motion.button>

                    {/* Logo inside overlay */}
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, ease: T.ease }}
                        style={{ marginBottom: 28, textAlign: "center" }}
                    >
                        <h2 style={{
                            fontFamily: "'Cormorant Garamond',serif", fontWeight: 400,
                            fontSize: 24, color: T.ivory,
                            letterSpacing: "0.04em", margin: 0, lineHeight: 1.1,
                        }}>
                            Shree Swami Samartha
                        </h2>
                        <p style={{
                            fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                            fontSize: 7.5, letterSpacing: "0.46em",
                            textTransform: "uppercase", color: T.gold,
                            margin: "5px 0 0",
                        }}>
                            Tours &amp; Travels
                        </p>
                    </motion.div>

                    {/* Gold divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.18, duration: 0.55, ease: T.ease }}
                        style={{
                            width: 52, height: 1, marginBottom: 20,
                            background: `linear-gradient(90deg,transparent,${T.gold},transparent)`,
                        }}
                    />

                    {/* Nav links */}
                    {NAV_ITEMS.map((item, i) => (
                        <motion.a
                            key={i}
                            href={item.href}
                            onClick={() => { setActive(item.name); onClose(); }}
                            initial={{ opacity: 0, x: -28 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.07 + 0.15, ease: T.ease }}
                            style={{
                                display: "flex", alignItems: "center", gap: 16,
                                padding: "13px 28px", borderRadius: 14,
                                width: "80%", maxWidth: 280,
                                background: activeItem === item.name
                                    ? "rgba(201,168,76,0.1)" : "transparent",
                                border: `1px solid ${activeItem === item.name
                                    ? "rgba(201,168,76,0.28)" : "rgba(255,255,255,0.06)"}`,
                                textDecoration: "none", cursor: "pointer",
                                color: activeItem === item.name
                                    ? T.gold : "rgba(245,240,232,0.7)",
                                fontFamily: "'Outfit',sans-serif", fontWeight: 300,
                                fontSize: 13, letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                transition: "background 0.28s, border-color 0.28s",
                            }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <span style={{ fontSize: 19, display: "flex", alignItems: "center" }}>
                                {item.icon}
                            </span>
                            {item.name}
                            {activeItem === item.name && (
                                <motion.span
                                    layoutId="active-pill"
                                    style={{
                                        marginLeft: "auto", width: 6, height: 6,
                                        borderRadius: "50%", background: T.gold,
                                    }}
                                />
                            )}
                        </motion.a>
                    ))}

                    {/* Book Now CTA */}
                    <motion.button
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.52, ease: T.ease }}
                        style={{
                            position: "relative", overflow: "hidden",
                            marginTop: 24,
                            display: "flex", alignItems: "center", gap: 10,
                            padding: "14px 36px", borderRadius: 99,
                            background: `linear-gradient(135deg,${T.gold},${T.goldDk})`,
                            border: "none", cursor: "pointer",
                            fontFamily: "'Outfit',sans-serif", fontWeight: 500,
                            fontSize: 12, letterSpacing: "0.2em",
                            textTransform: "uppercase", color: T.charcoal,
                            boxShadow: "0 8px 32px rgba(201,168,76,0.36)",
                        }}
                        whileTap={{ scale: 0.96 }}
                        aria-label="Book your tour"
                    >
                        <Shimmer />
                        <span style={{ position: "relative", zIndex: 1 }}>Book Now</span>
                        <FiArrowRight size={13} strokeWidth={2.5}
                            style={{ position: "relative", zIndex: 1 }} />
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ══════════════════════════════════════════════════════════════════════
   MAIN NAVBAR EXPORT
   Usage:
     import Navbar from "@/components/Navbar";
     <Navbar />   — put this in app/layout.jsx above <main>
══════════════════════════════════════════════════════════════════════ */
export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const [activeItem, setActive] = useState("Home");
    const [mobileMenuOpen, setMenuOpen] = useState(false);

    /* Mount guard — avoids SSR/hydration mismatch */
    useEffect(() => { setMounted(true); }, []);

    /* Sync active item on scroll / hash change */
    useEffect(() => {
        if (!mounted) return;
        const onHash = () => {
            const hash = window.location.hash.replace("#", "");
            const matched = NAV_ITEMS.find(n =>
                n.href === window.location.pathname ||
                n.href === `#${hash}`
            );
            if (matched) setActive(matched.name);
        };
        window.addEventListener("hashchange", onHash);
        onHash(); // run on mount
        return () => window.removeEventListener("hashchange", onHash);
    }, [mounted]);

    if (!mounted) return null; // skip SSR entirely — no hydration mismatch

    return (
        <>
            {/* Responsive CSS */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Outfit:wght@200;300;400;500&display=swap');
        .sss-desktop-nav { display: none !important; }
        .sss-mobile-top  { display: flex !important; }
        @media (min-width: 1024px) {
          .sss-desktop-nav { display: block !important; }
          .sss-mobile-top  { display: none  !important; }
        }
        button { -webkit-tap-highlight-color: transparent; }
        // @media (pointer: fine) { body { cursor: none; } }
      `}</style>

            {/* Desktop pill navbar */}
            <DesktopNav activeItem={activeItem} setActive={setActive} />

            {/* Mobile top bar (logo + hamburger) */}
            <MobileTopBar onOpen={() => setMenuOpen(true)} />

            {/* Mobile fullscreen overlay */}
            <MobileMenuOverlay
                open={mobileMenuOpen}
                onClose={() => setMenuOpen(false)}
                activeItem={activeItem}
                setActive={setActive}
            />
        </>
    );
}