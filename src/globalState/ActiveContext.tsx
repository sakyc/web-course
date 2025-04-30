import  {createContext, ReactNode, useState} from 'react'
import type { KelasActive } from '../types/course_type'; 
const ActiveContext = createContext<KelasActive | undefined>(undefined);
const ActiveProvider = ({ children }: { children: ReactNode }) => {
let [active, setactive] = useState("/")
  return (
    <ActiveContext.Provider value={{ active, setactive }}>
        {children}
    </ActiveContext.Provider>

  )
}

export {ActiveContext, ActiveProvider}