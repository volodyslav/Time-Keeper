import { useContext, useEffect } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import themeData from "./data/appData.json"
import axios from "axios"
// Theme Change Component
const Theme = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    useEffect(() => {
        setTheme(themeData.theme)
    }, [])

    const  changeTheme = async () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        try {
            await axios.put('/api/theme', { theme: newTheme });
            console.log('Theme saved successfully.');
        } catch (error) {
            console.error('Error saving theme:', error); 
        }
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