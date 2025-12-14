//인터페이스
interface User{
  readonly id:number,
  name:string,
  age?:number  //선택 입력
}

//확장
interface Employee extends User{
  phone:string;
}

const user1:User = {id:1, name:"우영우", age:30}
const user2:User = {id:2, name:"장그래"}

const emp1:Employee = {id:1, name:"김대리", age:35, phone:"010-1234-5678"}

user2.name = "오상식";
console.log(user2);

console.log("사원1: ", emp1);
