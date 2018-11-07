// Hér kemur kóðinn þinn:
function preload() {
  kisa = loadImage('kisa.webp'); // https://lifehacker.com/pick-a-cat-name-your-cat-will-answer-to-1828343118
  bakgrunnur = loadImage('bakgrunnur.jpg'); // https://www.dreamstime.com/background-images
}

function setup() {
  createCanvas(700,450);
  background(bakgrunnur);
}

function draw() {
  ellipse (random(0,width),random(0,height),10,10);
}
function mousePressed() {
  imageMode(CENTER);
  image(kisa,mouseX,mouseY);
}

function keyPressed() {
  imageMode(CORNER);
  background(bakgrunnur);
}
