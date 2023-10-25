import React, { createContext, useState } from "react";
import Restaurant from '../assets/Restaurant/Restaurant'
export const FoodhutContext = createContext("")

const FoodhutContextProvider =(props)=>{
    const [count,setcount] = useState(0)

    const [addrestro,setaddrestro] = useState(Restaurant)

    const contaxvalue = {Restaurant,count,addrestro,setaddrestro}
    
    return(
        
        <FoodhutContext.Provider value={contaxvalue}>
            {props.children}
        </FoodhutContext.Provider>
    )
}

export default FoodhutContextProvider