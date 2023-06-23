import { createContext, useContext, useEffect, useState } from "react";

const AppContext=createContext();
export const AppProvider=({children})=>{
    const getInitialDarkMode=()=>{
        const prefersDarkMode=window.matchMedia("(prefers-color-scheme:dark)").matches;
        const storedMode=localStorage.getItem("darkTheme")==="true"
        return storedMode||prefersDarkMode
    }
    const [isDarkTheme,setIsDarkTheme]=useState(getInitialDarkMode())
    const [search,setSearch]=useState("cat")

    const toggleDarkTheme=()=>{
        const newDarkTheme=!isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        localStorage.setItem("darkTheme",newDarkTheme)
        }

    useEffect(()=>{
        document.body.classList.toggle("dark-theme",isDarkTheme)
    },[isDarkTheme])
    return(
        <AppContext.Provider value={{isDarkTheme,toggleDarkTheme,search,setSearch}}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext=()=>useContext(AppContext);