class Stone{
    constructor(x, y, r){
        var options = {
    isStatic:false,
    restitution: 0,
    friction: 1,
    density: 1.2
        }
       
    this.radius = r;
    this.x = x;
    this.y = y;
    this.image = loadImage("Plucking mangoes/stone.png");
    this.body = Bodies.circle(this.x, this.y, this.radius, options);
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
    };