class Water {

    constructor(x, y){
        var options = {
            density : 0.1,
            restitution : 1,
            friction : 0.5

        }
        this.body = Bodies.circle(x, y, 4, options)
        
        
        
this.width = width
this.height = height

        World.add(world, this.body)

    }

    display(){
        push()
        translate(this.body.position.x, this.body.position.y)
        rectMode(CENTER)
        noStroke()
        fill("blue")
        strokeWeight(2)
        rect(0, 0, 4, 4)
        pop()
    }

}