import { AnimeHero } from "@/components/anime-hero";
import { AnimeCharacters } from "@/components/anime-characters";
import { AnimeEpisodes } from "@/components/anime-episodes";
import { AnimeTransformations } from "@/components/anime-transformations";
import { AnimeFooter } from "@/components/anime-footer";

export default function Home() {
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
