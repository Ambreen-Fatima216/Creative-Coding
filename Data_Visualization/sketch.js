//setting variable values
let seasons = ["S1",
               "S2",
               "S3",
               "S4",
               "S5",
               "S6",
               "S7",
               "S8"];
let ratings = [8.0,
               8.4,
               8.2,
               8.3,
               8.2,
               8.0,
               8.1,
               7.8];
let barColors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#DADEF0"); // light background so bars stand out
  generateBlueColors(); // make some blue colors for the bars
  drawBarChart(); // draw the chart once right away
}

function generateBlueColors() {
  // create blues, all different but same vibe
  for (let i = 0; i < seasons.length; i++) {
    //It randomly generates different hues of blue to go with b99s theme and it changes when refreshed.
    
    let r = 0; // no red is required so red is 0
    let g = random(100, 180);
    let b = random(180, 255);
    barColors.push(color(r, g, b));
  }
}

function drawBarChart() {
    // how wide each bar is
  let barWidth = (width - 100) / seasons.length - 10;
    // where bars start from left
  let startX = 50;
    // bottom line for bars
  let startY = height - 50;
    // round corners for bars
  let cornerRadius = 10;


  fill(0);
  textAlign(CENTER, CENTER);
  textSize(32);
    // title at top
  text("Brooklyn Nine-Nine Season Ratings", width / 2, 50); 

    // map rating to bar height
  for (let i = 0; i < seasons.length; i++) {
    let barHeight = map(ratings[i], 0, 10, 0, height - 90); 


    fill(200);
    stroke(1);
    rect(
      // shadow
      startX + i * (barWidth + 10) + 5,
      startY - barHeight + 1,
      barWidth,
      barHeight,
      cornerRadius
    ); 
// actual bar
    noStroke();
    fill(barColors[i]);
    rect(
      startX + i * (barWidth + 10),
      startY - barHeight,
      barWidth,
      barHeight,
      cornerRadius
    ); 

    textSize(12);
    textAlign(CENTER);
    fill(0);
    text(
      // rating value
      ratings[i].toFixed(1),
      startX + i * (barWidth + 10) + barWidth / 2,
      startY - barHeight - 10
    ); 
    textSize(14);
    textAlign(CENTER, BOTTOM);
    fill(0);
    text(
      // season label
      seasons[i],
      startX + i * (barWidth + 10) + barWidth / 2,
      startY - barHeight - 20
    ); 
  }
}
