import TimeOptions  from "../components/TimeOptions";
import {test, expect} from "vitest"
import {render, screen} from "@testing-library/react"


test("render component",  () => {
        render(<TimeOptions />)
        const text =  screen.queryByText(/Session Time/i)
        expect(text?.textContent).to.include("Session Time")  
        const number =  screen.queryByText(/Break Time/i)
        expect(number?.textContent).to.include("Break Time")  
    })

