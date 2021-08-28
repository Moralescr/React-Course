//Async
const getImagen = async () => {

    try {
        const apikey = '7OCSJVhkN01ZLCaCAwaMxN9U4fwXVbiP';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
        const {data} = await resp.json();
    
        const img = document.createElement('img');
        const {url} = data.images.original;
        img.src = url;
    
        document.body.append(img);
        
    } catch (error) {
        console.log('Error');
    }
}

getImagen();
