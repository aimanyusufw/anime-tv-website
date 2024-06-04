"use client";

import React from "react";
import { signIn } from "next-auth/react";

const Page = () => {
  return (
    <div className="min-h-screen">
      <div className="container py-24">
        <button onClick={() => signIn("google")}>Google</button>
      </div>
    </div>
  );
};

export default Page;
