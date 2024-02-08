"use client";

import QuestionAnnim from '@/annimations/QuestionAnnim'
import { dataInterface } from '@/interfaces';
import { getData } from '@/storage/getStorage';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function page() {
  const [btnSize,setbtnSize] = useState(1)
  const [btngap,setbtngap] = useState(2)
  const [myData,setmyData] = useState<false | dataInterface>()
  
  const handleData = ()=>{
    setmyData(getData())
  }
  useEffect(() => {
    handleData()
  }, []);
  
  const handle = ()=>{
    setbtngap(btngap+2)
    setbtnSize(btnSize+.1)
  }

  return (
    <div>
      <QuestionAnnim/>
      <div className="">
        {myData&&<h1 className='my-title'>{myData.nom}</h1>}
        <div className='opacity-fade shadow bg-white my-text text-red-800 min-h-[150px] w-full p-2'>
        <p className="">alors</p>
          <p className="font-bold text-black">Would you be my Valentine ?</p>
        </div>
      </div>
      <div style={{gap:btngap}} className="pt-3 flex flex-col justify-between gap-2">
        <button style={{scale:btnSize}} className={`bg-white font-bold p-2 w-full  rounded-full h-[${btnSize}%]`}>
          <Link className='text-green-700' href={"/reponse"}>OUI</Link>
        </button>
        
        <button onClick={handle} className='bg-red-300 font-bold p-2 w-full rounded-full text-red-600'>NON</button>
      </div>
    </div>
  )
}

export default page