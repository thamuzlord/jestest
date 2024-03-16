import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('pruebas template-string', ()=>{
    test('get Saludo', () => { 
        const name = 'Vasco';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${ name }`)
     })
})