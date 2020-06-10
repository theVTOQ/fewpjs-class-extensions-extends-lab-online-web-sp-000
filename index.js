// Your code here
class Polygon{
  constructor(points){
    this.points = points;
  }

  get countSides(){
    return this.points.length;
  }

  get perimeter(){
    return points.reduce((sum, currentValue) => sum + currentValue, 0);
  }
}

class Triangle extends Polygon{
  get isValid(){
    const firstSideValid = points[0] + points[1] > points[2]
    const secondSideValid = points[0] + points[2] > points[1]
    const thirdSideValid = points[1] + points[2] > points[0]

    return firstSideValid && secondSideValid && thirdSideValid;
  }
}
