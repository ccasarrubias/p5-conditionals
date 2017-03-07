var x=0
var speed = 51;
function setup(){
    createCanvas(600,400,50);
    
}

function draw(){
background (50);
    //i wrote this so bsackground changes to pink
    if(mouseIsPressed){
        background(255,0,200);
    }
    //makes outline white 
    stroke(255);
    strokeWeight(5);
    noFill();
    
    if(mouseY<150){
        fill(0,100,0);
    }
    else{
        noFill();
    }
    
    //a circle
    ellipse(x,200,100,100);

    //this code is to get the circle to move on its own
    if(x>width || x<0){   
    console.log("CIRCLE IS OFF THE SCREEN!!")
    speed= speed * -1;
        
    }
    x = x + speed;
    console.log(x);
   
}