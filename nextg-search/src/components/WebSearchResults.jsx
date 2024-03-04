import Link from 'next/link'
import React from 'react'
import Parser from 'html-react-parser'
import PaginationButtons from './PaginationButtons'

function WebSearchResults({results}) {
  return (
    <div className='w-full mx-auto px-3 pb-40 sm:pl-[5%] md:pl-[20%] lg:pl-60'>
        <p className='text-gray-600 text-sm mb-5 mt-3'>
            About {results.searchInformation?.formattedTotalResults} results  {" "}
            ({results.searchInformation?.formattedSearchTime} seconds)
        </p>

        {
            results.items?.map((result)=>(
                <div key={result.link} className='mb-8 max-w-xl'>
                    <div className='group flex flex-col '>
                        <Link href={result.link}>
                            {result.formattedUrl}
                        </Link>
                        <Link href={result.link} className='group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800'>
                            {result.title}
                        </Link>

                    </div>

                    <p className='text-grey-600'>{Parser(result.htmlSnippet)}</p>
                </div>
            ))
        }

        <PaginationButtons/>
    </div>
  )
}

export default WebSearchResults