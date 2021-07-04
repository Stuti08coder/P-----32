const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
   

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg){
    background(backgroundImg)
}

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    console.log(response)

    //change the data in JSON format
    var response2 = await response.json()
console.log(response2)

    // write code slice the datetime
    var datetime = response2.datetime
    console.log(datetime)


    var hour = datetime.slice(11,13)
    console.log(hour)
    // add conditions to change the background images from sunrise to sunset
 if(hour>05 && hour<07){
     backgroundImg = loadImage("sunrise1.png")
}
if(hour>07 && hour<09){
    backgroundImg = loadImage("sunrise2.png")
}
if(hour>11 && hour<13){
    backgroundImg = loadImage("sunrise3.png")
}
if(hour>13 && hour<15){
    backgroundImg = loadImage("sunrise4.png")
}
if(hour>15 && hour<17){
backgroundImg = loadImage("sunrise5.png")
}
if(hour>17 && hour<19){
    backgroundImg = loadImage("sunrise6.png")
}
if(hour>19 && hour<21){
    backgroundImg = loadImage("sunset7.png")
}
if(hour>21 && hour<23){
    backgroundImg = loadImage("sunset8.png")
}
if(hour>23 && hour<01){
    backgroundImg = loadImage("sunset10.png")
}
if(hour>01 && hour<03){
    backgroundImg = loadImage("sunset11.png")
}
if(hour>03 && hour<05){
    backgroundImg = loadImage("sunset12.png")
}








}
