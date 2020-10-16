checkSpeed(150);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit+kmPerPoint){
        console.log("speed ok"); // Speed limit normal
        return;
    }
}