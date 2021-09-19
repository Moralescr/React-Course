export const getGifs = async (category) => {

    const apiKey = '7OCSJVhkN01ZLCaCAwaMxN9U4fwXVbiP';
    const url1 = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;

    const resp = await fetch(url1); //Realiza petición
    const { data }  = await resp.json(); //Recupera la data
    

    const gifs = data.map( img => {     
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
   
    return gifs;
}