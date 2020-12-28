class Box{
    constructor(x,y,w,h){
        var options={
            restitution:0.8
          }
          this.body=Bodies.rectangle(x,y,w,h,options);
          this.width=w
          this.height=h
          World.add(myworld,this.body)
    }
    display(){
        this.angle=this.body.angle
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}