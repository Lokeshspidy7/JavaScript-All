const circle = {
    radius: 2,
    draw(){
        console.log('drawing');
    }
};

const another = Object.assign({}, circle);

//const another = { ...circle };
console.log(another);