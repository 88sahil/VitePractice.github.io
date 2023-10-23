import { createContext } from "react";
import React from "react";
import all_product from '../assets/all_product'
export const Shopcontext  = createContext("")

const ShopcontextProvider =(props)=>{
    const contaxvalue ={all_product}
    return(
        <Shopcontext.Provider value={contaxvalue}>
            {props.children}
        </Shopcontext.Provider>
    )
}

export default ShopcontextProvider