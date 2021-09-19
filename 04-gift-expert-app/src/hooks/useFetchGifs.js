import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //Se usa para que se haga la petición una sola vez solo si la categoria no cambia
    useEffect(() => {

       //Obtiene las imagenes
       getGifs(category)
        .then(imgs => { //Si es exitoso actualiza el estado
            
            setState({
                data: imgs,
                loading: false 
                })       
        });

    }, [category]);

    return state;
}
  
