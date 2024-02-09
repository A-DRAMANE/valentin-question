
import Lottie from "lottie-react"
import valentin from './assets/valent.json'

interface props {
    isEnd:()=> void
}

function HomeAnnim({isEnd}:props) {
  return (
    <div className="justify-center items-center flex ">
        <Lottie onComplete={isEnd} size={5000}  animationData={valentin} loop={false} />
    </div>
  )
}

export default HomeAnnim