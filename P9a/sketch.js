// Hér kemur kóðinn þinn:
var dugs = []

function setup() {
  createCanvas(600,600)
  //búa til 50 dug
  for (var i = 0; i < 50; i = i + 1){
    dugs[i] = new dug(random(200,400),random(100,250),random(50,100), random(20,50),random(5,9))
  }
}
function draw() {
	background(143,231,191);
  fill(77,239,48);
	ellipse(300,300,500,500);
  // Teiknum og hreyfum alla dug kallana okkar
  for (var i = 0; i < dugs.length; i = i+1){
  	dugs[i].move();
  	dugs[i].show();
    dugs[i].blink();
  }
}
function mousePressed(){
  for (var i = dugs.length-1; i >= 0; i = i-1){
    if(fjarl(dugs[i].x,dugs[i].y,mouseX,mouseY) < 50){
		    dugs.splice(i,1);
	  }
  }
}
class dug{
  constructor(x,y,bukur,haus,hringur) {
    this.x = x;
    this.y = y;
    this.bukur = bukur;
    this.dir = random(0,2*PI);
    this.speed = random(0,5);
    this.eyeColor = color(100,100,100);
    this.haus = haus;
    this.hringur = hringur;
  }
  // Teiknar geimveruna
  show(){
    rectMode(CENTER);
    //teikna búkinn
    fill(248,242,141)
    rect(this.x,this.y,50, this.bukur)
    //Teikna hausinn
    fill(0,255,255)
    ellipse(this.x,this.y-this.bukur/2,this.haus,this.haus)
    //teikna hendurnar
    fill(0,0,0)
    line(this.x+25,this.y,this.x+50,this.y-20)
    line(this.x-25,this.y,this.x-50,this.y-20)
    line(this.x+25,this.y+10,this.x+50,this.y-10)
    line(this.x-25,this.y+10,this.x-50,this.y-10)
    //teikna augun
    fill(0,0,0)
    ellipse(this.x-10,this.y-this.bukur/2, 10, 20)
    ellipse(this.x+10,this.y-this.bukur/2, 10, 20)
    //teikna fæturna
    fill(0,0,0)
    line(this.x-25,this.y+this.bukur/2, this.x-25,this.y+this.bukur/2+20)
    line(this.x+25,this.y+this.bukur/2,this.x+25,this.y+this.bukur/2+20)
    //teikna hring á magann
    fill(this.eyeColor)
    ellipse(this.x,this.y,this.hringur,this.hringur)
  }

  // Hreyfir dug um skjáinn.
  move(){
    this.x = this.x + this.speed;
    this.y = this.y + this.speed;
    // Athuga hvort dug snerti veggi
    if ((this.x > width) || (this.x < 0)||(this.y > height) || (this.y < 0)){
      this.speed = this.speed * -1;
    }
  }
  // Velur lit fyrir hringina.
  blink(){
    if((this.x>width-100) || (this.x < 100)||(this.y > height-100) || (this.y < 100))
    this.eyeColor = color(random(255), random(255), random(255));
  }
}

function fjarl(x1,y1,x2,y2){
  var dist = sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
  return dist;
}
