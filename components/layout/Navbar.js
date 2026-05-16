"use client";

import { motion } from "framer-motion";

import {
    HiOutlineHome,
    HiOutlineUser,
    HiOutlineBriefcase,
    HiOutlinePhotograph,
    HiOutlinePhone,
} from "react-icons/hi";

export default function Navbar() {
    const navItems = [
        {
            name: "Home",
            icon: <HiOutlineHome />,
        },

        {
            name: "About",
            icon: <HiOutlineUser />,
        },

        {
            name: "Services",
            icon: <HiOutlineBriefcase />,
        },

        {
            name: "Gallery",
            icon: <HiOutlinePhotograph />,
        },

        {
            name: "Contact",
            icon: <HiOutlinePhone />,
        },
    ];

    return (
        <>
            {/* ========================= */}
            {/* Desktop Premium Navbar */}
            {/* ========================= */}

            <header className="fixed top-0 left-0 z-50 hidden w-full lg:block">

                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent blur-3xl"></div>

                <div className="container-custom relative">

                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mt-6 flex h-20 items-center justify-between rounded-3xl border border-white/10 bg-black/30 px-8 backdrop-blur-2xl"
                    >

                        {/* Logo */}
                        <div className="relative">

                            <div className="absolute -inset-3 rounded-full bg-yellow-500/20 blur-3xl"></div>

                            <div className="relative">
                                <h1 className="text-2xl font-bold tracking-wide text-white">
                                    Shree Swami Samartha
                                </h1>

                                <p className="mt-1 text-xs uppercase tracking-[0.4em] text-yellow-400">
                                    Tours & Travels
                                </p>
                            </div>
                        </div>

                        {/* Navigation */}
                        <nav className="flex items-center gap-10">

                            {navItems.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ y: -3 }}
                                    className="group relative text-sm font-medium text-white/70 transition"
                                >

                                    {item.name}

                                    {/* Hover Line */}
                                    <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>

                                    {/* Glow */}
                                    <span className="absolute inset-0 rounded-full bg-yellow-400/0 blur-xl transition-all duration-500 group-hover:bg-yellow-400/10"></span>
                                </motion.a>
                            ))}
                        </nav>

                        {/* CTA */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-full bg-yellow-500 px-7 py-3 text-sm font-semibold text-black shadow-[0_0_30px_rgba(250,204,21,0.35)] transition"
                        >
                            Book Now
                        </motion.button>
                    </motion.div>
                </div>
            </header>

            {/* ========================= */}
            {/* Mobile Bottom App Navbar */}
            {/* ========================= */}

            <div className="fixed bottom-5 left-1/2 z-50 w-[95%] max-w-md -translate-x-1/2 lg:hidden">

                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-3xl"></div>

                <motion.div
                    initial={{ y: 120, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-3xl"
                >

                    {navItems.map((item, index) => (
                        <motion.a
                            key={index}
                            href="#"
                            whileTap={{ scale: 0.9 }}
                            className="group relative flex flex-col items-center gap-1"
                        >

                            {/* Icon */}
                            <div className="relative">

                                {/* Active Glow */}
                                <div className="absolute inset-0 rounded-full bg-yellow-400/0 blur-xl transition-all duration-500 group-hover:bg-yellow-400/30"></div>

                                <div className="relative text-2xl text-white/70 transition group-hover:text-yellow-400">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Label */}
                            <span className="text-[10px] font-medium text-white/50 transition group-hover:text-yellow-400">
                                {item.name}
                            </span>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </>
    );
}