var boltar = [];
var litur;

function setup() {
  createCanvas(1250,600);
  colorMode(HSB)
  for (var i = 0; i < 100; i = i+1){
    boltar[i] = new bolti(random(100,1250),random(100,600),  random(0,255));
  }
}
function draw() {
  background(0,0,100);
  // Hreyfum og teiknum alla boltana sem eru í boltar listanum
  for (var i = 0; i < boltar.length; i++){
    boltar[i].show();
    boltar[i].move();
  }
}
function fjarl(x1,y1,x2,y2){
  var dist = sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
  return dist;
}
// Þegar smellt er á músina eru búnir til 5 nýjir boltar.
function mousePressed() {
  for (var i = boltar.length-1; i >= 0; i = i-1){
    // Eyðum bolta ef smellt er á hann.
    if(fjarl(boltar[i].x,boltar[i].y,mouseX,mouseY) < 10){
      boltar.splice(i,1);
    }
  }
}


  // Býr til bolta sem fer um skjáinn+
  // og skoppar af mörkum hans
  class bolti{
    // Býr til nýjann bolta með miðju í (x,y)
    // litur: stjórnar litnum á boltanum
    constructor(x,y,litur) {
      this.x = x;
      this.y = y;
      this.xSpeed = random(-2,2);
      this.ySpeed = random(-2,2);
      this.litur = litur;
    }
    move() {
      this.x = this.x + this.xSpeed;
      this.y = this.y + this.ySpeed;
      this.bounce();
    }
    // Lætur boltann skoppa af veggjunum
    bounce() {
      if(this.x < 0 || this.x > width){
        this.xSpeed = -this.xSpeed;
      }
      if(this.y < 0 || this.y > height){
        this.ySpeed = -this.ySpeed;
      }
    }
    // Teiknar boltann
    show() {
      noStroke(0);
      fill(this.litur,100,100);
      ellipse(this.x,this.y,30,30);
    }
  }
