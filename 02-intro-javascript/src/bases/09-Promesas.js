//Promesas
import {getHeroeById} from './bases/08-imports-exports';


const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject)=>{

        setTimeout(() =>{
            const heroe = getHeroeById(id);
            if (heroe === 'undefined'){
                reject('No se puedo encontrar el heroe');
            } else{
                resolve(heroe);
            }
        }, 2000);

    });
}

getHeroeByIdAsync(2)
        .then(heroe => console.log('Heroe', heroe))
        .catch((error)=> console.log('Error', error) )