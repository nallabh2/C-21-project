var car,wall;
var speed=random(223,321);
var weight=random(30,52);
var thickness=random(22,83);

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  car=createSprite(50,200,75,25);
  car.shapeColor="white";
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=rgb(80,80,80);
  car.velocityX=speed;
}

function draw() {
  // car.x=mouseX;
  background("lightgrey");  
  drawSprites();
  if(car.isTouching(wall)){
    car.velocityX=0;
   var damage=0.5*weight*speed*speed/thickness*thickness*thickness
if(damage>10){
  car.shapeColor="red"
  car.velocityX=0;
}else{
  car.shapeColor="green"
  car.velocityX=0;
}
  }
}
