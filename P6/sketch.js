// Hér kemur kóðinn þinn:
// x og xSpeed eru breytur (variables).
    // x byrjar í 0 (vinstra megin á skjánum) en færist um 5 í hverju skrefi
    var y = 0;
    var ySpeed = 5;
    var x=0
    var xSpeed= 5
    var spaðiY
    var boltistærð = 20
    var spaðiþykkt=20
    var spaðibreidd = 70


    function setup() {
      createCanvas(400,300);
      spaðiY = height-50
      rectMode(CENTER)
    }

    function draw() {
      background(255,200,0);
      fill(236,36,94);
      ellipse(150, y, 20,20);
      fill(0,0,0)
      rect(mouseX,spaðiY,spaðibreidd,spaðiþykkt)
      y = y + ySpeed;
        //ef boltinn er kominn út á enda niðri á hann að snúa við
      if(y > height){
        ySpeed = -1*ySpeed;
      }
      //ef boltinn er kominn út á enda uppi á hann líka að snúa við!
      if(y < 0||y>height){
      if(x < 0|| x>width)
        ySpeed = -1*ySpeed;
      }
      if (y > (height-15)) {
      ySpeed = ySpeed * -0.9;
      y = height-15;
    }


    }
