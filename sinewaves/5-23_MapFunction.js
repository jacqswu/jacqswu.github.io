function setup(){
  createCanvas(windowWidth, windowHeight);
  strokeWeight(12);
}

function draw(){
  background(200);
  var transp = map(mouseX, 0, windowWidth, 0, 255);
  stroke(102);
  line(mouseX, 0, mouseX, windowHeight);
  stroke(transp);
  var mx = mouseX/2 + 60;
  line(mx, 0, mx, windowHeight);
}

// function setup(){
//   createCanvas(240, 120);
//   strokeWeight(12);
// }

// function draw(){
//   background(200);
//   stroke(255);
//   line(120, 60, mouseX, mouseY);
//   stroke(0);
//   var mx = map(mouseX, 0, windowWidth, 60, 180);
//   line(120, 60, mx, mouseY);
// }