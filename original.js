function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noStroke();
}

function draw() {
  var green=color(255,64,0,5);
  var orange=color(38,153,0,5);
  for(var y=0; y<windowHeight; y+=200){
    for(var xG=0; xG<windowWidth; xG+=300){
      var xO=xG+300;
      fill(green);
      quad(xG,y,xG+100,y,xG+150,y+100,xG+50,y+100);
      fill(orange);
      quad(xO,y,xO-100,y,xO-150,y+100,xO-50,y+100);
    }
  }
  
  for(var y2=100; y2<windowHeight; y2+=200){
    for(var xG2=-150; xG2<windowWidth; xG2+=300){
      var xO2=xG2+300;
      fill(green);
      quad(xG2,y2,xG2+100,y2,xG2+150,y2+100,xG2+50,y2+100);
      fill(orange);
      quad(xO2,y2,xO2-100,y2,xO2-150,y2+100,xO2-50,y2+100);
    }
  }
}