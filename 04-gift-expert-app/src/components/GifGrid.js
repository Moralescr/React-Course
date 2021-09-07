import React from 'react'

export const GifGrid = ({category}) => {

    const getGifs = async () => {

        const apiKey = '7OCSJVhkN01ZLCaCAwaMxN9U4fwXVbiP';
        const url = `api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${apiKey}`;

        const resp = await fetch(url); //Realiza petición
        const { data } = await resp.json(); //Recupera la data
        
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.downsized_medium.url
            }
        });
    }

    return (
        <div>
          <h3>{category}</h3>
        </div>
    )
}
