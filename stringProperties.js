const movie = {
    title : 'life',
    rating: 4.5,
    year: 2020,
    director: 'Lokesh',
};

showProperties(movie);

function showProperties(obj){
    for (let key in obj)
    if(typeof obj [key] === 'string')
    console.log(key, obj[key]);
}

