class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    
    this.image = loadImage("sprites/bird.png");
    this.smokeImg=loadImage("sprites/smoke.png")
    //empty array to store the bird position
    //array=special data type which can hold multiple values in a single variable,the elements could be of same type or different types or could be array themselves
    //a3=[[1,2],[3,4]]=array inside arrays,to access 3 = a3[1][0],array always starts with an index of zero and the last element is at a position which is length -1

    this.trajectory=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    //to reduce the smoke check the x velocity and the x position of the bird
    if(this.body.velocity.x>10 && this.body.position.x>200 ){
     //store the position of the bird 
     var position=[this.body.position.x,this.body.position.y];
     //store the positions inside the trajectory array(array inside array)
     this.trajectory.push(position);
    }
   //display the smoke on the birds position
    for(var i=0;i<this.trajectory.length;i=i+1){
      image(this.smokeImg,this.trajectory[i][0],this.trajectory[i][1])



    }
  }
}
