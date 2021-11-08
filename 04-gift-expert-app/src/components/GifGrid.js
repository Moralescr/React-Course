import React from 'react'
import GifGridItem from './GifGridItem';
import {useFetchGifs} from '../hooks/useFetchGifs';
import PropTypes from 'prop-types'

export const GifGrid = ({category}) => {

    //Obtiene las imagenes de la búsqueda
    const {data:images, loading} = useFetchGifs( category ); //Data:images se usa para renombrar el parámetro


    //Muestra los resultados de la búsqueda
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            { loading && <p className="animate__animated animate__flash">loading</p> }

            <div className="card-grid">
            
            {
                images.map( ( img ) => (
                    <GifGridItem 
                        key = { img.id } 
                        { ...img } 
                    />
                ))
            }
            </div>
        </>
    )
}

export default GifGrid;

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}