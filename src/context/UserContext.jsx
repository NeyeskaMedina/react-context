import {createContext, useState} from "react";
import { getData } from "../hooks/getData";
export const UserContext = createContext({})


export const ContextProvider = ( {children} ) => {
    const { data, setData } = getData()
    const [filled, setFilled] = useState(false)
    const [dataLiked, setDataLiked] = useState()
    const sharedState = {
              data, 
              setData,
              filled,
              setFilled,
              dataLiked,
              setDataLiked
    };  
  return (
    <UserContext.Provider value={sharedState}>
        {children}
    </UserContext.Provider>
  )
}
export default ContextProvider;