import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimeCard from "../card/AnimeCard";

const AnimeList = ({ title, show_all_url, maim_url, data }) => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="w-full px-4 flex justify-between items-baseline mb-5">
          <div className="flex">
            <h1 className="font-bold text-2xl capitalize">{title}</h1>
          </div>
          {show_all_url ? (
            <Link
              href={show_all_url}
              className="text-sm text-primary hover:underline"
            >
              Show All
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className="w-full px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {data?.map((data) => (
            <AnimeCard data={data} key={data.mal_id} main_url={maim_url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimeList;
