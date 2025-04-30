import { button } from '../../types/course_type'
import { Link } from 'react-router-dom'
type buttonBorderProps = {
    button: button
    SizeButton: 'lg' | 'md' | 'navSize'
}
const ButtonBorder = ({button, SizeButton}: buttonBorderProps) => {
  let buttonSize: {navSize: string, md: string, lg: string } = 
        {
            navSize: "font-bold px-3 py-1.5 text-md",
            md: "font-bold px-2 py-1 text-md",
            lg: "font-bold px-5 py-2.5 text-xl",
            
        }
    
  return (
    <>  
        <Link to={button.link}>
            <button className={`
              ${buttonSize[SizeButton]}
              rounded-sm bg-transparent border-1 border-red-button text-red-button`
              }>
                    <p>{button.name}</p>
            </button>
        </Link>
    </>
  )
}

export default ButtonBorder