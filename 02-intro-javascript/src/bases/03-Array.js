//Arreglos en javascript

const arreglo = [1,2,3,4];

let arreglo2 = [... arreglo, 5]; //Crea una copia del arreglo anterior y añade el elemento 5: Spread operator 

const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
