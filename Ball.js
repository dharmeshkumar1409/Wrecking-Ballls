class Ball {
    constructor(x, y, radius) {
        var options = {
            restitution: 1.0,
            density: 2.0,
            friction: 0.3
        };
        this.body = Body.circle(x, y, radius, options);
        this.x = x;
        this.y = y;
        this.radius = radius;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.angle;

        push();
        rotate(angle);
        translate(pos.x, pos.y);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius);
        pop();
    }
}