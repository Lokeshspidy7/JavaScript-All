console.log(sum([7,3,8,2]));

function sum(...items){
    if (items.length ===1 && Array.isArray(items[0]))
        items = [...items[0]];
    return items.reduce((a,b) => a+b);
}