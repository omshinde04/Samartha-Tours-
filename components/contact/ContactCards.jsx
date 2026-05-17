"use client";

/**
 * =========================================================
 * CONTACT CARDS SECTION
 * Premium Contact Information
 * Production Grade
 * =========================================================
 *
 * Create File:
 * components/contact/ContactCards.jsx
 *
 * Usage:
 * <ContactCards />
 *
 */

import { motion } from "framer-motion";

import {
    FiPhone,
    FiMail,
    FiMapPin,
    FiMessageCircle,
    FiArrowUpRight,
} from "react-icons/fi";

export default function ContactCards() {

    const cards = [
        {
            title: "Call Us",

            value: "+91 9373545169",

            sub: "Available for bookings & travel inquiries",

            icon: <FiPhone />,

            href: "tel:+919373545169",
        },

        {
            title: "WhatsApp",

            value: "Instant Booking Support",

            sub: "Quick responses for tours & trips",

            icon: <FiMessageCircle />,

            href: "https://wa.me/919373545169",
        },

        {
            title: "Email",

            value: "samarthatours.in@gmail.com",

            sub: "For detailed travel planning",

            icon: <FiMail />,

            href: "mailto:samarthatours.in@gmail.com",
        },

        {
            title: "Location",

            value: "Ghoti, Maharashtra",

            sub: "Serving Maharashtra & Goa",

            icon: <FiMapPin />,

            href: "https://maps.google.com",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-black py-20 text-white md:py-28">

            {/* ================================= */}
            {/* Background Glow */}
            {/* ================================= */}

            <div className="absolute inset-0 overflow-hidden">

                <div className="absolute left-[-10%] top-0 h-[300px] w-[300px] rounded-full bg-yellow-500/10 blur-3xl"></div>

                <div className="absolute bottom-0 right-[-10%] h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-3xl"></div>
            </div>

            {/* ================================= */}
            {/* Main Container */}
            {/* ================================= */}

            <div className="container-custom relative z-10">

                {/* Top Content */}
                <div className="mx-auto max-w-3xl text-center">

                    <div className="mb-6 inline-flex items-center gap-4">

                        <div className="h-[1px] w-10 bg-yellow-400"></div>

                        <span className="text-[11px] uppercase tracking-[0.35em] text-yellow-400">
                            Contact Information
                        </span>

                        <div className="h-[1px] w-10 bg-yellow-400"></div>
                    </div>

                    <h2 className="text-4xl font-light leading-tight sm:text-5xl md:text-6xl">

                        Reach Us
                        <span className="block italic text-yellow-400">
                            Anytime
                        </span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/55 md:text-lg">

                        Connect with us for bookings, group tours,
                        spiritual journeys, weekend trips, and premium
                        travel experiences across Maharashtra & Goa.
                    </p>
                </div>

                {/* ================================= */}
                {/* Cards Grid */}
                {/* ================================= */}

                <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

                    {cards.map((card, index) => (

                        <motion.a
                            key={index}
                            href={card.href}
                            target="_blank"
                            whileHover={{
                                y: -5,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
                        >

                            {/* Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.05] via-transparent to-transparent opacity-0 transition duration-700 group-hover:opacity-100"></div>

                            {/* Top */}
                            <div className="relative z-10 flex items-start justify-between">

                                {/* Icon */}
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-2xl text-yellow-400">

                                    {card.icon}
                                </div>

                                {/* Arrow */}
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-yellow-400 transition duration-300 group-hover:rotate-45">

                                    <FiArrowUpRight />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 mt-10">

                                <p className="text-[11px] uppercase tracking-[0.3em] text-yellow-400">

                                    {card.title}
                                </p>

                                <h3 className="mt-4 text-xl font-light leading-snug text-white">

                                    {card.value}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-white/50">

                                    {card.sub}
                                </p>
                            </div>

                            {/* Bottom Accent */}
                            <div className="relative z-10 mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/40">

                                Connect Now

                                <FiArrowUpRight className="text-yellow-400" />
                            </div>

                            {/* Border Hover */}
                            <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-yellow-500/0 transition duration-700 group-hover:border-yellow-500/20"></div>

                            {/* Floating Light */}
                            <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-yellow-500/10 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100"></div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}