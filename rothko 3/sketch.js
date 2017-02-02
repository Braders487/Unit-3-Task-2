var img;
var smallPoint, largePoint;

function preload() {
  img = loadImage("orange-and-yellow.jpg");
}

function setup() {
  createCanvas(801, 1036);
  smallPoint = 2;
  largePoint = 25;
  imageMode(CENTER);
  noStroke();
  background(255,125,8);
  img.loadPixels();
}

function draw() {
  var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  fill(pix, 128);
  rect(x, y, pointillize, pointillize);
}