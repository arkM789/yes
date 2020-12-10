var car,wall;
var speed,weight;


function setup(){
  createCanvas(1500,800);

  speed=random(55,90);

  weight=random(400,1500);

  car=createSprite(400, 400, 50, 50);

  wall=createSprite(1400,300,70,800);
wall.shapeColor="red";
  car.velocityX=speed;


  
}

function draw() {
  background(1500,800);  



  if(car.isTouching(wall)){

    car.velocityX=0;
  }
  if(car.isTouching(wall)){

  car.shapeColor="yellow";
 }



  drawSprites();
}