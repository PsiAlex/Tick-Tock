var sec, min, hr
var secAngle, minAngle, hrAngle

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
  background(255,255,255); 
  translate(200,200);
  rotate(-90);
  sec = second();
  min = minute();
  hr = hour(); 
  secAngle = map(sec,0,60,0,360)
  minAngle = map(min,0,60,0,360)
  hrAngle = map(hr%12,0,12,0,360)
 //Second
  push();
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
 //Minute 
  push();
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
 //Hour
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  noFill();
  strokeWeight(10);
  stroke(255,0,0);
  arc(0,0,300,300,0,secAngle);
  stroke(0,255,0);
  arc(0,0,280,280,0,minAngle);
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);
  drawSprites();
}