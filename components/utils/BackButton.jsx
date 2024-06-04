"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const router = useRouter();

  return (
    <div className="mb-8">
      <button onClick={router.back} className="flex items-center">
        <FaArrowLeft className="inline me-2" />
        <span className="font-bold"> Back</span>
      </button>
    </div>
  );
};

export default BackButton;
