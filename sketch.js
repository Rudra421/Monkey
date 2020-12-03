//Making variables
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground,invisibleground;
var score;

function preload(){
  
  //Loading monkey Animation
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  //Loading Images
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //Making monkey
 monkey=createSprite(80,315,20,20)
  monkey.addAnimation("monkey running",monkey_running); 
 monkey.scale=0.1;

  //making ground
   ground = createSprite(700,350,600,20);
  ground.x = ground.width /2;
  
  //making Invisable ground
  invisibleground =createSprite(200,350,400,20);
  invisibleground.visible=false;
  
  //Making Groups
  FoodGroup = createGroup();
  obstacleGroup=createGroup();
  
  //making score 0
  score=0;
  
}


function draw() {
  //making Canvas
  createCanvas(600,400);
  
  //Declaring background colour
background("white");
  
  //Giving the ground Velocity
ground.velocityX=-4;
  
  //Making Score Increase
  score=score+Math.round(getFrameRate()/50)
  
  //making score be writen at top 
  stroke("black");
  fill("black");
  textSize(20);
  text("Survival Time: " + score,210,50);
  
   //Making ground get longer when it ends
   if (ground.x < 300){
      ground.x = ground.width/2;
    
    }
 //So the monkey colides with the ground and does not go through
monkey.collide(invisibleground);
  
  //Making monkey Jump
  if(keyDown("space") && monkey.y>= 200) 
    {
    monkey.velocityY=-10;  
    }
  monkey.velocityY=monkey.velocityY+0.8;
  
  Spawnfood();
  Spawnobstacles();
  
  //drawing Sprites
drawSprites();  
}

// Fuctons that makes Bananas
function Spawnfood()
{
  if(frameCount%80===0)
  {
    banana=createSprite(600,Math.round(random(150,200)),20,20)
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=160;
    FoodGroup.add(banana);
  }
  }

//Function that make the rocks
function Spawnobstacles()
{
  if(frameCount%300===0)
    {
     obstacle=createSprite(300,325,20,20);
      obstacle.addImage(obstacleImage);
      obstacle.scale=0.1;
      obstacle.velocityX=-4;
      obstacle.lifetime=160;
      obstacleGroup.add(obstacle);
    }
}










