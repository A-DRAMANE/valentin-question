import { Link } from "react-router-dom";

interface props{
  root:string;
  text?:string;
}
function ButtonNext({root,text='--->'}:props) {
  return (
    <>
    <Link className='w-full' to={`/${root}`}>
      <button className='opacity-fade font-bold transition ease-in-out text-red-800 bg-red-100 w-full p-2 rounded-full hover:bg-red-900 hover:text-white hover:-translate-y-1 hover:scale-110 '> 
        {text} 
      </button>
    </Link>
    </>
  )
}

export default ButtonNext