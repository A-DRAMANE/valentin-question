"use client";

import QuestionAnnim from '@/annimations/QuestionAnnim'
import Link from 'next/link';
import React, { useState } from 'react'

function page() {
  const [btnSize,setbtnSize] = useState(1)
  const [btngap,setbtngap] = useState(2)
  
  const handle = ()=>{
    setbtngap(btngap+2)
    setbtnSize(btnSize+.1)
  }

  return (
    <div>
      <QuestionAnnim/>
      <div className='opacity-fade bg-white my-text text-red-800 min-h-[150px] w-full p-2 rounded-md'>
        <p className="">alors</p>
        <p className="font-bold text-black">Veux-tu etre ma valentine ?</p>
      </div>
      <div style={{gap:btngap}} className="pt-3 flex flex-col justify-between gap-2">
        <button style={{scale:btnSize}} className={`bg-green-700 p-2 w-full h-[${btnSize}%]`}>
          <Link href={"/reponse"}>OUI</Link>
        </button>
        
        <button onClick={handle} className='bg-red-950 p-2 w-full'>NON</button>
      </div>
    </div>
  )
}

export default page