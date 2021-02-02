const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint



let a = []
let ar = []

var g = 0





function preload(){

 

}


function setup() {
  createCanvas(800,800);
  engine = Engine.create()
  world = engine.world

   
  for(let h = 350; h < 550; h += 10){
    for(let i = 350; i < 550; i += 10){
        a.push(new Water(i, h))
        
    }
      }

      ball = new Ball(0, 0)

      
      
    
          
gB = new Ground(400, 800, 800, 50)
for(let m = 0; m < 400; m += 20 ){
  
 

      for(let i = m; i < m + 19; i++){
        o = i + 1
        
        ar.push(new Rope(  a[i].body,  a[o].body  ))
      }

    }

    for(let i = 0; i < 380; i++ ){
      o = i + 20

      ar.push(new Rope(  a[i].body,  a[o].body  ))
    }
    
    
    
   

 
  
  
}
function draw() {
  engine.world.gravity.y = g
  background("white")
 Engine.update(engine)

 push()
 strokeWeight(5)
 rectMode(CENTER)
 noFill()
rect(400, 400, 800, 800)
 pop()



 
 



ball.display()
Matter.Body.setPosition(ball.body, {x:mouseX,y:mouseY})





  
   
   
gB.display()

    

    for(let i = 0; i < a.length; i++){
    a[i].display()
    }
    

}

function keyPressed(){
  
  g = 0.2

}



