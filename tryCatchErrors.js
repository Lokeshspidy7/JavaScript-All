const person  ={
    firstName: 'john',
    lastName: 'Snow',
    set fullName(value) {
        if(typeof value !== 'string')
            throw new Error('Value is not a String.');
        
        const parts = value.split('');
        if (parts.length !== 2)
            throw new Error('Enter fn and Ln');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = '';

}
catch (e){
    
    alert(e);
}
console.log(person);
