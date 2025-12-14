/*
function add(a:number, b:number):number{ //반환 자료형
  return a + b;
}

const result = add(2, 3);
console.log(result);
*/
var add = function (a, b) { return a + b; };
var times = function (a, b) { return a * b; };
var divide = function (a, b) {
    if (b === 0)
        throw new Error('0으로 나눌수 없음');
    return a / b;
};
var result = add(2, 3);
var result2 = divide(2, 5);
console.log(result);
console.log(result2);
//하나의 변수명 타입 2개 이상
function printLength(value) {
    if (typeof (value) === 'string') {
        console.log(value.length);
    }
}
printLength("World");
