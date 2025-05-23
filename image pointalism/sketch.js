var img, x, y;

function preload() {
  img = loadImage("Pointalism.jpg");
}
function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
}
function draw() {
  x = random(width);
  y = random(height);
  var c = img.get(x, y); 
// Retrieves the color of the pixel at a random position (x, y) on the canvas

  fill(c[0], c[1], c[2], 100); 
// RGB values with the opacity set to 100

  ellipse(x, y, 25, 25); 
// Draws a circle with a diameter of 30 pixels at the random position
}
