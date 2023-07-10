var velocityx = 3;
var velocityy = 3
var positionx = 0;
var positiony = 0;
var positionxmin = 0;
var positionxmax = 500;
var positionymin = 0;
var positionymax = 300;
var time = 1;
var reverse_x = true;
var reverse_y = true;
var ball = document.getElementById("ball");

function myFunction( ){
if(reverse_x){
    positionx = positionx + velocityx;
    ball.style.left = positionx + 'px';
}
else{
    positionx = positionx - velocityx;
    ball.style.left = positionx + 'px';
}

if(reverse_y){
    positiony = positiony + velocityy;
    ball.style.top = positiony + 'px';
}
else{
    positiony = positiony - velocityy;
    ball.style.top = positiony + 'px'
}

if (
    positionx > positionxmax ||
    positionx === positionxmin
) {
    reverse_x = !reverse_x; 
    }
if(
    positiony > positionymax ||
    positiony === positionymin
) {
    reverse_y = !reverse_y;
}
    }


setInterval(myFunction, time);