// Hér kemur kóðinn þinn:
var eyeSize = 20;
var faceWidth = 100;
var faceHeight = 150;
var pupilsize = 10;
var x = 150;
var y = 150;
var faceR = 230;
var faceG = 230;
var faceB = 230;
var hairR = 230;
var hairB = 230;
var hairG = 230;

function setup(){
  createCanvas (300,300);
}

function draw(){
  stroke(0,0,0)
  background(200,191,231);
  fill(hairR, hairG, hairB)
  arc(x, y-faceHeight/2, 80, 80,-5*PI/4, PI/4 , PIE);
  fill(faceR, faceG, faceB)
  ellipse(x, y, faceWidth, faceHeight);

fill(192,192,192);
ellipse(x-20, y-10, eyeSize);
ellipse(x+20, y-10, eyeSize);
fill(0,0,0);
ellipse(x+20, y-10, pupilsize);
ellipse(x-20 ,y-10, pupilsize);
line(x, y, x, y+15);
line(x+5,y+12,x,y+15)
line(x+10,y-30,x+30,y-30)
line(x-10,y-30,x-30,y-30)
stroke(255,0,0);
fill(255,0,0);
curve(x-40, y ,x-20, y+30, x+20, y+30, x+40, y);

}

function mousePressed(){
  //Í hvert sinn sem músinni er smellt fá breyturnar ný gildi.
  faceWidth  = random(75,  150);
  faceHeight = random(100, 200);
  eyeSize    = random(15,  30) ;
  faceR      = random (50, 200);
  faceG      = random (50, 200);
  faceB      = random (50, 200);
  hairR      = random (150, 250);
  hairG      = random (150, 250);
  hariB      = random (150, 250);
}
