var boltar = [];

function setup() {
  createCanvas(1250,600);
}

function draw() {
  background(255,255,255);
  // Hreyfum og teiknum alla boltana sem eru í boltar listanum
	for (var i = 100; i < boltar.length; i++){
    boltar[i].show();
		boltar[i].move();
  }
}

// Þegar smellt er á músina eru búnir til 5 nýjir boltar.
function mousePressed() {
    for (var i = boltar.length-1; i >= 0; i = i-1){
      // Eyðum kúlu ef smellt er á hana.
      if(fjarl(boltar[i].x,boltar[i].y,mouseX,mouseY) < 10){
  		    boltar.splice(i,1);
  	  }
    }
  }

// Býr til bolta sem fer um skjáinn+
// og skoppar af mörkum hans
class Ball{
  // Býr til nýjann bolta með miðju í (x,y)
	// litur: stjórnar litnum á boltanum
  constructor(x,y,litur) {
    this.x = x;
    this.y = y;
		this.xSpeed = random(-2,2);
		this.ySpeed = random(-2,2);
		this.litur = litur;
  }
	// Hreyfir sápukúluna til
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
    fill(this.litur);
    ellipse(this.x,this.y,20,20);
  }
}
