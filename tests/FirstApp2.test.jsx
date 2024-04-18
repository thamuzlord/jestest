import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas de componente', () => {

    const title = 'Hola VASCO'

    test('match snapshot', () => { 
        const {container} = render(<FirstApp title={title} />)
        expect(container).toMatchSnapshot()
     })

     test('show "Hola VASCO"', () => { 
        render(<FirstApp title={title} />)
        expect(screen.getByText(title))
      })

      test('debe estar en un h1', () => { 
        render(<FirstApp title={title} />)
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title)
       })

})