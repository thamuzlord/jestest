import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas funciones', ()=>{
    test('getUser debe retornar un objeto', ()=>{

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser()

        expect(testUser).toEqual(user)
    })

    test('getUsuarioActivo', ()=>{
        const name = 'vasco';

        const user = getUsuarioActivo(name);

        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        })
    })
})