
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground, leftSide, rightSide;

function preload(){
	
}

function setup(){
  createCanvas(1400, 700);

  engine = Engine.create();
  world = engine.World;

  var ball_options = {
  	restitution: 0.3,
	  density: 1.2
  }

  ball = Bodies.circle(200, 300, 10, 10, ball_options);
  World.add(world, ball);

  ellipseMode(RADIUS);

  ground = new Ground(width/2, 670, width, 20);
  leftSide = new Ground(1100, 600, 20, 120);
  rightSide = new Ground(800, 600, 20, 120); 
}

function draw() {
  background(0);
  Engine.update(engine);

  Ground.display();
  
  ellipse(ball.position.x, ball.position.y, 10);

  drawSprites();
}

function keyPressed(){
  if(keyDown === UP_ARROW){
    Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:0}); //não coloquei os números ainda porque não dá pra saber
  }
}