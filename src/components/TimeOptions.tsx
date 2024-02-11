import { timeReducer, TimeTypesAction } from '../reducers/TimeReducer'
import { useReducer } from 'react'
import { ThemeContext } from "../contexts/ThemeContext"
import { useContext } from 'react'
// Main Time Options like increase and decrease
const TimeOptions = () => {
    const defaultSession = 25
    const [state, dispatch] = useReducer(timeReducer, {minuteSession: defaultSession, minuteBreak: 5}) 
    const {theme, setTheme} = useContext(ThemeContext)
    //Increase Session Time by 1
    const increaseSession = () => {
        dispatch({type: TimeTypesAction.INCREASE_MINUTE_SESSION, payload: 1})
    }
    //Decrease Session Time by 1
    const decreaseSession = () => {
        dispatch({type: TimeTypesAction.DECREASE_MINUTE_SESSION, payload: 1})
    }
    //Increase Break Time by 1
    const increaseBreak = () => {
        dispatch({type: TimeTypesAction.INCREASE_MINUTE_BREAK, payload: 1})
    }
    //Decrease Break Time by 1
    const decreaseBreak = () => {
        dispatch({type: TimeTypesAction.DECREASE_MINUTE_BREAK, payload: 1})
    }

    // Reset all
    const reset = () => {
        dispatch({type: TimeTypesAction.RESET, payload: 0})
    }


  return (
    <div>
        <div>
            <p>Session Time {state.minuteSession}</p>
            <button onClick={increaseSession} className=' bg-green-900 hover:bg-green-700 focus:bg-green-700 duration-200 ease-in-out rounded-2xl p-2 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-6 h-6 hover:scale-110 duration-500 ease-in-out">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg></button>
            <button onClick={decreaseSession} className=' bg-red-900 hover:bg-red-700 focus:bg-red-700 duration-200 ease-in-out rounded-2xl p-2 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-6 h-6 hover:scale-110 duration-500 ease-in-out">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
            </button>
        </div>
        <div>
            <p>Session Time {state.minuteBreak}</p>
            <button onClick={increaseBreak} className=' bg-green-900 hover:bg-green-700 focus:bg-green-700 duration-200 ease-in-out rounded-2xl p-2 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-6 h-6 hover:scale-110 duration-500 ease-in-out">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>
            </button>
            <button onClick={decreaseBreak} className=' bg-red-900 hover:bg-red-700 focus:bg-red-700 duration-200 ease-in-out rounded-2xl p-2 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-6 h-6 hover:scale-110 duration-500 ease-in-out">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
            </button>
        </div>
        <div>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default TimeOptions