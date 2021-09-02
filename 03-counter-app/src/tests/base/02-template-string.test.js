import {getSaludo} from '../../base/02-template-string';
import '@testing-library/jest-dom';

describe('Pruebas en 02-template-string', ()=>{

    test('Debe de retornar Hola Adrian', () => {

        const nombre = 'Adrian';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);

    });

    //Get saludo debe retornar Hola Carlos sino hay argumento nombre

    test('Retornar Hola Carlos', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos');
    })
    

});