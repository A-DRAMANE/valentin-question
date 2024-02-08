"use client";
import Link from 'next/link';
import React from 'react'

interface props{
  text?:string;
}
function MyWarning() {
  return (
    <div className='absolute top-5 m-3 right-0 p-3 rounded-md bg-orange-200 w-'>
      <span className='text-orange-500 text-[10px]'>Aucune de vos informations ne seront partagées, sauvegardées ou utilisées d'une quelconque manière.</span>
    </div>
  )
}

export default MyWarning