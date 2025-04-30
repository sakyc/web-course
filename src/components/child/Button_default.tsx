import { useContext, useEffect, use } from "react";
import { ActiveContext } from "../../globalState/ActiveContext";
import type { button } from "../../types/course_type";
import { Link, useParams } from "react-router-dom";

type ButtonDefaultProps = {
    button: button;
    bgactive?: boolean;
    onClick?: () => void;
    SizeButton: "navSize" | "md" | "lg";
}

function ButtonDefault({ button, bgactive, onClick, SizeButton}: ButtonDefaultProps) {
    let context = useContext(ActiveContext)
    if (!context){
        return null
    }
    
   

    let buttonSize: {navSize: string, md: string, lg: string } = 
        {
            navSize: "font-bold px-2 py-0.5 text-lg",
            md: "font-bold px-2 py-1 text-md",
            lg: "font-bold px-5 py-2.5 text-xl",
            
        }
    
    return (
        <>  
        <Link to={button.link}>
                <button onClick={onClick} 
                className={` 
                ${bgactive ? "bg-red-button text-white" : "bg-transparent text-black hover:text-red-button"} 
                ${buttonSize[SizeButton]}
                rounded-sm
                `} >
                    {button.name}
                </button>

        </Link>
        </>
    )
}

export default ButtonDefault