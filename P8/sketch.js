// Hér kemur kóðinn þinn:
var dug1, dug2, dug3;


function setup() {
  createCanvas(600, 600);
  // Búum til þrjá zdug hluti.
  dug1 = new dug(200,400,100,50,10);
  dug2 = new dug(300,300,75, 60,20);
  dug3 = new dug(400,300,150,40,5);
}

function draw() {
  background(163,73,164);
  fill(218,171,218);
  ellipse(300,300,500,500);
  // Ef hluturinn er nálgt miðjunni, þá hreyfir hann sig
  // Ef ekki þá stoppar hann og blikkar bara augunum.
  dug1.blink();
  dug1.move();
  dug1.show();
  dug2.blink();
  dug2.move();
  dug2.show();
  dug3.blink();
  dug3.move();
  dug3.show();
}

  // Klasinn dug
  // (x,y): er miðpunkturinn sem hann er teiknaður útfrá.
  // bukur: er lengdin á búknum
  // dir: er stefnan sem hann ferðast í
  // speed: er hraðinn sem hann ferðast á
  // eyecolor: er liturinn á augunum hans
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
      fill(this.eyeColor, this.eyeColor, this.eyeColor)
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

  // Skilar fjarlægðinni á milli punktanna
  // (x1,y1) og (x2,y2).
  function fjarlægð(x1,y1,x2,y2){
    var dist = sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
    return dist;
  }
