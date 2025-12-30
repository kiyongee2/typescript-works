//import { makePerson } from "./utils/makePerson";
import { IPerson } from "./person/IPerson"
import Person, {makePerson} from "./person/Person"
import Chance from 'chance'
import * as R from 'ramda'
import {address} from "./utils/rest"
import B from "./classes/B"
import {C} from "./classes/statics"
import { Calculator } from "./classes/method-chain"
import {range} from "./person/range"
import {fold} from "./utils/fold"
import {filter} from "./utils/filter"

//IPerson
// const testMakePerson = (): void => {
//   let jane: IPerson = makePerson('Jane')
//   let jack: IPerson = makePerson('Jack')
//   console.log(jane, jack)
// }
// testMakePerson()

//range()
// let numbers: number[] = range(1, 9 + 1)
// console.log(numbers)

//chance - 이름과 나이가 랜덤하게 반환
// const chance = new Chance()
// let persons: IPerson[] = R.range(0, 2)
//   .map((n: number) => new Person(chance.name(), chance.age()))
// console.log(persons)

//class B
// let b1: B = new B()
// b1.method()

// let b2: B = new B(2)
// b2.method()

// let b3: B = new B(3)
// b3.method()

//class C - static 메서드(클래스 이름으로 직접 접근)
// console.log(C.whoAreYou())

//method-chain
// let calc = new Calculator()
// let result = calc.add(1).add(2).multiply(3).value
// console.log(result) //(1+2)*3

//rest 연산자
// const {country, city, ...detail} = address
// console.log(`국가: ${country}`)
// console.log(`수도: ${city}`)
// console.log(detail)

//map()
let squares: number[] = range(1, 5 + 1)
    .map((val: number) => val * val)
console.log(squares)

//filter() - 내장 메서드
const array: number[] = range(1, 10 + 1)

let odds: number[] = array.filter((val) => val % 2 != 0)
let evens: number[] = array.filter((val) => val % 2 == 0)
console.log(odds, evens)

//reduce() - 1부터 100까지의 합계
let reduceSum: number = range(1, 100+1)
  .reduce((result: number, value: number) => result + value, 0)
console.log(reduceSum)
 
//fold() - 1부터 100까지의 합계
let numbers: number[] = range(1, 100 + 1)
//입력 데이터 가공
let result1 = fold(numbers, (result, value) => result+value, 0)
console.log(result1)

//filter() - 1부터 100까지의 홀수의 합계
const isOdd = (n: number): boolean => n % 2 != 0
let result2 = fold(
  filter(numbers, isOdd), 
  (result, value) => result + value, 0)
console.log(result2)





