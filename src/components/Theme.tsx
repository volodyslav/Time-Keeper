import { useContext} from "react"
import { ThemeContext } from "../contexts/ThemeContext"

// Theme Change Component
const Theme = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    const  changeTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
    }

    return (
        <div className=" text-end p-2">
            <button onClick={changeTheme} className={` text-2xl p-4 hover:scale-110 duration-500 ease-in-out hover:rounded-3xl rounded-full ${theme === "light" ? " bg-slate-200 hover:bg-slate-300 focus:bg-slate-300 text-black" : " bg-slate-800 hover:bg-slate-700 focus:bg-slate-700 text-white"}`}>
                {theme === "light" ? "🌞" : "🌙"}
                </button>
        </div>
    )
}

export default Theme