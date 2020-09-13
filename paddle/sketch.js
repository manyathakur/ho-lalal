var ball,img,paddle,ing,edges;
function preload() {
  img=loadAnimation("ball.png")
  ing=loadAnimation("paddle.png")
}
function setup() {
  createCanvas(400, 400);
   ball=createSprite(200,200)
   ball.addAnimation("F",img)
  paddle=createSprite(360,200)
  paddle.addAnimation("O",ing)
  
  ball.velocityX=-9
  

}

function draw() {
  background(205,153,0);
  edges=createEdgeSprites();
  ball.bounceOff(edges)
  ball.bounceOff(paddle,randomVelocity)
  
 
  paddle.bounceOff(edges)
  
  
  if(keyDown(UP_ARROW))
  {
     paddle.velocityY=-5
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY=5
  }
  drawSprites();
  
}

function randomVelocity()
{
  ball.velocityY=random(9,-9);
}

