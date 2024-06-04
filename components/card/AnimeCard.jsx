import Image from "next/image";
import { MdLayers } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import React from "react";
import Link from "next/link";

const AnimeCard = ({ data, main_url }) => {
  return (
    <div className="rounded relative w-full" key={data.animeMalId}>
      <Link href={`${main_url}/${data.mal_id || data.animeMalId}`}>
        <div className="relative w-full h-64">
          <Image
            src={data.images?.webp.image_url || data.image}
            alt={data.title}
            fill
            sizes="large"
            className="rounded-xl"
          />
        </div>
        <div className="py-4 flex flex-col gap-3">
          <div className="flex justify-between items-center gap-1">
            <h2 className="font-bold text-white text-xl truncate w-full">
              {data.title}
            </h2>
            <div className="py-1 px-2 bg-[#161921] rounded-sm">
              <p className="text-white text-sm font-bold capitalize">
                {data.type ? data.type : "TV"}
              </p>
            </div>
          </div>
          {data.episodes ? (
            <div className="flex gap-4 items-center">
              <div className="flex flex-row gap-2 items-center">
                <MdLayers className="text-primary" />
                <p className="text-base text-white font-bold">
                  {data.episodes || data.episodes_aired}
                </p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <FaRegStar className="text-[#FFAD49]" />
                <p className="text-base font-bold text-[#FFAD49]">
                  {data.score}
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </Link>
    </div>
  );
};

export default AnimeCard;
