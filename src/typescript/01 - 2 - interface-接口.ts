// 1、对象类型
interface Card {
  suit: string;
  card: number;
}
interface Person {
  name:string, // 必须属性
  readonly id:number, // 只读属性
  age?:number, // 可选属性
  [propName:string]:any, // 任意属性
  createCar?(name:string, age:number):void, // 普通函数
  createCarRow?(this:Person):()=>Card // 带有闭包的箭头函数
}
let per:Person = {
  id: 82374823,
  name: "张三",
  age: 18,
  like: "乒乓",
  car: "兰博基尼"
}
// console.log("per", per)



// 2、数组
// 2.1 注解方式
let listArray1: (number | string)[] = [1, 2, 3]

// 2.2 泛型方式
let listArray2: Array<number | string> = [1, "2", 3]

// 2.3 接口方式
interface ListArray3 {
  [index:number]:number | string
}

// 2.4、类数组
interface Args {
  [index:number]:any,
  length:number,
  callee:Function
}



// 3、函数
// 3.1 注解方式
function test (source: string, subString: string): boolean{
  let result = source.search(subString)
  return result > -1
}

// 3.2 interface 方式1
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = function (source, subString){
  let result = source.search(subString)
  return result > -1
}

// 3.3  interface 方式2
interface PersonDetail {
  name? :string,
  age? :number,
  detail?(name:string, age:number):string, // 普通函数
}



// 4、继承：extends
interface Shape {
  color: string;
}
interface PenStroke {
  penWidth: number;
}
interface Square extends Shape, PenStroke {
  sideLength: number;
}
// 此处使用断言
let square = <Square>{}
square.color = "blue"
square.sideLength = 10
console.log("square", square)



// 5、可索引的类型
// class Animal1{
//   name: string
// }
// class Dog extends Animal1{
//   breed: number
// }
// // 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// interface NotOkay {
//   [x: string]: Animal1;
//   [x: number]: Dog;
// }



// 6、类类型：implements - 工具、器具、用具、 家具、服装、装备、手段
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date):void;
}
class Clock implements ClockInterface{
  currentTime = new Date()
  setTime (d: Date){
    this.currentTime = d
  }
  constructor (h: number, m: number){ }
}



export default {}