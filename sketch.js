var play = 1
var end = 0
var gamestate = play
var restart,restartImg

var jet 
var jetImg
var edge
var roof
var floor
var obstacle1
var obstacle2
var obstacle3
var obstacle4
var score=0;
var trophy,trophyImg
var background,backgroundImg

function preload(){
jetImg=loadImage("Jet.png")
trophyImg=loadImage("Trophy5.png")
//baclgroundImg=loadImage("BackgroundImg.jpg")
restartImg=loadImage("restartButton.png")
}


function setup(){
createCanvas(windowWidth,windowHeight)
//setBackground('BackgroundImg.jpg')
//background = createSprite(600,600,1000,1000)
//background.addImage('background', backgroundImg)
jet = createSprite(80,350,170,50)
jet.addImage('jet', jetImg)
jet.scale = 0.04
edge = createSprite(1500,60,50,2000)
trophy = createSprite(1400,350,50,50)
trophy.addImage('trophy', trophyImg)
trophy.scale = 0.5
roof = createSprite(600,10,3000,20)
floor = createSprite(600,740,3000,20)
obstacle1 = createSprite(500,350,40,300)
obstacle1.velocityY = -3

obstacle2 = createSprite(700,350,40,300)
obstacle2.velocityY = 3
obstacle3 = createSprite(900,350,40,300)
obstacle3.velocityY = -3
obstacle4 = createSprite(1100,350,40,300)
obstacle4.velocityY = 3

restart = createSprite(800,600)
restart.addImage(restartImg)







}


function draw(){
background('BackgroundImg.jpg')
//background(255)
background.scale = 0.25

score +=2


jet.velocityX = 4
fill("black")
textSize(20)
text("Score: "+ score, 200,50);
//jet.x = World.mouseX
//jet.y = World.mouseY

jet.velocityY=5

if(keyDown("w")){
jet.y = jet.y-20
}

if(jet.isTouching(trophy)){
 // score  +=1
 text("Congratulations you have passed the mission",600,400)
}

if(keyDown('UP_ARROW_KEY')){
  jet.X = jet.X + 10
}
//jet.collide(edge)
//jet.collide(obstacle1)
//jet.collide(obstacle2)
//jet.collide(obstacle3)
//jet.collide(obstacle4)
//jet.debug = true
if(jet.isTouching(edge)||jet.isTouching(obstacle1)||jet.isTouching(obstacle2)||jet.isTouching(obstacle3)||jet.isTouching(obstacle4)||jet.isTouching(floor)||jet.isTouching(roof)){
gamestate===end
gameOver()
}
if(gamestate===play){
  restart.visible = false
}
if(gamestate===end){
  
  gameOver()


}

if(mousePressedOver(restart)){
gamestate===play
}

obstacle1.bounceOff(roof)
obstacle1.bounceOff(floor)
obstacle2.bounceOff(roof)
obstacle2.bounceOff(floor)
obstacle3.bounceOff(roof)
obstacle3.bounceOff(floor)
obstacle4.bounceOff(roof)
obstacle4.bounceOff(floor)





drawSprites()
}

function gameOver(){
obstacle1.destroy()
obstacle2.destroy()
obstacle3.destroy()
obstacle4.destroy()
jet.destroy()
score.destroy()

}


