console.log("loaded canvas.js");

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var clearBtn = document.getElementById("clear");

ctx.beginPath();

var createDot = function(e) {
    // get mouse coordinates
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    // move path to (mouseX,mouseY)
    ctx.lineTo(mouseX,mouseY);
    ctx.strokeStyle = "#4B0082";
    ctx.stroke();
    
    // start new path to create dot
    ctx.beginPath();
    ctx.arc(mouseX,mouseY,10,0,2*Math.PI);
    // return path to (mouseX, mouseY)
    ctx.moveTo(mouseX,mouseY);
    ctx.fillStyle = "#4B0082";
    ctx.fill();
    console.log("created dot");
}


var clear = function(e) {
    // prevents automatic clearing of canvas
    e.preventDefault();
    // clear canvas
    ctx.clearRect(0,0,500,500);
    ctx.beginPath();
    console.log("cleared canvas");
}

c.addEventListener("click",createDot);
clearBtn.addEventListener("click",clear);
