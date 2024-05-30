import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimeList = ({ title, show_all_url, data }) => {
  return (
    <section id={title} className="py-10">
      <div className="container">
        <div className="w-full px-4 flex justify-between items-baseline mb-10">
          <h1 className="font-bold text-xl">{title}</h1>
          <Link
            href={show_all_url}
            className="text-sm text-primary hover:underline"
          >
            Show All
          </Link>
        </div>
        <div className="w-full px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
          {data.map((data) => (
            <div key={data.mal_id} className="">
              <div className="relative w-full h-[24vh]">
                <Image
                  src={data.images.webp.image_url}
                  alt={data.title}
                  fill
                  className="rounded-xl"
                />
              </div>
              <h1>{data.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimeList;
