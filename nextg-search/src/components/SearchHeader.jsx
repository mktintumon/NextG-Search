import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBox from "./SearchBox";
import { MdOutlineSettings } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href={"/"}>
          <Image
            src="https://www.nextg.cz/wp-content/uploads/2022/10/nG_logo-1.jpg"
            alt="nextg logo"
            height={100}
            width={120}
            priority
            style={{ width: "auto" }}
          />
        </Link>

        <div className="flex-1">
            <SearchBox/>
        </div>

        <div className="hidden md:inline-flex space-x-5">
            <MdOutlineSettings className="bg-transparent hover:bg-gray-200 p-2 text-5xl rounded-full cursor-pointer"/>
            <TbGridDots className="bg-transparent hover:bg-gray-200 p-2 text-5xl rounded-full cursor-pointer"/>
        </div>

        <button className="bg-red-500 text-white px-5 py-2 font-medium rounded-md 
                            hover:brightness-105 hover:shadow-lg transition-shadow ml-5">
          Sign in
        </button>
      </div>

      <SearchHeaderOptions/>
    </header>
  );
}

export default SearchHeader;
