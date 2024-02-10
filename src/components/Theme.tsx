import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

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
            <button onClick={changeTheme} className={` text-2xl p-2 rounded-xl ${theme === "light" ? " bg-slate-200 text-black" : " bg-slate-800 text-white"}`}>
                {theme === "light" ? "🌞" : "🌙"}
                </button>
        </div>
    )
}

export default Theme