
import { timeReducer, TimeTypesAction } from '../reducers/TimeReducer'
import { useReducer } from 'react'

// Main Time Options like increase and decrease
const TimeOptions = () => {
    const defaultSession = 25
    const [state, dispatch] = useReducer(timeReducer, {minuteSession: defaultSession, minuteBreak: 5}) 

    //Increase Session Time by 1
    const increaseSession = () => {
        dispatch({type: TimeTypesAction.INCREASE_MINUTE_SESSION, payload: 1})
    }
    //Decrease Session Time by 1
    const decreaseSession = () => {
        dispatch({type: TimeTypesAction.DECREASE_MINUTE_SESSION, payload: 1})
    }

    // Reset all
    const reset = () => {
        dispatch({type: TimeTypesAction.RESET})
    }


  return (
    <div>
        <div>
            <p>Session Time {state.minuteSession}</p>
            <button onClick={increaseSession}>⬆</button>
            <button onClick={decreaseSession}>⬇</button>
        </div>
        <div>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default TimeOptions