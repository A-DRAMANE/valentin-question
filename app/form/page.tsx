"use client";

import FormAnnim from '@/annimations/FormAnnim'
import React, { useEffect, useState } from 'react'
import * as jwt from 'jsonwebtoken';
import { myToken } from '@/constatants/text';

interface phrase {
  text:string,
  id:number
}

function page() {
  const [phrases,setphrases] = useState<phrase[] >([{text:"",id:0}])
  
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
    const getString = JSON.stringify(phrases)
    const getEncrip = encripText(getString)
    try {
      window.navigator.share({
        title: document.title,
        text: "Hello, j'ai un petit méssage pour toi.",
        url: getEncrip,
      });
      
    } catch (error) {
      copyLink()
    }
  }

  const copyLink = ()=>{
    const getString = JSON.stringify(phrases)
    const getEncrip = encripText(getString)
    try {
      navigator.clipboard.writeText(getEncrip)
      alert("Le lien à été copié avec succés, vous pouvez le partager")
    } catch (error) {
      alert("Oups nous n'arrivons pas à éffectué cette action")
    }
  }

  const encripText = (text:string)=>{
    const encryptedString = jwt.sign(
      { data: `${text}`},
      `${myToken}`,
      { expiresIn: '7d' }
    );
    return window.location.host+"/?data="+encryptedString;
  }

  useEffect(() => {
    console.log(window.location.host);
    
    // alert("Aucune de vos informations ne serons partager, sauvegarder ou utiliser d'une quelconque maniere.")
  }, []);

  return (
    <div className='w-full'>
      {/* <MyWarning/> */}
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
        <p onClick={newText} className='cursor-pointer underline text-white text-right'>Ajouter un texte +</p>
      </form>

      <div className="pt-3 flex flex-col justify-between gap-2">
        <button onClick={shareLink} className={`bg-green-700 p-2 w-full h-[30%]`}>
          PARTAGER
        </button>
        
        <button onClick={copyLink} className='bg-red-950 p-2 w-full text-white'>COPIER LE LIEN</button>
      </div>
    </div>
  )
}

export default page