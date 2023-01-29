// 1、泛型
function esayIdentity<T> (arg: T): T{
  return arg
}
// 泛型形式调用
let output1 = esayIdentity<string>("myString") 
// 普通形式调用
let output2 = esayIdentity("myString")
console.log("output1", output1)
console.log("output2", output2)



// 2、泛型变量：接收类型参数T 和 参数arg
function variateIdentity<T> (arg:T[]): T[]{
  console.log("泛型变量", arg)  
  return arg
}
variateIdentity(["a", "b"])
variateIdentity([1, "2"])



// 3、泛型类型：
// 3.1 使用时传入参数类型
// 3.2 把泛型参数当作整个接口的一个参数
interface GenericIdentityFn<T> {
  (arg: T): T;
}
function identity<T> (arg: T): T{
  return arg
}
let myIdentity: GenericIdentityFn<number> = identity
console.log("泛型类型", myIdentity(123))



// 4、泛型类
// class GenericNumber<T>{
//   zeroValue: T
//   add: (x: T, y: T) => T
// }
// let myGenericNumber = new GenericNumber<number>()
// myGenericNumber.zeroValue = 0
// myGenericNumber.add = function (x, y){ return x + y }



// 5、泛型约束
// 定义接口，约束泛型的类型
interface Lengthwise {
  length: number;
}
function constraintIdentity<T extends Lengthwise> (arg: T): T{
  console.log("参数长度：", arg.length) // Now we know it has a .length property, so no more error
  return arg
}
// 数字会报错
// constraintIdentity(123)

// 字符串具有length属性，不会报错
constraintIdentity("constraintIdentity")



// 6、泛型约束
// 6.1 介绍 keyof
interface Person {
  name:string,
  age:number
}
type K1 = keyof Person // "name" | "age"
type K2 = keyof Person[] // number | "length" | "push" | "concat" | ...
type K3 = {[x:string]:Person} // string | number

const k1:K1 = "name"
const k2:K2 = "length"
const k3:K3 = {
  prop: {
    name: "张三",
    age: 12
  }
}
console.log("k2", k2)
console.log("k3", k3)



// 6.2 介绍 类型参数
function getProperty<T, K extends keyof T> (obj: T, key: K){
  return obj[key]
}
let x = {a: 1, b: 2, c: 3, d: 4}
getProperty(x, "a") // okay
// getProperty(x, "m"); // error:



// 7、在泛型里使用类类型
// class BeeKeeper{
//   hasMask: string
// }
// class ZooKeeper{
//   nametag: string
// }
// class Animal{
//   numLegs: number
// }
// class Bee extends Animal{
//   keeper: BeeKeeper
// }
// class Lion extends Animal{
//   keeper: ZooKeeper
// }
// function createInstance<A extends Animal> (c: new () => A): A{
//   return new c()
// }

// createInstance(Lion).keeper.nametag // typechecks!
// createInstance(Bee).keeper.hasMask // typechecks!
// let sam = new BeeKeeper("Sammy the Python")


export default {}