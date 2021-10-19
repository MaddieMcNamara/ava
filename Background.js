

class Background {
  constructor(_xPos,_yPos,_rot,_size,_speed) {
  this.xPos = _xPos;
  this.yPos = _yPos;
  this.rotation = _rot; 
  this.size = _size;
  this.speed = _speed;
  }
  
  display() {

  noStroke();
  push();
  translate(this.xPos,this.yPos);
    rotate(this.rot);

 
  textSize(80)
  fill(20);
  text('Hurry!', 5, height * .05, height * 0.05);

  pop();
  }
   
 move(){
   this.ypos += this.speed
   this.rot = this.rot +3;
  if (this.yPos <= height){
  this.yPos -= 0.8;
  } else if (this.yPos > height) {
  this.yPos = + 3;
}
}
}