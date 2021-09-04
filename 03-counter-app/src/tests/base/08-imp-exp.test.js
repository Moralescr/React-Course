import {getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp'; 
import heroes from '../../data/heroes';

describe('Pruebas funciones de heroes', () => {

    test('Debe retornar un heroe por ID', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( h => h.id === id);
        expect(heroe).toEqual(heroeData);
        
    });

    test('Debe retornar undefined sino se encuentra heroe', () => {

        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test('Debe de retornar arreglo con los heroes de DC', () => {
        
        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner);

        const heroeDCdata = heroes.filter(o => o.owner === owner);

        expect(heroesDC).toEqual(heroeDCdata);
    });
    
    test('Debe de retornar arreglo con los heroes de Marvel', () => {
        
        const length = 2;

        const owner = 'Marvel';
        const heroesMV = getHeroesByOwner(owner);

        expect(heroesMV.length).toEqual(length);
    });

    test('Debe de retornar [] si owner no existe', () => {
        
        const owner = 'Comics';
        const owdc = getHeroesByOwner(owner);

        expect(owdc).toEqual([]);
    });

});