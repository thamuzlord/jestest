import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('test counterApp',()=>{

    const initialValue = 10

    test('snapshot', () => { 
        const {container} = render(<CounterApp value={initialValue} />)
        expect(container).toMatchSnapshot()
     })

     test('increment +1', () => { 
        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('+1'))

        expect(screen.getByText('11')).toBeTruthy()

      })


      test('should reset', () => { 
        render(<CounterApp value={initialValue} />)
        screen.getAllByRole('button', { name:'btn-reset'})

        fireEvent.click(screen.getByRole('button', { name:'btn-reset'}))

        expect(screen.getByText('10')).toBeTruthy()

       })

})