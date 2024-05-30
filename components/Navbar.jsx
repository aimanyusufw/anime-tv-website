"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="absolute top-0 right-0 left-0 z-50">
      <div className="container">
        <div className="w-full px-4 flex justify-between py-7">
          <Link href={"/"} className="font-semibold text-2xl">
            ANIME.TV
          </Link>
          <div className="hidden md:flex gap-5 md:gap-7 items-center">
            <Link
              href={"/"}
              className={`text-sm font-base ${
                pathName === "/" ? "font-bold text-primary" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href={"/anime"}
              className={`text-sm font-base ${
                pathName === "/anime" ? "font-bold text-primary" : ""
              }`}
            >
              Anime
            </Link>
            <Link
              href={"/manga"}
              className={`text-sm font-base ${
                pathName === "/manga" ? "font-bold text-primary" : ""
              }`}
            >
              Manga
            </Link>
            <Link
              href={"/forums"}
              className={`text-sm font-base ${
                pathName === "/forums" ? "font-bold text-primary" : ""
              }`}
            >
              Forums
            </Link>
            <Link
              href={"/login"}
              className="text-sm px-6 py-3 font-medium bg-primary rounded-full"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
