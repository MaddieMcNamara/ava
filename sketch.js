let mic;
let count = 0;
let myMap = 0;
let triRot = 45;
let circlechange = false;
let tiktok = [];


var xPos = 0;


 
function setup() { 
  let cnv = createCanvas(400, 400);
  angleMode(DEGREES);
  
  for(let i = 0; i <= 10; i++){
    
  tiktok[i]= new Background(random(height), random(width), random(360), random(10)/10, random(1,20)/10);
  


    
  }
  
cnv.mousePressed(userStartAudio);
    


  
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();





}

function draw() {
  
   if (count<360){
   count++
 }else if (count==360)(count=0);
  

  push();
    background(xPos, 90,);
  
  for(let i = 0; i <= 3; i++){
    
tiktok[1].display();

    
  tiktok[1].move();

  }
   
  
  xPos = xPos + 2
  
  pop();

  
  clockFace(2,2,.3); //xpos, ypos, rot
  clockBase(1,3,.1); //xpos, ypos, rot
  secondFace(2,2,.3);//xpos, ypos, rot
  eyeLeft(5,5,.2); //xpos, ypos, rot
  eyeRight(5,5,.2); //xpos, ypos, rot
  eyeBalls(5,5,.2);
  clockNose(4,3,.3); //xpos, ypos, rot
  clockNum(1,3,.3); //xpos, ypos, rot
  clockMouth(2,3,.3); //xpos, ypos, rot
  

  
  
  rect(width * 0.75, height * 0.05, width * 0.2, height * 0.07)
  
  
    push();
  fill('white');
  
  
  text('Snooze', 293, 23, 100)
  pop();
  
  // console.log('my mouseX is: ' + mouseX);
  // console.log('my mouseY is: ' + mouseY);
  
  
  myMap = map(mouseX, 1, width, 0, 3);
  
}
  
 //myMap = map(mic.getLevel(), 0, .5, 0, 20);
  

function mousePressed(){
  
  if(mouseX > width * 0.75 &&
  mouseX < width * 0.95 &&
  mouseY > height * 0.04 &&
  mouseY < height * 0.12) {
  console.log("Running Late!");
}

}



function clockBase(xpos,ypos,rot){

push();
  beginShape();
  fill(150);
  rect(width * 0.25, height * 0.75, width * 0.5, height * 0.23);
  fill(180);
  rect(width * 0.25, height * 0.75, width * 0.5, height * 0.18);
  fill(150);
  rect(width * 0.4, height * 0.68, width * 0.18, height * 0.18);
   endShape();

 pop();  

}

function clockFace(xpos,ypos,rot){


push();
  fill(0, 102, 153, 90);
  
  translate(width/2,height/2);
  rotate(count);
  translate(width*-.2,height*-.2);
  circle(width * 0.5, height * 0.45, width * 0.62);
  circle(width * 0.5, height * 0.45, width * 0.7);
  strokeWeight(3);
pop();
}


function secondFace(){
push();
  
  fill(180);

  
  circle(width * 0.5, height * 0.45, width * 0.67);
pop();
  
  
  
  
  push();
  
fill(239);
  circle(width * 0.5, height * 0.45, width * 0.6);

pop();
  
  
    

  
  fill('red');
  
    ellipse(140, 185, 50, 30)
  ellipse(255, 185, 50, 30)
  
}

function clockMouth(){
  

 
 
rect(186, 220, 30, 40 );
  

  
  
   push();
  fill(400);
  
 rect(186, 220, 30, 7);

  
  pop();
}
  
function clockNose(xpos,ypos,rot){
  
//beginShape();
  
push();
  fill(30);
  circle(width * 0.5, height * 0.45, width * 0.02);
pop();
  
  line(200, 180, mouseX, mouseY);
  line(200, 180, mouseY, mouseX);
  

    push();


  
//endShape();
  
}



  
  



function eyeLeft(){
  
   ellipseMode(RADIUS);
 fill(255);

 ellipse(width * 0.37, height * 0.35, width * 0.05, height * 0.05);
//Outer white ellipse

}



  function eyeRight(){
  
 ellipseMode(RADIUS);
  
fill(255);
ellipse(width * 0.62, height * 0.35, width * 0.05, height * 0.05); // Outer white ellipse


}




function eyeBalls(){
ellipseMode(CENTER);
fill(100);
ellipse(width * 0.62, height * 0.35, width * 0.04, height * 0.04); // Inner gray ellipse
  
  
  
 ellipseMode(CENTER);

 fill(100);
 ellipse(width * 0.37, height * 0.35, width * 0.04, height * 0.04);   
//Inner gray ellipse
  
//     let x1 = map(mouseX, 0, width, 148, 95, true);
//   let x2 = map(mouseX, 0, width, 248, 100, true);
//   let y1 = map(mouseY,0, width, 140, 100, true);
//   let y2 = map(mouseY,0, width, 140, 100, true);
//   fill('#000000')
//   ellipse (x1, y1, 15, 15);
//   ellipse (x2, y2, 15, 15);
  
}



  

  
  function clockNum(){
  
fill('#222222');
    textSize(22);
    
text('12', 200, 87);
  
text('1', 250, 102); 
  
text('2', 287, 142);
  
text('3', 300, 195);
  
text('4', 285, 240);
  
text('5', 250, 280);
  
text('6', 200, 290); 
  
text('7', 150, 278);

text('8', 115, 240);
    
text('9', 100, 195);
    
text('10', 110, 142);    

text('11', 145, 102); 

  



  
  }