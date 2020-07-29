
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, ground, stone, boyImg, launcher;
var mango1, mango2, mango3, mango4, mango5;
function preload()
{
	boyImg = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   tree = new Tree(1000, 550);

ground = new Ground(650, 550, 1300, 50);

stone = new Stone(235, 420, 30);

mango1 = new Mango(1010, 140, 30);
mango2 = new Mango(1110, 100, 30);
mango3 = new Mango(1170, 130, 30);
mango4 = new Mango(1000, 70, 30);
mango5 = new Mango(1000, 230, 30);

launcher = new Launcher(stone.body,{x:250, y:420});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  image(boyImg, 200, 340, 200, 300);
  launcher.display();

  collisionDetection(stone, mango1);
  collisionDetection(stone, mango2);
  collisionDetection(stone, mango3);
  collisionDetection(stone, mango4);
  collisionDetection(stone, mango5);
 
  keyPressed();

    drawSprites();
 
}

function mouseDragged(){
Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});

}

function mouseReleased(){
	launcher.fly();
}

function collisionDetection(object1, object2){
var object1Position = object1.body.position;
var object2Position = object2.body.position;

var distance = dist(object1Position.x, object1Position.y, object2Position.x, object2Position.y)
if (distance<-object1.r+object2.r){
  Matter.Body.setStatic(object2, false);
} 

}

function keyPressed(){
  if (keyCode === 32){
   Matter.Body.setPosition(stone.body, {x:235, y:420})
  launcher.attach(stone.body);

  }
}

