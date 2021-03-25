const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, body;
var ground1;
var brick1, brick2, brick3, brick4, brick5, brick6, brick7, brick8, brick9, brick10;
var ball1;
var slingshot;

function setup() {
    engine = Engine.create();
    world = engine.world;

    createCanvas(1200, 500);

    ground1 = new Ground(500, 400, 1000, 10);
    brick1 = new Brick(550, 350, 50, 60);
    brick2 = new Brick(550, 220, 50, 60);
    brick3 = new Brick(550, 190, 50, 60);
    brick4 = new Brick(550, 160, 50, 60);
    brick5 = new Brick(550, 130, 50, 60);
    brick6 = new Brick(600, 350, 50, 60);
    brick7 = new Brick(600, 220, 50, 60);
    brick8 = new Brick(600, 190, 50, 60);
    brick9 = new Brick(600, 160, 50, 60);
    brick10 = new Brick(600, 130, 50, 60);
    ball1 = new Ball(300, 200, 100);

    slingshot = new Slingshot({ x: 350, y: 50 }, ball1.body);

}

function draw() {
    background(0);
    Engine.update(engine);

    ground1.display();
    brick1.display();
    brick2.display();
    brick3.display();
    brick4.display();
    brick5.display();
    brick6.display();
    brick7.display();
    brick8.display();
    brick9.display();
    brick10.display();
    ball1.display();
    slingshot.display();

}

function mouseDragged() {
    Matter.Body.setPosition(ball1.body, { x: mouseX, y: mouseY });
}