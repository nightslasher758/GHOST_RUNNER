var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);

  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  doorsGroup = new Group()

  climbersGroup = new Group()

  ghost = createSprite(200,200);
  ghost.addImage("ghost", ghostImg)
  ghost.scale = 0.5

  invisibleBlockGroup = new Group()
}

function draw() {
  background(200);

  //spookySound.play()

  if(gameState==="play"){


if(keyDown("SPACE")){
    ghost.velocityY = -5;
  }

  if(keyDown("RIGHT_ARROW")){
   ghost.x = ghost.x+3;
  }

  if(keyDown("LEFT_ARROW")){
    ghost.x = ghost.x-3;
  }

  ghost.velocityY = ghost.velocityY+0.8;




  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY = 0;
  }

  if(invisibleBlockGroup.isTouching(ghost)||ghost.y>600){

    ghost.destroy()
    gameState="end"

  }



  

  
  if(tower.y > 400){
      tower.y = 300
    }
  
    spawnDoors();

    drawSprites();
    

}




if(gameState==="end"){

  stroke("yellow"); fill("yellow"); textSize(30); text("Game Over", 230,250);

}

}

function spawnDoors(){
if(frameCount%240===0){

  door = createSprite(200,-50);

  door.addImage("door", doorImg)

  climber = createSprite(200-10);

  climber.addImage("climber", climberImg);

  invisibleBlock = createSprite(200,15);

  invisibleBlock.width = climber.width;

  invisibleBlock.height = 2;

  door.x = Math.round(random(120,400));

  climber.x = door.x;

  door.velocityY = 1;

  invisibleBlock.x = door.x;

  invisibleBlock.velocityY = 1;

  invisibleBlock.lifetime = 400;

  door.lifetime = 400;

  climber.velocityY = 1;

  climber.lifetime = 400;

  climbersGroup.add(climber);

  doorsGroup.add(door);

  invisibleBlock.debug = true;

  invisibleBlockGroup.add(invisibleBlock);
  

}





}