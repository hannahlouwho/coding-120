/*
    Author: Hannah Wheeler
    Purpose: Making a Game
    Date: Nov 4, 2019
    Revised Date:
*/
var x = 50;
var y = 50;
var diameter = 50;
var speed = 3;
var speedY = 5;
var squareX = 100;
var squareY = 100;

function setup()
{
  createCanvas(1265, 600);

function draw()
{
  background(211,211,211);
  noStroke();
  fill(128,0,128);
  circle(x, y, diameter);

  if(x >= width-diameter/2 || x <= diameter/2)
  {
    speed *= -1;
    //console.log("x if");
  }
  else if(y >= height-diameter/2 || y <= diameter/2)
  {
    speedY *=-1;
   // console.log("y if");
  }

  x+= speed;
  y+= speedY;
  fill(255, 182, 193);
  square(squareX, squareY, 30);
  if(keyIsDown(LEFT_ARROW))
  {
    squareX-=10;
  }
  else if(keyIsDown(RIGHT_ARROW))
  {
    squareX+=10;
  }
  else if(keyIsDown(UP_ARROW))
  {
    squareY-=10;
  }
  else if(keyIsDown(DOWN_ARROW))
  {
    squareY+=10;
  }

}

function keyPressed()
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

   print(key, ' ', keyCode);
}

function mouseClicked()
{
  console.log("mouse clicked");
  circle(mouseX, mouseY, 100);
}

function mousePressed()
{
  console.log("mouse pressed");
  fill(255, 182, 193);
  circle(mouseX, mouseY, 45);
}
