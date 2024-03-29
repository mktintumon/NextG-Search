import WebSearchResults from "@/components/WebSearchResults";
import Link from "next/link";
import React, { Suspense } from "react";

async function WebSearchPage({searchParams}) {
  const startIndex = searchParams.start || '1';

  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`
  );



  if(!response.ok) throw new Error("Something went wrong!!!")
  const data = await response.json();
  const results = data.items;


  if(!results){ 
    return (
      <div className="flex flex-col justify-center items-center pt-10 text-center">
        <h1 className="text-3xl mb-4">
          No results found for {searchParams.searchTerm}
        </h1>

        <p className="text-lg">
          Try Searching for something else.{" "}
        <Link href={"/"} className="text-red-600 hover:underline"> Go to Home</Link>
        </p>

      </div>
    )
  }

  return (
    <>
    <Suspense>
      { results && <WebSearchResults results={data}/>}
    </Suspense>
    </>
  )
}



export default WebSearchPage;
