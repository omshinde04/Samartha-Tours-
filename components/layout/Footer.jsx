"use client";

/**
 * =========================================================
 * PREMIUM FOOTER
 * Shree Swami Samartha Tours & Travels
 * Production Grade
 * =========================================================
 */

import Link from "next/link";

import { motion } from "framer-motion";

import {
    FiPhone,
    FiMail,
    FiMapPin,
    FiArrowUpRight,
    FiInstagram,
    FiFacebook,
    FiMessageCircle,
} from "react-icons/fi";

export default function Footer() {

    const quickLinks = [
        {
            name: "Home",
            href: "/",
        },

        {
            name: "Destinations",
            href: "/",
        },

        {
            name: "Contact",
            href: "/contact",
        },

        {
            name: "Book Journey",
            href: "/contact",
        },
    ];

    const services = [
        "Maharashtra Tours",
        "Goa Trips",
        "Wedding Functions",
        "Family Events",
        "Spiritual Journeys",
        "Group Travel",
        "Corporate Travel",
        "Pickup & Drop",
    ];

    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white">

            {/* ================================= */}
            {/* Ambient Glow */}
            {/* ================================= */}

            <div className="absolute inset-0 overflow-hidden">

                <div className="absolute left-[-10%] top-0 h-[350px] w-[350px] rounded-full bg-yellow-500/10 blur-3xl"></div>

                <div className="absolute bottom-0 right-[-10%] h-[350px] w-[350px] rounded-full bg-orange-500/10 blur-3xl"></div>

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_65%)]"></div>
            </div>

            {/* ================================= */}
            {/* Main Container */}
            {/* ================================= */}

            <div className="container-custom relative z-10">

                {/* ================================= */}
                {/* FOOTER GRID */}
                {/* ================================= */}

                <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">

                    {/* ================================= */}
                    {/* BRAND */}
                    {/* ================================= */}

                    <div>

                        <h3 className="text-2xl font-light leading-tight text-white">

                            Shree Swami
                            <span className="block italic text-yellow-400">
                                Samartha
                            </span>

                            <span className="mt-2 block text-lg text-white/70">
                                Tours & Travels
                            </span>
                        </h3>

                        <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">

                            Premium tours, traveller bookings, wedding transportation,
                            family functions, spiritual journeys, group travel,
                            and comfortable road-trip experiences across Maharashtra & Goa.
                        </p>

                        {/* Social */}
                        <div className="mt-8 flex items-center gap-4">

                            {[
                                {
                                    icon: <FiInstagram />,
                                    href: "#",
                                },

                                {
                                    icon: <FiFacebook />,
                                    href: "#",
                                },

                                {
                                    icon: <FiMessageCircle />,
                                    href: "https://wa.me/919373545169",
                                },
                            ].map((item, index) => (

                                <motion.a
                                    key={index}
                                    whileHover={{
                                        y: -3,
                                    }}
                                    href={item.href}
                                    target="_blank"
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-lg text-white/70 transition hover:border-yellow-500/20 hover:text-yellow-400"
                                >

                                    {item.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* ================================= */}
                    {/* QUICK LINKS */}
                    {/* ================================= */}

                    <div>

                        <h4 className="text-lg font-light text-white">

                            Quick Links
                        </h4>

                        <div className="mt-6 space-y-4">

                            {quickLinks.map((item, index) => (

                                <Link
                                    key={index}
                                    href={item.href}
                                    className="group flex items-center gap-3 text-sm text-white/55 transition hover:text-yellow-400"
                                >

                                    <div className="h-1.5 w-1.5 rounded-full bg-yellow-400 transition group-hover:scale-125"></div>

                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* ================================= */}
                    {/* SERVICES */}
                    {/* ================================= */}

                    <div>

                        <h4 className="text-lg font-light text-white">

                            Our Services
                        </h4>

                        <div className="mt-6 space-y-4">

                            {services.map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-center gap-3 text-sm text-white/55"
                                >

                                    <div className="h-1.5 w-1.5 rounded-full bg-yellow-400"></div>

                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ================================= */}
                    {/* CONTACT */}
                    {/* ================================= */}

                    <div>

                        <h4 className="text-lg font-light text-white">

                            Contact Info
                        </h4>

                        <div className="mt-6 space-y-6">

                            {/* Phone */}
                            <div className="flex items-start gap-4">

                                <div className="mt-1 text-yellow-400">

                                    <FiPhone />
                                </div>

                                <div>

                                    <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">

                                        Phone
                                    </p>

                                    <a
                                        href="tel:+919373545169"
                                        className="mt-2 block text-sm text-white/70 transition hover:text-yellow-400"
                                    >

                                        +91 9373545169
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">

                                <div className="mt-1 text-yellow-400">

                                    <FiMail />
                                </div>

                                <div>

                                    <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">

                                        Email
                                    </p>

                                    <a
                                        href="mailto:samarthatours.in@gmail.com"
                                        className="mt-2 block text-sm text-white/70 transition hover:text-yellow-400"
                                    >

                                        samarthatours.in@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4">

                                <div className="mt-1 text-yellow-400">

                                    <FiMapPin />
                                </div>

                                <div>

                                    <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">

                                        Location
                                    </p>

                                    <p className="mt-2 text-sm text-white/70">

                                        Ghoti, Maharashtra, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================================= */}
                {/* BOTTOM BAR */}
                {/* ================================= */}

                <div className="flex flex-col gap-6 border-t border-white/10 py-8 text-center md:flex-row md:items-center md:justify-between md:text-left">

                    {/* Left */}
                    <p className="text-xs leading-7 text-white/40 md:text-sm">

                        © {new Date().getFullYear()} Shree Swami Samartha Tours & Travels.
                        All rights reserved.
                    </p>

                    {/* Right */}
                    <div className="flex flex-col items-center gap-2 md:items-end">

                        <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">

                            Designed & Developed By
                        </p>

                        <a
                            href="https://omradixsolutions.in"
                            target="_blank"
                            className="text-sm text-yellow-400 transition hover:text-yellow-300"
                        >

                            OmradixSolutions.in
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}