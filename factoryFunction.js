let address = createAddress('schutz', 'Weimar', 99423);
console.log(address);



function createAddress (street, city, zip){
    return{
        street,
        city  ,
        zip 
    }
};
