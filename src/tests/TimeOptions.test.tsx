import TimeOptions  from "../components/TimeOptions";
import {test, expect} from "vitest"
import {render, screen} from "@testing-library/react"


test("render component",  () => {
        render(<TimeOptions />)
        const text =  screen.queryByText(/Session Time 25/i)
        expect(text).not.toBeNull()
    })

