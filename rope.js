class Rope{

    constructor(bodyA, bodyB){
      var options = {
          bodyA : bodyA,
          bodyB : bodyB,
          stiffness : 1.3,
         length : 8
      }
      this.sling = Constraint.create(options)


      
 
      
      World.add(world,this.sling)
    }

    


    display(){
        strokeWeight(5)
        line(bodyA.position.x, bodyA.position.y, bodyB.position.x, bodyB.position.y)
    }

}