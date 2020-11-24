function sum(discount, ...prices){
    const total = prices.reduce((a,b) => a+b);
    return total*(1-discount);
}

console.log(sum(0.2, 50,30,20));