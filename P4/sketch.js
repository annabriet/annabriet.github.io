// Hér kemur kóðinn þinn:
function setup() {
  createCanvas(400,300);
  background(255,200,0);
  fill(236,36,94);
}

function draw(){
  if(mouseX < 200){
    ellipse(mouseX, mouseY, 30, 30);
  }
}
