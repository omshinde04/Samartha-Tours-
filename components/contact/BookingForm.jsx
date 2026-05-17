"use client";

/**
 * =========================================================
 * BOOKING FORM SECTION
 * Premium Luxury Booking Experience
 * Production Grade
 * =========================================================
 *
 * Create File:
 * components/contact/BookingForm.jsx
 *
 * Usage:
 * <BookingForm />
 *
 */

import { motion } from "framer-motion";

import {
    FiCalendar,
    FiMapPin,
    FiUsers,
    FiMessageSquare,
    FiPhone,
    FiUser,
    FiArrowRight,
} from "react-icons/fi";

export default function BookingForm() {

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

                <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

                    {/* ================================= */}
                    {/* LEFT CONTENT */}
                    {/* ================================= */}

                    <div>

                        {/* Label */}
                        <div className="mb-6 inline-flex items-center gap-4">

                            <div className="h-[1px] w-10 bg-yellow-400"></div>

                            <span className="text-[11px] uppercase tracking-[0.35em] text-yellow-400">
                                Travel Booking
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl font-light leading-tight sm:text-5xl md:text-6xl">

                            Plan Your
                            <span className="block italic text-yellow-400">
                                Premium Journey
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mt-8 max-w-xl text-base leading-8 text-white/55 md:text-lg">

                            Book premium group travel experiences across
                            Maharashtra & Goa with comfort, safety,
                            cinematic road trips, and unforgettable memories.
                        </p>

                        {/* Small Features */}
                        <div className="mt-12 space-y-5">

                            {[
                                "Custom Maharashtra & Goa Trips",
                                "Family & Group Tours",
                                "Comfortable Premium Travel",
                                "Quick WhatsApp Confirmation",
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-center gap-4"
                                >

                                    <div className="h-2 w-2 rounded-full bg-yellow-400"></div>

                                    <p className="text-sm text-white/65 md:text-base">

                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ================================= */}
                    {/* FORM CONTAINER */}
                    {/* ================================= */}

                    <motion.div
                        whileHover={{
                            y: -3,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:p-8"
                    >

                        {/* Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.04] via-transparent to-transparent"></div>

                        {/* Form */}
                        <form className="relative z-10">

                            {/* ================================= */}
                            {/* GRID */}
                            {/* ================================= */}

                            <div className="grid gap-5 md:grid-cols-2">

                                {/* Name */}
                                <div>

                                    <label className="mb-3 block text-[11px] uppercase tracking-[0.25em] text-white/45">

                                        Full Name
                                    </label>

                                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-5 py-4">

                                        <FiUser className="text-yellow-400" />

                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>

                                    <label className="mb-3 block text-[11px] uppercase tracking-[0.25em] text-white/45">

                                        Phone Number
                                    </label>

                                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-5 py-4">

                                        <FiPhone className="text-yellow-400" />

                                        <input
                                            type="tel"
                                            placeholder="+91 9876543210"
                                            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                                        />
                                    </div>
                                </div>

                                {/* Destination */}
                                <div>

                                    <label className="mb-3 block text-[11px] uppercase tracking-[0.25em] text-white/45">

                                        Destination
                                    </label>

                                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-5 py-4">

                                        <FiMapPin className="text-yellow-400" />

                                        <input
                                            type="text"
                                            placeholder="Where do you want to travel?"
                                            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                                        />
                                    </div>
                                </div>

                                {/* Group Size */}
                                <div>

                                    <label className="mb-3 block text-[11px] uppercase tracking-[0.25em] text-white/45">

                                        Group Size
                                    </label>

                                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-5 py-4">

                                        <FiUsers className="text-yellow-400" />

                                        <input
                                            type="text"
                                            placeholder="Number of travellers"
                                            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                                        />
                                    </div>
                                </div>

                                {/* Travel Date */}
                                <div className="md:col-span-2">

                                    <label className="mb-3 block text-[11px] uppercase tracking-[0.25em] text-white/45">

                                        Travel Date
                                    </label>

                                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-5 py-4">

                                        <FiCalendar className="text-yellow-400" />

                                        <input
                                            type="date"
                                            className="w-full bg-transparent text-sm text-white outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="md:col-span-2">

                                    <label className="mb-3 block text-[11px] uppercase tracking-[0.25em] text-white/45">

                                        Additional Details
                                    </label>

                                    <div className="flex gap-3 rounded-2xl border border-white/10 bg-black/30 px-5 py-4">

                                        <FiMessageSquare className="mt-1 text-yellow-400" />

                                        <textarea
                                            rows="5"
                                            placeholder="Tell us about your trip plans..."
                                            className="w-full resize-none bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            {/* ================================= */}
                            {/* BUTTON */}
                            {/* ================================= */}

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                                <p className="text-xs leading-6 text-white/40">

                                    Our team will contact you shortly
                                    for premium travel planning & booking confirmation.
                                </p>

                                <motion.button
                                    whileHover={{
                                        scale: 1.03,
                                    }}
                                    whileTap={{
                                        scale: 0.97,
                                    }}
                                    type="submit"
                                    className="flex items-center justify-center gap-3 rounded-full bg-yellow-500 px-7 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-black shadow-[0_0_30px_rgba(250,204,21,0.18)]"
                                >

                                    Submit Inquiry

                                    <FiArrowRight />
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}