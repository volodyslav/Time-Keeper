interface BreakTimeTypes {
    startStop: boolean,
    increaseBreak: () => void,
    decreaseBreak: () => void
}

const BreakTime: React.FC<BreakTimeTypes> = ({startStop, increaseBreak, decreaseBreak}) => {
  return (
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
  )
}

export default BreakTime