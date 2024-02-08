"use client";
import React from 'react'

interface props{
  handle:()=>void
}
function ButtonNextSlid({handle}:props) {
  return (
    <>
      <button onClick={handle} className='opacity-fade font-bold transition ease-in-out text-red-800 bg-red-100 w-full p-2 rounded-full hover:bg-red-900 hover:text-white hover:-translate-y-1 hover:scale-110 '> 
        Lire
      </button>
    </>
  )
}

export default ButtonNextSlid