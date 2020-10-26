
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render = Matter.Render;
var bob1,bob2,bob3,bob4,bob5, bobdiameter;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roof= new Roof(width/2,height/4,width/7,20);

	 bobdiameter=40;

	 startbobposX=width/2;
	 startbobposY=height/4+500;

	 bob1= new Bob(startbobposX-bobdiameter*2,startbobposY,bobdiameter);
	 bob2= new Bob(startbobposX-bobdiameter,startbobposY,bobdiameter);
	 bob3= new Bob(startbobposX,startbobposY,bobdiameter);
	 bob4= new Bob(startbobposX+bobdiameter,startbobposY,bobdiameter);
	 bob5= new Bob(startbobposX+bobdiameter*2,startbobposY,bobdiameter);

	
		
	

	 rope1=new Rope(bob1.body,roof.body,-bobdiameter*2,0);
	 rope2=new Rope(bob2.body,roof.body,-bobdiameter,0);
	 rope3=new Rope(bob3.body,roof.body,0,0);
	 rope4=new Rope(bob4.body,roof.body,bobdiameter,0);
	 rope5=new Rope(bob5.body,roof.body,bobdiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  
	
	roof.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50, y:-45})
	}
}

function drawLine(constraint)
{
	bobBodyPosition=constraint.BodyA.position;
	roofBodyPosition=constraint.pointB;

	roofBodyOffset=constraint.pointB;
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x;
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y;
	line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY);
}

