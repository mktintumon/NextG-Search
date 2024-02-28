import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";
import { FaFlask } from "react-icons/fa";

function HomeHeader() {
  return (
    <header className="flex justify-end p-5 text-md">
      <div className="flex space-x-4 items-center">
        <Link href={"https://mail.google.com"} className="hover:underline">
          Gmail
        </Link>

        <Link href={"https://image.google.com"} className="hover:underline">
          Images
        </Link>

        <FaFlask className="bg-transparent hover:bg-gray-300 rounded-full text-4xl p-2" />

        <TbGridDots className="bg-transparent hover:bg-gray-300 rounded-full text-5xl p-3" />
        
        <button className="bg-red-500 text-white px-6 py-2 font-medium rounded-md 
                            hover:brightness-105 hover:shadow-lg transition-shadow">
          Sign in
        </button>
      </div>
    </header>
  );
}

export default HomeHeader;
