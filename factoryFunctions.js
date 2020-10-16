function createCircle(radius){
    return{
        radius,
        draw(){
            console.log('Draw a circle');
        }
    }
}

const circle1 = createCircle(2);
console.log(circle1);

const circle1 = createCircle(5);
console.log(circle1);