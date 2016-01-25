var x=120;
var y=60;
var radius=12;

function setup() {
  createCanvas(240, 120);
  ellipseMode(RADIUS);
}

function draw() {
  var d=dist(mouseX, mouseY, x, y);
  background(200);
  if(d<radius){
    fill(255);
    radius++;
  }
  else{
    fill(0);
  }
  ellipse(x, y, radius, radius);
}