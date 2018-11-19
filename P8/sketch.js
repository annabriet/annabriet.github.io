// Hér kemur kóðinn þinn:
var dug1, dug2, dug3;

function setup() {
  createCanvas(600, 600);
  // Búum til þrjá zoog hluti.
  dug1 = new dug(200,400,100);
  dug2 = new dug(300,300,75);
  dug3 = new dug(400,300,150);
}

function draw() {
	background(200,150,0);
  fill(255,200,0);
	ellipse(300,300,500,500);
  // Ef hluturinn er nálgt miðjunni, þá hreyfir hann sig
  // Ef ekki þá stoppar hann og blikkar bara augunum.
	if(fjarlægð(dug1.x,dug1.y,300,300) > 250){
		dug1.blink();
	}
	else {
		dug1.move();
	}
	dug1.show();
	if(fjarlægð(dug2.x,dug2.y,300,300) > 250){
		dug2.blink();
  }
else {
  dug2.move();
}
dug2.show();
if(fjarlægð(dug3.x,dug3.y,300,300) > 250){
  dug3.blink();
}
else {
  dug3.move();
}
dug3.show();
}

// Klasinn dug
// (x,y): er miðpunkturinn sem hann er teiknaður útfrá.
// bukur: er lengdin á búknum
// dir: er stefnan sem hann ferðast í
// speed: er hraðinn sem hann ferðast á
// eyecolor: er liturinn á augunum hans
class dug{
constructor(x,y,bukur) {
  this.x = x;
  this.y = y;
  this.bukur = bukur;
  this.dir = random(0,2*PI);
  this.speed = random(0,5);
  this.eyeColor = color(100,100,100);
}

// Teiknar geimveruna dug
show(){
    rectMode(CENTER);
    //teikna búkinn
    fill(128,255,128)
    rect(this.x,this.y,50, this.bukur)
    //Teikna hausinn
    fill(0,255,255)
    ellipse(this.x,this.y-this.bukur/2,50,50)
    //teikna hendurnar
    fill(0,0,0)
    line(this.x+25,this.y,this.x+50,this.y-20)
    line(this.x-25,this.y,this.x-50,this.y-20)
    line(this.x+25,this.y+10,this.x+50,this.y-10)
    line(this.x-25,this.y+10,this.x-50,this.y-10)
    //teikna augun
    fill(192,192,192)
    ellipse(this.x-10,this.y-this.bukur/2, 10, 20)
    ellipse(this.x+10,this.y-this.bukur/2, 10, 20)
    //teikna fæturna
    fill(0,0,0)
    line(this.x-25,this.y+this.bukur/2, this.x-25,this.y+this.bukur/2+20)
    line(this.x+25,this.y+this.bukur/2,this.x+25,this.y+this.bukur/2+20)
    //teikna hring á magann
    fill(21,118,7)
    ellipse(this.x,this.y,20,20)
  }

// Hreyfir dug um skjáinn.
// Hann minnkar sífelt hraðann, en velur svo slembistenfu
// og fyglir henni á nyjum slbenum hraða.
move(){
  this.x = this.x + this.speed*cos(this.dir);
  this.y = this.y + this.speed*sin(this.dir);
  this.speed = this.speed/1.05;
  if(this.speed < 0.1){
    this.dir = random(0,2*PI);
    this.speed = random(1,5);
  }
}

// Velur slembinn lit fyrir augun á zoog.
blink(){
  this.eyeColor = color(random(255), random(255), random(255));
}
}

// Skilar fjarlægðinni á milli punktanna
// (x1,y1) og (x2,y2).
function fjarlægð(x1,y1,x2,y2){
var dist = sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
return dist;
}
