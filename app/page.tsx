"use client";

import HomeAnnim from "@/annimations/HomeAnnim";
import ButtonNext from "@/components/buttons/ButtonNext";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showButton, setshowButton] = useState(false)

  const isEnd = ()=>{
    console.log("ici");
    
    setshowButton(show => true)
  }

  return (
    <main className="flex justify-center items-center h-[100vh]">
      <div className="bg-red-800 p-24 sm:w-[400px] w-full h-full">
        <HomeAnnim isEnd={isEnd}/>
        {showButton&&<ButtonNext/>}
      </div>
    </main>
  );
}
