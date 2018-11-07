// Hér kemur kóðinn þinn:
// x og xSpeed eru breytur (variables).
    // x byrjar í 0 (vinstra megin á skjánum) en færist um 5 í hverju skrefi
    var x = 400;
    var xSpeed = -7;

    function setup() {
      createCanvas(400,300);
    }

    function draw() {
      background(255,200,0);
      fill(236,36,94);
      ellipse(x, 150, 30,30);
      x = x + xSpeed;
        //ef boltinn er kominn út á enda hægra megin á hann að snúa við
      if(x > width){
        xSpeed = -1*xSpeed;
      }

      //ef boltinn er kominn út á enda vinstra megin á hann líka að snúa við!
      if(x < 0){
        xSpeed = -1*xSpeed;
      }

    }
