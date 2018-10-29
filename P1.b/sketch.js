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
  rect(300,172,90,258)
  fill(89,129,131)
  rect(210,200,90,258)
  stroke(105,90,31)
  //Augað hægra megin
  line(320,210,482, 210)
  line(370,210,320,400)
  line(320,210,320,330)
  line(320,330,338,330)
  fill(105,90,31)
  ellipse(340,230,5,5)
  //Augað vinstra megin
  line(240,230,300, 230)
  line(300,230,240,400)
  line(240,230,240,330)
  line(240,330,262,330)
  fill(105,90,31)
  ellipse(260,250,5,5)
  //munnurinn
  line(240,400,280,400)
  noFill()
  curve(240,200,240,400,280,400,280,200)
}
