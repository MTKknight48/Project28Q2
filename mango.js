class Treee extends BaseClass {
    constructor(x, y){
        var options={
            isStatic: true,
            restitution:0,
            friction:1
        }
      super(x,y,50,50);
      this.image = loadImage("images/mango.png");
      this.tree = loadImage("images/tree.png");
     
    }
    display(){

      image(this.tree,600,80,600,600);
   //   image(this.image,200,200,300,300);
    }
  };