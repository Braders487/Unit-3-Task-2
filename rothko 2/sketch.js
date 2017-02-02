// P_4_0_01
//
// Generative Gestaltung, ISBN: 978-3-87439-759-9
// First Edition, Hermann Schmidt, Mainz, 2009
// Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
// Copyright 2009 Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * draw a grid of streched copies of an image 
 * 
 * MOUSE
 * position x           : tile count horizontally
 * position y           : tile count vertically
 * 
 * KEYS
 * s                    : save png
 */

function preload(){
    img = loadImage("orange-and-yellow.jpg");
}

function setup(){
    createCanvas(801, 1036);
}

function draw(){
  var tileCountX = mouseX/2+2;
  var tileCountY = mouseY/2+2;
  var stepX = width/tileCountX;
  var stepY = height/tileCountY;
  for (var gridY = 2; gridY < height; gridY += stepY){
    for (var gridX = 2; gridX < width; gridX += stepX){
      image(img, gridX, gridY, stepX, stepY);
    }
  }
}

function keyTyped(){
  if (key=='s' || key=='S') save("P_4_0_01.png");
}