import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle } from  'react-loader-spinner'

export default function Loader() {
  return (
    <div className="w-screen h-[20rem] flex flex-grow items-center justify-center">
        <BallTriangle
            height="100"
            width="100"
            color='#f5555b'
            ariaLabel='loading'
        />
    </div>
  )
}
