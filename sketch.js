
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;
var ground;
var ball;

function setup() {
	createCanvas(1350, 650);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	dustbin = new Dustbin(1000, 590, 220, 30);
	

	ground = new Ground(400, 600, 1900, 15);


	ball = new Ball(100, 520, 15);
}

function draw() {
	rectMode(CENTER);
	background(0, 0, 0);

	dustbin.display();
	

	ground.display();


	ball.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position, { x: 45, y: -45 });
	}

}
