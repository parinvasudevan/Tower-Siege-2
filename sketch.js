const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder, ball, ground;
var platform,platform2;
var ball;
var slingShot;
var polygon_img;

function preload(){
    polygon_img=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground(600,400,1200,50);
    platform = new Ground(400,250,200,10);
    platform2 = new Ground(700,300,200,10);

    //Platform1
    //level 1
   block1 = new Box(330,225,30,40);
   block2 = new Box(360,225,30,40);
   block3 = new Box(390,225,30,40);
   block4 = new Box(420,225,30,40);
   block5 = new Box(450,225,30,40);
   block6 = new Box(480,225,30,40);
   //level 2
   block7 = new Box(345,185,30,40);
   block8 = new Box(375,185,30,40);
   block9 = new Box(405,185,30,40);
   block10 = new Box(435,185,30,40);
   block11 = new Box(465,185,30,40);
   //level 3
   block12 = new Box(360,145,30,40);
   block13 =  new Box(390,145,30,40);
   block14 =  new Box(420,145,30,40);
   block15 =  new Box(450,145,30,40);
   //level 4
   block16 =  new Box(375,105,30,40);
   block17 =  new Box(405,105,30,40);
   block18 =  new Box(435,105,30,40);
   //level 5
   block19 =  new Box(390,65,30,40);
   block20 =  new Box(420,65,30,40);
   //level 6
   block21 = new Box(405,25,30,40);


//Platform2

//level 1
block22 = new Box(630,275,30,40);
block23= new Box(660,275,30,40);
block24= new Box(690,275,30,40);
block25= new Box(720,275,30,40);
block26= new Box(750,275,30,40);
block27= new Box(780,275,30,40);
//level 2
block28= new Box(645,235,30,40);
block29 = new Box(675,235,30,40);
block30= new Box(705,235,30,40);
block31 = new Box(735,235,30,40);
block32 = new Box(765,235,30,40);

//level 3
block33 = new Box(660,195,30,40);
block34 =  new Box(690,195,30,40);
block35 =  new Box(720,195,30,40);
block36 =  new Box(750,195,30,40);
//level 4
block37 =  new Box(675,155,30,40);
block38 =  new Box(705,155,30,40);
block39 =  new Box(735,155,30,40);
//level 5
block40 =  new Box(690,115,30,40);
block41 =  new Box(720,115,30,40);
//level 6
block42 = new Box(705,75,30,40);

ball = Bodies.circle(50,200,20);
World.add(world,ball);

slingShot = new SlingShot(ball.body,{x:100,y:200});

   
}    
   function draw() {
       rectMode(CENTER);
       background(140);
      
       
       ground.display();
       platform.display();
       platform2.display();
       //Platform1
       //level 1
       block1.display();
       block2.display();
       block3.display();
       block4.display();
       block5.display();
       block6.display();
       fill ("yellow");
       //level 2
       block7.display();
       block8.display();
       block9.display();
       block10.display();
       block11.display();
       fill (160);
       //level 3
       block12.display();
       block13.display();
       block14.display();
       block15.display();
       fill ("blue");
       //level 4
       block16.display();
       block17.display();
       block18.display();
       fill ("pink");
       //level 5
       block19.display();
       block20.display();
       fill ("turquoise");

       //level 6
       block21.display();
       fill("gold")
       //Platform2
       //level 1

       block22.display();
       block23.display();
       block24.display();
       block25.display();
       block26.display();
       block27.display();
       fill ("yellow");
       //level 2
       block28.display();
       block29.display();
       block30.display();
       block31.display();
       block32.display();
       fill ("blue");
       //level 3 
       block33.display();
       block34.display();
       block35.display();
       block36.display();
       fill ("turquoise");
       //level 4
       block37.display();
       block38.display();
       block39.display();
       fill("pink");
       //level 5
       block40.display();
       block41.display();
       fill(160);
       //level 6
       block42.display();
       fill ("gold");
       imageMode (CENTER)
image(polygon_img,ball.position.x,ball.position.y,40,40)

       slingShot.display();
       drawSprites();
    }

    function mouseDragged(){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }
    
    
    function mouseReleased(){
        slingShot.fly();
    }

    function keyPressed(){   
        if(keyCode===32){
            slingShot.attach(this.ball)
        }
    }