/**
 * app/about/page.js
 * About Page — Shree Swami Samartha Tours & Travels
 *
 * Import paths match exact filenames saved on disk:
 *   Abouthero.jsx
 *   Founderstory.jsx
 *   Visionsection.jsx
 *   Journeysection.jsx
 *   Trustsection.jsx
 *   Aboutquote.jsx
 *   Aboutcta.jsx
 */

import AboutHero from "@/components/about/Abouthero";
import FounderStory from "@/components/about/Founderstory";
import VisionSection from "@/components/about/Visionsection";
import JourneySection from "@/components/about/Journeysection";
import TrustSection from "@/components/about/Trustsection";
import AboutQuote from "@/components/about/Aboutquote";
import AboutCTA from "@/components/about/Aboutcta";

export const metadata = {
    title: "About Us — Shree Swami Samartha Tours & Travels",
    description:
        "More than travel — it's about trust. Meet Om Vilas Shinde and the story behind Shree Swami Samartha Tours & Travels, Maharashtra's comfort-first travel partner.",
};

export default function AboutPage() {
    return (
        <main
            style={{
                background: "#0e0d0b",
                minHeight: "100vh",
                color: "#f5f0e8",
                overflowX: "hidden",
            }}
        >
            <AboutHero />
            <FounderStory />
            <VisionSection />
            <JourneySection />
            <TrustSection />
            <AboutQuote />
            <AboutCTA />
        </main>
    );
}