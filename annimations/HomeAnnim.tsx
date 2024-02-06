"use client";

import Lottie from "lottie-react"
import valentin from '@/annimations/assets/valent.json'

interface props {
    isEnd:()=> void
}

function HomeAnnim({isEnd}:props) {
  return (
    <div className="h-full justify-center items-center flex bg-black">
        <Lottie onLoadStart={()=>console.log("la")
        } size={5000}  animationData={valentin} loop={false} />
    </div>
  )
}

export default HomeAnnim