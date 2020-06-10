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
