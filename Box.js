class Box{

    constructor(x,y,width,height){
    
    var option = {
    
    restitution:0.8,
    friction:0.7,
    density:1
    
    }
    
    this.body = Bodies.rectangle(x,y,width, height,option);
    this.width= width;
    this.height=height;
    this.Visibility= 255;
    World.add(world,this.body)
    
  
    
    
    }
    
    
    display(){
        if(this.body.speed>3){
            push();
            rectMode(CENTER)
            translate(this.body.position.x,this.body.position.y)
            rotate(this.body.angle)
            rect(0,0,this.width,this.height)
            pop();
        }
        else{
            World.remove(world,this.body )
        }
   
    
    }
    
    
    
    
    
    
    
    
    
    
    
    }