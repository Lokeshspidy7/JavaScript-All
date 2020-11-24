const numbers = [1,2,3,4];

console.log(includes(numbers,5));

function includes(array, seaechElement) {
    for (let element of array)
     if(element === seaechElement)
       return true;
    return false;   

}