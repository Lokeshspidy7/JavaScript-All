const address = {
    street: 'Schützengaase',
    city: 'Weimar',
    Zip: 99423,
};


function showAdress(address){
    for(let key in address)
    console.log(key, address[key]);
}

showAdress(address);