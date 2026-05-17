"use client";

/**
 * =========================================================
 * CONTACT HERO SECTION
 * Ultra Premium Contact Hero
 * Production Grade
 * =========================================================
 *
 * Create File:
 * components/contact/ContactHero.jsx
 *
 * Usage:
 * <ContactHero />
 *
 */

import { motion } from "framer-motion";

import {
    FiArrowRight,
    FiPhone,
} from "react-icons/fi";

export default function ContactHero() {

    return (
        <section className="relative overflow-hidden bg-[#050505] pt-36 text-white md:pt-44">

            {/* ================================= */}
            {/* Ambient Background */}
            {/* ================================= */}

            <div className="absolute inset-0 overflow-hidden">

                {/* Glow */}
                <div className="absolute left-[-10%] top-0 h-[350px] w-[350px] rounded-full bg-yellow-500/10 blur-3xl"></div>

                <div className="absolute bottom-0 right-[-10%] h-[350px] w-[350px] rounded-full bg-orange-500/10 blur-3xl"></div>

                {/* Grid */}
                <div className="absolute inset-0 opacity-[0.03]">

                    <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:120px_120px]"></div>
                </div>

                {/* Radial */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]"></div>
            </div>

            {/* ================================= */}
            {/* Main Content */}
            {/* ================================= */}

            <div className="container-custom relative z-10">

                <div className="mx-auto max-w-5xl text-center">

                    {/* Small Label */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                        className="inline-flex items-center gap-4"
                    >

                        <div className="h-[1px] w-10 bg-yellow-400"></div>

                        <span className="text-[11px] uppercase tracking-[0.35em] text-yellow-400">
                            Luxury Travel Booking
                        </span>

                        <div className="h-[1px] w-10 bg-yellow-400"></div>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.1,
                        }}
                        className="mt-8 text-5xl font-light leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl"
                    >

                        Let’s Plan
                        <span className="block italic text-yellow-400">
                            Your Journey
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                        }}
                        className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/55 md:text-lg"
                    >

                        Premium Maharashtra & Goa travel experiences
                        crafted with comfort, safety, smooth journeys,
                        and unforgettable road-trip memories.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.3,
                        }}
                        className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >

                        {/* Primary */}
                        <motion.a
                            whileHover={{
                                scale: 1.03,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            href="https://wa.me/919373545169"
                            target="_blank"
                            className="flex items-center gap-3 rounded-full bg-yellow-500 px-7 py-4 text-xs font-medium uppercase tracking-[0.25em] text-black shadow-[0_0_30px_rgba(250,204,21,0.18)]"
                        >

                            Book On WhatsApp

                            <FiArrowRight />
                        </motion.a>

                        {/* Secondary */}
                        <motion.a
                            whileHover={{
                                scale: 1.03,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            href="tel:+919373545169"
                            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-xs uppercase tracking-[0.25em] text-white/70 transition hover:border-yellow-500/20 hover:text-yellow-400"
                        >

                            <FiPhone />

                            Call Now
                        </motion.a>
                    </motion.div>

                    {/* Bottom Stats */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.4,
                        }}
                        className="mt-20 grid gap-5 border-t border-white/10 pt-10 sm:grid-cols-3"
                    >

                        {[
                            {
                                value: "Maharashtra",
                                label: "Travel Coverage",
                            },

                            {
                                value: "24/7",
                                label: "Booking Support",
                            },

                            {
                                value: "Premium",
                                label: "Travel Experience",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-7 backdrop-blur-xl"
                            >

                                <h3 className="text-2xl font-light text-yellow-400 md:text-3xl">

                                    {item.value}
                                </h3>

                                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white/45">

                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="mt-24 h-24 bg-gradient-to-b from-transparent to-black"></div>
        </section>
    );
}