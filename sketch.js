
var fixedRect, movingRect;
var gameobject1, gameobject2;


function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
   gameobject1 = createSprite(50,200,80,80);
   gameobject1.shapeColor = "orange";
   gameobject2 = createSprite(200,300,70,70);
   gameobject2.shapeColor = "orange";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,gameobject1)){
  movingRect.shapeColor = "red"
  gameobject1.shapeColor = "red"
}

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  if(isTouching(movingRect,gameobject2)){
    movingRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
  gameobject1.shapeColor = "green"
    fixedRect.shapeColor = "green"
    gameobject2.shapeColor = "green";
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




