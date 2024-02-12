import React from "react"

interface StopStartResetTypes {
  handleStartStop: () => void,
  reset: () => void
}

const StopStartReset: React.FC<StopStartResetTypes> = ({handleStartStop, reset}) => {
  return (
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
  )
}

export default StopStartReset