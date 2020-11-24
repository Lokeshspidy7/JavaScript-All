let address = new Address('SG','W', 99);
console.log(address);

function Address (street, city, zip){
    this.street = street;
    this.city = city;
    this.zip = zip;
}