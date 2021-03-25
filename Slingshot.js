class Slingshot {
    constructor(pointA, bodyB) {
        var options = {
            stiffness: 1.0,
            length: 200,
            pointA: pointA,
            bodyB: bodyB
        };
        this.pointA = pointA;
        this.sling = Constraint.create(options);

        World.add(world, this.sling);
    }

    display() {
        var pointA = this.pointA;
        var pointB = this.sling.bodyB.position;
        push();
        strokeWeight(2);
        stroke("yellow");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
}