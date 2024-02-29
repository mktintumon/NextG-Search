"use client"

import React, { useEffect } from 'react'

function Error({error , reset}) {
    useEffect(()=>{
        console.log("error" , error);
    },[error])

  return (
    <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>Something went wrong!</h1>
        <button className='text-red-500 text-2xl'>Try again</button>
    </div>
  )
}

export default Error