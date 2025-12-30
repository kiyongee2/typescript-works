
export default class B{
  //value - default 매개변수
  constructor(public value: number = 1){} //생성자
  
  method(): void{
    console.log(`value: ${this.value}`)
  }
}