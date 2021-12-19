var backgroundIMG , balloonIMG;
var BG, balloon;
var topBoundary , bottomBoundary;

function preload(){
backgroundIMG = loadImage("assets/bg.png");
balloonIMG = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");
}

function setup(){
    //background
BG = createSprite(165,485,1,1);
BG.addImage(backgroundIMG);
BG.scale = 1.3;
    //balloon
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonIMG);
balloon.scale = 0.2;
    //boundaries
topBoundary = createSprite(200,10,800,20);
bottomBoundary = createSprite(200,390,800,20);
topBoundary.visible = false;
bottomBoundary.visible = false;







}

function draw() {
  background("black");
  //balloon movement
  if(keyDown("space")){
      balloon.velocityY = -6;
      
  }
  balloon.velocityY = balloon.velocityY+2;

drawSprites();        
}
