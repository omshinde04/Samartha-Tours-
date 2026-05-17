"use client";

/**
 * =========================================================
 * DESTINATION CARD
 * Ultra Premium Cinematic Card
 * Production Grade
 * =========================================================
 *
 * Create File:
 * components/ui/DestinationCard.jsx
 *
 * Usage:
 *
 * <DestinationCard
 *    destination={place}
 *    onOpen={() => handleOpen(place)}
 * />
 *
 */

import { motion } from "framer-motion";

import {
    FiArrowRight,
    FiMapPin,
    FiCompass,
} from "react-icons/fi";

export default function DestinationCard({
    destination,
    onOpen,
}) {

    return (
        <motion.div
            whileHover={{
                y: -6,
            }}
            transition={{
                duration: 0.35,
            }}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]"
        >

            {/* ================================= */}
            {/* IMAGE */}
            {/* ================================= */}

            <div className="relative overflow-hidden">

                <img
                    src={destination.image}
                    alt={destination.title}
                    className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[380px]"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.04] via-transparent to-transparent opacity-0 transition duration-700 group-hover:opacity-100"></div>

                {/* ================================= */}
                {/* TOP LABEL */}
                {/* ================================= */}

                <div className="absolute left-5 top-5 flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl">

                    <FiCompass className="text-sm text-yellow-400" />

                    <span className="text-[10px] uppercase tracking-[0.3em] text-yellow-400">
                        Maharashtra Tours
                    </span>
                </div>

                {/* ================================= */}
                {/* BOTTOM CONTENT */}
                {/* ================================= */}

                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">

                    {/* Location */}
                    <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60">

                        <FiMapPin className="text-yellow-400" />

                        {destination.location}
                    </div>

                    {/* Main Content */}
                    <div className="flex items-end justify-between gap-4">

                        {/* Left */}
                        <div>

                            <h3 className="text-2xl font-light text-white md:text-3xl">

                                {destination.title}
                            </h3>

                            <p className="mt-3 text-sm text-white/60 md:text-base">

                                {destination.tag}
                            </p>
                        </div>

                        {/* Open Button */}
                        <motion.button
                            whileHover={{
                                scale: 1.08,
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}
                            onClick={onOpen}
                            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/40 text-yellow-400 backdrop-blur-xl transition hover:border-yellow-500/20 hover:bg-yellow-500/10"
                        >

                            <FiArrowRight size={18} />
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* ================================= */}
            {/* BOTTOM INFO PANEL */}
            {/* ================================= */}

            <div className="border-t border-white/10 bg-black/30 px-5 py-5 backdrop-blur-xl md:px-6">

                <div className="flex items-center justify-between gap-4">

                    {/* Description */}
                    <p className="line-clamp-2 text-sm leading-7 text-white/50">

                        {destination.description}
                    </p>

                    {/* Small Accent */}
                    <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 md:flex">

                        <FiCompass />
                    </div>
                </div>
            </div>

            {/* ================================= */}
            {/* HOVER BORDER */}
            {/* ================================= */}

            <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-yellow-500/0 transition duration-700 group-hover:border-yellow-500/20"></div>

            {/* ================================= */}
            {/* FLOATING LIGHT */}
            {/* ================================= */}

            <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-yellow-500/10 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100"></div>
        </motion.div>
    );
}