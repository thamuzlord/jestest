import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Arrays', ()=>{
    test('Retorna string y numero', ()=>{
        const [letters, numbers] = retornaArreglo()

        expect(letters).toEqual(expect.any(String))
        expect(numbers).toBe(123)

    })
})