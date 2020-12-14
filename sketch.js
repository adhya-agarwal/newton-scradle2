const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render= Matter.Render;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1700, 606);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof (820,50,500,15);

	bob1 = new Bob (610,370,30)
	bob2 = new Bob (675,370,30)
	bob3 = new Bob (840,370,30)
	bob4 = new Bob (903,370,30)
	bob5 = new Bob (967,370,30)

	rope1 = new Rope(bob1.bob,roof.body,-160,0);
	rope2 = new Rope(bob2.bob,roof.body,-100,0);
	rope3 = new Rope(bob3.bob,roof.body,-40,0);
	rope4 = new Rope(bob4.bob,roof.body,20,0);
	rope5 = new Rope(bob5.bob,roof.body,80,0);

	var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-650,y:-340});
	}
}



