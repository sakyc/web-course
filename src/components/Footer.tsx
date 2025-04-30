import { Link } from "react-router-dom"
import { Navbar_model } from "../types/Model"
import { useContext } from "react"
import { ActiveContext } from "../globalState/ActiveContext"
const Footer = () => {
  let context = useContext(ActiveContext)
  if (!context){
    return null
  }
  return (
    <>
    <div className="flex flex-row justify-between px-30 mt-10 bg-white py-10 border-t-4 border-indigo-50">
        <div className="flex flex-col justify-between w-1/3">
          <div>
            <p className="text-3xl font-bold">Nansauai.</p>
            <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Esse amet debitis minus, 
              excepturi assumenda consequatur adipisci labore enim? 
              Consequuntur, consectetur?</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
              <i className="fa-brands fa-whatsapp"></i>
              <p>+628123456789</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <i className="fa-brands fa-instagram"></i> 
              <p>_s4kyw</p>
            </div>
          </div>
        </div>
        {/* tengah */}
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-bold">Menu</p>
          {Navbar_model.map((item, index) => (
            <Link key={index}  to={item.link}>
              <p key={index}>{item.name}</p>
            </Link>
          ))}
        </div>
        {/* bawah */}
        <div>
          <p className="text-2xl font-bold">Subscribe untuk info menarik</p>
        </div>
    </div>
    <div className="flex justify-center items-center py-10 font-bold text-lg">
      <p>©Copyright 2025 by sakyc, All Right Reserved</p>
    </div>
    </>
  )
}

export default Footer