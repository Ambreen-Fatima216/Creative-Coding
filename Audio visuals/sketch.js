let sound;
let amp;
let color = ["#9F2B68",
              "#800080",
              "#DA70e8",
              "#DA70D6",
              "#E0B0FF"];

function preload() {
  sound = loadSound("fun-upbeat-background-music-311769.mp3");
}// pre loading a audio file to visualize it

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  amp = new p5.Amplitude(); // detetcs the amps of the audio being played
  sound.play(); // Start playing the sound when loaded
}
function draw() {
  let level = amp.getLevel(); // gets the current volume level
  let size = level * height * 3; // then it scales the circles it for visual effect
  fill(random(color));
  stroke(255);
  circle(mouseX, mouseY, size);
}
