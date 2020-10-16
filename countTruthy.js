const array = [1, null, 3];
console.log(countTruthy(array));

function countTruthy(array){
    let count =0;
    for (let value of array)
    if (value)
    count++;
    return count;
}