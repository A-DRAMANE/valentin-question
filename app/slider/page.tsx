"use client";
import ButtonNext from '@/components/buttons/ButtonNext';
import ButtonNextSlid from '@/components/buttons/ButtonNextSlid';
import { slideText } from '@/constatants/text';
import Link from 'next/link'
import React, { useState } from 'react'

function page() {
  const [level,setLevel] = useState(0)
  
  const handle = ()=>{
    setLevel(level+1)
  }

  return (
    <div className="h-full w-full flex flex-col justify-around items-center">
      <div className="">
        <p className='text-center my-text-curv text-white'>{level+1}</p>
        <div className='opacity-fade bg-white my-text text-red-800 min-h-[150px] w-full p-2 rounded-md'>
          <p className="">Ma douce</p>
          <p className="font-bold text-black">{slideText[level].text}</p>
        </div>
      </div>
      {level==2?
      <ButtonNext text="J'ai une question pour toi --->" root={"question"} />
      :
      <ButtonNextSlid handle={handle} />
      }
    </div>
  )
}

export default page