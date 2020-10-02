var car,wall ; 
var speed,weight ; 

function setup() {
 var canvas =  createCanvas(800,400);
 


  speed=random(10,20);
  weight=random(400,1500);

 car =  createSprite(50,200,50,50);
 car.shapeColor = ("white");
 
 wall = createSprite(400,200,60,120);
 wall.shapeColor = color ("yellow");
}


function draw() {
  background(80,80,80);  

  car.velocityX = speed ; 

  if(wall.x - car.x < wall.width/2 + car.width/2) {
      car.velocityX = 0 ;
      var deformation = 0.5*weight*speed*speed /22500 ; 
      if(deformation > 180 )
      {
        car.shapeColor = color(255,0,0);
      }
      if(deformation < 180 && deformation  > 100 ) 
      {
        car.shapeColor = color(230,230,0);
      }
      if(deformation < 100 ) 
      {
        car.shapeColor = color(0,255,0);
      }
    } 
  drawSprites();
}