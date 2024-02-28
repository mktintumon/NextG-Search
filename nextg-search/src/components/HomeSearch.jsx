"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineScan } from "react-icons/ai";
import { useRouter } from "next/navigation";

function HomeSearch() {
  const router = useRouter()
  const [input, setInput] = useState("");
  const [randomSearchLoader, setRandomSearchLoader] = useState(false)

  console.log(input);

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(!input || !input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`)
  }

  const randomSearch = async (e) => {
    setRandomSearchLoader(true)
    const response = await fetch('https://random-word-api.herokuapp.com/word')
                          .then((res) => res.json())
                          .then((data) => data[0])

    if(!response) return;

    router.push(`/search/web?searchTerm=${response}`)
    setRandomSearchLoader(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-grey-200 px-5 py-3 rounded-full 
                    hover:shadow-lg focus-within:shadow-md  transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <FaSearch className="text-xl text-grey-500 mr-5 mt-1" />

        <input
          type="text"
          placeholder="Type something to search..."
          className="flex-grow focus:outline-none text-lg"
          onChange={(e) => setInput(e.target.value)}
        />

        <BsFillMicFill className="text-xl mr-5" />

        <AiOutlineScan className="text-xl" />
      </form>

      <div className="flex flex-col space-y-4 justify-center sm:space-y-0 sm:space-x-4 sm:flex-row mt-8">
        <button className="bg-[#f8f9fa] rounded-md text-lgmd text-gray-800 hover:ring-gray-300 focus:outline-none active:ring-300 hover:shadow-md w-36 h-10 transition-shadow"
            onClick={handleSubmit}>
          NextG search
        </button>
        <button 
            disabled={randomSearchLoader}
            className="bg-[#f8f9fa] rounded-md text-md text-gray-800 hover:ring-gray-300 focus:outline-none active:ring-300 hover:shadow-md w-40 h-10 transition-shadow disabled:opacity-50"
            onClick={randomSearch}>
          {randomSearchLoader ? 'loading...' : 'Random Search'}
        </button>
      </div>
    </>
  );
}

export default HomeSearch;
