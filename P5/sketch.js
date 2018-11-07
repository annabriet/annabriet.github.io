// Hér kemur kóðinn þinn:

var mynd;

function preload() {
  mynd = loadImage('kisa.webp'); //
}

function setup() {
  createCanvas(600,300);
}

function draw(){
	background(255,200,0);
  image(mynd,mouseX,mouseY);
}
