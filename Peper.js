class paper{

    constructor(x,y){
    var options = {
        isStatic: false,
        restitution:0.3,
         friction:0.5,
         density:0.8
    }
    
    this.ball = Bodies.circle(x,y,50,options);
    this.img = loadImage("paper.png");
    this.r = 50;
    World.add(world,this.ball); 
    
    }
    
    display(){
    fill("white");
    imageMode(CENTER)
    image(this.img, this.ball.position.x, this.ball.position.y, this.r, this.r);
     }
    
}   