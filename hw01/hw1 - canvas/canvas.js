console.log('canvas.js loaded');

var c = document.getElementById('ftb2maga');
var ctx = c.getContext('2d');

// sets stroke color
ctx.strokeStyle = '#B22222';
// sets shape color
ctx.fillStyle = '#6495ED';

// marks the beginning of a path
ctx.beginPath();

// .moveTo(x,y)
// starts path at (x,y) 
ctx.moveTo(200,400);

// .lineTo(x,y)
// moves one end of path to (x,y)
ctx.lineTo(400,400);

// .arc(a,b,c,d,e)
// creates an arc path where the center is at (a,b)
// c is the size of the arc's radius
// d and e are the size of starting and ending angles respectively (in radians)
ctx.arc(400,300,40,0.5*Math.PI,1.5*Math.PI);

ctx.lineTo(400,200);

ctx.arc(300,200,70,1*Math.PI,0);

ctx.lineTo(200,200);

ctx.arc(200,300,40,1.5*Math.PI,0.5*Math.PI);

// marks the end of the path 
ctx.closePath();

// colors in the path drawn with the color specified by strokeStyle
ctx.stroke();

// fills in the polygon outlined by the path - if not closed, then ends path at starting point
ctx.fill();

ctx.strokeStyle = '#FFD700';

// .strokeRect(a,b,c,d)
// draws a rectangle with upper left corner at (a,b) and has width c and height d
ctx.strokeRect(210,360,180,30);

ctx.fillStyle = '#2E8B57';

// .fillRect(a,b,c,d)
// draws and fills a rectangle with upper left corner at (a,b) and has width c and height d
ctx.fillRect(210,360,180,30);

// sets size and font of text
ctx.font = '20px Arial';

// .fillText(txt,a,b)
// writes txt starting at (a,b)
ctx.fillText('HELLO WORLD',228,240);
