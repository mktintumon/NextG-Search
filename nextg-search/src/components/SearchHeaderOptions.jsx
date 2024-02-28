"use client";

import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { FaRegImages } from "react-icons/fa6";

function SearchHeaderOptions() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm')

  const selectTab = (tab) => {
    router.push(
      `/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`
    );
  };

  return (
    <div className="flex space-x-2 lg:pl-60 items-center select-none border-b w-full justify-center lg:justify-start text-gray-600 text-sm">

      <div onClick={() => selectTab("All")} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 curser-pointer pb-3 px-2 ${pathname === '/search/web' && '!text-blue-600 !border-blue-600'}`}>
        <FaSearch className="text-md" />
        <p>All</p>
      </div>

      <div onClick={() => selectTab("Images")} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 curser-pointer pb-3 px-2 ${pathname === '/search/image' && '!text-blue-600 !border-blue-600'}`}>
        <FaRegImages className="text-md" />
        <p>Images</p>
      </div>

    </div>
  );
}

export default SearchHeaderOptions;
