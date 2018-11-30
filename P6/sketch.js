// Hér kemur kóðinn þinn:
var x=100;
var y = 100;
var ySpeed = 7;
var xSpeed = 5;
var spaðiY;
var spaðiX;
var boltistærð = 20;
var spaðiþykkt = 20;
var spaðibreidd = 100;
var stig = 0;
var kassiBreidd=70;
var kassiX=300;
var kassiY=90;
var kassiLengd=30;
var teiknakassa=1;


function setup() {
  createCanvas(700,600);
  spaðiY = height-50;
  rectMode(CENTER);
  textFont("Courier New",16);
  textStyle(BOLD);
}

function draw() {
  background(255,200,255);
  fill(236,36,94);
  ellipse(x, y, boltistærð, boltistærð);
  fill(0,0,0);
  rect(mouseX,spaðiY,spaðibreidd,spaðiþykkt);
  fill(0);
  text("stig: " + stig,20,20);

  if (teiknakassa==1){
    fill(255,242,0);
    rect(kassiX,kassiY,kassiBreidd,kassiLengd);
    if(abs(kassiX-x)<kassiBreidd/2&&abs(kassiY-y)<kassiLengd/2){
      ySpeed=ySpeed*-1
      stig=stig+2
      teiknakassa=0
    }
  }
  // Reikna ný hnit út frá hraða boltans:
  x = x + xSpeed;
  y = y + ySpeed;
  // Athuga hvort boltinn snertir veggi:
  if ((x > width-boltistærð/2) || (x < boltistærð/2)){
    xSpeed = xSpeed * -1;
  }
  if ((y > height-boltistærð/2) || (y < boltistærð)) {
    ySpeed = ySpeed * -1;
  }
  //Athuga hvort bolti snerti spaða
  if(abs(spaðiY-y) < boltistærð/2 + spaðiþykkt && abs(mouseX-x) < boltistærð/2 +spaðibreidd/2){
    ySpeed = ySpeed* -1;
    stig= stig+1;
   xSpeed=  -(mouseX - x)/10;
  }
}
