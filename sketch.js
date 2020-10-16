var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(600, 500);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 220, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	
	
	
	
	engine = Engine.create();
	world = engine.world;

	box1 = new Box (300, 500, 70, 10);
	box1.shapeColor = "red";

	box2 = new Box(260, 485, 10, 50);
	box2.shapeColor = "red";

	box3= new Box (340, 485, 10, 50);
	box3.shapeColor = "red";

	ground = new Ground (200, height, 600, 20)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3,friction:25, isStatic:true});
	World.add(world, packageBody);
	
 
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
 packageSprite.x= packageBody.position.x 

  packageSprite.y= packageBody.position.y

 keyPressed();
 
 
 
 drawSprites();
 
}

function keyPressed() {
	if(keyDown("DOWN_ARROW")){ 
	 
	  Matter.Body.setStatic(packageBody, false); }

}



