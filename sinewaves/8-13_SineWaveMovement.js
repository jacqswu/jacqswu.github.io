var angle=0.0;
//var scalar2=40;
var speed=0.05;

function setup(){
  createCanvas(windowWidth,windowHeight);
  //noStroke();
  
  mic = new p5.AudioIn();
  mic.start();
  frameRate(50);
}

function draw(){
  var offset=windowHeight/2;
  background(0,40);
  var scalar1=map(mic.getLevel(), 0, 0.3, 1, 100);
  // var y1=offset+sin(angle)*scalar1;
  // var y2=offset+sin(-angle)*scalar1;
  // var y3=offset+sin(angle)*scalar1;
  fill(255);
  for(i=10; i<windowWidth-10; i+=40){
    var y=offset+sin(angle)*scalar1;
    ellipse(i, y, 20,20);
    angle=angle*-1;
  }

  // ellipse(80,y1,20,20);
  // ellipse(120,y2,20,20);
  // ellipse(160,y3,20,20);
  angle+=speed;
  //scalar1+=speed;
}