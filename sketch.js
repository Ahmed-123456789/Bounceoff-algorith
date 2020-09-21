var block, block2, block3, block4, block5, block6;

function setup() {
  createCanvas(800,400);
  block = createSprite (400, 200, 20, 20);
  block.shapeColor  ="blue"; 
  block.velocityY = -3;

  block2 = createSprite (380, 160, 20, 20);
  block2.shapeColor = "yellow";
  
  block3 = createSprite (320, 200, 20, 20);
  block3.shapeColor = "red";
  block4 = createSprite (210, 180, 20, 20);
  block4.shapeColor = "red";
  block5 = createSprite (290, 160, 20, 20);
  block5.shapeColor = "red";
  block6 = createSprite (400, 280, 20, 20);
  block6.shapeColor = "red";
  block6.velocityY = 3;
 
}

function draw() {
  background(255,255,255);
  block2.x = mouseX ;
  block2.y = mouseY;  
  
  istouching(block2, block4);
  bounceoff(block, block6);
  drawSprites();
}
