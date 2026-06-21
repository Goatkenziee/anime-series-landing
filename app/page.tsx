import { AnimeHero } from "@/components/anime-hero";
import { AnimeCharacters } from "@/components/anime-characters";
import { AnimeEpisodes } from "@/components/anime-episodes";
import { AnimeTransformations } from "@/components/anime-transformations";
import { AnimeFooter } from "@/components/anime-footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Something went wrong!</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a1a] to-black overflow-hidden">
      <AnimeHero />
      <AnimeCharacters />
      <AnimeTransformations />
      <AnimeEpisodes />
      <AnimeFooter />
    </main>
  );
}
