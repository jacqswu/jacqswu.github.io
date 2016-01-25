var angle=0.0;
var scalar1=70;
var scalar2=40;
var speed=0.4;

function setup(){
  createCanvas(windowWidth,windowHeight);
  frameRate(20);
  //noStroke();
}

function draw(){
  var offset=windowWidth/2;
  background(204,40);
  var x1=offset+cos(angle)*scalar1;
  var y1=offset+sin(angle)*scalar1;
  var x2=offset+cos(-angle)*scalar2;
  var y2=offset+sin(-angle)*scalar2;
  fill(255);
  ellipse(x1,y1,20,20);
  fill(100);
  ellipse(x2,y2,20,20);
  angle+=speed;
  scalar1+=speed;
  scalar2+=speed;
}