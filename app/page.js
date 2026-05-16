import Hero from "@/components/Hero";
import ExperienceSection from "@/components/sections/ExperienceSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* <Navbar /> */}
      <Hero />
      <ExperienceSection />
    </main>
  );
}