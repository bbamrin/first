var canvas = document.getElementById("sandbox");
var context = canvas.getContext("2d");
var square,circle;
//context.fillRect(50,25,200,250);
square = new Path2D();
square.moveTo(50,50);
square.lineTo(250,50);

context.stroke(square);
circle = new Path2D();
circle.arc(150,150,100,0,222);
context.fill(circle);