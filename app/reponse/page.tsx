"use client";

import QuestionAnnim from '@/annimations/QuestionAnnim'
import ReponseAnnim from '@/annimations/ReponseAnnim';
import ButtonNext from '@/components/buttons/ButtonNext';
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
      <p className='text-white mb-10 text-center'>Je savais que tu ne pouvais pas vivre sans moi, prend tes bisous mon papillon.</p>
      <ButtonNext text='un message pour votre pain --->' root="form"/>
    </div>
  )
}

export default page