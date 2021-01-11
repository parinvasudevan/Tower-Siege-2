class Stone{
    constructor(x,y,radius){
    var options = {
        isStatic: false,
        restitution:0,
        friction:1,
        density:1.2
    }

    
    this.body=Bodies.circle(x,y,radius,options);
    this.r=radius
    this.image = loadImage("sprites/stone.png");
    
    console.log(Stone);
}

display(){
    var stonepos=this.body.position;		

    push()
    translate(stonepos.x, stonepos.y);
    rectMode(CENTER);
    ellipse(0,0,this.r, this.r);
    pop()


    
   
  
    
    }
};
