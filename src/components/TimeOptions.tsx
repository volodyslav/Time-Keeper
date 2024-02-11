import { timeReducer, TimeTypesAction } from '../reducers/TimeReducer'
import { useEffect, useReducer, useState } from 'react'

// Main Time Options like increase and decrease
const TimeOptions = () => {
    const defaultSession = 25
    const defaultBreak = 5
    const [state, dispatch] = useReducer(timeReducer, {minuteSession: defaultSession, minuteBreak: defaultBreak}) 

    //Start and stop functions
    const [startStop, setStartStop] = useState(false)

    //Minutes and seconds
    const [minutes, setMinutes] = useState(state.minuteSession)
    const [seconds, setSeconds] = useState(0)

    // Start time
    const handleStartStop = () => {
        setStartStop(!startStop)
    }

    useEffect(() => {
        if(startStop){
            if(seconds === 0){
                setTimeout(() => {
                 setSeconds(60)    
                }, 1000)
            }
            if (seconds < 60){
                const secondInt = setInterval(() => {
                  setSeconds(s => s - 1)  
                }, 1000)
                return () => clearInterval(secondInt)
            }
        }
    }, [startStop, seconds])

    //Increase Session Time by 1
    const increaseSession = () => {
        if(state.minuteSession < 60 && !startStop){
          dispatch({type: TimeTypesAction.INCREASE_MINUTE_SESSION, payload: 1})  
        }
        
    }
    //Decrease Session Time by 1
    const decreaseSession = () => {
        if(state.minuteSession > 0 && !startStop){
        dispatch({type: TimeTypesAction.DECREASE_MINUTE_SESSION, payload: 1})}
    }
    //Increase Break Time by 1
    const increaseBreak = () => {
        if(state.minuteBreak < 25 && !startStop){
        dispatch({type: TimeTypesAction.INCREASE_MINUTE_BREAK, payload: 1})}
    }
    //Decrease Break Time by 1
    const decreaseBreak = () => {
        if(state.minuteBreak > 0 && !startStop){
        dispatch({type: TimeTypesAction.DECREASE_MINUTE_BREAK, payload: 1})}
    }

    // Reset all
    const reset = () => {
        dispatch({type: TimeTypesAction.RESET, payload: 0})
        setStartStop(false)
        setSeconds(0)
    }


  return (
    <div className=' text-center text-2xl font-bold mx-auto'>
        <div className=' flex justify-center space-x-10'>
            <div >
                <p className=' text-4xl my-4'>Session Time</p>
                <p className=' text-6xl'>{state.minuteSession}</p>
                <div className=' space-x-4 my-4'>
                    <button disabled={startStop} onClick={increaseSession} className=' bg-green-900 hover:bg-green-700 disabled:bg-gray-600   focus:bg-green-700 duration-200 ease-in-out rounded-2xl p-2 text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-6 h-6 hover:scale-110 duration-500 ease-in-out">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                        </svg></button>
                    <button disabled={startStop} onClick={decreaseSession} className=' bg-red-900 hover:bg-red-700 disabled:bg-gray-600  focus:bg-red-700 duration-200 ease-in-out rounded-2xl p-2 text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-6 h-6 hover:scale-110 duration-500 ease-in-out">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>
                    </button>
                </div>
            </div>
            <div>
                <p className=' text-4xl my-4'>Break Time </p>
                <p className=' text-6xl'>{state.minuteBreak}</p>
                <div className=' space-x-4 my-4'>
                    <button disabled={startStop} onClick={increaseBreak} className=' bg-green-900 hover:bg-green-700 disabled:bg-gray-600  focus:bg-green-700 duration-200 ease-in-out rounded-2xl p-2 text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-6 h-6 hover:scale-110 duration-500 ease-in-out">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                        </svg>
                    </button>
                    <button disabled={startStop} onClick={decreaseBreak} className=' bg-red-900 hover:bg-red-700 disabled:bg-gray-600  focus:bg-red-700 duration-200 ease-in-out rounded-2xl p-2 text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-6 h-6 hover:scale-110 duration-500 ease-in-out">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div className=' my-4'>
            <p className=' text-8xl'>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
        </div>
        <div className=' space-x-10'>
            <button onClick={handleStartStop} className=' text-emerald-800 hover:text-emerald-600 duration-700 ease-in-out focus:text-emerald-600'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811Z" />
                </svg>
            </button>
            <button onClick={reset} className='  text-orange-800 hover:text-orange-600 duration-700 ease-in-out focus:text-orange-600'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
            </button>
        </div>
    </div>
  )
}

export default TimeOptions