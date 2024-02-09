import Lottie from 'lottie-react';
import valentin from './assets/ourse.json'

function FormAnnim() {
  return (
    <div className="justify-center items-center flex mt-3">
        <Lottie style={{height:'133px'}} height={"133px"} animationData={valentin} loop />
    </div>
  )
}

export default FormAnnim