function setup() {
  createCanvas(400, 400); 
}

function draw() {
  background(53, 0, 50); // Dark purple space background
  // Alien Head
  fill(255, 165, 0); // Orange color to make it alien like
  ellipse(200, 200, 180, 250); // oval for the head
  // Eyes
  fill(128, 0, 128); // Purple eyes
  ellipse(160, 180, 50, 100); // Left eye
  ellipse(240, 180, 50, 100); // Right eye
  // Eye Highlights 
  fill(255); // White
  ellipse(165, 160, 10, 15); 
  ellipse(245, 160, 10, 15); 
  // Mouth
   fill(0); // Black mouth
  ellipse(200, 250, 60, 20); 
  // ellipse for a mouth
  // Antennas
  stroke(255, 165, 0); 
  strokeWeight(4);
  line(150, 100, 130, 50); 
  line(250, 100, 270, 50); 

  // Antenna Tips 
  fill(255, 0, 100); // Pink dots
  noStroke();
  ellipse(130, 50, 15, 15); // Left dot
  ellipse(270, 50, 15, 15); // Right dot

}
