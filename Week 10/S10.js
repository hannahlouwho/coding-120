var x = 130;
var y = 160;
var a = 220;
var b = 270;
var diameter = 90;
var Fmov = -1;
var size = 20;
var z = 20;
var c = 50;
function setup() {
  	createCanvas(400,400);
	movement = Math.floor(Math.random() *10) + 1;
	movement2 = Math.floor(Math.random() *10) +1;
}


function draw()
{
	strokeWeight(3);
  background(255,182,193);
  ellipse(200,210,240,275);
 	circle(x,y,diameter);
	circle(a,y,diameter);
	circle(z,c, 20);
	triangle(x, 245, 165, y, 100, 260);
	stroke(20);
  line(0,250,190,70,0);
  line(0,240,190,70,0);
  line(0,230,190,70,0);
  line(0,220,190,70,0);
  line(0,210,190,70,0);
  line(0,200,190,70,0);
  line(0,190,190,70,0);
  line(0,180,190,70,0);
  line(0,170,190,70,0);
  line(0,160,190,70,0);
  line(0,150,190,70,0);
  line(0,140,190,70,0);
  line(0,130,190,70,0);
  line(360,310,190,70,0);
  line(360,300,190,70,0);
  line(360,290,190,70,0);
  line(360,280,190,70,0);
  line(360,270,190,70,0);
  line(360,260,190,70,0);
  line(360,250,190,70,0);
  line(360,240,190,70,0);
  line(360,230,190,70,0);
  line(360,220,190,70,0);
  line(360,210,190,70,0);
  line(360,200,190,70,0);
  line(360,190,190,70,0);
  line(360,180,190,70,0);
  line(360,170,190,70,0);
  line(360,160,190,70,0);
  line(360,150,190,70,0);
  line(360,140,190,70,0);
  line(360,130,190,70,0);
  line(360,120,190,70,0);
  line(360,110,190,70,0);
  line(360,100,190,70,0);
	line(360,b,190,b + 0);
	stroke(20);
	line(0,b, 190, b + 0);
	stroke(20);
	line(360,b,190,b + 0);
	strokeWeight(30);
	point(130,150);
	point(220,150);
	strokeWeight(1);
	textSize(10);
	textSize(size);
	size += Fmov;
	if(size>= 32)
	{
		Fmov *= -1;
	}
	if(size <=5)
	{
		Fmov *=-1;
	}
  text('Hannah Wheeler', 10,390);
	text('me!', 10,30);
	if(x<150)
	{
		x= x + random(-2, 2);
	}else if (x = 150)
	{
		x =120;
	}
	if(a<250)
	{
		a = a + random (-2, 2);
	} else if (x = 250)

	{
		a=220;
	}
	if (b<290)
	{
		b++;
	}else if (b=290)
	{
		b=270;
	}
	if(z >= 380 || z <= 0)
	{
		movement *= -1;
	}

	if(c >= 380 || c <= 0)
	{
		movement2 *= -1;
	}
	c += movement2;
	z += movement;
}
