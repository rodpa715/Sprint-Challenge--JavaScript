// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakerClass{
    constructor(attribute){
        this.length = attribute.length
        this.width = attribute.width
        this.height = attribute.height
      }
    volume(){
        return this.length * this.width * this.height
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}

const cuboid2 = new CuboidMakerClass({
    length: 5, 
    width: 6,
    height: 6
  })
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); 
console.log(cuboid2.surfaceArea());
console.log("^ classes.js cuboid ^")

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass{
    constructor(attribute){
        super(attribute)
        this.edge = attribute.edge;
    }
    volume(){
        return Math.pow( this.edge, 3)
    }
    surfaceArea(){
        return  (6 * this.edge) * this.edge
    }
}

const cube = new CubeMaker({
    edge: 5, 
  })
console.log(cube.volume()); 
console.log(cube.surfaceArea());
console.log("^ classes.js cube ^")