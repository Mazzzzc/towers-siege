class Polygon {
    constructor (x,y,r) {
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
  
        this.body = Bodies.circle(x,y,r,options);
        //this.width=width;
        //this.height=height;
        this.r=r;
        this.image=loadImage("163-1631819_hexagon-clipart-yellow-hexagon-illustration-png-download (1).png");
        World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      //ellispeMode(RADIUS);
      //fill("yellow");
      //stroke("yellow");
      //ellispe(pos.x, pos.y);
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(polyImage,0,0,40,40);
      pop();
    }
  }