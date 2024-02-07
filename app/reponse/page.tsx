"use client";

import QuestionAnnim from '@/annimations/QuestionAnnim'
import ReponseAnnim from '@/annimations/ReponseAnnim';
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
      {/* <QuestionAnnim/> */}
      <ReponseAnnim/>
      <p>Je savais que tu ne pouvais pas vivre sans moi, prend tes bisous mon papillon.</p>
    </div>
  )
}

export default page