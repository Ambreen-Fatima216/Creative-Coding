let moveX = 0;
let circleSize = 80; //initialization for the if statemnt to work on
function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(255);

  moveX += 1; // move 1 to the right per frame movement
  if (moveX > 40) {
    // if the pixels are more than 40 then restart it
    moveX = 0;
  }
  for (let x = circleSize / 2; x < width; x += circleSize) {
    for (let y = circleSize / 2; y < height; y += circleSize) {
      // Big Circles light Pink
      fill(255, 182, 193);
      ellipse(x + moveX, y, circleSize * 1.5, circleSize * 1.5);

      // Medium Circles Light Blue
      fill(173, 216, 230);
      ellipse(x + moveX, y, circleSize * 1, circleSize * 1);

      // Small Circles light Yellow
      fill(255, 255, 204);
      ellipse(x + moveX, y, circleSize * 0.7, circleSize * 0.7);
    }
  }
}
