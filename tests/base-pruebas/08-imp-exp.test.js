import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

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

     test('getHeroesByOwner debe retornar heroes de DC', () => {
      const owner = 'DC'
      const heroes = getHeroesByOwner(owner)

      expect(heroes.length).toBe(3)
     /* expect(heroes).toEqual(
         [
            {
               id: 1,
               name: 'Batman',
               owner: 'DC'
           },
           {
               id: 2,
               name: 'Spiderman',
               owner: 'Marvel'
           },
           {
               id: 3,
               name: 'Superman',
               owner: 'DC'
           }
         ]
      )*/
     })
})