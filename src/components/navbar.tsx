import ButtonBorder from './child/button_border'
import ButtonDefault from './child/Button_default'
import { useContext, useEffect, useState } from 'react'
import { Navbar_model } from '../types/Model'
import { ActiveContext } from '../globalState/ActiveContext'

const Navbar = () => {
    let context = useContext(ActiveContext)
    if (!context){
        return null
    }
    let {active, setactive} = context

    // scrol ada border bottom 
    let [scrol, setscrol] = useState(false)
    let handlescrol = () => {
        if (window.scrollY > 50) {
            setscrol(true)
            
        } else {
            setscrol(false)
        }
    }
    useEffect (() => {
        window.addEventListener('scroll', handlescrol)
        
    },[scrol])
    useEffect(() => {
        setactive(location.pathname)
    }, [location.pathname])

    
  return (
    <>
        <div className={`flex justify-between px-30  fixed w-full z-50 ${scrol ? "bg-white border-b-5 border-indigo-50 py-7" : "bg-transparent py-6"}`}>
            <div className='text-3xl font-bold'>Nuansauai.</div>
            <div className='flex gap-5 justify-between'>
                {Navbar_model.map((item, index) => {
                    return (
                        <ButtonDefault 
                        button={item}
                        key={index}
                        SizeButton='navSize'
                        onClick={() => setactive(item.link)}
                        bgactive={active === item.link}
                        
                        
                        />
                    )
                })}
            </div>
            <ButtonBorder SizeButton='navSize' button={{name:"Join With Us", link:"/login"}} />
        </div>
    </>
  )
}

export default Navbar