/*
    Author: Hannah Wheeler
    Purpose: My Game
    Date: Nov 26, 2019
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
createPlayer();
movePlayer();
movingObstacles();
moveCircle();
moveRect();
acrossScreen();
drawClick();
message();
}
function createPlayer()
{
noStroke();
fill(128,0,128);
square(x, y, diameter);
}

function movePlayer()
{
if (keyIsDown(83))
{
y += 10;
}
else if (keyIsDown(87))
{
y -= 10;
}
if (keyIsDown(68))
{
x += 10;
}
else if (keyIsDown(65))
{
x -= 10;
}
}

function drawClick()
{
fill('0,0,0');
circle(mousex, mousey,30, 75);
}

function mouseClicked()
{
mousex = mouseX;
mousey = mouseY;
}

function movingObstacles()
{
  fill(24, 200, 29);
  circle(a,b,100);
  fill(color(255,192,203));
  circle(c,d,50,110);
}

// console.log("y if");
// console.log("x if");
// console.log("a if");
// console.log("b if");
// console.log("c if");
// console.log("d if");
function moveCircle ()
{
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
}
function moveRect()
{
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
}
function acrossScreen()
{
if (x >= 1265)
{
x = 50;
}
if (y >= 1265)
{
y = 50;
}
if (x<-50)
{
x=1265;
}
if (y<-50)
{
y=1265;
}
if(a>1265)
{
a=1;
}
if(a<-100)
{
a=1265;
}
if(b>1265)
{
b=1;
}
if(b<-100)
{
b=1265;
}

if(c>1265)
{
c=1;
}
if(c<-100)
{
c=800;
}
if(d>1265)
{
d=1;
}
if(d<-100)
{
d=1265;
}
}

function youWin()
{
fill('0,0,0');
textSize(100);
text('You Win!', 500,350);
}

function exit()
{
fill('0,0,0');
textSize(150);
text('X', 950,500);
}

function message()
{
if (x> 900 && x<1265 && y>400 && y<450)
{
youWin();
}else{
exit();
}
}
