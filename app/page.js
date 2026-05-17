import Hero from "@/components/Hero";
import ExperienceSection from "@/components/sections/ExperienceSection";
import FleetSection from "@/components/sections/FleetSection";
import DestinationsSection from "@/components/sections/DestinationsSection";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <Navbar />
      <Hero />
      <ExperienceSection />
      {/* <DestinationsSection /> */}
      <FleetSection />
    </main>
  );
}