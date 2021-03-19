//Create variables here
var database;
var dogImage;
var happydogImage;
var foodS;
var dog;

function preload(){
  dogImage = loadImage("images/dogImg.png");
  happydogImage=loadImage("images/dogImg1.png");
  milkImage=loadImage("images/milk.png");
  livingroomImage=loadImage("images/Living Room.png");
  runningLeftImage=loadImage("images/runningLeft.png");
}


function setup() {
	createCanvas(500,500);
  database=firebase.database();

  dog=createSprite(250,250);
  dog.addImage(dogImage);

  var foodStockRef = database.ref('foodStock');
  foodStockRef.on("value",readStock);
  
}


function draw() { 
  background(87);
  
 
     {
        writeStock(foodS);
        dog.addImage(happydogImage);
    }
     
    
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock (x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  
  database.ref('/').update({
    'foodStock': x
  })
}
fedTime=database.ref('FeedTime');
        fedTime.on("value",function(data)){
            lastFed=data.val();
            feed=createButton("feed the dog")
            feed.position(700,95);
            feed.mousePressed(feedDog);

            addFood=createButton("Add Food")
            addFood.position(800,95);
            addFood.mousePressed(addFoods);
      }
