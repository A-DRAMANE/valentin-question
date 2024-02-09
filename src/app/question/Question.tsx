
import { useEffect, useState } from 'react'
import { dataInterface } from '../../interfaces';
import { getData } from '../../storage/getStorage';
import QuestionAnnim from '../../annimations/QuestionAnnim';
import { Link } from 'react-router-dom';
import { noText } from '../../constatants/text';

function Question() {
  const [btnSize,setBtnSize] = useState(1)
  const [btngap,setBtngap] = useState(2)
  const [noIndex,setnoIndex] = useState(0)
  const [myData,setMyData] = useState<false | dataInterface>()
  
  useEffect(() => {

    const handleData = ()=>{
      if (typeof window !== 'undefined'){
        setMyData(getData())
      }
    }

    handleData()
  }, []);
  
  const handle = ()=>{
    setBtngap(btngap+2)
    setBtnSize(btnSize+.1)
    if (noIndex==4) {
      setnoIndex(0)
    }else{
      setnoIndex(noIndex=> noIndex + 1)
    }
  }

  return (
    <div>
      <QuestionAnnim/>
      <div className="">
        {myData&&<h1 className='my-title'>{myData.nom}</h1>}
        <div className='opacity-fade shadow bg-white my-text text-red-800 min-h-[150px] w-full p-2'>
        <p className="">alors</p>
          <p className="font-bold text-black">Would you be my Valentine ?</p>
        </div>
      </div>
      <div style={{gap:btngap}} className="pt-3 flex flex-col justify-between gap-2">
        <div style={{scale: `${btnSize}`}} className={`bg-white flex justify-center items-center cursor-pointer font-bold p-2 w-full  rounded-full h-[${btnSize}%]`}>
          <Link className='text-green-700 text-center w-full' to={"/reponse"}>OUI</Link>
        </div>
        
        <button onClick={handle} className='bg-red-300 font-bold p-2 w-full rounded-full text-red-600'>{noText[noIndex]}</button>
      </div>
    </div>
  )
}

export default Question