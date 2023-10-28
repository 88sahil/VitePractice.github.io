import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
    todo:[
        {
            id:1,
            msg:"default todo",
            completed:false
        }
    ],
    addtodos:(todo) =>{},
    removetodos:(id)=>{},
    updatetodos:(id,todo)=>{},
    togglecomplete:(id)=>{},
})

export const useTodo=()=>{
    return useContext(TodoContext)
}
export const TodoProvider = TodoContext.Provider