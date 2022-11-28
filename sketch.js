
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {

  fill (200,49,147);
  stroke(249,234,6);
  
  rect(mouseX, mouseY,50,20) ;
  background(10,6,249); //an RGB color for the canvas' background
  //circle
  stroke(249, 6, 116  ); // an RGB color for the circle's border
  fill(200,200,100,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  textSize (60);
  textFont ("Apple Chancery");
  text("PlanetBlu",random(width),random(height)); // center of canvas, 20px dia
    }

