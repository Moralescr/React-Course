//Desestructuración de objetos

const persona = {
   nombre: 'Adrian',
   edad: 24,
   clave: '123'
}

// const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = ({nombre, edad, clave, rango='Capitán'}) =>{

   return {
      nombreClave: clave,
      anios: edad,
      latlng: {
         lat: 12.9393,
         lng: -12.363
      }
   }
}

const {nombreClave, anios, latlng:{lat, lng}} = retornaPersona( persona );

console.log(nombreClave, anios);
console.log(`Lat: ${lat} - Lng: ${lng}`);