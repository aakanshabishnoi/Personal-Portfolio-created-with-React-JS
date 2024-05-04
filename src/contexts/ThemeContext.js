import React, { createContext, useState} from "react";
import { themeData } from "../data/themeData";

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    const [theme, setTheme] = useState(themeData.theme)
    const [drawerOpen, setDrawerOpen] = useState(false)

    const setHandledrawer = ()=>{
        setDrawerOpen(!drawerOpen)
    }

    const value = {theme, drawerOpen, setHandledrawer}

  return (
    <ThemeContext.Provider value={value}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider