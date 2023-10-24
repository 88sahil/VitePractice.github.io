import React, { createContext, useState } from "react";
import Restaurant from '../assets/Restaurant/Restaurant'
export const FoodhutContext = createContext("")

const FoodhutContextProvider =(props)=>{
    const [count,setcount] = useState(0)
    const contaxvalue = {Restaurant,count}
    
    return(
        
        <FoodhutContext.Provider value={contaxvalue}>
            {props.children}
        </FoodhutContext.Provider>
    )
}

export default FoodhutContextProvider