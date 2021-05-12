var canvas;
var music;
//var box, red, blue, orange, yellow,

function preload(){
    music = loadSound("music.mp3");
   
}


function setup(){
 canvas = createCanvas(1200 ,500);
 box = createSprite(random(20, 750),100,40,40);
 box.velocityX = -8;
 box.velocityY = 8;

 red = createSprite(480, 400, 105, 35);
 red.shapeColor = rgb(255,0,0);

 blue = createSprite(612, 400, 105, 35);
 blue.shapeColor = rgb(0,0,255);

 orange = createSprite(745, 400, 105, 35);
 orange.shapeColor = rgb(255, 69, 30);

 yellow = createSprite(873, 400, 105, 35);
 yellow.shapeColor = rgb(248, 174, 25);

}

function draw() {
    background(rgb(0,0,0));

    edges = createEdgeSprites();
    box.bounceOff(edges);


    if(box.isTouching(red) && box.bounceOff(red)){
        box.shapeColor = rgb(255,0,0);
        music.play();
    }
    if(box.isTouching(blue)){
        box.shapeColor = rgb(0,0,255);
        box.velocityX = 0;
        box.velocityY = 0; 
        music.stop();
    }
    if(box.isTouching(orange) && box.bounceOff(orange)){
     box.shapeColor = rgb(255, 69, 30); 
     //music.play();

 }
 if(box.isTouching(yellow) && box.bounceOff(yellow)){
     box.shapeColor = rgb(248, 174,25); 
    // music.play();
 }
     
 drawSprites();
    //add condition to check if box touching surface and make it box
}
