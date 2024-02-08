"use client";

import QuestionAnnim from '@/annimations/QuestionAnnim'
import { dataInterface } from '@/interfaces';
import { getData } from '@/storage/getStorage';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function Page() {
  const [btnSize,setBtnSize] = useState(1)
  const [btngap,setBtngap] = useState(2)
  const [myData,setMyData] = useState<false | dataInterface>()
  
  useEffect(() => {
    
    const handleData = ()=>{
      setMyData(getData())
    }

    handleData()
  }, []);
  
  const handle = ()=>{
    setBtngap(btngap+2)
    setBtnSize(btnSize+.1)
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

export default Page