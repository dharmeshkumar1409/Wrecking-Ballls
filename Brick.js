class Brick {
    constructor(x, y, width, height) {
        var options = {
            restitution: 0.8,
            density: 1.0,
            friction: 0.3
        };
        this.body = Body.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.angle;

        push();
        rotate(angle);
        translate(pos.x, pos.y);
        fill("yellow");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}