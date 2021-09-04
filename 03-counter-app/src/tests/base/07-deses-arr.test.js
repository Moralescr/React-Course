//  toBe : Igualdad exacta
//  toEqual : Igualdad en valores, por ejemplo un objeto, llaves y valores
import {retornaArreglo} from '../../base/07-deses-arr';

describe('Pruebas en desesctructiración', () => {

    test('Debe de retornar un string y un número', () => {

        const [letras, numeros] = retornaArreglo(); //['ABC', 123]

        expect(letras).toBe('ABC');        
        expect(typeof letras).toBe('string');
        
        expect(numeros).toBe(123);        
        expect(typeof numeros).toBe('number');
    });

});