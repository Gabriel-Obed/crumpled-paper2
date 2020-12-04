class Bin {
    constructor(x, y, width, height){
        var options = {
            restitution: 0, 
            friction: 0.5, 
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("dustbingreen.png");
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        fill("white");
       imageMode(CENTER);
       image(this.image, pos.x, pos.y-100, this.width, this.height+200);
    }
}