class Box{
    constructor(x, y, width, height) {
        var options = {
          isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
rectMode(CENTER);

 rect(pos.x, pos.y, this.width, this.height);
 if(this.body.speed<3){

}
 else {
push()
this.visibility = this.visibility-5;
tint(255,this.visibility)
image(this.body.position.x,this.body.position.y,50,50)
  World.remove(world, this.body);
pop()
 } 

      }
}
