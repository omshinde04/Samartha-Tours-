"use client";

/**
 * PricingSection.jsx
 * No prices displayed — pricing is discussed directly with the client.
 * Focus: warmth, trust, transparency, personalised feel.
 * CTA: WhatsApp to get a custom quote.
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight, FiMessageCircle } from "react-icons/fi";

const G = "#c9a84c";
const GD = "#a07830";
const ease = [0.16, 1, 0.3, 1];

/* WhatsApp icon */
const WA = () => (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

/* ── 4 service categories — no prices, just warm description ── */
const CATEGORIES = [
    {
        num: "01",
        service: "One Day Rental",
        tagline: "Flexible hourly or full-day booking",
        message: "Whether it's a quick local errand or a full day out — tell us your plan and we'll give you the best possible price for your comfort.",
        features: ["Flexible pickup time", "AC vehicle", "Friendly driver", "Hourly or full-day"],
    },
    {
        num: "02",
        service: "Weekend Getaway",
        tagline: "Mahabaleshwar · Lonavala · Alibaug & more",
        message: "Every weekend trip is unique. Share your group size, destination, and dates — we'll put together a fair, personalised quote just for you.",
        features: ["Curated scenic route", "Comfortable vehicle", "Custom stops", "Group-friendly"],
        highlight: true,
    },
    {
        num: "03",
        service: "Temple & Pilgrimage Tour",
        tagline: "Sacred circuits across Maharashtra",
        message: "Spiritual journeys deserve calm, unhurried travel. Tell us which shrines you wish to visit and we'll plan the right vehicle and route.",
        features: ["Experienced driver", "Planned itinerary", "Safe & timely", "Single or multi-day"],
    },
    {
        num: "04",
        service: "Airport & Railway Transfer",
        tagline: "Smooth, punctual, no last-minute stress",
        message: "Reach your flight or train on time, every time. Drop us a message with your travel details and we'll take care of the rest.",
        features: ["Punctual pickup", "Luggage-friendly", "Mumbai & Pune", "24hr available"],
    },
];

/* ── Promise strip items ── */
const PROMISES = [
    {
        glyph: "◆",
        title: "No Hidden Charges",
        body: "What we agree on is what you pay. No surprise additions at the end of the journey.",
    },
    {
        glyph: "◈",
        title: "Honest Conversation",
        body: "We discuss every detail openly — distance, group size, vehicle — before quoting. No guesswork.",
    },
    {
        glyph: "◇",
        title: "Fair for Everyone",
        body: "Pricing is always based on your actual needs. We don't charge more just because we can.",
    },
];

/* ── Category card ── */
function CategoryCard({ cat, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-8% 0px" });

    const waText = encodeURIComponent(
        `Hello, I am interested in your ${cat.service}. Could you please share the pricing and details?`
    );
    const waLink = `https://wa.me/919373545169?text=${waText}`;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease, delay: index * 0.1 }}
            style={{
                position: "relative",
                padding: "clamp(24px,3.5vw,38px)",
                borderRadius: 20,
                background: cat.highlight
                    ? "rgba(201,168,76,0.04)"
                    : "rgba(255,255,255,0.025)",
                border: cat.highlight
                    ? "1px solid rgba(201,168,76,0.24)"
                    : "1px solid rgba(255,255,255,0.07)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Highlight badge */}
            {cat.highlight && (
                <div style={{
                    position: "absolute", top: 20, right: 20,
                    padding: "4px 12px", borderRadius: 99,
                    background: "rgba(201,168,76,0.1)",
                    border: "1px solid rgba(201,168,76,0.22)",
                    fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                    fontSize: 8, letterSpacing: "0.26em",
                    textTransform: "uppercase", color: G,
                }}>Most Booked</div>
            )}

            {/* Ambient on highlight */}
            {cat.highlight && (
                <div style={{
                    position: "absolute", top: "-20%", right: "-10%",
                    width: "50%", height: "60%", borderRadius: "50%",
                    background: "radial-gradient(circle,rgba(201,168,76,0.06) 0%,transparent 70%)",
                    pointerEvents: "none",
                }} />
            )}

            {/* Number */}
            <div style={{
                fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
                fontWeight: 300, fontSize: "clamp(26px,4vw,40px)",
                color: "rgba(201,168,76,0.15)", lineHeight: 1,
                marginBottom: "clamp(16px,2.5vw,22px)",
            }}>{cat.num}</div>

            {/* Service name */}
            <div style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                fontSize: "clamp(8px,1.5vw,10px)", letterSpacing: "0.32em",
                textTransform: "uppercase", color: "rgba(201,168,76,0.6)",
                marginBottom: 8,
            }}>{cat.service}</div>

            {/* Tagline */}
            <div style={{
                fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
                fontWeight: 300, fontSize: "clamp(15px,2.4vw,20px)",
                color: "rgba(245,240,232,0.6)", lineHeight: 1.3,
                marginBottom: "clamp(16px,2.5vw,22px)",
            }}>{cat.tagline}</div>

            {/* Divider */}
            <div style={{
                width: "100%", height: 1,
                background: "rgba(255,255,255,0.06)",
                marginBottom: "clamp(16px,2.5vw,22px)",
            }} />

            {/* Warm client message */}
            <p style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                fontSize: "clamp(12px,1.8vw,14px)", lineHeight: 1.82,
                color: "rgba(245,240,232,0.5)",
                margin: "0 0 clamp(18px,2.5vw,24px)",
                flex: 1,
            }}>{cat.message}</p>

            {/* Feature tags */}
            <div style={{
                display: "flex", flexWrap: "wrap", gap: "6px 7px",
                marginBottom: "clamp(20px,3vw,28px)",
            }}>
                {cat.features.map((f, i) => (
                    <span key={i} style={{
                        padding: "4px 11px", borderRadius: 99,
                        background: "rgba(255,255,255,0.035)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                        fontSize: "clamp(9px,1.3vw,11px)", letterSpacing: "0.06em",
                        color: "rgba(245,240,232,0.4)",
                    }}>{f}</span>
                ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ gap: 12 }}
                style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    fontFamily: "'Outfit', sans-serif", fontWeight: 400,
                    fontSize: "clamp(9px,1.6vw,11px)", letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: cat.highlight ? G : "rgba(245,240,232,0.48)",
                    textDecoration: "none",
                    transition: "color 0.3s",
                }}
            >
                <WA />
                Ask for a Quote
                <FiArrowRight size={11} />
            </motion.a>
        </motion.div>
    );
}

