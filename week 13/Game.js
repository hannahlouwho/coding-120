/*
    Author: Hannah Wheeler
    Purpose: My Game
    Date: Nov 26, 2019
    Revised Date:
*/

var x = 50;
var y = 50;
var a= 30;
var b= 30;
var c= 450;
var d= 450;
var diameter = 50;
var mousex = 0;
var mousey = 0;
var myXs = [];
var myYs = [];
var myDiameters = [];

function setup()
{
createCanvas(1265, 600);

for(var i = 0; i < 10; i++)
{
// randoms circles
myXs[i] = getRandomX(1265);
myYs[i] = getRandomY(600);
myDiameters[i] = getRandomDiameter(100);
}
movement = Math.floor(Math.random()*10) + 1;
movement2 = Math.floor(Math.random()*10) +1;

}
function draw()
{
background(211,211,211);
createPlayer();
movePlayer();
acrossScreen();
drawClick();
message();

for(var i = 0; i < myXs.length; i++)
{

fill(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));
circle(myXs[i] ,myYs[i] , myDiameters[i]);

if(myXs[i]>1265)
{
myXs[i]=1;
}
if(myXs[i]<0)
{
myXs[i]=1265;
}
if(myYs[i]>600)
{
myYs[i]=1;
}
if(myYs[i]<0)
{
myYs[i]=600;
}

myXs[i] += Math.floor(Math.random()*10) + 1;
myYs[i] += Math.floor(Math.random()*10) + 1;

}
}
function createPlayer()
{
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
circle(a,b,30);
fill(color(255,192,203));
circle(c,d,10,110);
}
// console.log("y if");
// console.log("x if");
// console.log("a if");
// console.log("b if");
// console.log("c if");
// console.log("d if");
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

function getRandomX(x)
{
return Math.floor(Math.random()*x)+10;
}
function getRandomY(y)
{
return Math.floor(Math.random()*y) + 10;
}
function getRandomDiameter(diameter)
{
return Math.floor(Math.random()*diameter)+10
}
