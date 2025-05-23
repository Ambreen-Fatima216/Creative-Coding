var img;

function preload() {
  img = loadImage("Image Pixel.jpg");
}
function setup() {
  createCanvas(400, 400);
  background(0);
  // Display the image
  image(img, 0, 0);
  // Apply the filter with 3 colors
  filter(POSTERIZE, 3);
  filter(INVERT);
}
function draw() {
}
