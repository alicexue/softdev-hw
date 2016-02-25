//model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground");
var dotButton = document.getElementById( "circle" );
var dvdButton = document.getElementById( "dvd" );
var stopButton = document.getElementById( "stop" );

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to red
ctx.fillStyle = "#ff0000";


var requestID;

var clear = function(e) {
    e.preventDefault();
    ctx.clearRect(0, 0, 500, 500);
};

var radius = 0;
var growing = true;


var drawDot = function() {
    
    ctx.clearRect( 0, 0, c.width, c.height );

    if ( growing ) {
	radius = radius + 1;
    }    
    else {
	radius = radius - 1;
    }

    if ( radius == (c.width / 2) )
	growing = false;
    else if ( radius == 0 ) {
	growing = true;
    }
    
    ctx.beginPath();
    ctx.arc( c.width / 2, c.height / 2, radius, 0, 2 * Math.PI );
    ctx.stroke();
    ctx.fill();

    requestID = window.requestAnimationFrame( drawDot );
};



var dvdLogoSetup = function() {
    
    //Q: What good might this do?
    //A: stops dvdLogo from running for current requestID
    window.cancelAnimationFrame( requestID );
   
    //var inits
    var xcor = 50;
    var ycor = 50;
    var logo = new Image();
    logo.src = "./logo_dvd.jpg";
    var logoWidth = 80;
    var logoHeight = 40;
    var posSlope = false;
    var moveUp = false;
    

    //a function defined within a function, oh my!
    var dvdLogo = function() {
	
	//propulsion mechanism
	ctx.drawImage(logo,xcor,ycor,logoWidth,logoHeight);
	// change the coordinates of the logo depending on the direction determined
	// by posSlope and moveUp
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
	    xcor = xcor + 1;
	    ycor = ycor - 1;
	}
	
	// check if the logo hits the borders and change the direction of movement
	if (xcor == 1 || xcor == c.width - logoWidth - 1) {
	    posSlope = !posSlope;
	} 
	if (ycor == 1 || ycor == c.height - logoHeight - 1) {
	    posSlope = !posSlope;
	    moveUp = !moveUp;
	    //console.log('hit the border');
	    //console.log(xcor);
	    //console.log(ycor);
	} 
	
	//Q: Why this here?
	//A: To callon dvdLogo and make the image move
	requestID = window.requestAnimationFrame( dvdLogo );		
    };
    
    dvdLogo();
};


var stopIt = function() {
    console.log( requestID );
    window.cancelAnimationFrame( requestID );
};


dotButton.addEventListener( "click", drawDot );
dvdButton.addEventListener( "click", dvdLogoSetup );
stopButton.addEventListener( "click",  stopIt );

