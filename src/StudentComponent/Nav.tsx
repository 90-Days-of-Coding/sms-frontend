'use client'

import React, { useState } from 'react'

const Nav = () => {

  let [Search,setSearch] =useState<string>('')
  return (
    <div>
        <div className='flex justify-between  items-center md:mx-14 py-2  z-10 '>

          <div className='flex items-center md:gap-1.5 gap-1 '>
            <div>
              <img src="/Image/DeckLogo.png" alt="Decklogo" />
            </div>

            <div>
              <p className='text-sm  '>Decks</p>
            </div>

          </div>

          <div className='relative flex items-center '>
          <div className='absolute left-1 bottom-1'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
            </svg>



          </div>


          <div className=''>
            <input className='border w-full h-7 rounded-lg px-7 py-3' type="text" name='Search' value={Search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search..' />
          </div>



          </div>




          <div className='flex md:gap-2'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
            </div>

            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>

            </div>
          </div>









        </div>
      
    </div>
  )
}

export default Nav
