// Hér kemur kóðinn þinn:
function setup() {
  createCanvas(300,300);
  background(100);
  noStroke();
  frameRate(5);
}

function draw() {
  for(var x = 0; x < width; x = x+10){
    for(var y = 0; y < height; y = y+10){
      fill(random());
      rect(x,y, 10,10);
    }
  }
}
