import { createContext } from "react";
import React from "react";
import all_product from '../assets/all_product'
export const shopcontext  = createContext("")

const shopcontextProvider =(props)=>{
    const contaxvalue ={all_product}
    return(
        <shopcontext.Provider value={contaxvalue}>
            {props.children}
        </shopcontext.Provider>
    )
}

export default shopcontextProvider