import { timeReducer, TimeTypesAction } from '../reducers/TimeReducer'
import { useEffect, useReducer, useState } from 'react'
import SessionTime from './SessionTime'
import BreakTime from './BreakTime'
import StopStartReset from './StopStartReset'
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

    // Session or Break
    const [time, setTime] = useState("session")

    //Start audio
    const playAudio = () => {
        const sound = document.querySelector<HTMLAudioElement>("#sound")

        sound?.play().catch(error => {
            console.error('Error playing audio:', error);
        });
    }

    // Start time
    const handleStartStop = () => {
        setStartStop(!startStop)
    }

    useEffect(() => {
        if(time === "session"){
            setMinutes(state.minuteSession)  
         }else if(time === "break"){
            setMinutes(state.minuteBreak) 
         }
    }, [state.minuteBreak, state.minuteSession])

    useEffect(() => {
        if(startStop){
            if (seconds === 0 && minutes === 0){
                playAudio()
                if(time === "session"){
                    setTime("break")
                    setMinutes(state.minuteBreak)  
                 }else if(time === "break"){
                    setTime("session")
                    setMinutes(state.minuteSession) 
                 }
            }else{
                
                const secondInt = setInterval(() => {
                    if(seconds === 0){
                        setSeconds(59)
                        setMinutes(m => m - 1)    
                    }else{
                        setSeconds(s => s - 1)  
                    }
                }, 1000)
                return () => clearInterval(secondInt)
            }
        }
    }, [startStop, seconds, state.minuteSession, state.minuteBreak, time, minutes])

    //Set default when some values changed
    const setDefault = () => {
        setSeconds(0)
        setTime("session")
        setMinutes(state.minuteSession)
    }

    //Increase Session Time by 1
    const increaseSession = () => {
        if(state.minuteSession < 60 && !startStop){
          dispatch({type: TimeTypesAction.INCREASE_MINUTE_SESSION, payload: 1})  
        }
        setDefault()
        
    }
    //Decrease Session Time by 1
    const decreaseSession = () => {
        if(state.minuteSession > 1 && !startStop){
        dispatch({type: TimeTypesAction.DECREASE_MINUTE_SESSION, payload: 1})}
        setDefault()
    }
    //Increase Break Time by 1
    const increaseBreak = () => {
        if(state.minuteBreak < 25 && !startStop){
        dispatch({type: TimeTypesAction.INCREASE_MINUTE_BREAK, payload: 1})}
        setDefault()
    }
    //Decrease Break Time by 1
    const decreaseBreak = () => {
        if(state.minuteBreak > 1 && !startStop){
        dispatch({type: TimeTypesAction.DECREASE_MINUTE_BREAK, payload: 1})}
        setDefault()
    }

    // Reset all
    const reset = () => {
        dispatch({type: TimeTypesAction.RESET, payload: 0})
        setStartStop(false)
        setSeconds(0)
        setMinutes(defaultSession)
        setTime("session")
    }


  return (
    <div className=' text-center text-2xl font-bold mx-auto'>
        <div className=' flex justify-center space-x-10'>
            <div >
                <p className=' text-4xl my-4'>Session Time</p>
                <p className=' text-6xl'>{state.minuteSession}</p>
                <SessionTime startStop={startStop} increaseSession={increaseSession} decreaseSession={decreaseSession}/>
            </div>
            <div>
                <p className=' text-4xl my-4'>Break Time </p>
                <p className=' text-6xl'>{state.minuteBreak}</p>
                <BreakTime startStop={startStop} increaseBreak={increaseBreak} decreaseBreak={decreaseBreak}/>
            </div>
        </div>
        <div className=' my-4'>
            <h1 className=' text-4xl'>{time === "session" ? "Session": "Break"}</h1>
            <p className=' text-8xl'>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
        </div>
        <StopStartReset reset={reset} handleStartStop={handleStartStop}/>
        <audio id='sound' src='../../sound/clock.mp3'></audio>
    </div>
  )
}

export default TimeOptions