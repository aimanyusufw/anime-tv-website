import AnimeList from "@/components/List/AnimeList";
import AnimeCta from "@/components/card/AnimeCta";
import HeroSection from "@/components/home/HeroSection";
import { fetchApi, fetchNestedAnime } from "@/lib/api-lib";

export default async function Home() {
  const topAnime = await fetchApi("top/anime", "limit=8");
  let recomendAnime = await fetchNestedAnime("recommendations/anime", "entry");
  const topManga = await fetchApi("top/manga", "limit=6");

  const startRandom = Math.floor(
    Math.random() * (recomendAnime.length - 6) + 0
  );

  recomendAnime = { data: recomendAnime.slice(startRandom, startRandom + 6) };

  const heroData = topAnime.data[4];

  const animeCta = topAnime.data[5];

  const animeListData = topAnime.data.filter(
    (_, index) => index !== 5 && index !== 4
  );

  return (
    <>
      <HeroSection api={heroData} />
      <AnimeList
        title={"Top Anime"}
        show_all_url={"/anime"}
        maim_url={"/anime"}
        data={animeListData}
      />
      <AnimeList
        title={"Top Manga"}
        show_all_url={"/manga"}
        maim_url={"/manga"}
        data={topManga.data}
      />
      <AnimeList
        title={"Recomend Anime"}
        maim_url={"/anime"}
        show_all_url={"/anime"}
        data={recomendAnime.data}
      />
      <AnimeCta data={animeCta} />
    </>
  );
}
