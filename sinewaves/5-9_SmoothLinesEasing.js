var x=0;
var y=0;
var px=0;
var py=0;
var easing=0.05;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  var targetX=mouseX;
  x+=(targetX-x)*easing;
  var targetY=mouseY;
  y+=(targetY-y)*easing;
  var weight=dist(x, y, px, py);
  strokeWeight(weight);
  if(keyIsPressed){
    stroke(random(255), random(255), random(255), 102);
  }
  else{
    stroke(0, 102);
  }
  line(x, y, px, py);
  py=y; 
  px=x;
}