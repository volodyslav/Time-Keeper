import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

// Theme Change Component
const Theme = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    const changeTheme = () => {
        
        if(theme === 'light'){
            setTheme("dark")
        }else if(theme === "dark"){
            setTheme("light")
        }
    }

    return (
        <div>
            <button onClick={changeTheme} className={` text-2xl p-4 hover:scale-110 duration-500 ease-in-out hover:rounded-3xl rounded-full ${theme === "light" ? " bg-slate-200 hover:bg-slate-400 focus:bg-slate-400 text-black" : " bg-slate-900 hover:bg-slate-800 focus:bg-slate-800 text-white"}`}>
                {theme === "light" ? "🌞" : "🌙"}
                </button>
        </div>
    )
}

export default Theme