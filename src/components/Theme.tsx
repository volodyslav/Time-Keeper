import { useContext, useEffect, useRef } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { Store } from "tauri-plugin-store-api";

// Theme Change Component
const Theme = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    
    //SAVE theme
    
    
    const storeRef = useRef(new Store(".settings.dat"));

    useEffect(() => {
        const save = async () => {
            try {
                const store = storeRef.current;
                await store.set("app-theme", theme);
                await store.save();
                const newTheme = await store.get("app-theme");
                if (newTheme === "") {
                    setTheme(newTheme);
                }
            } catch (error) {
                console.error("Error saving theme:", error);
            }
        };

        save();
    }, [storeRef.current, setTheme, theme]);

    const  changeTheme = () => {
        
        if(theme === 'light'){
            setTheme("dark")
        }else if(theme === "dark"){
            setTheme("light")
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