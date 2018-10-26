// Hér kemur kóðinn þinn:
function setup(){
  createCanvas(564,735);
  background(235,214,167);
  stroke(105,90,31)
  line(300, 0, 300, 192);
  noFill();
  curve(4, -200 ,200, 5, 400, 5, 600, -200);
  arc(325, 192, 150, 150, PI, PI/5, OPEN)
  line(200,5,200,70)
  line(400, 5, 400, 140)
  line(100,70,300,70)
  line(400,140,480,145)
  fill(164,119,52)
  rect(300,192,70,258)
  fill(89,129,131)
  rect(230,200,70,258)

}
