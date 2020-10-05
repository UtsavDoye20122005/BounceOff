var a,b,c,d,e,f

function setup() {
  createCanvas(800,400);
  a= createSprite(400, 200, 50, 50);
  b= createSprite(350,150,50,45);
  c= createSprite(300,100,50,40);
  d= createSprite(250,50,50,35);
  e= createSprite(200,250,50,30);
  f= createSprite(150,150,50,25);


  b.velocityX= -3;
  f.velocityX = 3;
}

function draw() {
  background(255,255,255);  
  
  a.x=mouseX;
  a.y=mouseY;
  a.shapeColor="Black";
  b.shapeColor="Blue"
  
  BounceOff(b,f);


  isTouching(a,d);
    drawSprites();
  
}




