//Funciones 
// Recomendando hacer las funciones de esta manera 
const saludar2 = nombre => {
   return `Hola ${nombre}`;
}

console.log(saludar2('Adrian Morales'));

//Tarea 
// 1.Transformen a una funciòn flecha
// 2.Tiene que retornar un objeto implìcito
// 3.Pruebas

const getUsuarioActivo = nombre => ({
      uid: 'ABCD656',
      username: nombre
});

const usuarioActivo = getUsuarioActivo('Adrian');

console.log(usuarioActivo);