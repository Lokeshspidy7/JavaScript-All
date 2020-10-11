checkSpeed(150);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit+kmPerPoint){
        console.log("speed ok"); // Speed limit normal
        return;
    }
    const points = Math.floor((speed-speedLimit)/kmPerPoint);
    if(points>= 12)
    console.log("license suspended");
    else 
    console.log ('Points', points);
    
}