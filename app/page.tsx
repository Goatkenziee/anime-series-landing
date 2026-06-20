import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SynopsisSection from "@/components/SynopsisSection";
import CharactersSection from "@/components/CharactersSection";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#0a0a1a] text-white overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <SynopsisSection />
      <CharactersSection />
    </main>
  );
}
