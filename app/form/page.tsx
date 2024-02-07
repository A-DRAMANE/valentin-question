"use client";

import FormAnnim from '@/annimations/FormAnnim'
import MyWarning from '@/components/alert/MyWarning';
import React, { useState } from 'react'

interface phrase {
  text:string,
  id:number
}

function page() {
  const [phrases,setphrases] = useState<phrase[] >([{text:"",id:0}])
  const [btngap,setbtngap] = useState(2)
  
  const handle = (text:any,id:Number)=>{
    let update = phrases
    const find = update.findIndex(text=> text.id==id)
    update[find].text = text.target.value
    setphrases([...update])
  }

  const newText = ()=>{
    const newPhrase:phrase = {text:"",id:phrases.length}
    setphrases([...phrases,newPhrase])
  }

  const shareLink = ()=>{
    window.navigator.share({
      title: document.title,
      text: "Hello World",
      url: "https://developer.mozilla.org",
    });
  }

  return (
    <div className='w-full'>
      <MyWarning/>
      <FormAnnim/>
      <form className="max-w-sm mx-auto">
        <div className="mb-3">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-white text-center">Le prénom de votre pain</label>
          <input type="text" id="name" className="bg-gray-50 border rounded-full border-gray-300 text-gray-900 text-sm block w-full p-2.5" placeholder="mon papillon" required/>
        </div>
        <hr />
        <div className="mt-5">
          <label className="block mb-2 text-sm font-medium text-white text-center">Votre message</label>
          {phrases.map(text=>
            <div key={text.id} className="">
              <span className='text-xs text-white'>text {text.id+1}</span>
              <input onChange={(value)=>handle(value,text.id)} value={text.text} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5" required/>
            </div>
          )}
        </div>
        <p onClick={shareLink} className='cursor-pointer underline text-white text-right'>Ajouter un texte +</p>
      </form>

    </div>
  )
}

export default page