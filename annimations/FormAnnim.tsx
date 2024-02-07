"use client";

import Lottie from "lottie-react"
import valentin from '@/annimations/assets/ourse.json'

interface props {
    isEnd:()=> void
}

function FormAnnim() {
  return (
    <div className="justify-center items-center flex mt-3">
        <Lottie style={{height:'133px'}} height={"133px"} animationData={valentin} loop />
    </div>
  )
}

export default FormAnnim