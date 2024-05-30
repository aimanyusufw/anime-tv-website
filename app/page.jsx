import AnimeList from "@/components/home/AnimeList";
import HeroSection from "@/components/home/HeroSection";
import { fetchApi } from "@/lib/api-lib";

export default async function Home() {
  const topAnime = await fetchApi("top/anime", "limit=7");

  const randomIndex = Math.floor(Math.random() * topAnime.data.length);

  const heroData = topAnime.data[randomIndex];

  const animeListData = topAnime.data.filter(
    (_, index) => index !== randomIndex
  );

  return (
    <>
      <HeroSection api={heroData} />
      <AnimeList
        title={"Top Anime"}
        show_all_url={"/anime"}
        data={animeListData}
      />
    </>
  );
}
