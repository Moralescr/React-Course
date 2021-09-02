import '@testing-library/jest-dom';
import {getUser, getUsuarioActivo} from '../../base/05-funciones';

describe('Pruebas funciones', () =>{

    test('getUser debe retornar objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
        
    })

    //getUsuarioActivo debe retornar un objeto

    test('Debe retornar un objeto', () => {

        const userActive = {
            uid: 'ABC567',
            username: 'moralescr'
        }
        const nombre = 'moralescr';
        const user = getUsuarioActivo(nombre);

        expect(user).toEqual(userActive);
        
    })
    
});