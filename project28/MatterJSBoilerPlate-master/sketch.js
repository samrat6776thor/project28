
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var launcher,tree,mangoe,stone;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 boy = new Boy(700,320,70,70)
	 stone = new Stone(200,50)
	 mangoe = new Mangoe()

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  boy.display();
  stone.display();
  mangoe.display();
  
  drawSprites();
 
}



