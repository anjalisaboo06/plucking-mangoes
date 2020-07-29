class Mango{
constructor(x, y, r){
var options={

isStatic:true,
restitution:0,
friction:1
}
this.image = loadImage("Plucking mangoes/mango.png");
this.x = x;
this.y=y;
this.radius=r;
this.body=Bodies.circle(this.x, this.y, this.radius, options);
World.add(world, this.body);
}

display(){
    var pos =this.body.position;
        
    push();
    translate(pos.x, pos.y);
    ////rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
   image(this.image,0, 0, this.radius, this.radius);

    //rect(0, 0, this.width, this.height);
    pop();
  }



}






