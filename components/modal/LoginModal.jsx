"use client";

import { signIn } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginModal = ({ user }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showModal]);

  return (
    <>
      <button
        onClick={() => setShowModal((prev) => !prev)}
        className="text-sm px-6 py-3 font-medium bg-primary rounded-full"
      >
        Login
      </button>
      <div
        className={`${
          showModal ? "flex" : "hidden"
        } fixed inset-0 items-center justify-center bg-black bg-opacity-50 z-50`}
        onClick={() => setShowModal((prev) => !prev)}
      >
        <div className="bg-black rounded-lg shadow-xl p-8 w-[400px]">
          <h2 className="text-3xl mb-10 font-bold text-center">Sign In</h2>
          <>
            <button
              onClick={() => signIn("github")}
              className="py-6 bg-white rounded-lg text-black font-bold hover:bg-opacity-80 w-full mb-5 flex items-center justify-center gap-5"
            >
              <span>Github</span> <FaGithub className="inline w-5 h-5" />
            </button>
            <button
              onClick={() => signIn("google")}
              className="py-6 bg-white rounded-lg text-black font-bold hover:bg-opacity-80 w-full flex items-center justify-center gap-5"
            >
              <span>Google</span> <FaGoogle className="inline w-5 h-5" />
            </button>
          </>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
