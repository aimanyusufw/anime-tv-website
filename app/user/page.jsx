import CommentList from "@/components/List/CommentList";
import SignOutButton from "@/components/utils/SignOutButton";
import prisma from "@/lib/prisma";
import { authUserSession } from "@/lib/user-data-lib";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBookmark } from "react-icons/fa";

export const metadata = {
  title: "User Profile - Anime Tv",
};

const Page = async () => {
  const user = await authUserSession();
  const allComents = await prisma.comment.findMany({
    orderBy: [{ id: "desc" }],
    where: {
      userId: user.id,
    },
    include: {
      user: true,
    },
  });

  return (
    <section className="min-h-screen">
      <div className="container">
        <div className="w-full md:w-3/4 mx-auto px-4 pt-32 mb-10 ">
          <Image
            src={user.image}
            alt={user.name}
            width={250}
            height={250}
            className="rounded-full mx-auto mb-5"
          />
          <h1 className="font-bold text-center mb-3 text-2xl">{user.name}</h1>
          <div className="mx-auto  text-center mb-5">{user.email}</div>
          <div className="flex gap-3 justify-center mb-5">
            <SignOutButton />
            <Link
              href={"/user/collections"}
              className="px-4 py-3 bg-black bg-opacity-50 rounded-md"
            >
              <FaBookmark className="w-5 h-5" />
            </Link>
          </div>
          <h1 className="font-bold text-2xl text-center mb-5">All Replies :</h1>
          <CommentList
            allComents={allComents}
            showAnimeTitle={true}
            userId={user.id}
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
