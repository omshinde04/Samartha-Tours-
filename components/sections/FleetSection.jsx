"use client";

import { useEffect, useRef } from "react";

import { motion } from "framer-motion";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    FiArrowRight,
    FiUsers,
    FiWind,
    FiMusic,
    FiShield,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function FleetSection() {
    const sectionRef = useRef(null);

    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.fromTo(
                contentRef.current,
                {
                    opacity: 0,
                    y: 80,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power4.out",

                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: "top 85%",
                    },
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const features = [
        {
            icon: <FiUsers />,
            title: "17 Seater Comfort",
        },

        {
            icon: <FiWind />,
            title: "Air Conditioned",
        },

        {
            icon: <FiMusic />,
            title: "Premium Entertainment",
        },

        {
            icon: <FiShield />,
            title: "Safe & Trusted Travel",
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#080808] py-24 text-white md:py-32"
        >

            {/* Ambient Lighting */}
            <div className="absolute inset-0 overflow-hidden">

                <div className="absolute left-[-10%] top-0 h-[350px] w-[350px] rounded-full bg-yellow-500/10 blur-3xl"></div>

                <div className="absolute bottom-0 right-[-10%] h-[350px] w-[350px] rounded-full bg-orange-500/10 blur-3xl"></div>
            </div>

            <div className="container-custom relative z-10">

                <div
                    ref={contentRef}
                    className="mx-auto max-w-6xl"
                >

                    {/* Top Row */}
                    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

                        {/* Left */}
                        <div>

                            <div className="mb-6 flex items-center gap-4">

                                <div className="h-[1px] w-10 bg-yellow-400"></div>

                                <span className="text-[11px] uppercase tracking-[0.35em] text-yellow-400">
                                    Premium Fleet
                                </span>
                            </div>

                            <h2 className="text-4xl font-light leading-tight sm:text-5xl md:text-6xl">

                                Luxury Travel
                                <span className="block italic text-yellow-400">
                                    Designed Properly
                                </span>
                            </h2>
                        </div>

                        {/* Right */}
                        <div>

                            <p className="max-w-2xl text-base leading-8 text-white/55 md:text-lg">

                                Experience smooth group journeys crafted with
                                comfort, premium interiors, cinematic road-trip vibes,
                                and trusted travel experiences across Maharashtra & Goa.
                            </p>
                        </div>
                    </div>

                    {/* Main Panel */}
                    <motion.div
                        whileHover={{
                            y: -4,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        className="relative mt-16 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03]"
                    >

                        {/* Top Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.05] via-transparent to-transparent"></div>

                        {/* Layout */}
                        <div className="grid lg:grid-cols-[1fr_0.9fr]">

                            {/* Left Side */}
                            <div className="relative border-b border-white/10 p-8 md:p-12 lg:border-b-0 lg:border-r">

                                <div className="relative z-10">

                                    <p className="text-[11px] uppercase tracking-[0.35em] text-yellow-400">
                                        Traveller Experience
                                    </p>

                                    <h3 className="mt-5 text-3xl font-light leading-tight md:text-5xl">

                                        Comfortable
                                        <span className="block italic text-yellow-400">
                                            Premium Journeys
                                        </span>
                                    </h3>

                                    <p className="mt-6 max-w-lg text-base leading-8 text-white/55">

                                        Built for family tours, group trips, tourism,
                                        spiritual journeys, and unforgettable road experiences.
                                    </p>

                                    {/* CTA */}
                                    <motion.button
                                        whileHover={{
                                            scale: 1.03,
                                        }}
                                        whileTap={{
                                            scale: 0.97,
                                        }}
                                        className="mt-10 flex items-center gap-3 rounded-full border border-yellow-500/20 bg-yellow-500 px-6 py-4 text-xs font-medium uppercase tracking-[0.25em] text-black shadow-[0_0_30px_rgba(250,204,21,0.18)]"
                                    >

                                        Explore Fleet

                                        <FiArrowRight />
                                    </motion.button>
                                </div>
                            </div>

                            {/* Right Side */}
                            <div className="grid divide-y divide-white/10">

                                {features.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{
                                            backgroundColor: "rgba(255,255,255,0.02)",
                                        }}
                                        className="group flex items-center gap-5 p-6 transition duration-300 md:p-8"
                                    >

                                        {/* Icon */}
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-xl text-yellow-400">

                                            {item.icon}
                                        </div>

                                        {/* Text */}
                                        <div>

                                            <h4 className="text-lg font-medium text-white/90">

                                                {item.title}
                                            </h4>

                                            <p className="mt-1 text-sm text-white/40">

                                                Premium tourism experience
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}