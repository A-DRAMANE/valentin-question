"use client";

import Lottie from "lottie-react"
import valentin from '@/annimations/assets/ourse.json'

interface props {
    isEnd:()=> void
}

function QuestionAnnim() {
  return (
    <div className="justify-center items-center flex ">
        <Lottie size={5000}  animationData={valentin} loop />
    </div>
  )
}

export default QuestionAnnim