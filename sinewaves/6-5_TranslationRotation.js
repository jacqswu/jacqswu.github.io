var angle = 0.0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(200);
}

function draw(){
  translate(mouseX, mouseY);
  rotate(angle);
  rect(-15, -15, 30, 30);
  angle += 0.1;
}