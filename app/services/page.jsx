/**
 * app/services/page.jsx
 * Services Page — Shree Swami Samartha Tours & Travels
 *
 * Component files go to: components/services/
 * Filenames MUST match exactly (lowercase after capital matters on Linux):
 *
 *   components/services/ServicesHero.jsx
 *   components/services/ServicesIntro.jsx
 *   components/services/ServicesGrid.jsx
 *   components/services/PricingSection.jsx
 *   components/services/JourneySection.jsx
 *   components/services/WhyChooseUs.jsx
 *   components/services/ServiceProcess.jsx
 *   components/services/ServicesCTA.jsx
 *
 * If your file system saves as lowercase (e.g. Serviceshero.jsx),
 * update each import path to match the actual filename exactly.
 */

import ServicesHero from "@/components/services/ServicesHero";
import ServicesIntro from "@/components/services/ServicesIntro";
import ServicesGrid from "@/components/services/ServicesGrid";
import PricingSection from "@/components/services/PricingSection";
import JourneySection from "@/components/services/JourneySection";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata = {
    title: "Services — Shree Swami Samartha Tours & Travels",
    description:
        "Custom tours, temple circuits, weekend getaways, one-day rentals, wedding transport, airport transfers & corporate travel across Maharashtra. Based in Ghoti.",
};

export default function ServicesPage() {
    return (
        <main style={{
            background: "#0e0d0b",
            minHeight: "100vh",
            color: "#f5f0e8",
            overflowX: "hidden",
        }}>

            {/* 1. Cinematic hero */}
            <ServicesHero />

            {/* 2. Brand intro + stats */}
            <ServicesIntro />

            {/* 3. All 7 services in editorial grid */}
            <ServicesGrid />

            {/* 4. Transparent pricing blocks */}
            <PricingSection />

            {/* 5. Cinematic road journey storytelling */}
            <JourneySection />

            {/* 6. Why choose us — editorial trust strips */}
            <WhyChooseUs />

            {/* 7. 4-step booking process */}
            <ServiceProcess />

            {/* 8. Final CTA */}
            <ServicesCTA />

        </main>
    );
}