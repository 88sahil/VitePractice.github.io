import React, { createContext, useState } from "react";
import Restaurant from '../assets/Restaurant/Restaurant'
import Menu from '../assets/Menu/Menu'
export const FoodhutContext = createContext("")
const getdefaultCart =()=>{
    let cart ={}
    for(let i=0;i<Menu.length+1;i++){
        cart[i] = 0;
    }
    return cart
}

const FoodhutContextProvider =(props)=>{
    const [count,setcount] = useState(0)
    const [cart,setcartitem] = useState(getdefaultCart())
    const [addrestro,setaddrestro] = useState(Restaurant)
    const addtocart =(itemID)=>{
        setcartitem((prev=>({...prev,[itemID]:prev[itemID]+1})))
        setcount(count+1)
    }
    const removetocart =(itemID)=>{
        setcartitem((prev=>({...prev,[itemID]:prev[itemID]-1})))
        setcount(count-1)
    }
    console.log(cart)
    const totalamount = ()=>{
        let amount = 0;
        for(let i in cart){
            if(cart[i]>0){
                let totalitem = Menu.find((ele)=>ele.id===Number(i))
                amount +=(totalitem.price*cart[i])
            }
        }
        return amount
    }
    const contaxvalue = {Restaurant,count,addrestro,setaddrestro,addtocart,removetocart,Menu,cart,totalamount}
    
    return(
        
        <FoodhutContext.Provider value={contaxvalue}>
            {props.children}
        </FoodhutContext.Provider>
    )
}

export default FoodhutContextProvider