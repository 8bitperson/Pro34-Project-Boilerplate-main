
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var a



function setup() {
  createCanvas(400,400);
  a = Body.circle(200,200,[])
  engine = Engine.create();
  world = engine.world;
}


function draw() 
{
  
  background(51);
  Engine.update(engine);
  
  if(keyCode === RIGHT_ARROW){
  Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: 0.04, y: 0});
  }
  
}

