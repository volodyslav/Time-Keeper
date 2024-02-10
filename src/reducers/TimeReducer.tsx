
export enum TimeTypesAction{
    RESET,
    INCREASE_MINUTE_SESSION,
    DECREASE_MINUTE_SESSION,
    INCREASE_MINUTE_BREAK,
    DECREASE_MINUTE_BREAK
}

interface TimeActions {
    type: TimeTypesAction,
    payload: number
}

interface TimeState {
    minuteSession: number,
    minuteBreak: number
}

export const timeReducer = (state: TimeState, action: TimeActions) => {
    switch(action.type){
        case TimeTypesAction.RESET:
            return {...state, 
                minuteSession: 25, 
                minuteBreak: 5}
        case TimeTypesAction.INCREASE_MINUTE_SESSION:
            return {...state, minuteSession: state.minuteSession + action.payload}
        case TimeTypesAction.DECREASE_MINUTE_SESSION:
            return {...state, minuteSession: state.minuteSession - action.payload}
        default: 
            return state
    }
}