/* ══════════════════════════════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════════════════════════════ */
export default function PricingSection() {
    const headRef = useRef(null);
    const inView = useInView(headRef, { once: true, margin: "-10% 0px" });
    const promiseRef = useRef(null);
    const pInView = useInView(promiseRef, { once: true, margin: "-10% 0px" });

    const waGeneral = "https://wa.me/919373545169?text=Hello%2C%20I%20would%20like%20to%20know%20about%20your%20pricing%20and%20services.";

    return (
        <section
            style={{
                position: "relative",
                background: "#0a0908",
                padding: "clamp(64px,9vw,110px) clamp(20px,6vw,80px)",
            }}
        >
            {/* Top rule */}
            <div style={{
                position: "absolute", top: 0,
                left: "clamp(20px,6vw,80px)", right: "clamp(20px,6vw,80px)",
                height: 1,
                background: "linear-gradient(to right,transparent,rgba(255,255,255,0.06),transparent)",
            }} />

            {/* Ambient glow */}
            <div style={{
                position: "absolute", top: "30%", right: "-8%",
                width: "35vw", height: "35vw", borderRadius: "50%",
                background: "radial-gradient(circle,rgba(201,168,76,0.04) 0%,transparent 70%)",
                pointerEvents: "none",
            }} />

            <div style={{ maxWidth: 1200, margin: "0 auto" }}>

                {/* ── HEADING ── */}
                <motion.div
                    ref={headRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease }}
                    style={{ marginBottom: "clamp(44px,6vw,68px)" }}
                >
                    {/* Eyebrow */}
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "clamp(16px,2.5vw,22px)" }}>
                        <div style={{ width: 18, height: 1, background: G }} />
                        <span style={{
                            fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                            fontSize: "clamp(8px,1.6vw,10px)", letterSpacing: "0.36em",
                            textTransform: "uppercase", color: "rgba(201,168,76,0.6)",
                        }}>Pricing</span>
                    </div>

                    {/* Main headline */}
                    <div style={{
                        display: "flex", flexWrap: "wrap",
                        gap: "clamp(16px,3vw,40px)", alignItems: "flex-end",
                    }}>
                        <h2 style={{
                            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                            fontSize: "clamp(30px,6vw,64px)", lineHeight: 0.95,
                            letterSpacing: "-0.02em", color: "rgba(245,240,232,0.94)",
                            margin: 0, flex: "1 1 300px",
                        }}>
                            Every quote is{" "}
                            <span style={{ fontStyle: "italic", color: G }}>personal.</span>
                        </h2>

                        {/* Side message */}
                        <div style={{ flex: "1 1 260px", maxWidth: 400 }}>
                            <p style={{
                                fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                                fontSize: "clamp(13px,1.8vw,16px)", lineHeight: 1.8,
                                color: "rgba(245,240,232,0.44)", margin: "0 0 20px",
                            }}>
                                We don't believe in generic price lists. Your journey is unique —
                                your group size, route, timing, and comfort needs all matter.
                                So we discuss everything directly and give you a fair, honest quote.
                            </p>

                            {/* WhatsApp direct CTA */}
                            <motion.a
                                href={waGeneral}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.04, boxShadow: "0 10px 40px rgba(201,168,76,0.4)" }}
                                whileTap={{ scale: 0.97 }}
                                style={{
                                    display: "inline-flex", alignItems: "center", gap: 9,
                                    padding: "clamp(11px,2vw,14px) clamp(20px,3vw,28px)",
                                    borderRadius: 99,
                                    background: `linear-gradient(135deg,${G},${GD})`,
                                    border: "none", cursor: "pointer",
                                    fontFamily: "'Outfit', sans-serif", fontWeight: 500,
                                    fontSize: "clamp(9px,1.6vw,12px)", letterSpacing: "0.18em",
                                    textTransform: "uppercase", color: "#0e0d0b",
                                    textDecoration: "none",
                                    boxShadow: "0 6px 28px rgba(201,168,76,0.24)",
                                }}
                            >
                                <WA />
                                Chat With Us Directly
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

                {/* ── CATEGORY CARDS ── */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
                    gap: "clamp(12px,2vw,18px)",
                    marginBottom: "clamp(56px,8vw,88px)",
                }}>
                    {CATEGORIES.map((cat, i) => (
                        <CategoryCard key={i} cat={cat} index={i} />
                    ))}
                </div>

                {/* ── HOW WE PRICE — editorial full-width block ── */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease, delay: 0.5 }}
                    style={{
                        padding: "clamp(28px,4vw,48px)",
                        borderRadius: 20,
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        marginBottom: "clamp(48px,7vw,80px)",
                    }}
                >
                    <div style={{
                        display: "flex", flexWrap: "wrap",
                        gap: "clamp(24px,4vw,56px)", alignItems: "flex-start",
                    }}>
                        {/* Left copy */}
                        <div style={{ flex: "1 1 280px" }}>
                            <div style={{
                                fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                                fontSize: "clamp(8px,1.5vw,10px)", letterSpacing: "0.32em",
                                textTransform: "uppercase", color: "rgba(201,168,76,0.55)",
                                marginBottom: "clamp(10px,1.8vw,16px)",
                            }}>How We Work</div>

                            <h3 style={{
                                fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                                fontSize: "clamp(22px,4vw,38px)", lineHeight: 1.05,
                                letterSpacing: "-0.015em",
                                color: "rgba(245,240,232,0.9)",
                                margin: "0 0 clamp(12px,2vw,18px)",
                            }}>
                                You tell us your plan.
                                <br />
                                <span style={{ fontStyle: "italic", color: G }}>We give you a fair price.</span>
                            </h3>

                            <p style={{
                                fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                                fontSize: "clamp(12px,1.7vw,15px)", lineHeight: 1.82,
                                color: "rgba(245,240,232,0.44)", margin: 0, maxWidth: 440,
                            }}>
                                Share your destination, dates, and group size with us on WhatsApp.
                                We'll respond quickly with a clear, transparent price — no pressure,
                                no complicated booking forms, no middlemen. Just a genuine conversation.
                            </p>
                        </div>

                        {/* Right: 3 quick steps */}
                        <div style={{ flex: "1 1 240px", display: "flex", flexDirection: "column", gap: 0 }}>
                            {[
                                { step: "1", text: "Message us on WhatsApp with your travel details" },
                                { step: "2", text: "We discuss, understand your needs, and confirm availability" },
                                { step: "3", text: "We give you a clear, honest price — you decide" },
                            ].map((s, i) => (
                                <div key={i} style={{
                                    display: "flex", gap: "clamp(14px,2vw,20px)", alignItems: "flex-start",
                                    padding: "clamp(14px,2.5vw,20px) 0",
                                    borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none",
                                }}>
                                    <div style={{
                                        width: "clamp(28px,4vw,36px)", height: "clamp(28px,4vw,36px)",
                                        borderRadius: "50%", flexShrink: 0,
                                        background: "rgba(201,168,76,0.08)",
                                        border: "1px solid rgba(201,168,76,0.2)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
                                        fontWeight: 300, fontSize: "clamp(12px,1.8vw,15px)",
                                        color: G, lineHeight: 1,
                                    }}>{s.step}</div>
                                    <p style={{
                                        fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                                        fontSize: "clamp(12px,1.7vw,14px)", lineHeight: 1.75,
                                        color: "rgba(245,240,232,0.48)", margin: 0,
                                        paddingTop: "2px",
                                    }}>{s.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* ── PROMISE STRIPS ── */}
                <div ref={promiseRef} style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}>
                    {PROMISES.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={pInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.9, ease, delay: i * 0.12 }}
                            style={{
                                display: "flex", gap: "clamp(14px,2vw,22px)", alignItems: "flex-start",
                                padding: "clamp(24px,3.5vw,36px) clamp(16px,2.5vw,28px)",
                                borderRight: i < PROMISES.length - 1
                                    ? "1px solid rgba(255,255,255,0.05)"
                                    : "none",
                            }}
                        >
                            <span style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontSize: "clamp(14px,2vw,18px)",
                                color: "rgba(201,168,76,0.3)",
                                lineHeight: 1.6, flexShrink: 0, paddingTop: 2,
                            }}>{p.glyph}</span>
                            <div>
                                <h4 style={{
                                    fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                                    fontSize: "clamp(16px,2.5vw,22px)", lineHeight: 1.15,
                                    color: "rgba(245,240,232,0.86)",
                                    margin: "0 0 8px",
                                }}>{p.title}</h4>
                                <p style={{
                                    fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                                    fontSize: "clamp(11px,1.6vw,13px)", lineHeight: 1.78,
                                    color: "rgba(245,240,232,0.4)", margin: 0,
                                }}>{p.body}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── BOTTOM REASSURANCE LINE ── */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={pInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, ease, delay: 0.5 }}
                    style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontStyle: "italic", fontWeight: 300,
                        fontSize: "clamp(14px,2.2vw,20px)",
                        color: "rgba(245,240,232,0.28)",
                        textAlign: "center",
                        marginTop: "clamp(28px,4vw,44px)",
                        lineHeight: 1.6,
                    }}
                >
                    "We'd rather have an honest conversation than send you a number
                    that doesn't fit your journey."
                </motion.p>

            </div>
        </section>
    );
}