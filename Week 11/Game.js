/*
    Author: Hannah Wheeler
    Purpose: My Game
    Date: Nov 20, 2019
    Revised Date:
*/

var x = 50;
var y = 50;
var a= 320;
var b= 250;
var c= 450;
var d= 450;
var diameter = 50;
var mousex = 0;
var mousey = 0;

function setup()
  {
createCanvas(1265, 600);
movement = Math.floor(Math.random() *10) + 1;
movement2 = Math.floor(Math.random() *10) +1;
movement3 = Math.floor(Math.random() *10) + 1;
movement4 = Math.floor(Math.random() *10) +1;
}

function draw()
{
background(211,211,211);
noStroke();
fill(128,0,128);
square(x, y, diameter);

//console.log("x if");
if (x >= 1265)
{
x = 50;
} else
if (keyIsDown(83))

// console.log("y if");
{
y += 10;
}
else if (keyIsDown(87))
{
y -= 10;
}
if (keyIsDown(68))

// console.log("x if");
{
x += 10;
}
else if (keyIsDown(65))
{
x -= 10;
}
if (y >= 650)
{
y = 50;
}
if (x<0)
{
x=25;
}

// console.log("y if");
if (y<0)
{
y=25;
}
fill(24, 200, 29);
circle(a,b,50);
fill(color(24, 200, 29));
square(c,d,100,110);
if(a >= 1000 || a <= -100)
{
movement *= -1;
}
if(b >= 1265 || b <= -100)
{
  movement2 *= -1;
}
b += movement2;
a += movement;

if(c >= 1000 || c <= -100)
{
movement3 *= -1;
}
if(d >= 1265 || d <= -100)
{
movement4 *= -1;
}
d += movement4;
c += movement3;
if(a>900)
{
  a=1;
}
if(a<-100)
{
  a=1265;
}
if(b>700)
{
  b=1;
}
if(b<-100)
{
  b=600;
}
if(c>900)
{
  c=1;
}
if(c<-100)
{
  c=1265;
}
if(d>700)
{
  d=1;
}
if(d<-100)
{
  d=600;
}
  fill('0,0,0');
  circle(mousex, mousey, 30, 75);
  if (x> 900 && x<1265 && y>400 && y<450)
{
  fill('208,240,192');
  textSize(100);
  text('You Win!', 500,350);
  }else{
  fill('208,240,192');
  textSize(150);
  text('X', 950,500);
}
}
  function mouseClicked()
{
  /* if(key == 'd')
{
  squareX+=10;
}
  else if(key == 'a')
{
  squareX-=10;
}
  else if(key == 'w')
{
  squareY-=10;
}
  else if(key == 's')
{
  squareY+=10;
}*/
  mousex = mouseX;
  mousey = mouseY;

  }
