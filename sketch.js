const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var ground, ground2;
var polyImage, slingshot, polygon;
var b1, b2, b3, b4, b5, b6, b7, b8, b9;

function preload(){
  polyImage=loadImage("163-1631819_hexagon-clipart-yellow-hexagon-illustration-png-download (1).png");
}

function setup() {
  var canvas = createCanvas(830,400);
  engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);

  ground = new Ground(445,300,250,10);

  ground2 = new Ground(770,190,250,10)

  block8 = new Box(380,235,30,40);
  block9 = new Box(410,235,30,40);
  block10 = new Box(440,235,30,40);
  block11 = new Box(470,235,30,40);
  block12 = new Box(500,235,30,40);
  block13 = new Box(410,195,30,40);
  block14 = new Box(440,195,30,40);
  block15 = new Box(470,195,30,40);
  block16 = new Box(440,155,30,40);
  block1 = new Box(350,275,30,40);
  block2 = new Box(380,275,30,40);
  block3 = new Box(410,275,30,40);
  block4 = new Box(440,275,30,40);
  block5 = new Box(470,275,30,40);
  block6 = new Box(500,275,30,40);
  block7 = new Box(530,275,30,40);

  b1 = new Box(676,165,30,40);
  b2 = new Box(706,165,30,40);
  b3 = new Box(736,165,30,40);
  b4 = new Box(766,165,30,40);
  b5 = new Box(796,165,30,40);
  b6 = new Box(706,125,30,40);
  b7 = new Box(736,125,30,40);
  b8 = new Box(766,125,30,40);
  b9 = new Box(736,85,30,40);

  //poly = new Polygon(50,200,20);

  //polygon=createSprite(50,200,20);
  //polygon.addImage(polyImage);
  //polygon.scale=0.1;

  //polygon = Bodies.circle(50,200,20,{isStatic:false, restitution:0.5});
  //World.add(world,polygon);

  //imageMode(CENTER);
  //polygon.fill("yellow");
  //polygon.stroke("yellow");
  //image(polyImage,polygon.position.x,polygon.position.y,40,40);

  poly = new Polygon(100,170,20);

  slingshot = new Slingshot(poly.body,{x:150,y:170})
}

function draw() {
  background(0); 
  Engine.update(engine);

  drawSprites();

  ground.display();

  ground2.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("green");
  block13.display();
  block14.display();
  block15.display();
  fill("gray");
  block16.display();
  fill("blue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("blue");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  fill("green");
  b6.display();
  b7.display();
  b8.display();
  fill("pink");
  b9.display();

  poly.display();

  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY})    
}

function mouseReleased(){
  slingshot.fly();
}