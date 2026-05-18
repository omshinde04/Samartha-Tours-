"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { HiOutlineXMark, HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";
import { getImages } from "@/lib/galleryApi";

/* ─────────────────────────────────────────────
   Magnetic cursor dot
───────────────────────────────────────────── */
function CursorDot() {
    const dot = useRef(null);
    const ring = useRef(null);
    const pos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e) => {
            pos.current = { x: e.clientX, y: e.clientY };
            if (dot.current) {
                dot.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
            }
        };
        window.addEventListener("mousemove", move);

        let raf;
        const lerp = (a, b, t) => a + (b - a) * t;
        const tick = () => {
            ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.12);
            ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.12);
            if (ring.current) {
                ring.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
            }
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("mousemove", move);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <>
            <div
                ref={dot}
                className="pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-[#d4af37] mix-blend-difference"
                style={{ willChange: "transform" }}
            />
            <div
                ref={ring}
                className="pointer-events-none fixed top-0 left-0 z-[9998] w-10 h-10 rounded-full border border-[#d4af37]/50 mix-blend-difference"
                style={{ willChange: "transform" }}
            />
        </>
    );
}

/* ─────────────────────────────────────────────
   Scroll-reveal wrapper
───────────────────────────────────────────── */
function RevealOnScroll({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.08 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px) scale(1)" : "translateY(48px) scale(0.97)",
                transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
            }}
        >
            {children}
        </div>
    );
}

