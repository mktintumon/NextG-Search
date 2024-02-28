import React from 'react'
import CountryLookup from './CountryLookup'

function Footer() {
  return (
   <>
    <footer className='absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full'>
        <div className="border-b px-8 py-3">
            <CountryLookup/>
        </div>
        <div className='flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0'>
            <ul className='flex items-center space-x-5'>
                <li className='hover:underline cursor-pointer'>About</li>
                <li className='hover:underline cursor-pointer'>Blogs</li>
                <li className='hover:underline cursor-pointer'>Advertise</li>
                <li className='hover:underline cursor-pointer'>How search work</li>
                <li className='hover:underline cursor-pointer'>Contact</li>
            </ul>
            <ul className='flex items-center space-x-5'>
                <li className='hover:underline cursor-pointer'>Privacy</li>
                <li className='hover:underline cursor-pointer'>Terms</li>
                <li className='hover:underline cursor-pointer'>Settings</li>
            </ul>
        </div> 
    </footer>
   </>
  )
}

export default Footer