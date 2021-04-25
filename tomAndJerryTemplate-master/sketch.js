var bgImg
var cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2, mouseImg3;

function preload() {

    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png")
    mouseImg1 = loadAnimation("images/mouse1.png",);
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
    mouse = createSprite(250,600,10,10);
    mouse.addAnimation(mouseImg1);
    mouse.scale = 0.2
    
    cat = createSprite(750,600,10,10);
    cat.addAnimation(catImg1);
    cat.scale = 0.2
    
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    keyPressed();
    
    if(cat.x - mouse.x < (cat.width - mouse.width)/3){
       cat.velocityX = 0;
       mouse.addAnimation("happyMouse",mouseImg1);
       mouse.changeAnimation("happyMouse");
       cat.addAnimation("standing",catImg3);
       cat.changeAnimation("standing");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keyCode === RIGHT_ARROW){
     mouse.addAnimation("mouseTeasing", mouseImg2);
     mouse.changeAnimation("mouseTeasing");
     mouse.frameDelay = 25;

     cat.addAnimation("catWalking",catImg2);
     cat.changeAnimation("catWalking");
     cat.velocityX = -3;
     cat.frameDelay = 25
  }
}
