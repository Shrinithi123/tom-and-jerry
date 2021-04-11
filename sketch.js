var bg;
var cat,catImage,mouse,mouseImage;
var catImage2,mouseImage2;
var catImage3,mouseImage3;


function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    catImage = loadAnimation("images/cat1.png");
    mouseImage = loadAnimation("images/mouse1.png")
    catImage2= loadAnimation("images/cat2.png","images/cat3.png")
    mouseImage2= loadAnimation("images/mouse2.png","images/mouse3.png")
    catImage3= loadAnimation("images/cat4.png")
    mouseImage3= loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,600)
    cat.addAnimation("cat1",catImage)
    cat.scale = 0.2
    mouse = createSprite(200,600)
    mouse.addAnimation("mouse1",mouseImage)
    mouse.scale = 0.15
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x < (cat.width/2)-(mouse.width/2)){
        cat.velocityX = 0;
        cat.addAnimation("cat3",catImage3);
        cat.changeAnimation("cat3");
        cat.x = 300
        cat.scale = 0.2;
        mouse.addAnimation("mouse3",mouseImage3);
        mouse.changeAnimation("mouse3");
        mouse.scale = 0.15
        

    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if(keyCode === LEFT_ARROW){
       
        cat.velocityX = -4
        cat.addAnimation("cat_running",catImage2);
        cat.changeAnimation("cat_running")

        mouse.addAnimation("mouse_teasing",mouseImage2);
        mouse.changeAnimation("mouse_teasing")
        mouse.frameDelay = 15;
    }

}
/*var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}
*/
