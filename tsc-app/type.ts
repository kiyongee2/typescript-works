
type Point = {
  x:number,
  y:number
}

const p1:Point = {x:10, y:20};

console.log(p1.x, p1.y);

type Point2 = Point & {z:number}

const p3:Point2 = {x:10, y:20, z:30}

//튜플
let member:[string, number];
member = ['우영우', 40];
console.log(member);


