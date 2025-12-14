
abstract class Animal {
  constructor(public name?: string, public age?: number) {}
  abstract cry(): string
}

class Cat extends Animal {
  cry(): string {
    return '야옹~'
  }
}

class Dog extends Animal{
  cry(){return "멍멍~"}
}

//실행
// let cat = new Cat('냥이', 3)
// console.log(cat.cry())

let animals: Animal[] = [new Cat("야옹이", 2), new Dog('멍멍이', 3)]
let sounds = animals.map(ani => console.log(ani.cry()));