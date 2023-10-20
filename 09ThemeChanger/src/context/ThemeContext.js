import React, { useContext } from "react";

export const ThemeContext = useContext({
    thememode:"light",
    darkmode:()=>{},
    lightmode:()=>{}
})

export const ThemeContextProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}