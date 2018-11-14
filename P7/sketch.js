// Hér kemur kóðinn þinn:
var bukur1=170
function setup() {
  createCanvas(400,400);

}
function draw() {
  background(255,128,128);
  dug(100,100,70);
  dug(mouseX, mouseY,bukur1)
  dug(250,250,100)
}
//bukur stjórnar lengdinni á búknum
function dug(x,y,bukur) {
  rectMode(CENTER);
  //teikna búkinn
  fill(128,255,128)
  rect(x,y,50, bukur)
  //Teikna hausinn
  fill(0,255,255)
  ellipse(x,y-bukur/2,50,50)
  //teikna hendurnar
  fill(0,0,0)
  line(x+25,y,x+50,y-20)
  line(x-25,y,x-50,y-20)
  line(x+25,y+10,x+50,y-10)
  line(x-25,y+10,x-50,y-10)
  //teikna augun
  fill(192,192,192)
  ellipse(x-10,y-bukur/2, 10, 20)
  ellipse(x+10,y-bukur/2, 10, 20)
  //teikna fæturna
  fill(0,0,0)
  line(x-25,y+bukur/2, x-25,y+bukur/2+20)
  line(x+25,y+bukur/2,x+25,y+bukur/2+20)
  //teikna hring á magann
  fill(239,228,176)
  ellipse(x,y,20,20)
}
function mousePressed(){
  bukur1=bukur1+10
}
