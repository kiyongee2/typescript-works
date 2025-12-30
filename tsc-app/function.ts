
function add(a:number, b:number):number{ //반환 자료형
  return a + b;
}

const result = add(2, 3);
console.log(result);


//매개변수와 반환 자료형을 type으로 할당
/*type Calculator = (a:number, b:number)=>number;

const add:Calculator = (a, b) => a + b;
const times:Calculator = (a, b) => a * b;
const divide:Calculator = (a, b) => {
  if(b === 0) throw new Error('0으로 나눌수 없음');
  return a / b;
}

const result = add(2, 3);
const result2 = divide(2, 5);

console.log(result);
console.log(result2);*/

//하나의 변수명 타입 2개 이상
function printLength(value:string | number){
  if(typeof(value) === 'string'){
    console.log(value);
    console.log("글자수: ", value.length);
  }
}

printLength("World");
