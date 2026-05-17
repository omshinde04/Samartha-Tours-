"use client";

/**
 * =========================================================
 * MAP SECTION
 * Premium Location Experience
 * Production Grade
 * =========================================================
 *
 * Create File:
 * components/contact/MapSection.jsx
 *
 * Usage:
 * <MapSection />
 *
 */

import { motion } from "framer-motion";

import {
    FiMapPin,
    FiNavigation,
    FiPhone,
    FiArrowUpRight,
} from "react-icons/fi";

export default function MapSection() {

    return (
        <section className="relative overflow-hidden bg-[#050505] py-20 text-white md:py-28">

            {/* ================================= */}
            {/* Ambient Background */}
            {/* ================================= */}

            <div className="absolute inset-0 overflow-hidden">

                <div className="absolute left-[-10%] top-0 h-[300px] w-[300px] rounded-full bg-yellow-500/10 blur-3xl"></div>

                <div className="absolute bottom-0 right-[-10%] h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-3xl"></div>

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_65%)]"></div>
            </div>

            {/* ================================= */}
            {/* Main Container */}
            {/* ================================= */}

            <div className="container-custom relative z-10">

                {/* ================================= */}
                {/* Heading */}
                {/* ================================= */}

                <div className="mx-auto max-w-4xl text-center">

                    <div className="mb-6 inline-flex items-center gap-4">

                        <div className="h-[1px] w-10 bg-yellow-400"></div>

                        <span className="text-[11px] uppercase tracking-[0.35em] text-yellow-400">
                            Our Location
                        </span>

                        <div className="h-[1px] w-10 bg-yellow-400"></div>
                    </div>

                    <h2 className="text-4xl font-light leading-tight sm:text-5xl md:text-6xl">

                        Visit Our
                        <span className="block italic text-yellow-400">
                            Travel Office
                        </span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/55 md:text-lg">

                        Located in Ghoti, Maharashtra, we provide
                        premium travel experiences, group tours,
                        spiritual journeys, and road-trip services
                        across Maharashtra & Goa.
                    </p>
                </div>

                {/* ================================= */}
                {/* Main Grid */}
                {/* ================================= */}

                <div className="mt-16 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">

                    {/* ================================= */}
                    {/* LEFT INFO PANEL */}
                    {/* ================================= */}

                    <motion.div
                        whileHover={{
                            y: -4,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:p-8"
                    >

                        {/* Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.04] via-transparent to-transparent"></div>

                        <div className="relative z-10">

                            {/* Top */}
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-2xl text-yellow-400">

                                <FiMapPin />
                            </div>

                            {/* Heading */}
                            <h3 className="mt-8 text-3xl font-light leading-tight text-white">

                                Shree Swami Samartha
                                <span className="block italic text-yellow-400">
                                    Tours & Travels
                                </span>
                            </h3>

                            {/* Description */}
                            <p className="mt-6 text-base leading-8 text-white/55">

                                Premium group travel experiences designed
                                for comfortable journeys, spiritual trips,
                                family tours, and cinematic road adventures.
                            </p>

                            {/* Info List */}
                            <div className="mt-10 space-y-5">

                                {/* Location */}
                                <div className="flex items-start gap-4">

                                    <div className="mt-1 text-yellow-400">

                                        <FiNavigation />
                                    </div>

                                    <div>

                                        <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">

                                            Location
                                        </p>

                                        <h4 className="mt-2 text-lg font-light text-white">

                                            Ghoti, Maharashtra, India
                                        </h4>
                                    </div>
                                </div>

                                {/* Contact */}
                                <div className="flex items-start gap-4">

                                    <div className="mt-1 text-yellow-400">

                                        <FiPhone />
                                    </div>

                                    <div>

                                        <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">

                                            Contact
                                        </p>

                                        <h4 className="mt-2 text-lg font-light text-white">

                                            +91 9373545169
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <motion.a
                                whileHover={{
                                    scale: 1.03,
                                }}
                                whileTap={{
                                    scale: 0.97,
                                }}
                                href="https://maps.google.com"
                                target="_blank"
                                className="mt-12 inline-flex items-center gap-3 rounded-full bg-yellow-500 px-7 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-black shadow-[0_0_30px_rgba(250,204,21,0.18)]"
                            >

                                Open In Maps

                                <FiArrowUpRight />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* ================================= */}
                    {/* MAP */}
                    {/* ================================= */}

                    <motion.div
                        whileHover={{
                            y: -4,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03]"
                    >

                        <div className="relative h-[450px] w-full md:h-[550px]">

                            <iframe
                                src="https://maps.google.com/maps?q=Ghoti,Maharashtra&t=&z=11&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="h-full w-full border-0 grayscale"
                            ></iframe>

                            {/* Overlay */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>

                            {/* Floating Badge */}
                            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-yellow-400 backdrop-blur-xl">

                                Maharashtra Tourism
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}