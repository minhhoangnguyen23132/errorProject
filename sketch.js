var boat, boat_sailing,edges;
var seaGroundImg;
var ground;
function preload(){
boat=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaGroundImg=loadAnimation("sea.png")
}

function setup(){
  createCanvas(400,400);
  boat=createSprite(200,200,400,200);
  boat.addAnimation("saliing",boat_sailing)
  seaGroundImg=createSprite(400,400,400);
  seaGroundImg.addImage("seaGroundImg",);
  seaGroundImg.x=seaGroundImg.width/2
  //adding scale to the boat.
  boat.scale=0.9;
  boat.x=90
} 

function draw() {
  background("blue");
  seaGroundImg.addImage(seaGroundImg);
  seaGroundImg.velocityX=-2;
  console.log(seaGroundImg.x)
  if(seaGroundImg.x<0){
    seaGroundImg.x=seaGroundImg.width/2;
  }
}




