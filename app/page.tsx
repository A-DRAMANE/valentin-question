"use client";

import HomeAnnim from "@/annimations/HomeAnnim";
import ButtonNext from "@/components/buttons/ButtonNext";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showButton, setshowButton] = useState(false)

  const isEnd = ()=>{
    setshowButton(show => true)
  }

  return (
    <>
      <HomeAnnim isEnd={isEnd}/>
      {showButton&&<ButtonNext/>}
    </>
  );
}
