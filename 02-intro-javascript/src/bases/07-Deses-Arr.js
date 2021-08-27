// Desestructuración Arrays

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [p1, , p3] = personajes;

console.log(p1);
console.log(p3);

const retornaArreglo = () =>{
   return ['ABCD', 12334];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


const arreglo = (valor) => {
   return [ valor, ()=>{console.log('Hola Mundo')} ];
}

const [nombre, setNombre] = arreglo('Goku');
console.log(nombre);
setNombre();