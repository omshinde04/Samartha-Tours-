"use client";

/**
 * =========================================================
 * FAQ SECTION
 * Premium FAQ Experience
 * Production Grade
 * =========================================================
 *
 * Create File:
 * components/contact/FAQSection.jsx
 *
 * Usage:
 * <FAQSection />
 *
 */

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
    FiPlus,
    FiMinus,
} from "react-icons/fi";

export default function FAQSection() {

    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "Do you provide trips across Maharashtra & Goa?",

            answer:
                "Yes. We provide premium travel experiences across Maharashtra & Goa including spiritual destinations, road trips, group tours, waterfalls, trekking destinations, and weekend getaways.",
        },

        {
            question: "Is the traveller fully air conditioned?",

            answer:
                "Yes. Our premium traveller includes comfortable seating, air conditioning, smooth travel experience, and ideal arrangements for long-distance group journeys.",
        },

        {
            question: "Can we customize our travel plan?",

            answer:
                "Absolutely. We create custom travel experiences based on your preferred destinations, travel dates, group size, and journey requirements.",
        },

        {
            question: "Do you provide pickup & drop services?",

            answer:
                "Yes. Pickup and drop services are available depending on your travel route and booking requirements across Maharashtra & Goa.",
        },

        {
            question: "How can we confirm our booking?",

            answer:
                "You can contact us directly through WhatsApp, phone call, or the booking form. Our team will assist you with travel planning and booking confirmation.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="relative overflow-hidden bg-black py-20 text-white md:py-28">

            {/* ================================= */}
            {/* Ambient Glow */}
            {/* ================================= */}

            <div className="absolute inset-0 overflow-hidden">

                <div className="absolute left-[-10%] top-0 h-[300px] w-[300px] rounded-full bg-yellow-500/10 blur-3xl"></div>

                <div className="absolute bottom-0 right-[-10%] h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-3xl"></div>
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
                            Frequently Asked Questions
                        </span>

                        <div className="h-[1px] w-10 bg-yellow-400"></div>
                    </div>

                    <h2 className="text-4xl font-light leading-tight sm:text-5xl md:text-6xl">

                        Everything You
                        <span className="block italic text-yellow-400">
                            Need To Know
                        </span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/55 md:text-lg">

                        Find answers about bookings, destinations,
                        group tours, premium travel experiences,
                        and customized Maharashtra & Goa journeys.
                    </p>
                </div>

                {/* ================================= */}
                {/* FAQ LIST */}
                {/* ================================= */}

                <div className="mx-auto mt-16 max-w-4xl space-y-4">

                    {faqs.map((faq, index) => {

                        const isOpen = activeIndex === index;

                        return (
                            <motion.div
                                key={index}
                                layout
                                transition={{
                                    duration: 0.35,
                                }}
                                className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
                            >

                                {/* ================================= */}
                                {/* Question */}
                                {/* ================================= */}

                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-8"
                                >

                                    <h3 className="text-lg font-light leading-8 text-white md:text-xl">

                                        {faq.question}
                                    </h3>

                                    {/* Icon */}
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/30 text-yellow-400">

                                        {isOpen ? (
                                            <FiMinus size={18} />
                                        ) : (
                                            <FiPlus size={18} />
                                        )}
                                    </div>
                                </button>

                                {/* ================================= */}
                                {/* Answer */}
                                {/* ================================= */}

                                <AnimatePresence>

                                    {isOpen && (

                                        <motion.div
                                            initial={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                            }}
                                            className="overflow-hidden"
                                        >

                                            <div className="border-t border-white/10 px-6 pb-6 pt-6 md:px-8">

                                                <p className="max-w-3xl text-sm leading-8 text-white/60 md:text-base">

                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* ================================= */}
                {/* Bottom CTA */}
                {/* ================================= */}

                <div className="mt-16 text-center">

                    <p className="text-sm text-white/45 md:text-base">

                        Still have questions? Contact us directly for personalized travel assistance.
                    </p>
                </div>
            </div>
        </section>
    );
}