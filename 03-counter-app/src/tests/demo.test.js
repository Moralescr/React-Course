describe('Pruebas en el archivo demo.test', () => {

    test('Debe de ser iguales los strings', () => {

        //1.Inicialización
        const mensaje = 'Hola Mundo';

        //2.Estimulo
        const mensaje2 = 'Hola Mundo';

        //3.Observar comportamiento
        expect(mensaje).toBe(mensaje2);
    });

}) ;   
