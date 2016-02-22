console.log("loaded animate.js");

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var circleBtn = document.getElementById("circle");
var growing = false;
var radius = 0;

ctx.beginPath();
ctx.lineTo(250,250);
ctx.strokeStyle = "#4B0082";
ctx.stroke();

var createCircle = function(e) {
    ctx.clearRect(0,0,c.width,c.height);
    if (growing) {
	radius = radius + 1;
    } else {
	radius = radius - 1 ;
    }
    if (radius == c.width/2) {
	growing = false;
    } else {
	growing = true;
    }
    ctx.arc(c.width/2,c.height/2,radius,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#4B0082";
    ctx.fill();
    console.log("created dot");
}


var circle = function(e) {

}

c.addEventListener("circle",createCircle);
circleBtn.addEventListener("circle",circle);
