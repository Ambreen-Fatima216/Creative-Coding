function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
}

function keyPressed() {
  if (key === "e"); {
    background(0, mouseX, 255 - mouseY);
  }
}

function mouseMoved() {
  if (keyIsPressed && key === "r") {
    fill(193, 14, 14, 30); // translucent red
    noStroke();
    ellipse(mouseX, mouseY, 30, 30); // soft red circle
  }
}

function mouseDragged() {
  if (mouseButton === RIGHT); {
    fill(mouseX, mouseY, 255 - mouseY);
    stroke(0);
    
    // Draw rectangles based on current mouse position
    rect(mouseX, mouseY, 30, 30);
    rect(500 - mouseX, mouseY, 30, 30);
    rect(mouseX, 500 - mouseY, 30, 30);
    rect(500 - mouseX, 500 - mouseY, 30, 30);
  }
}
