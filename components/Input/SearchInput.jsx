"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useRef } from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = ({ mobileMode }) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    const query = searchRef.current.value;

    if (!query || query.trim() === "") return;
    if (e.key === "Enter") router.push(`/search?query=${query}`);
  };

  return mobileMode ? (
    <div className="w-3/4 md:w-1/4 mx-auto mb-10 bg-white rounded-full flex md:hidden gap-2 items-center py-3">
      <CiSearch className="text-black ms-4" />
      <input
        type="text"
        ref={searchRef}
        placeholder="Search..."
        onKeyDown={handleSearch}
        className="text-sm focus:outline-none focus:ring-transparent text-black rounded-e-full"
      />
    </div>
  ) : (
    <div className="bg-white rounded-full hidden md:flex gap-2 items-center py-3">
      <CiSearch className="text-black ms-4" />
      <input
        type="text"
        ref={searchRef}
        placeholder="Search..."
        onKeyDown={handleSearch}
        className="text-sm focus:outline-none focus:ring-transparent text-black rounded-e-full"
      />
    </div>
  );
};

export default SearchInput;
