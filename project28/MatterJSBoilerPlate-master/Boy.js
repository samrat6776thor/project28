class Boy{
    constructor(bodyA,pointB){
      var options = {
          bodyA:bodyA,
          pointB:pointB,
          stiffness:0.04,
          lenght:10
      }
      this.boy = loadImage("project28pics/boy.png")
      this.pointB = pointB
      this.boy = Constraint.create(options)
      World.add(world,this.boy)
    }

    fly(){
      this.boy.bodyA = null
    }

    attach(body){
      this.boy.bodyA = body
    }
    display(){
        image(this.boy,200,20)
        if(this.boy.bodyA){
            var pointA = this.boy.bodyA.position
            var pointB = this.pointB
            push()

            stroke(48,22,8)
            if(pointA.x < 220){
                strokeWheight(7)
                line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
                line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3)
            }

            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            }
            pop();
        }
    }
}