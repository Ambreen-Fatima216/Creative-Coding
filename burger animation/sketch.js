// This variable controls how far up or down the burger is
let animate = -150;  // Starts the burger above the canvas

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);

  // Makes the burger move down slowly
  if (animate < 0) {
    animate = animate + 1;  // Moves down by 1 pixel per frame
  }

  // Drawing the burger parts, adding animate to their y axis positions
  // Top Bun
  fill(255, 204, 102);
  arc(225, 225 + animate, 250, 100, PI, 0);

  // Lettuce
  fill(124, 252, 0);
  rect(100, 225 + animate, 250, 25);

  // Ketchup
  fill(255, 99, 71);
  rect(100, 250 + animate, 250, 25);

  // Mustard
  fill(255, 223, 0);
  rect(100, 275 + animate, 250, 25);

  // Patty
  fill(101, 67, 33);
  rect(100, 300 + animate, 250, 50);

  // Bottom Bun
  fill(255, 204, 102);
  rect(100, 350 + animate, 250, 50);
}
