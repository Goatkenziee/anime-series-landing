import { AnimeHero } from "@/components/anime-hero";
import { AnimeCharacters } from "@/components/anime-characters";
import { AnimeTransformations } from "@/components/anime-transformations";
import { AnimeEpisodes } from "@/components/anime-episodes";
import { AnimeFooter } from "@/components/anime-footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimeHero />
      <AnimeCharacters />
      <AnimeTransformations />
      <AnimeEpisodes />
      <AnimeFooter />
    </main>
  );
}
