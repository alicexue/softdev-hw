console.log("loaded animate.js");

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var circleBtn = document.getElementById("circle");
var dvdBtn = document.getElementById("dvd");
var stopBtn = document.getElementById("stop");

var growing = true;
var radius = 0;
var requestID = null;

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
    requestID = window.requestAnimationFrame(createCircle);
    //console.log("changed circle radius");
    //console.log(radius);
}

var xcor = 50;
var ycor = 50;
var logo = newImage();
logo.src = "./logo_dvd.jpg";
var posSlope = false;
var moveUp = false;

var moveDVD = function(e) {
    ctx.drawImage(logo,xcor,ycor,40,20);
    if (posSlope & moveUp) {
	xcor = xcor + 1;
	ycor = ycor + 1;
    } else if (posSlope & !moveUp) {
	xcor = xcor - 1;
	ycor = ycor - 1;
    } else if (!posSlope & moveUp) {
	xcor = xcor - 1;
	ycor = ycor + 1;
    } else {
	xcor = xcor - 1;
	ycor = ycor + 1;
    }
}

var stop = function(e) {
    // stopped animation frame
    if (requestID != null) {
	window.cancelAnimationFrame(requestID);
    }
}

circleBtn.addEventListener("click",createCircle);
moveDVD.addEventListener("click",moveDVD);
stopBtn.addEventListener("click",stop);
