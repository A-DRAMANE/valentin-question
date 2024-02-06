"use client";
import Link from 'next/link';
import React from 'react'

function ButtonNext() {
  return (
    <>
    <Link className='w-full' href="/slider">
      <button className='opacity-fade transition ease-in-out text-red-800 bg-red-100 w-full p-2 rounded-full hover:bg-red-900 hover:text-white hover:-translate-y-1 hover:scale-110 '> 
        {'--->'} 
      </button>
    </Link>
    </>
  )
}

export default ButtonNext