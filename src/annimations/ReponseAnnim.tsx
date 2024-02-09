
import Lottie from "lottie-react"
import valentin from './assets/bisous.json'

function ReponseAnnim() {
  return (
    <div className="justify-center items-center flex ">
        <Lottie size={5000}  animationData={valentin} loop />
    </div>
  )
}

export default ReponseAnnim