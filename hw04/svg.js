console.log("loaded svg.js");

var pic = document.getElementById("vimage");
var picWidth = pic.getAttribute("width");
var picHeight = pic.getAttribute("height");

var dotButton = document.getElementById("grow");
var dvdButton = document.getElementById("dvd");
var stopButton = document.getElementById("stop");

var change = function(e) {
    e.preventDefault();
    this.setAttribute("fill", "green");
};

var intervalID;

var stop = function() {
    window.clearInterval(intervalID);
};

/*--------------------- draw growing dot ----------------*/
var drawDot = function(x, y) {
    var radius = 0;
    var growing = true;
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", picWidth/2);
    c.setAttribute("cy", picHeight/2);
    c.setAttribute("r", radius);
    c.setAttribute("fill", "yellow");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
    c.addEventListener("click", change);  
    var animateCode = function() {
	c = document.getElementsByTagName("circle")[0];
	if (radius == picWidth/2) {
	    growing = false;
	} else if (radius == 0) {
	    growing = true;
	}
	if (growing) {
	    radius = radius+1;
	} else {
	    radius = radius-1;
	}
	c.setAttribute("r", radius.toString());	
	pic.appendChild(c);
    }
    intervalID = window.setInterval(animateCode,16);
};

/*-------------------------- DVD -------------------------*/
var dvdSetup = function(){
    var xcor = 50;
    var ycor = 50;
    var logoWidth = 80;
    var logoHeight = 40;
    var xvel = 1;
    var yvel = 1;
    var moveDVD = function() {
	var c = document.createElementNS("http://www.w3.org/2000/svg", "image");
	c.setAttributeNS("http://www.w3.org/1999/xlink", "href", "logo_dvd.jpg");
	c.setAttribute("x", xcor);
	c.setAttribute("y", ycor);
	c.setAttribute("width", logoWidth.toString()+"px");
	c.setAttribute("height", logoHeight.toString()+"px");
	pic.appendChild(c);
	if (xcor >= picWidth - logoWidth || xcor <= 0) {
	    xvel = xvel * -1;
	} else if (ycor > picHeight - logoHeight || ycor <=0) {
	    yvel = yvel * -1;
	}
	xcor = xcor + xvel;
	ycor = ycor + yvel;
    }
    intervalID = window.setInterval(moveDVD,16);
    
};



var clicked = function(e) {
    if (e.toElement == this) {
	drawDot(e.offsetX, e.offsetY);
    }
};

dotButton.addEventListener("click", drawDot);
dvdButton.addEventListener("click", dvdSetup);
stopButton.addEventListener("click", stop);

