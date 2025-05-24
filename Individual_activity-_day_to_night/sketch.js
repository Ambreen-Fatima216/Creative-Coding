let isDay = true;  // starts with day time

function setup() {
  createCanvas(600, 400);  // set canvas size
}

function draw() {
  // change background color based on day or night
  if (isDay) {
    background(135, 206, 235);  // light blue sky for day
  } else {
    background(20, 20, 50);  // dark blue sky for night
  }

  // draw sun or moon
  if (isDay) {
    fill(255, 204, 0);  // yellow sun color
    ellipse(80, 80, 80, 80);  // sun shape
  } else {
    fill(255);  // white moon color
    ellipse(80, 80, 60, 60);  // moon shape
  }

  // ground is green grass
  fill(34, 139, 34);
  rect(0, 350, 600, 50);  // ground at bottom

  // buildings just rectangles all the way across
  fill(50);  
  rect(50, 200, 80, 150);
  rect(160, 200, 80, 150);
  rect(270, 200, 80, 150);
  rect(380, 200, 80, 150);
  rect(490, 200, 80, 150);

  // windows on buildings done manually for each building
  drawWindows(50);
  drawWindows(160);
  drawWindows(270);
  drawWindows(380);
  drawWindows(490);

  // text at top showing if it is day or night
  fill(255);
  textSize(24);
  textAlign(CENTER);
  if (isDay) {
    text("DAY", width / 2, 30);
  } else {
    text("NIGHT", width / 2, 30);
  }
}

// function to draw windows on buildings
function drawWindows(x) {
  // windows glow yellow at night and look grey during the day
  if (isDay) {
    fill(200);
  } else {
    fill(255, 255, 100);
  }
  // windows in three rows two windows each
  rect(x + 15, 220, 15, 20);
  rect(x + 45, 220, 15, 20);
  rect(x + 15, 260, 15, 20);
  rect(x + 45, 260, 15, 20);
  rect(x + 15, 300, 15, 20);
  rect(x + 45, 300, 15, 20);
}

// switch day and night when mouse clicked
function mousePressed() {
  isDay = !isDay;
}
