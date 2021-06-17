class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png")
    this.trajectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    //super.display();
    var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var position = [this.body.position.x,this.body.position.y]
      this.trajectory.push(position)
    }
   
   // console.log(this.trajectory)
   for(var i  = 0; i < this.trajectory.length;i = i+1){
     image(this.image2,this.trajectory[i][0],this.trajectory[i][1])
   }
  }
}
