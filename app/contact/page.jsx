import ContactHero from "@/components/contact/ContactHero";

import ContactCards from "@/components/contact/ContactCards";

import BookingForm from "@/components/contact/BookingForm";

import FAQSection from "@/components/contact/FAQSection";

import MapSection from "@/components/contact/MapSection";

export const metadata = {
    title: "Contact Us | Shree Swami Samartha Tours & Travels",

    description:
        "Contact Shree Swami Samartha Tours & Travels for premium Maharashtra & Goa travel experiences, group tours, spiritual journeys, and luxury road trips.",

    keywords: [
        "Maharashtra Tours",
        "Goa Tours",
        "Traveller Booking",
        "Tours and Travels",
        "Ghoti Travels",
        "Luxury Group Travel",
        "Road Trips Maharashtra",
    ],
};

export default function ContactPage() {

    return (
        <main className="min-h-screen overflow-hidden bg-black text-white">

            {/* ================================= */}
            {/* HERO */}
            {/* ================================= */}

            <ContactHero />

            {/* ================================= */}
            {/* CONTACT CARDS */}
            {/* ================================= */}

            <ContactCards />

            {/* ================================= */}
            {/* BOOKING FORM */}
            {/* ================================= */}

            <BookingForm />

            {/* ================================= */}
            {/* FAQ */}
            {/* ================================= */}

            <FAQSection />

            {/* ================================= */}
            {/* MAP */}
            {/* ================================= */}

            <MapSection />
        </main>
    );
}