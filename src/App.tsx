import React from "react"
import Theme from "./components/Theme"
import TimeOptions from "./components/TimeOptions"
import { useContext } from "react"
import { ThemeContext } from "./contexts/ThemeContext"

const App: React.FC = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div id="main" className={` duration-1000 ease-in-out ${theme === "light" ? "bg-slate-100  text-black" : "bg-slate-900 text-white" }`}>
      <Theme></Theme>
      <TimeOptions></TimeOptions>
    </div>
    
  )
}

export default App