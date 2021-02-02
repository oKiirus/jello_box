class Ball {

    constructor(x, y){
        var options = {
            density : 0.1,
            restitution : 1,
            friction : 0.5

        }
        this.body = Bodies.circle(x, y, 40, options)
        
        
        
this.width = width
this.height = height

        World.add(world, this.body)

    }

   

    display(){
        push()
        translate(this.body.position.x, this.body.position.y)
        ellipseMode(RADIUS)
        noStroke()
        fill("blue")
        strokeWeight(2)
        ellipse(0, 0, 40)
        pop()
    }

}