var canvas = document.getElementById("sandbox");
var test = document.getElementById("test");
var context = canvas.getContext("2d");
var contextCol = canvas.getContext("2d");
var circle,hour,min,sec,Rhour,Rmin,Rsec,sin,cos,r,x,y;
r = 150;
Rmin = 0 ;
function draw()
{
  context.clearRect(110,0,150,0);
  //setTimeout(draw, 1000);
}
//context.fillRect(50,25,200,250);
circle = new Path2D();
min = new Path2D();
hour = new Path2D();
sec = new Path2D();
line = new Path2D();
Cmin = new Path2D();
var date = new Date();
hour1 = date.getHours();
min1 = date.getMinutes();
sec1 = date.getSeconds();
console.log(hour1,min1,sec1);
circle.arc(150,150,r,0,222);
context.stroke(circle);
for(var i = 0;i < 60;++i)
{

  Rmin += 0.10472;
  sin  = Math.sin(Rmin);
  cos = Math.cos(Rmin);
  x = cos*r;
  y = sin*r;
  min.moveTo(150+x,150+y);
  min.lineTo(150+(9/10)*x,150+(9/10)*y);
  if((i%6) == 0)
  {
    for(var c = 0; c < 1000; ++c)
    {
      min.moveTo(150+x,150+y);
      min.lineTo(150+(9/10)*x,150+(9/10)*y);
    }
  }
}
context.stroke(min);
