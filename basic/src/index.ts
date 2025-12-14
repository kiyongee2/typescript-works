//import { makePerson } from "./utils/makePerson";
import { IPerson } from "./person/IPerson"
import Person, {makePerson} from "./person/Person"
import Chance from 'chance'
import * as R from 'ramda'
import {address} from "./utils/rest"
import B from "./example/B"
import {C} from "./example/statics"
import { Calculator } from "./example/method-chain"
import {range} from "./utils/range"
import {fold} from "./utils/fold"
import {filter} from "./utils/filter"

//IPerson
const testMakePerson = (): void => {
  let jane: IPerson = makePerson('Jane')
  let jack: IPerson = makePerson('Jack')
  console.log(jane, jack)
}
// testMakePerson()

//chance
const chance = new Chance()
let persons: IPerson[] = R.range(0, 2)
  .map((n: number) => new Person(chance.name(), chance.age()))
// console.log(persons)

//rest 연산자
const {country, city, ...detail} = address
console.log(`국가: ${country}`)
console.log(`수도: ${city}`)
console.log(detail)

//class B
let b1: B = new B()
b1.method()

let b2: B = new B(2)
b2.method()

//class C
console.log(C.whoAreYou())

//method-chain
// let calc = new Calculator()
// let result = calc.add(1).add(2).multiply(3).value
// console.log(result)

//range()
// let numbers: number[] = range(1, 9 + 1)
// console.log(numbers)

//fold()
//입력 데이터 생성
// let numbers: number[] = range(1, 100 + 1)
// //입력 데이터 가공
// let result = fold(numbers, (result, value) => result+value, 0)
// console.log(result)

//filter()
// const isOdd = (n: number): boolean => n % 2 != 0
// let result = fold(
//   filter(numbers, isOdd), 
//   (result, value) => result + value, 0)
// console.log(result)

//reduce() <- fold() : 누적합
let reduceSum: number = range(1, 100+1)
  .reduce((result: number, value: number) => result + value, 0)
console.log(reduceSum)

//filter() - 내장 메서드
const array: number[] = range(1, 10 + 1)

let odds: number[] = array.filter((val) => val % 2 != 0)
let evens: number[] = array.filter((val) => val % 2 == 0)
console.log(odds, evens)

//map()
let squares: number[] = range(1, 5 + 1)
    .map((val: number) => val * val)
console.log(squares)

