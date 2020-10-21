
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime;
var ground,invisibleGround;
survivalTime = 0;

function preload(){
  
  
 monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
   
}



function setup() {

  createCanvas(600,200);
    
 
   monkey=createSprite(80,150,20,20);
   monkey.addAnimation("moving", monkey_running);
  monkey.addImage(bananaImage)
   monkey.scale=0.1
  
  

  ground = createSprite(80,200,600,12)
  ground.x = ground.width / 2;

  
  
 // invisibleGround = createSprite(200,190,400,2);
 // invisibleGround.visible = false;
  
  survivalTime=0;
  
  obstaclesGroup =new Group();
  FoodGroup = new Group();
}


function draw() {
  background("white")
  textSize(30);
  text("Survival Time: "+ survivalTime, 300,50);
  
  survivalTime = survivalTime+Math.round(getFrameRate()/60);

  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  
   
    if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);   
    spawnFood();
    spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,160,10,40);
   obstacle.addImage(obstacleImage)
   obstacle.velocityX = -(6 + survivalTime/100);
   obstacle.scale = 0.15
   obstacle.lifetime=300;
   obstaclesGroup.add(obstacle);
 
  }
}
function spawnFood(){
  if (frameCount % 80 === 0){
    var banana = createSprite(600,100,20,20);
    banana.y = random(10,100)
    banana.addImage(bananaImage);
    banana.velocityX=-4;
    banana.scale=0.1;
  
    FoodGroup.add(banana);
  }

}   

    





