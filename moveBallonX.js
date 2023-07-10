var velocityx = 3;
var positionx = 0;
var positionxmin = 0;
var positionxmax = 500;
var time = 1;
var reverse_x = true;
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

if (
    positionx > positionxmax ||
    positionx === positionxmin
) {
    reverse_x = !reverse_x; 
    }
}


setInterval(myFunction, time);