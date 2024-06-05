import YoutubePlayer from "@/components/utils/YoutubePlayer";
import { fetchApi } from "@/lib/api-lib";
import React from "react";
import { IoLayers } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { GrStatusGoodSmall } from "react-icons/gr";
import Link from "next/link";
import BackButton from "@/components/utils/BackButton";
import AddToCollectionButton from "@/components/utils/addToCollectionButton";
import { authUserSession } from "@/lib/user-data-lib";
import prisma from "@/lib/prisma";
import CommentInput from "@/components/Input/CommentInput";
import CommentList from "@/components/List/CommentList";

const Page = async ({ params }) => {
  const anime = await fetchApi(`anime/${params.mal_id}`);
  const user = await authUserSession();

  const animeMalId = anime.data.mal_id;

  const allComents = await prisma.comment.findMany({
    orderBy: [
      {
        id: "desc",
      },
    ],
    where: {
      animeMalId,
    },
    include: {
      user: true,
    },
  });

  const addCollectData = {
    animeMalId,
    title: anime.data.title,
    image: anime.data.images.webp.image_url,
    episodes: anime.data.episodes,
    score: anime.data.score,
    userId: user?.id,
  };

  return (
    <section className="min-h-screen">
      {anime.status === 404 ? (
        <div className="w-full h-full py-40  flex justify-center items-center flex-col">
          <h1 className="font-medium text-2xl text-white mb-5">
            404 | Not Found
          </h1>
          <Link href={"/"} className="underline text-slate-500 text-xs">
            Back to your prevent page
          </Link>
        </div>
      ) : (
        <div className="container">
          <div className="w-full md:w-3/4 mx-auto px-4 py-40 ">
            <BackButton />
            <YoutubePlayer
              videoId={anime.data.trailer.youtube_id}
              opts={{ width: "100%", height: "100%" }}
            />
            <div className="flex justify-between items-center">
              <div className="w-4/5">
                <h1 className="mt-5 mb-3 font-semibold text-3xl truncate">
                  {anime.data.title}
                </h1>
                <span className="text-sm">
                  {anime.data.aired.string} · ⭐ {anime.data.score} · 🏆{" "}
                  {anime.data.rank}
                </span>
              </div>
              {user?.id ? <AddToCollectionButton data={addCollectData} /> : ""}
            </div>
            <div className="flex gap-5 my-5">
              {anime.data.genres.map((data, i) => (
                <span
                  key={i}
                  className="px-5 py-3 rounded-full border border-primary text-primary text-sm"
                >
                  {data.name}
                </span>
              ))}
            </div>
            <h3 className="font-medium mb-3">Detail :</h3>
            <div className="mb-5 flex gap-2">
              <div
                className="px-5 py-3 flex gap-2 text-sm font-medium  items-center rounded-full border "
                title="Episodes"
              >
                <IoLayers />
                {anime.data.episodes || "N/A"}
              </div>
              <div
                className="px-5 py-3 flex gap-2 text-sm font-medium  items-center rounded-full border"
                title="Category"
              >
                <BiSolidCategory />
                {anime.data.type || "N/A"}
              </div>
              <div
                className="px-5 py-3 flex gap-2 text-sm font-medium  items-center rounded-full border"
                title="Status"
              >
                <GrStatusGoodSmall
                  className={`${
                    anime.data.airing ? "text-green-500" : "text-red-500"
                  } `}
                />
                {anime.data.status}
              </div>
            </div>
            <h3 className="font-bold text-xl mb-3">Synopsis :</h3>
            <p className="text-sm text-white mb-8 leading-relaxed">
              {anime.data.synopsis || "N/A"}
            </p>
            <h1 className="font-bold text-xl mb-5">Reply :</h1>
            <CommentList allComents={allComents} />
            <CommentInput
              animeMalId={anime.data.mal_id}
              animeTitle={anime.data.title}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Page;
