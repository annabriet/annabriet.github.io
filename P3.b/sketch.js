// Hér kemur kóðinn þinn:
var r = 100;
var g = 100;
var b = 100;

function setup() {
  createCanvas(400,400);
  background(100);
  noStroke();
  frameRate(5);

}

function draw() {
  for(var x = 0; x < width; x = x+10){
    for(var y = 0; y < height; y = y+10){
      r = random(20, 200);
      g = random(20,200);
      b = random(20,200);
      fill(r, g, b);
      rect(x,y, 10,10);
    }
  }
  fill(213,91,185);
  rect(100,0,200,400);
  fill (69,203,197);
  rect(115,20,170,350);
  fill(104,223,142);
  rect(130, 40, 140, 300);
  fill(224,224,103);
  rect(145,60,110,250);
  fill(255,255,255);
  ellipse(200,190,70,70);
  ellipse(200,265,90,90);
  ellipse(200,135,50,50);
  fill(0);
  ellipse(190,130,7,7);
  ellipse(210,130,7,7);
  ellipse(185,145,5,5);
  ellipse(195,150,5,5);
  ellipse(205,150,5,5);
  ellipse(215,145,5,5);
  fill(255,92,15);
  ellipse(200,135,5,5);

}
