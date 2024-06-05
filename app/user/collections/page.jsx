import AnimeCard from "@/components/card/AnimeCard";
import prisma from "@/lib/prisma";
import { authUserSession } from "@/lib/user-data-lib";
import React from "react";

const Page = async () => {
  const user = await authUserSession();

  const allCollection = await prisma.collection.findMany({
    orderBy: [
      {
        id: "desc",
      },
    ],
    where: {
      userId: user.id,
    },
  });

  return (
    <section className="min-h-screen">
      <div className="container">
        {allCollection && allCollection.length > 0 ? (
          <div className="py-24 md:py-32 w-full">
            <h1 className="font-bold text-3xl px-4 text-center">
              All Your Collections
            </h1>
            <div className="w-full px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 py-10">
              {allCollection.map((data) => (
                <AnimeCard data={data} key={data.mal_id} main_url={"/anime"} />
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full px-4 h-screen flex justify-center items-center">
            <h1 className="font-bold text-2xl max-w-64 mx-auto text-center">
              You Don't Have Any Collections For Now.
            </h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default Page;
