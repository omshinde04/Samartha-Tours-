import Hero from "@/components/Hero";
import ExperienceSection from "@/components/sections/ExperienceSection";
import FleetSection from "@/components/sections/FleetSection";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* <Navbar /> */}
      <Hero />
      <ExperienceSection />
      <FleetSection />
    </main>
  );
}