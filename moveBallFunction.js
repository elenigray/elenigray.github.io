var velocityx = 3;
var positionx = 0;
var time = 1;
var ball = document.getElementById("ball");

function myFunction( ){
    positionx = positionx + velocityx;
    ball.style.left = positionx + 'px';
}

setInterval(myFunction, time);