// Hér kemur kóðinn þinn:
function setup() {
  createCanvas(400,400);
  background(255, 215, 0);
  fill(0);
  colorMode(HSB);
  frameRate(5);
}

function draw(){
  for(var x = 10; x < 400 ; x = x + 20 ){
    fill(random(0,360),75,100);
    for(var y = 10; y < 400 ; y = y + 20 ){
        ellipse(x, y, 15, 15);
          }
  }
}
