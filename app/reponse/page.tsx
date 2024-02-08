"use client";

import ReponseAnnim from '@/annimations/ReponseAnnim';
import ButtonNext from '@/components/buttons/ButtonNext';
import React, { useEffect, useState } from 'react'

function Page() {

  return (
    <div>
      {/* <QuestionAnnim/> */}
      <ReponseAnnim/>
      <p className='text-white mb-10 text-center'>Je savais que tu ne pouvais pas vivre sans moi. Prends tes bisous, mon papillon.</p>
      <ButtonNext text='Un message pour votre pain' root="form"/>
    </div>
  )
}

export default Page