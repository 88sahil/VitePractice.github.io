import React, { createContext, useContext } from "react";

export const ThemeContext = createContext({
    thememode:"light",
    darkmode:()=>{},
    lightmode:()=>{}
})

export const ThemeContextProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}