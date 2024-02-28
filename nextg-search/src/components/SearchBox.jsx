"use client"

import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { BsFillMicFill } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { useSearchParams , useRouter } from 'next/navigation';

function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter()
  const searchTerm = searchParams.get('searchTerm')

  const [term, setTerm] = useState(searchTerm || '')

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!term.trim()) return

    router.push(`/search/web?searchTerm=${term}`)
  }

  return (
    <form onSubmit={handleSubmit}
    className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 sm:py-1 ml-10 mr-5 flex-grow max-w-3xl items-center'>
      <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} className='w-full focus:outline-none ml-2 mr-2'/>

      <FaXmark onClick={() => setTerm("")} className='text-2xl cursor-pointer sm:mr-3'/>

      <BsFillMicFill className='hidden cursor-pointer sm:inline-flex text-5xl border-l-2 border-gray-300 text-red-500 pl-4 mr-4 '/>

      <FaSearch onClick={handleSubmit} className='hidden cursor-pointer sm:inline-flex text-3xl  text-blue-500 border-gray-300 mr-2'/>

    </form>
  )
}

export default SearchBox