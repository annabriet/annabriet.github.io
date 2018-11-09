// Hér kemur kóðinn þinn:
// x og xSpeed eru breytur (variables).
// x byrjar í 0 (vinstra megin á skjánum) en færist um 5 í hverju skrefi
var x=100;
var y = 100;
var ySpeed = 7;
var xSpeed = 5;
var spaðiY;
var boltistærð = 20;
var spaðiþykkt = 20;
var spaðibreidd = 100;
var stig = 0;
var stjarna;
var stjarnaX =100, stjarnaY = 100;

function preload(){
  stjarna = loadImage('stjarna.png')   //https://de.wikipedia.org/wiki/Datei:Ic%C3%B4ne_%C3%A9toile_d%27or_%C3%A0_cinq_branches.svg
}

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
      stig= stig+1
    }

  }
  function mousePressed() {
    imageMode(CENTER);
    image(stjarna, 100,100);
  }
