"use client";

import { useEffect, useRef } from "react";

import { motion } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    FiArrowRight,
    FiMapPin,
    FiCompass,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
    const sectionRef = useRef(null);

    const headingRef = useRef(null);

    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.fromTo(
                headingRef.current,
                {
                    opacity: 0,
                    y: 100,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.4,
                    ease: "power4.out",

                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top 85%",
                    },
                }
            );

            cardsRef.current.forEach((card, index) => {
                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        y: 80,
                        scale: 0.92,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1.2,
                        ease: "power4.out",

                        scrollTrigger: {
                            trigger: card,
                            start: "top 92%",
                        },

                        delay: index * 0.1,
                    }
                );
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const cards = [
        {
            title: "Luxury Group Tours",

            desc: "Experience premium journeys crafted with comfort, elegance, and unforgettable memories across Maharashtra.",

            icon: <FiCompass />,
        },

        {
            title: "Scenic Destinations",

            desc: "Travel through breathtaking mountain roads, waterfalls, beaches, and spiritual landscapes.",

            icon: <FiMapPin />,
        },

        {
            title: "Cinematic Travel",

            desc: "Every road becomes a visual story filled with luxury atmosphere and immersive travel experiences.",

            icon: <FiArrowRight />,
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#0B0B0B] py-24 text-white md:py-32"
        >

            {/* =============================== */}
            {/* Ambient Background */}
            {/* =============================== */}

            <div className="absolute inset-0 overflow-hidden">

                <div className="absolute top-0 left-[-20%] h-[300px] w-[300px] rounded-full bg-yellow-500/10 blur-3xl md:h-[500px] md:w-[500px]"></div>

                <div className="absolute bottom-0 right-[-20%] h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-3xl md:h-[500px] md:w-[500px]"></div>

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]"></div>
            </div>

            {/* =============================== */}
            {/* Main Container */}
            {/* =============================== */}

            <div className="container-custom relative z-10">

                {/* =============================== */}
                {/* Heading */}
                {/* =============================== */}

                <motion.div
                    ref={headingRef}
                    className="mx-auto max-w-6xl text-center"
                >

                    <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-yellow-400 md:text-sm md:tracking-[0.5em]">
                        Premium Travel Experience
                    </p>

                    <h2 className="text-4xl font-light leading-tight text-white sm:text-5xl md:text-7xl lg:text-8xl">

                        Beyond
                        <span className="mx-2 italic text-yellow-400 md:mx-4">
                            Destinations
                        </span>

                        <br />

                        Experience Journeys.
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl px-2 text-base leading-7 text-white/60 sm:text-lg md:mt-10 md:text-xl md:leading-9">
                        We create cinematic luxury travel experiences that transform
                        ordinary road trips into unforgettable memories filled with
                        comfort, elegance, and adventure.
                    </p>
                </motion.div>

                {/* =============================== */}
                {/* Cards */}
                {/* =============================== */}

                <div className="mt-16 grid gap-6 md:mt-24 md:gap-8 lg:grid-cols-3">

                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            whileHover={{
                                y: -8,
                            }}
                            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition duration-500 md:rounded-[35px] md:p-8"
                        >

                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-yellow-400/0 transition duration-700 group-hover:bg-yellow-400/5"></div>

                            {/* Border Glow */}
                            <div className="absolute inset-0 rounded-[28px] border border-yellow-500/0 transition duration-700 group-hover:border-yellow-500/20 md:rounded-[35px]"></div>

                            {/* Icon */}
                            <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10 text-2xl text-yellow-400 md:mb-8 md:h-16 md:w-16 md:text-3xl">

                                {card.icon}
                            </div>

                            {/* Title */}
                            <h3 className="relative z-10 text-2xl font-semibold text-white md:text-3xl">

                                {card.title}
                            </h3>

                            {/* Description */}
                            <p className="relative z-10 mt-5 text-base leading-7 text-white/60 md:mt-6 md:text-lg md:leading-8">

                                {card.desc}
                            </p>

                            {/* Explore */}
                            <div className="relative z-10 mt-8 flex items-center gap-3 text-yellow-400 md:mt-10">

                                <span className="text-xs uppercase tracking-[0.25em] md:text-sm md:tracking-[0.3em]">
                                    Explore
                                </span>

                                <motion.div
                                    whileHover={{
                                        x: 5,
                                    }}
                                >
                                    <FiArrowRight />
                                </motion.div>
                            </div>

                            {/* Blur */}
                            <div className="absolute -bottom-20 -right-20 h-32 w-32 rounded-full bg-yellow-500/10 blur-3xl md:h-40 md:w-40"></div>
                        </motion.div>
                    ))}
                </div>

                {/* =============================== */}
                {/* Bottom CTA */}
                {/* =============================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 80,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="mt-24 flex flex-col items-center justify-center px-2 text-center md:mt-32"
                >

                    <div className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-3 text-[10px] uppercase tracking-[0.35em] text-yellow-400 backdrop-blur-xl md:px-6 md:text-sm md:tracking-[0.4em]">
                        Luxury Maharashtra Tourism
                    </div>

                    <h3 className="mt-8 max-w-4xl text-3xl font-light leading-tight sm:text-4xl md:mt-10 md:text-6xl">

                        Discover roads that feel
                        <span className="italic text-yellow-400">
                            cinematic.
                        </span>
                    </h3>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 md:mt-8 md:text-lg md:leading-8">
                        Experience premium travel with comfort, safety, elegance,
                        and unforgettable memories crafted for modern explorers.
                    </p>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        className="mt-10 flex w-full max-w-[320px] items-center justify-center gap-3 rounded-full bg-yellow-500 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-black shadow-[0_0_40px_rgba(250,204,21,0.35)] transition md:mt-12 md:w-auto md:px-10 md:py-5 md:text-sm"
                    >

                        Start Your Journey

                        <FiArrowRight />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}