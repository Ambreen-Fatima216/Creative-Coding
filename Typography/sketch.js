let bg;
let font;
//loading the image and the font to make the typography
function preload() {
  bg = loadImage("walkingdeadbg.jpg");
  font = loadFont("Creepster-Regular.ttf");      
}
//setting up the basic layout such as the canvas size, text sizing and font.
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(120);
  textAlign(CENTER, CENTER);
}
// the function to make the text walking dead be displayed in creepster font
function draw() {
  image(bg, 0, 0, width, height);
  fill(255, 0, 0); // blood red
  text("THE WALKING DEAD", width / 2, height / 2);
}
