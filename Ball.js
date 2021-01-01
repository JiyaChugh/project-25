class Ball{
    constructor(x,y,width,height){
        var g_options={
            isStatic:false,
            restitution:0.3,
            friction:1.5,
            density:1.2
        }
         
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,g_options);
        this.image=loadImage("Ball.png");

        World.add(world,this.body);
        }

        display(){
            var pos=this.body.position;
            push();
            translate(pos.x,pos.y);
            ellipseMode(CENTER);
            fill("red");
            stroke("red");
            strokeWeight(2);
            imageMode(CENTER);
            image(this.image,0,0,this.width,this.height);
            pop();
        }
	}