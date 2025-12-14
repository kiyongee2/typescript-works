
// class Dog{
//   bark(){
//     return "멍멍~"
//   }
// }

// class Cat{
//   meow(){
//     return "야옹~"
//   }
// }

// // let dog = new Dog();
// // dog.bark();

// //union type 활용
// function cry(animal:Cat | Dog){
//   if(animal instanceof Dog){
//     return animal.bark();
//   }else{
//     return animal.meow();
//   }
// }

// const dog = new Dog();
// const cat = new Cat();

// console.log(cry(dog));
// console.log(cry(cat));

// //접근 제한자
// class Person{
//   private name:string;

//   //생성자
//   constructor(name:string){
//     this.name = name;
//   }

//   greet(){
//     console.log(`Hello, ${this.name}`);
    
//   }
// }

// let person = new Person("우영우");
// //person.name;  //접근 불가
// person.greet();

// //사람을 상속받은 학생
// class Car{
//   protected model:string;
//   protected year:number;

//   constructor(model:string, year:number){
//     this.model = model;
//     this.year = year;
//   }

//   showInfo(){
//     console.log(`모델: ${this.model}, 연식: ${this.year}`);
    
//   }
// }

// //차를 상속받은 전기차
// class EV extends Car{
//   private battery:number;

//   constructor(model:string, year:number, battery:number){
//     super(model, year);
//     this.battery = battery;
//   }

//   charge(amount:number){
//     this.battery += amount;
//     if(this.battery > 100)
//       this.battery = 100;
//     console.log(`배터리 잔량: ${this.battery}%`);
    
//   }
// }

// const ev = new EV("IONIC6", 2024, 70)
// ev.showInfo();
// ev.charge(50);