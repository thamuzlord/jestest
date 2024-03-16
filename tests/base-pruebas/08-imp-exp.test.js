import { getHeroeById } from "../../src/base-pruebas/08-imp-exp"

describe('pruebas get Heroes', ()=>{
    test('get Heroe By Id', () => { 
        const id = 1
        const heroe = getHeroeById(id)

        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
     })

     test('get Heroe By Id debe retornar undefined si no existe', () => { 
        const id = 100
        const heroe = getHeroeById(id)
        //evalua si es null, undefined o false
        expect(heroe).toBeFalsy()
     })
})