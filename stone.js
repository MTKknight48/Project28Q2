class Stone extends BaseClass {
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
      super(x,y,50,50);
      this.image = loadImage("images/stone.png");
    }
  
    display() {
     
      super.display();
    }
  }