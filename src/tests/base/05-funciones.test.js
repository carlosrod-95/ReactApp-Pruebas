import '@testing-library/jest-dom';
import { getUser } from "../../base/05-funciones"
import { getUserActivo } from "../../base/05-funciones"


describe('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest)

    })

    // getUsuarioActivo debe retornar un objeto

    test('getUserActivo debe retornar un objeto con argumento', () => {
        const nombre = 'Carlos';
        const userActivo = getUserActivo(nombre);
        
        const userActivoTest = {
            uid: 'ABC567',
            username: nombre
        }

        expect(userActivo).toEqual(userActivoTest)
    })
    
    
})