/* ─────────────────────────────────────────────
   Gallery card
───────────────────────────────────────────── */
function GalleryCard({ image, index, onClick }) {
    const ref = useRef(null);

    const handleMouseMove = useCallback((e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
        el.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-6px)`;
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (ref.current) {
            ref.current.style.transform =
                "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0px)";
        }
    }, []);

    return (
        <RevealOnScroll delay={Math.min(index * 0.04, 0.35)} className="break-inside-avoid mb-5">
            <div
                ref={ref}
                onClick={onClick}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative overflow-hidden rounded-[20px] cursor-pointer group border border-white/[0.07] bg-white/[0.02]"
                style={{ transition: "transform 0.15s ease", willChange: "transform" }}
            >
                {/* shimmer sweep */}
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-[20px]">
                    <div className="absolute top-0 left-[-100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent group-hover:left-[160%] transition-all duration-[900ms] ease-in-out" />
                </div>

                <div className="relative overflow-hidden">
                    <Image
                        src={image.src}
                        alt={image.title}
                        width={1000}
                        height={1400}
                        className="w-full h-auto object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.07]"
                    />

                    {/* gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />

                    {/* noise grain */}
                    <div
                        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                        }}
                    />

                    {/* card content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-[9px] uppercase tracking-[0.28em] px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/25 text-[#d4af37]">
                                {image.category}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-white/30" />
                            <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-light tracking-wide leading-tight">
                            {image.title}
                        </h3>
                        <div className="mt-3 w-0 h-px bg-[#d4af37]/60 group-hover:w-16 transition-all duration-500 ease-out" />
                    </div>

                    {/* corner bracket */}
                    <div className="absolute top-4 right-4 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute top-0 right-0 w-full h-px bg-[#d4af37]/60" />
                        <div className="absolute top-0 right-0 w-px h-full bg-[#d4af37]/60" />
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    );
}

/* ─────────────────────────────────────────────
   Lightbox
───────────────────────────────────────────── */
function Lightbox({ images, index, onClose, onPrev, onNext }) {
    const image = images[index];

    useEffect(() => {
        const handler = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") onPrev();
            if (e.key === "ArrowRight") onNext();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose, onPrev, onNext]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[999] flex items-center justify-center"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/98 backdrop-blur-2xl"
                onClick={onClose}
            />

            {/* Gold top line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

            {/* Counter */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-white/40 z-10">
                {String(index + 1).padStart(2, "0")} &nbsp;/&nbsp; {String(images.length).padStart(2, "0")}
            </div>

            {/* Close */}
            <button
                onClick={onClose}
                className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center hover:bg-white/10 hover:border-[#d4af37]/40 transition-all duration-200 group"
            >
                <HiOutlineXMark className="text-xl text-white/70 group-hover:text-white transition-all duration-300 group-hover:rotate-90" />
            </button>

            {/* Prev */}
            <button
                onClick={onPrev}
                className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center hover:bg-white/10 hover:border-[#d4af37]/40 transition-all duration-200 group"
            >
                <HiOutlineArrowLeft className="text-xl text-white/70 group-hover:text-white group-hover:-translate-x-0.5 transition-all duration-200" />
            </button>

            {/* Next */}
            <button
                onClick={onNext}
                className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center hover:bg-white/10 hover:border-[#d4af37]/40 transition-all duration-200 group"
            >
                <HiOutlineArrowRight className="text-xl text-white/70 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
            </button>

            {/* Main image */}
            <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.93, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.03, y: -12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full max-w-5xl mx-4 md:mx-20"
            >
                <div className="relative w-full h-[72vh] rounded-2xl overflow-hidden border border-white/[0.06]">
                    <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-contain"
                        priority
                    />
                    {/* info bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.5 }}
                        className="absolute bottom-0 left-0 right-0 px-8 py-6 bg-gradient-to-t from-black/90 to-transparent"
                    >
                        <div className="flex items-end justify-between">
                            <div>
                                <p className="text-[9px] tracking-[0.3em] uppercase text-[#d4af37]/70 mb-1">
                                    {image.category}
                                </p>
                                <h2 className="text-2xl md:text-3xl font-light tracking-wide">{image.title}</h2>
                            </div>
                            {/* dot strip — only show up to 20 to avoid overflow */}
                            <div className="hidden md:flex gap-1 flex-wrap max-w-[200px] justify-end">
                                {images.slice(0, 20).map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-1 rounded-full transition-all duration-300 ${i === index ? "bg-[#d4af37] h-4" : "bg-white/20 h-1"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Thumbnail strip */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2 overflow-x-auto max-w-[90vw] px-2 pb-1"
                style={{ scrollbarWidth: "none" }}
            >
                {images.map((img, i) => (
                    <motion.button
                        key={img.id}
                        whileHover={{ scale: 1.12, y: -2 }}
                        onClick={(e) => { e.stopPropagation(); }}
                        className={`relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 ${i === index
                            ? "border-[#d4af37] opacity-100"
                            : "border-white/10 opacity-40 hover:opacity-70"
                            }`}
                    >
                        <Image src={img.src} alt={img.title} fill className="object-cover" />
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────────
   Animated counter
───────────────────────────────────────────── */
function AnimatedNumber({ n }) {
    const [displayed, setDisplayed] = useState(0);

    useEffect(() => {
        let current = 0;
        const duration = 1200;
        const start = performance.now();
        const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            current = Math.round(ease * n);
            setDisplayed(current);
            if (progress < 1) requestAnimationFrame(step);
        };
        const t = setTimeout(() => requestAnimationFrame(step), 700);
        return () => clearTimeout(t);
    }, [n]);

    return <>{displayed}</>;
}

/* ─────────────────────────────────────────────
   Category filter bar
───────────────────────────────────────────── */
function CategoryFilter({ categories, active, onChange }) {
    return (
        <div className="flex items-center gap-2 flex-wrap justify-center px-4">
            <button
                onClick={() => onChange("All")}
                className={`text-[9px] uppercase tracking-[0.28em] px-4 py-2 rounded-full border transition-all duration-300 ${active === "All"
                    ? "bg-[#d4af37]/20 border-[#d4af37]/50 text-[#d4af37]"
                    : "border-white/10 text-white/30 hover:border-white/20 hover:text-white/60"
                    }`}
            >
                All
            </button>
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onChange(cat)}
                    className={`text-[9px] uppercase tracking-[0.28em] px-4 py-2 rounded-full border transition-all duration-300 ${active === cat
                        ? "bg-[#d4af37]/20 border-[#d4af37]/50 text-[#d4af37]"
                        : "border-white/10 text-white/30 hover:border-white/20 hover:text-white/60"
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}

/* ─────────────────────────────────────────────
   Main Page
───────────────────────────────────────────── */
export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({ target: containerRef });
    const heroY = useTransform(scrollYProgress, [0, 0.3], ["0%", "28%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);

    const allImages = getImages();
    const categories = [...new Set(allImages.map((img) => img.category))];

    const filteredImages =
        activeCategory === "All"
            ? allImages
            : allImages.filter((img) => img.category === activeCategory);

    const prev = useCallback(
        () => setSelectedImage((i) => (i === null ? null : i === 0 ? filteredImages.length - 1 : i - 1)),
        [filteredImages.length]
    );
    const next = useCallback(
        () => setSelectedImage((i) => (i === null ? null : i === filteredImages.length - 1 ? 0 : i + 1)),
        [filteredImages.length]
    );

    // True masonry: distribute into 4 cols by index
    const COLS = 4;
    const masonryColumns = Array.from({ length: COLS }, () => []);
    filteredImages.forEach((img, i) => masonryColumns[i % COLS].push({ img, globalIdx: i }));

    return (
        <main
            ref={containerRef}
            className="min-h-screen bg-[#060606] text-white overflow-x-hidden cursor-none"
        >
            <CursorDot />

            {/* ── SCROLL PROGRESS ── */}
            <motion.div
                className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-[#d4af37] via-[#f5d97a] to-[#d4af37] z-[200] origin-left"
                style={{ scaleX: scrollYProgress }}
            />

            {/* ── HERO ── */}
            <section className="relative min-h-[88svh] md:h-screen flex flex-col justify-end overflow-hidden">
                {/* ambient glows */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#d4af37]/[0.04] blur-[120px]" />
                    <div className="absolute bottom-0 right-1/3 w-[500px] h-[400px] rounded-full bg-[#d4af37]/[0.03] blur-[100px]" />
                </div>

                {/* vertical rule */}
                <div className="absolute left-6 md:left-12 top-24 bottom-24 w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />

                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="relative z-10 px-6 md:px-16 lg:px-24 pb-12 md:pb-28 pt-24 md:pt-0"
                >
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[9px] md:text-[10px] tracking-[0.5em] uppercase text-[#d4af37]/60 mb-6 flex items-center gap-4"
                    >
                        <span className="w-8 h-px bg-[#d4af37]/40" />
                        Luxury Travel Gallery
                        <span className="w-8 h-px bg-[#d4af37]/40" />
                    </motion.p>

                    {["Moments", "Beyond", "The Journey"].map((word, i) => (
                        <div key={word} className="overflow-hidden">
                            <motion.h1
                                initial={{ y: "110%" }}
                                animate={{ y: "0%" }}
                                transition={{ duration: 1.1, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                                className={`text-[clamp(2.8rem,9.5vw,8.5rem)] font-light leading-[0.92] tracking-tight ${i === 1 ? "text-[#d4af37] italic pl-[0.08em]" : i === 2 ? "pl-[0.16em]" : ""
                                    }`}
                            >
                                {word}
                            </motion.h1>
                        </div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="mt-10 flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-16"
                    >
                        <p className="max-w-sm text-white/35 text-sm leading-7 font-light">
                            A cinematic collection of journeys, landscapes, road trips, and spiritual destinations across Maharashtra & Goa.
                        </p>
                        <div className="flex gap-8">
                            <div className="text-center">
                                <p className="text-3xl font-light text-[#d4af37]">
                                    <AnimatedNumber n={allImages.length} />
                                </p>
                                <p className="text-[9px] tracking-[0.3em] uppercase text-white/25 mt-1">Images</p>
                            </div>
                            <div className="w-px bg-white/10" />
                            <div className="text-center">
                                <p className="text-3xl font-light text-[#d4af37]">
                                    <AnimatedNumber n={categories.length} />
                                </p>
                                <p className="text-[9px] tracking-[0.3em] uppercase text-white/25 mt-1">Categories</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="absolute bottom-8 right-8 flex flex-col items-center gap-2 z-10"
                >
                    <p
                        className="text-[8px] tracking-[0.4em] uppercase text-white/20"
                        style={{ writingMode: "vertical-rl" }}
                    >
                        Scroll
                    </p>
                    <motion.div
                        animate={{ scaleY: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-px h-10 bg-gradient-to-b from-[#d4af37]/50 to-transparent origin-top"
                    />
                </motion.div>
            </section>

            {/* ── MARQUEE ── */}
            <div className="border-y border-white/[0.05] py-4 overflow-hidden bg-white/[0.01]">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="flex gap-12 whitespace-nowrap"
                >
                    {[...Array(8)].map((_, i) => (
                        <span
                            key={i}
                            className="text-[9px] tracking-[0.45em] uppercase text-white/15 flex items-center gap-10"
                        >
                            Maharashtra <span className="text-[#d4af37]/30">◆</span> Goa{" "}
                            <span className="text-[#d4af37]/30">◆</span> Road Trips{" "}
                            <span className="text-[#d4af37]/30">◆</span> Landscapes{" "}
                            <span className="text-[#d4af37]/30">◆</span> Spiritual{" "}
                            <span className="text-[#d4af37]/30">◆</span> Nature
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* ── FILTER ── */}
            <RevealOnScroll className="py-10 border-b border-white/[0.05]">
                <CategoryFilter
                    categories={categories}
                    active={activeCategory}
                    onChange={(cat) => {
                        setActiveCategory(cat);
                        setSelectedImage(null);
                    }}
                />
            </RevealOnScroll>

            {/* ── GALLERY ── */}
            <section className="px-3 md:px-6 lg:px-8 py-12">
                {/* Mobile (< sm): single column */}
                <div className="block sm:hidden">
                    <div className="flex flex-col gap-4">
                        {filteredImages.map((image, index) => (
                            <GalleryCard
                                key={image.id}
                                image={image}
                                index={index}
                                onClick={() => setSelectedImage(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Tablet (sm → xl): 2 columns */}
                <div className="hidden sm:block xl:hidden">
                    <div className="flex gap-4">
                        {[0, 1].map((colIdx) => (
                            <div key={colIdx} className="flex-1 flex flex-col gap-4">
                                {filteredImages
                                    .filter((_, i) => i % 2 === colIdx)
                                    .map((image, rowIdx) => (
                                        <GalleryCard
                                            key={image.id}
                                            image={image}
                                            index={rowIdx * 2 + colIdx}
                                            onClick={() => setSelectedImage(rowIdx * 2 + colIdx)}
                                        />
                                    ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop (xl+): 4-column true masonry */}
                <div className="hidden xl:flex gap-5">
                    {masonryColumns.map((col, colIdx) => (
                        <div key={colIdx} className="flex-1 flex flex-col gap-5">
                            {col.map(({ img, globalIdx }) => (
                                <GalleryCard
                                    key={img.id}
                                    image={img}
                                    index={globalIdx}
                                    onClick={() => setSelectedImage(globalIdx)}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                {/* Empty state */}
                {filteredImages.length === 0 && (
                    <div className="text-center py-32 text-white/20">
                        <p className="text-sm tracking-[0.3em] uppercase">No images in this category</p>
                    </div>
                )}
            </section>

            {/* ── QUOTE ── */}
            <RevealOnScroll>
                <section className="py-32 px-6 border-t border-white/[0.05]">
                    <div className="max-w-5xl mx-auto text-center">
                        <p className="text-[10px] tracking-[0.5em] uppercase text-[#d4af37]/40 mb-8">
                            — A traveller&apos;s truth —
                        </p>
                        <p className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.2] text-white/80">
                            &ldquo;Every road carries
                            <span className="text-[#d4af37] italic"> a memory.&rdquo;</span>
                        </p>
                        <div className="mt-12 w-20 h-px bg-[#d4af37]/30 mx-auto" />
                    </div>
                </section>
            </RevealOnScroll>

            {/* ── LIGHTBOX ── */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <Lightbox
                        images={filteredImages}
                        index={selectedImage}
                        onClose={() => setSelectedImage(null)}
                        onPrev={prev}
                        onNext={next}
                    />
                )}
            </AnimatePresence>
        </main>
    );
}