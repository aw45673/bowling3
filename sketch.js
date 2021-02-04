const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var gameState= 'Start'
var chances=1;


function preload(){
    ball=loadImage("ball.png")
}

function setup(){
    var canvas = createCanvas(300,700);
    engine = Engine.create();
    world = engine.world;

    ballBody = Bodies.circle(150 , 150 , 25 , {restitution:0.8, isStatic:false, density:1.5,friction:0.8});
    World.add(world, ballBody);
    leftBody = Bodies.rectangle(0,250,10,500,{isStatic:true})
	World.add(world,leftBody);
	rightBody = Bodies.rectangle(300,250,10,500,{isStatic:true})
	World.add(world,rightBody);

    box1 = new Box(200,622,20,50);
    box2 = new Box(180,622,20,50);
    box3 = new Box(160,622,20,50);
    box4 = new Box(140,622,20,50);
    box5 = new Box(120,622,20,50);
    box6 = new Box(100,622,20,50);
    box12 = new Box(180,572,20,50);
    box7 = new Box(160,572,20,50);
    box8 = new Box(140,572,20,50);
    box9 = new Box(120,572,20,50);
    box10 = new Box(160,522,20,50);
    box11 = new Box(140,522,20,50);
    ground = new Ground(150,height-50,300,10)
    sling = new SlingShot(ballBody,{x:150,y:150});
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    ground.display();
    sling.display();
    rectMode(CENTER)
    rect(leftBody.position.x,leftBody.position.y,10,700)
    rect(rightBody.position.x,rightBody.position.y,10,700)
    imageMode(CENTER)
    image(ball,ballBody.position.x,ballBody.position.y,50,50)
    //ballBody.position.x=mouseX

    fill("aquamarine")
    textSize(15)
    text("Chances Taken:"+ chances,100,20)
}

function mouseDragged(){
     if (gameState !== 'launched' && gameState === 'Start'){
        Matter.Body.setPosition(ballBody,{x:mouseX,y:mouseY})  
  }
}
function mouseReleased(){
    sling.fly();
    gameState = 'launched'
}
function keyPressed(){
    if (keyCode === 32){
        Matter.Body.setPosition(ballBody,{x:150,y:150})  
        sling.attach(ballBody);
        chances+=1;
        gameState = 'Start'
    }
} 