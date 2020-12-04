class Paper {
    constructor(x, y, r){
        var options = {
            isStatic: false,
            friction: 0,
            density: 1.2, 
            restitution: 0.5
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r+60, this.r+60);
        pop();
    }

}