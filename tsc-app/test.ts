let a:number = 10;
let msg:string = "I love you";
let season:string[] = ["spring", "summber", "autumn", "winter"]

console.log(a);
console.log(msg);
console.log(season);

// 비구조화 할당
let array = [1, 2, 3, 4]
let [head, ...rest] = array

console.log(head);
console.log(...rest);

