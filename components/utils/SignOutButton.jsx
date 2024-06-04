"use client";

import React from "react";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <button
      onClick={() => {
        if (window.confirm("Are you sure ?")) {
          signOut({ callbackUrl: "/" });
        }
      }}
      className="px-6 py-3 bg-black bg-opacity-50 rounded-md font-semibold"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
