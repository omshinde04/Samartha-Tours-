"use client";

import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FiCompass, FiMapPin } from "react-icons/fi";

import DestinationCard from "@/components/ui/DestinationCard";

import DestinationModal from "@/components/ui/DestinationModal";

import { destinations } from "@/data/destinations";

gsap.registerPlugin(ScrollTrigger);

export default function DestinationsSection() {

    const sectionRef = useRef(null);

    const headingRef = useRef(null);

    const cardsRef = useRef([]);

    const [selectedDestination, setSelectedDestination] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    /* ================================= */
    /* OPEN MODAL */
    /* ================================= */

    const handleOpenModal = (destination) => {
        setSelectedDestination(destination);

        setIsModalOpen(true);
    };

    /* ================================= */
    /* CLOSE MODAL */
    /* ================================= */

    const handleCloseModal = () => {
        setIsModalOpen(false);

        setTimeout(() => {
            setSelectedDestination(null);
        }, 300);
    };

    /* ================================= */
    /* GSAP ANIMATIONS */
    /* ================================= */

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.fromTo(
                headingRef.current,
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
                        y: 60,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power4.out",

                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                        },

                        delay: index * 0.08,
                    }
                );
            });

        }, sectionRef);

        return () => ctx.revert();

    }, []);

    return (
        <>
            <section
                ref={sectionRef}
                className="relative overflow-hidden bg-[#050505] py-24 text-white md:py-32"
            >

                {/* ================================= */}
                {/* BACKGROUND */}
                {/* ================================= */}

                <div className="absolute inset-0 overflow-hidden">

                    <div className="absolute left-[-10%] top-0 h-[400px] w-[400px] rounded-full bg-yellow-500/10 blur-3xl"></div>

                    <div className="absolute bottom-0 right-[-10%] h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-3xl"></div>

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_65%)]"></div>
                </div>

                {/* ================================= */}
                {/* CONTAINER */}
                {/* ================================= */}

                <div className="container-custom relative z-10">

                    {/* ================================= */}
                    {/* TOP CONTENT */}
                    {/* ================================= */}

                    <div
                        ref={headingRef}
                        className="mx-auto max-w-5xl text-center"
                    >

                        <div className="mb-6 inline-flex items-center gap-4">

                            <div className="h-[1px] w-10 bg-yellow-400"></div>

                            <span className="text-[11px] uppercase tracking-[0.35em] text-yellow-400">
                                Featured Destinations
                            </span>

                            <div className="h-[1px] w-10 bg-yellow-400"></div>
                        </div>

                        <h2 className="text-4xl font-light leading-tight sm:text-5xl md:text-6xl">

                            Journeys Beyond
                            <span className="block italic text-yellow-400">
                                Ordinary Routes
                            </span>
                        </h2>

                        <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/55 md:text-lg">

                            From spiritual destinations and Sahyadri adventures
                            to waterfalls and scenic escapes, we create unforgettable
                            travel experiences across Maharashtra & Goa.
                        </p>
                    </div>

                    {/* ================================= */}
                    {/* DESTINATION GRID */}
                    {/* ================================= */}

                    <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                        {destinations.map((place, index) => (

                            <div
                                key={place.id}
                                ref={(el) => (cardsRef.current[index] = el)}
                            >

                                <DestinationCard
                                    destination={place}
                                    onOpen={() => handleOpenModal(place)}
                                />
                            </div>
                        ))}
                    </div>

                    {/* ================================= */}
                    {/* MARQUEE */}
                    {/* ================================= */}

                    <div className="mt-20 overflow-hidden rounded-full border border-white/10 bg-white/[0.03] py-5">

                        <motion.div
                            animate={{
                                x: ["0%", "-50%"],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 25,
                                ease: "linear",
                            }}
                            className="flex min-w-max gap-12 whitespace-nowrap px-6"
                        >

                            {[
                                "Lonavala",
                                "Mahabaleshwar",
                                "Igatpuri",
                                "Goa",
                                "Trimbakeshwar",
                                "Nashik",
                                "Alibaug",
                                "Pune",
                                "Mumbai",
                                "Bhandardara",
                                "Shirdi",
                                "Saputara",
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-white/60"
                                >

                                    <FiCompass className="text-yellow-400" />

                                    {item}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* ================================= */}
                    {/* CTA */}
                    {/* ================================= */}

                    <div className="mt-20 text-center">

                        <div className="inline-flex flex-col items-center">

                            <div className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-3 text-[11px] uppercase tracking-[0.35em] text-yellow-400">

                                Custom Trips Available
                            </div>

                            <h3 className="mt-8 text-3xl font-light leading-tight md:text-5xl">

                                Explore Maharashtra
                                <span className="block italic text-yellow-400">
                                    Your Way
                                </span>
                            </h3>

                            <p className="mt-6 max-w-2xl text-base leading-8 text-white/55 md:text-lg">

                                Family tours, spiritual journeys, group trips,
                                weekend getaways, and premium road experiences
                                designed around your comfort and destination preferences.
                            </p>

                            <motion.button
                                whileHover={{
                                    scale: 1.03,
                                }}
                                whileTap={{
                                    scale: 0.97,
                                }}
                                className="mt-10 flex items-center gap-3 rounded-full border border-yellow-500/20 bg-yellow-500 px-6 py-4 text-xs font-medium uppercase tracking-[0.25em] text-black shadow-[0_0_30px_rgba(250,204,21,0.18)]"
                            >

                                Plan Your Journey

                                <FiMapPin />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================= */}
            {/* MODAL */}
            {/* ================================= */}

            <DestinationModal
                destination={selectedDestination}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
}