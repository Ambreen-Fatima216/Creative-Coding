function setup() {
  createCanvas(400, 300);
  background(180); // Light gray background
}

function draw() {
  // Car body
  fill(150, 0, 255); // Purple color
  stroke(0);
  rect(120, 150, 160, 50); // Main car body
  // Car top
  fill(150, 0, 255); // Same purple color
  rect(160, 130, 80, 30); // Smaller top section
  // Windows
  fill(200, 200, 255); // Light blue windows
  rect(150, 130, 30, 20); // Left window
  rect(170, 130, 30, 20); // Right window
  // Wheels
  fill(350); // Black wheels
  ellipse(140, 200, 30, 30); // Left wheel
  ellipse(260, 200, 30, 30); // Right wheel
}
