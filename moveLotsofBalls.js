var velocityx = 4;
var velocityx1 = 3;
var velocityx2 = 2;
var velocityy = 4;
var velocityy1 = 3;
var velocityy2 = 2;
var positionx = 0;
var positionx1 = 0;
var positionx2 = 0;
var positiony = 0;
var positiony1 = 0;
var positiony2 = 0;
var positionxmin = 0;
var positionxmax = 700;
var positionymin = 0;
var positionymax = 400;
var time = .5;
var reversex = true;
var reversey = true;
var reversex1 = true;
var reversex2 = true;
var reversey1 = true;
var reversey2 =true;
var ball = document.getElementById("ball");
var ball1 = document.getElementById("ball1");
var ball2 = document.getElementById("ball2");

function myFunction(){
if(reversex){
    positionx = positionx + velocityx;
    ball.style.left = positionx + 'px';
}
else{
    positionx = positionx - velocityx;
    ball.style.left = positionx + 'px';
}

if(reversey){
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
    reversex = !reversex; 
    }
if(
    positiony > positionymax ||
    positiony === positionymin
) {
    reversey = !reversey;
}
    }

    function myFunction1(){
        if(reversex1) {
            positionx1 = positionx1 + velocityx1;
            ball1.style.left = positionx1 + 'px';
        }
        else{
            positionx1 = positionx1 - velocityx1;
            ball1.style.left = positionx1 + 'px';
        }
        
        if(reversey1) {
            positiony1 = positiony1 + velocityy1;
            ball1.style.top = positiony1 + 'px';
        }
        else{
            positiony1 = positiony1 - velocityy1;
            ball1.style.top = positiony1 + 'px'
        }
        
        if (
            positionx1 > positionxmax ||
            positionx1 === positionxmin
        ) {
            reversex1 = !reversex1; 
            }
        if(
            positiony1 > positionymax ||
            positiony1 === positionymin
        ) {
            reversey1 = !reversey1;
        }
            }

function myFunction2(){
    if(reversex2) {
     positionx2 = positionx2 + velocityx2;
        ball2.style.left = positionx2 + 'px';
        }
    else{
    positionx2 = positionx2 - velocityx2;
        ball2.style.left = positionx2 + 'px';
        }
                
    if(reversey2) {
    positiony2 = positiony2 + velocityy2;
        ball2.style.top = positiony2 + 'px';
        }
    else{
    positiony2 = positiony2 - velocityy2;
        ball2.style.top = positiony2 + 'px'
        }
                
    if (
    positionx2 > positionxmax ||
    positionx2 === positionxmin
    ) {
        reversex2 = !reversex2; 
        }
    if(
    positiony2 > positionymax ||
    positiony2 === positionymin
    ) {
        reversey2 = !reversey2;
        }
     }

setInterval(myFunction, time);
setInterval(myFunction1, time);
setInterval(myFunction2, time);