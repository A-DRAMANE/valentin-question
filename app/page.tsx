"use client";

import HomeAnnim from "@/annimations/HomeAnnim";
import ButtonNext from "@/components/buttons/ButtonNext";
import { myToken } from "@/constatants/text";
import * as jwt from 'jsonwebtoken';
import { useEffect, useState } from "react";

export default function Home() {
  const [showButton, setshowButton] = useState(false)
  const [isDecript, setisDecript] = useState(false)

  const isEnd = ()=>{
    setshowButton(show => true)
  }

  const decripText = async ()=>{

    const geturl = await window.location.search;
    const getTextEncrpt = await geturl.replace("?data=",'')
    const decryptedString:any= jwt.verify(getTextEncrpt, `${myToken}`);
    
    // const getData = await JSON.parse(decryptedString)
    setisDecript(true)
    console.log(decryptedString);
    
  }

  useEffect(() => {
    decripText()
  }, []);

  return (
    <>
      <HomeAnnim isEnd={isEnd}/>
      {(showButton&&isDecript)&&<ButtonNext root="slider"/>}
    </>
  );
}
