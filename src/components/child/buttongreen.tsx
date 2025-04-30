// type buttonProps = [
//     nama: String

import { useContext } from "react"
import { Link } from "react-router-dom"
import { ActiveContext } from "../../globalState/ActiveContext"

// ]
const ButtonGreen = () => {
  let context = useContext(ActiveContext)
    if (!context){
        return null
    }
    let {active, setactive} = context

    let nama = "Lihat semua kelas >"
  return (
    <>
    <Link to={'/kelas'} onClick={() => setactive('/kelas')}>
        <div className='px-5 py-2 bg-green-700 rounded-full mt-10 flex items-center'>
            <p className='text-white text-2xl font-bold '> {nama}</p>
        </div>
    </Link>
    </>
    
  )
}

export default ButtonGreen