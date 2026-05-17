"use client";

import { useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
    FiX,
    FiMapPin,
    FiArrowRight,
    FiStar,
} from "react-icons/fi";

export default function DestinationModal({
    destination,
    isOpen,
    onClose,
}) {

    /* ESC CLOSE */
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, [onClose]);

    /* PREVENT BODY SCROLL */
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>

            {isOpen && destination && (

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-lg"
                >

                    {/* BACKDROP */}
                    <div
                        onClick={onClose}
                        className="absolute inset-0"
                    ></div>

                    {/* MODAL */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 40,
                            scale: 0.96,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: 40,
                            scale: 0.96,
                        }}
                        transition={{
                            duration: 0.35,
                        }}
                        className="relative z-10 w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0A0A0A]"
                    >

                        {/* CLOSE */}
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-xl transition hover:text-yellow-400"
                        >

                            <FiX size={18} />
                        </button>

                        {/* GRID */}
                        <div className="grid lg:grid-cols-[1fr_0.95fr]">

                            {/* IMAGE */}
                            <div className="relative">

                                <img
                                    src={destination.image}
                                    alt={destination.title}
                                    className="aspect-[4/5] h-full w-full object-cover"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                                {/* Location */}
                                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-yellow-400 backdrop-blur-xl">

                                    Maharashtra Tourism
                                </div>

                                {/* Bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">

                                    <h2 className="text-3xl font-light text-white md:text-5xl">

                                        {destination.title}
                                    </h2>

                                    <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-yellow-400">

                                        <FiMapPin />

                                        {destination.location}
                                    </div>
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className="flex flex-col justify-between p-6 md:p-8">

                                <div>

                                    {/* TAG */}
                                    <div className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-yellow-400">

                                        {destination.tag}
                                    </div>

                                    {/* DESCRIPTION */}
                                    <div className="mt-8">

                                        <h3 className="text-xl font-light text-white md:text-2xl">

                                            About Destination
                                        </h3>

                                        <p className="mt-5 text-sm leading-7 text-white/60 md:text-base">

                                            {destination.description}
                                        </p>
                                    </div>

                                    {/* HIGHLIGHTS */}
                                    <div className="mt-10">

                                        <h4 className="text-lg font-light text-white">

                                            Highlights
                                        </h4>

                                        <div className="mt-5 flex flex-wrap gap-3">

                                            {destination.highlights.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
                                                >

                                                    <FiStar className="text-xs text-yellow-400" />

                                                    <span className="text-xs text-white/70 md:text-sm">
                                                        {item}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* BUTTONS */}
                                <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                                    <motion.button
                                        whileHover={{
                                            scale: 1.02,
                                        }}
                                        whileTap={{
                                            scale: 0.97,
                                        }}
                                        className="flex items-center justify-center gap-3 rounded-full bg-yellow-500 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.25em] text-black"
                                    >

                                        Book Journey

                                        <FiArrowRight />
                                    </motion.button>

                                    <motion.button
                                        whileHover={{
                                            scale: 1.02,
                                        }}
                                        whileTap={{
                                            scale: 0.97,
                                        }}
                                        className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-[11px] uppercase tracking-[0.25em] text-white/70 transition hover:border-yellow-500/20 hover:text-yellow-400"
                                    >

                                        Explore More
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}