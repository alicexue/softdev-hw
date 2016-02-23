console.log("loaded animate.js");

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var circleBtn = document.getElementById("circle");
var growing = true;
var radius = 0;

// create border on canvas
ctx.strokeStyle = "#000000";
ctx.rect(0,0,c.width,c.height);
ctx.stroke();

// create growing and shrinking circle
var createCircle = function(e) {

    // clear canvas and start new path
    ctx.clearRect(1,1,c.width-2,c.height-2);
    ctx.beginPath()
    
    // change circle radius depending on growing or not
    if (growing) {
	radius = radius + 1;
    } else {
	radius = radius - 1 ;
    }

    // check if growing must be negated
    if (radius == c.width/2) {
	growing = false;
    } else if (radius == 0) {
	growing = true;
    }

    // draw and fill circle
    ctx.arc(c.width/2,c.height/2,radius,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#4B0082";
    ctx.fill();
    
    //run createCircle before calling next frame
    window.requestAnimationFrame(createCircle);
    //console.log("changed circle radius");
    //console.log(radius);
}

circleBtn.addEventListener("click",createCircle);
