import React, { createContext, useState } from "react";

//Change Theme Context and Provider
interface ThemeContextType {
    theme: string,
    setTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    setTheme: () => {}
})


export const ThemeProvider: React.FC = ({children}) => {
    const [theme, setTheme] = useState("light")

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}