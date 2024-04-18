import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas de componente', () => {

    /*test('debe hacer match con el snapshot', () => {
        const title = 'holaa VAsco'
        const {container} = render(<FirstApp title={title} />)

        expect(container).toMatchSnapshot()

    })*/

    test('Mostrar title en un h1', () => { 
        const title = 'holaa VAsco'
        const {container, getByText, getByTestId} = render(<FirstApp title={title} />)

        expect(getByText(title) ).toBeTruthy()

        //const h1 = container.querySelector('h1');
        //expect(h1.innerHTML).toContain(title)

        expect(getByTestId('test-title').innerHTML).toContain(title)
    })

    test('show subtitle prints send by props', () => { 
        const title = 'holaa VAsco'
        const subTitle = 'Carlo A.'
        const {getByText} = render(<FirstApp title={title} subTitle={subTitle} />)
        expect(getByText(subTitle) ).toBeTruthy()

     })

})