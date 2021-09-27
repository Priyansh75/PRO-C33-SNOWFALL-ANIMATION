const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgImg , flakeImg,flakes=[],engine,world

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
}

function preload(){
  bgImg = loadImage("snow3.jpg");
}

function draw() {
  background(bgImg);  

  if (frameCount % 40 === 0){
    flakes.push(new snowFlakes(random(0,width), 10, 10));
  }
  for (var k = 0; k < flakes.length; k++){
    flakes[k].display();
  }
  drawSprites();
}


