"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { TbError404 } from "react-icons/tb";

export const metadata = {
  title: "Not Found",
};

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <TbError404 className="text-red-500 w-64 h-64 mx-auto " />
        <p className="text-sm max-w-64 capitalize text-center leading-relaxed mx-auto mb-10">
          Chechl again your URL or go back to your previous page
        </p>
        <button
          className="px-6 py-3 font-medium border-2"
          onClick={() => router.back()}
        >
          Back Previous Page
        </button>
      </div>
    </div>
  );
};

export default NotFound;
