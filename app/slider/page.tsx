"use client";
import ButtonNext from '@/components/buttons/ButtonNext';
import ButtonNextSlid from '@/components/buttons/ButtonNextSlid';
import { dataInterface } from '@/interfaces';
import { getData } from '@/storage/getStorage';
import React, { useEffect, useState } from 'react'

function Page() {
  const [level,setLevel] = useState(0)
  const [isLoad,setIsLoad] = useState(true)
  const [myData,setMyData] = useState<false | dataInterface>()
  
  const handle = ()=>{
    setLevel(level+1)
  }
  
  
  useEffect(() => {
    const handleData = ()=>{
      if (typeof window !== 'undefined'){
        setMyData(getData())
      }
      setIsLoad(false)
    }
    handleData()
    // alert("Aucune de vos informations ne seront partagées, sauvegardées ou utilisées d'une quelconque manière.")
  }, []);

  return (
    <div className="h-full w-full flex flex-col justify-around items-center">
      {myData&&<>
      <div className="">
      <h1 className='my-title'>A ma bien aimer</h1>
        <div className="bg-white shadow p-5">
          <p className='my-text-curv text-red-800 font-bold'>{level+1}</p>
          <div className='opacity-fade bg-white my-text text-red-800 min-h-[150px] w-full p-2 rounded-md'>
            <p className="text-left">{myData.nom}</p>
            <p className="font-bold text-black text-justify">{myData.phrases[level].text}</p>
          </div>
        </div>
      </div>
      {level==(myData.phrases.length-1)?
      <ButtonNext text="J'ai une question pour toi" root={"question"} />
      :
      <ButtonNextSlid handle={handle} />
      }
      </>
      }
    </div>
  )
}

export default Page