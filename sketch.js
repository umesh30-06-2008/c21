var a,b
var c,d
function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  a.shapeColor="red"
  b=createSprite(400, 300, 70, 70);
  b.shapeColor="red"
  c=createSprite(100, 200, 50, 50);
  c.shapeColor="blue"
  c.velocityX=3;
  d=createSprite(200, 200, 50, 50);
  d.shapeColor="blue"
}

function draw() {
  background(0);
  a.x= World.mouseX
  a.y= World.mouseY
  if(isTouching(c,a)){
    c.shapeColor="green"
    a.shapeColor="green"  
  
  }
else{
  a.shapeColor="red"
    b.shapeColor="red"
}
  drawSprites();
  bounceoff(c,d)
 
}
 function isTouching(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2 && object2.x-object1.x<object1.width/2+object2.width/2 &&
     object1.y-object2.y<object1.height/2+object2.height/2 && object2.y-object1.y<object1.height/2+object2.height/2){
    return true   
  }
  else{
    return false
  }
 }
 
  function bounceoff(object1,object2){
    if(object1.x-object2.x<object1.width/2+object2.width/2 && object2.x-object1.x<object1.width/2+object2.width/2) {
      object1.velocityX=object1.velocityX *-1  
      object2.velocityX=object2.velocityX *-1  
     }
     if(object1.y-object2.y<object1.width/2+object2.width/2 && object2.y-object1.y<object1.width/2+object2.width/2) {
      object1.velocityX=object1.velocityX *-1  
      object2.velocityX=object2.velocityX *-1  
     }
  }



