import SearchHeader from '@/components/SearchHeader'
import React from 'react'
import './../globals.css'

function layout({children}) {
  return (
    <div>
        <SearchHeader/>
        {children}
    </div>
  )
}

export default layout