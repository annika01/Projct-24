
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, box1, box2,box3, ground 



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground= new Ground (800, 670, 1600, 20)
box1=new Box (1200,650, 200, 20)
box2=new Box (1100,610, 20, 100)
box3=new Box (1300, 610, 20, 100)
paper= new Paper (200,450)
	Engine.run(engine);
  
}


function draw() {

if(keyDown(UP_ARROW)){
	Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y: -85                                                 })
}

  rectMode(CENTER);
  background(0);
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  paper.display()
  drawSprites();
 
}



