import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas async await',() => {
    test('get imagen debe retornar una url de imagen', async()=> {
        const url = await getImagen()
       
        expect(typeof url).toBe('string')
    })
})