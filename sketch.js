
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree;
var treeimg;
var boy;
var boyimg;
function preload()
{
//	treeimg=loadImage("images/tree.png");
	boyimg=loadImage("images/boy.png");
}

function setup() {
	createCanvas(1200, 700);

//tree = createSprite(800,365,20,20);
//tree.addImage(treeimg);
//tree.scale= 0.5;

boy = createSprite(200,590,20,20);
boy.addImage(boyimg);
boy.scale= 0.15;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 stone1 = new Stone(120,500);
	 ground1 = new Ground(600,680,1200,20);
	// treee = new Treee(800,400);
	 mango1 = new Mango(800,450,10,10);
	 //mango2 = new Mango(870, 400);
	 //mango3 = new Mango(780,405);
	 elastic1 = new Chain(stone1.body,{x:130,y:510});
	// tree = new Tree(800,365,600,600);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  strokeWeight(4);
  drawSprites();
  //tree.display();
  stone1.display();
  ground1.display();
  treee.display();
  mango1.display();
  //mango2.display();
  //mango3.display();
  elastic1.display();
  
 
}



function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    elastic1.fly();
}

function detectcollision(stone1,mango1) {
	mangoBodyPosition=mango1.body.position;
	stoneBodyPosition=stone1.body.position;

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,
		mangoBodyPosition.x, mangoBodyPosition.y)
		if (distance<=mango1.r+stone1.r){
             Matter,Body.setStatic(mango1.body,false);
		}
}