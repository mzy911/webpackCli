// 1、交叉类型：&



// 2、联合类型：｜



// 3、类型保护

// 3.1 泛型
// let pet = getSmallPet()
// if ((<Fish>pet).swim){ // 使用断言判断类型
//   (<Fish>pet).swim()
// }
// else {
//   (<Bird>pet).fly()
// }

// 3.2 自定义保护类型
// function isFish(pet: Fish | Bird): pet is Fish {
//   return (<Fish>pet).swim !== undefined;
// }

// 3.3 typeof：判断简单类型(number、string、boolean、symbol)
function padLeft (value: string, padding: string | number){
  if (typeof padding === "number"){
    return Array(padding + 1).join(" ") + value
  }
  if (typeof padding === "string"){
    return padding + value
  }
  throw new Error(`Expected string or number, got '${padding}'.`)
}

// 3.4 instanceof：判断对象类型
interface Padder {
  getPaddingString(): string
}
class SpaceRepeatingPadder implements Padder{
  constructor (private numSpaces: number){ }
  getPaddingString (){
    return Array(this.numSpaces + 1).join(" ")
  }
}
class StringPadder implements Padder{
  constructor (private value: string){ }
  getPaddingString (){
    return this.value
  }
}
function getRandomPadder (){
  return Math.random() < 0.5 ?
    new SpaceRepeatingPadder(4) :
    new StringPadder("  ")
}
// 类型为SpaceRepeatingPadder | StringPadder
let padder: Padder = getRandomPadder()
if (padder instanceof SpaceRepeatingPadder){
  padder // 类型细化为'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder){
  padder // 类型细化为'StringPadder'
}



// 4、null、undefined、！
//   1、默认可以赋值给任何类型，null与 undefined是所有其它类型的一个有效值
//   2、使用了 --strictNullChecks，
//      2.1 可选参数会被自动地加上 | undefined:
//      2.2 此时不能赋值为 null
//      2.3 可以手动添加null：name: string | null
// 4.1 可选参数
function f (x: number, y?: number){
  return x + (y || 0)
}
f(1, undefined) // 可以为undefined，不能为null

// 4.2 可选参数
function fixed (name: string | null): string{
  function postfix (epithet: string){
    return name!.charAt(0) + ".  the " + epithet // ok
  }
  name = name || "Bob"
  return postfix("great")
}



// 5、类型别名：type
// 5.1 类型别名会给一个类型起个新名字
// 5.2 可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型
// 5.3 类型别名也可以是泛型
// 5.4 与交叉类型一起使用
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName (n: NameOrResolver): Name{
  if (typeof n === "string"){
    return n
  }
  else {
    return n()
  }
}



// 6、可辨识联合：
// 6.1 具有普通的单例类型属性— 可辨识的特征。
// 6.2 一个类型别名包含了那些类型的联合— 联合。
// 6.3 此属性上的类型保护
interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}
type Shape = Square | Rectangle | Circle;
function area (s: Shape){
  switch (s.kind){
  case "square": return s.size * s.size
  case "rectangle": return s.height * s.width
  case "circle": return Math.PI * s.radius ** 2
  }
}


// 7、索引类型：keyof
//    a、JavaScript通过 Object.keys()获取对象的所有属性键值，不会映射 undefined、null、never
//    b、typescript主要关注的是类型操作，通过 keyof 操作符可以获取对象中的所有键类型组成的联合类型

// 7.1 基础用法：遍历属性
type Person = {
  id: number;
  name: string;
  age: number;
};
type P1 = keyof Person; // 'id' | 'name' | 'age'


// 7.2 实际应用：获取属性值
type P2 = Person[keyof Person]; // number | string


// 7.3 约束范型参数的范围
type MyPick<T, K extends keyof T> = { [P in K]: T[P] };
type P3 = MyPick<Person, "id" | "age">


// 7.4 和映射类型组合实现某些功能
interface Info {
  name:string,
  age:number,
  sex:string
}

// 7.4.1 Readonly：只读内置关键字
// type Readonly<T> = {
//   readonly [P in keyof T]: T[P];
// }
const info1:Readonly<Info> = {
  name: "sss",
  age: 18,
  sex: "男" 
}

// 7.4.2 Partial：可选内置关键字
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// }
// const info2:Partial<Info> = {
//   name: "sss",
//   age: 18
// }

// 7.4.3 Pick：匹配部分对象
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
}
const info3:Pick<Info, "name"> = {
  name: "sss"
}
// console.log("info3", info3)
// function pick<T, K extends keyof T> (obj:T, keys:K[]):Pick<T, K>{
//   const res:any = {}
//   keys.map((key) => {
//     res[key] = obj[key]
//   })
//   return res
// }
// console.log("LaLa", pick(info1, ["name", "sex"]))


// 7.4.4 Record：对象转换
type Record<K extends string, T> = {
  [P in K]: T;
}
const infoRecord:Record<"nihao", Info> = {
  nihao: {
    name: "sss",
    age: 18,
    sex: "男" 
  }
}
console.log("infoRecord", infoRecord)
// function myObject<K extends string | number, T, U> (obj:Record<K, T>, f:(x:T)=>U):Record<K, U>{
//   const res:any = {}
//   for (const key in obj){
//     res[key] = f(obj[key])
//   }
//   return res
// }
// const names = {0: "hello", 1: "world", 2: "bye"}
// const lengths = myObject(names, (s) => s.length)
// console.log("lengths", lengths)


// 8、由映射类型进行推断：拆包
// function unproxify<T> (t: Proxify<T>): T{
//   let result = {} as T
//   for (const k in t){
//     result[k] = t[k].get()
//   }
//   return result
// }
// let originalProps = unproxify(proxyProps)


// 9、增加、移除 修饰符：readonly、?


// 10、unknown

// 11、extends

// 12、infer

// 13、Exclude

// 14、Extract



export default {}
