// Hér kemur kóðinn þinn:
function setup() {
  createCanvas(500,500);
  background(255,200,0);

  rectMode(CENTER)
}

function draw(){
  fill(236,36,94);
  if((mouseX < 235) && (mouseY < 235)){
  rect(mouseX, mouseY, 50, 50);
}
  if((mouseX >265)&&(mouseY <235)){
  fill(200,191,231);
  ellipse(mouseX, mouseY, 30, 30);
}
 if((mouseX <265)&&(mouseY > 265)){
 fill(128,255,128);
 ellipse(mouseX, mouseY, 30,30);
}
 if((mouseX>265)&&(mouseY>265)){
   fill(255,128,255);
   rect(mouseX, mouseY, 50,50);
 }
 }
