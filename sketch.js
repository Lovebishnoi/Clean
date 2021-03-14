const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, dust;

function preload(){
img = loadImage("Basket.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    ground = Bodies.rectangle(600,390,1200,10,ground_options);
    World.add(world,ground);
   dust = new paper(200,200,20,20);
}
function draw(){
    background(225);
    Engine.update(engine);
    image(img, 900, 200, 200, 200);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1200,20);
    dust.display();  
}
function keyPressed(){
    if(keyCode === UP_ARROW){
     Matter.Body.applyForce(dust.ball,dust.ball.position,{x:85,y:-85});
    }
}