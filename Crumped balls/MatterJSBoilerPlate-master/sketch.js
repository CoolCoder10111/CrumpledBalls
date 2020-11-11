
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var red1,red2,red3;
var ball 

//function preload(){
	
//}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Box(750,390,2000,10)

	red1 = new Box(650,330,20,100);
	red2 = new Box(850,330,20,100);
	red3 = new Box(750,380,200,20);

	ball = new Ball(100,300,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  red1.display();
  red2.display();
  red3.display();

  ball.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:150,y:-150});
	}
}



