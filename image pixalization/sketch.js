var img, x, y;
function preload() {
  img = loadImage("Image FInal.jpg");
}
function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
}
function draw() {
  background(0);
  x = mouseX;
  y = mouseY;
  image(img, 0, 0);
  var c = get(x, y); 
// on the canvas and stores it in the variable c.

  fill(c); //Sets the fill color for shapes drawn on the canvas to the color sampled
  ellipse(x, y, 100, 100); //Draws an ellipse at the current mouse position (x, y) sampled from the image.
}

