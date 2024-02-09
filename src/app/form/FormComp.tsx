import { useEffect, useState } from 'react'
import { phrase } from '../../interfaces'
import FormAnnim from '../../annimations/FormAnnim'
import AlertMy from '../../components/alert/Alert'
import AlertMessage from '../../components/alert/AlertMessage'

function FormComp() {
  const [phrases,setPhrases] = useState<phrase[] >([{text:"",id:0}])
  const [nom,setNom] = useState<string>("")
  const [message,setmessage] = useState<string>("")
  const [isVisible,setisVisible] = useState<boolean>(false)
  
  const handle = (text:any,id:Number)=>{
    let update = phrases
    const find = update.findIndex(text=> text.id==id)
    update[find].text = text.target.value
    setPhrases([...update])
  }

  const newText = ()=>{
    const newPhrase:phrase = {text:"",id:phrases.length}
    setPhrases([...phrases,newPhrase])
  }

  const handleMessage = ()=>{
    setisVisible(!isVisible)
  }

  const shareLink = ()=>{
    const getString = JSON.stringify({nom:nom,phrases:phrases})
    const getEncrip = encripText(getString)
    try {
      window.navigator.share({
        title: document.title,
        text: "Le pain, j'ai un petit méssage pour toi.",
        url: getEncrip,
      });
      
    } catch (error) {
      copyLink()
    }
  }

  const copyLink = ()=>{
    const getString = JSON.stringify({nom:nom,phrases:phrases})
    const getEncrip = encripText(getString)
    try {
      navigator.clipboard.writeText(getEncrip)
      setmessage('Le lien à été copié avec succés, vous pouvez le partager')
      handleMessage()
    } catch (error) {
      setmessage("Oups nous n'arrivons pas à éffectué cette action")
      handleMessage()
    }
  }

  const encripText = (text:string)=>{
    const encryptedString = window.btoa(text);
    const protocole = window.location.protocol;
    return `${protocole}//${window.location.host}/?data=${encryptedString}`;
  }

  useEffect(() => {
    // alert("Aucune de vos informations ne seront partagées, sauvegardées ou utilisées d'une quelconque manière.")
  }, []);

  return (
    <div className='w-full'>
      {isVisible&&<AlertMessage handle={handleMessage} text={message} />}
      <AlertMy/>
      <FormAnnim/>
      <form className="max-w-sm mx-auto">
        <div className="mb-3">
          <label htmlFor="name" className="my-title block mb-2 text-sm font-medium text-white text-center">Le prénom de votre pain</label>
          <input value={nom} onChange={(value)=>setNom(value.target.value)} type="text" id="name" className="bg-gray-50 border rounded-full border-gray-300 text-gray-900 text-sm block w-full p-2.5" placeholder="mon papillon" required/>
        </div>
        <hr />
        <div className="mt-5">
          <label className="block mb-2 text-sm font-medium text-white text-center">Vos messages</label>
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
        <button onClick={shareLink} className={`bg-green-700 p-2 w-full h-[30%] text-white`}>
          PARTAGER
        </button>
        
        <button onClick={copyLink} className='bg-red-950 p-2 w-full text-white'>COPIER LE LIEN</button>
      </div>
    </div>
  )
}

export default FormComp