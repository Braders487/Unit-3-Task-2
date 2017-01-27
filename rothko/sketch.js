function setup() {
  resizeCanvas(400,500)
  background (255,125,51)
  var inside = color(255, 214, 3);
  var outside = color(255, 87, 3);

push();
  fill(outside);
  noStroke()
  rect(60, 200, 280, 280);
  pop();
  
  push();
  fill(inside);
  noStroke()
  rect(60, 6, 280, 190);
  
  
}

function draw() {
  
  background(255,125,51);
 

  if (mouseIsPressed)
    
    rect(60, 200, 280, 280);
    
  else
  
   rect(60, 6, 280, 190);

  print(mouseIsPressed);
  
   if (mouseIsPressed)
    
    fill(255, 87, 3);
    
  else
  
   fill(255, 214, 3);

  print(mouseIsPressed);
}