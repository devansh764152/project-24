const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone;
var iron;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber= new Rubber(300,100,50);
    stone= new Stone(500,100);
    iron=new Iron(700,100);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    rubber.display();
    hammer.display();
    stone.display();
    iron.display();
 
}