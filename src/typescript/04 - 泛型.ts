// *******************   1、泛型  **************************
function esayIdentity<T> (arg: T): T{
  return arg
}
// 泛型形式调用
let output1 = esayIdentity<string>("myString") 
// 普通形式调用
let output2 = esayIdentity("myString")
console.log("output1", output1)
console.log("output2", output2)



// *******************   2、泛型类  **************************
interface GenericInterface<U> {
  value: U
  getIdentity: () => U
}
class IdentityClass<T> implements GenericInterface<T>{
  value: T
  constructor (value: T){
    this.value = value
  }
  getIdentity (): T{
    return this.value
  }
}
// 传入 number
const myNumberClass = new IdentityClass<Number>(68)
console.log(myNumberClass.getIdentity()) 
// 传入 string
const myStringClass = new IdentityClass<string>("Semlinker!")
console.log(myStringClass.getIdentity()) 



// *******************   3、泛型类型  **************************
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



// *******************   4、泛型约束  **************************
// 4.1、约束参数
interface Lengthwise {
  length: number;
}
function constraintIdentity<T extends Lengthwise> (arg: T): T{
  console.log("参数长度：", arg.length) 
  return arg
}
// constraintIdentity(123) // 报错
constraintIdentity("constraintIdentity")



// 4.2、检查对象上的键是否存在
interface Person {
  name: string;
  age: number;
  location: string;
}
type K1 = keyof Person; // "name" | "age" | "location"
type K2 = keyof Person[]; // number | "length" | "push" | "concat" | ...
type K3 = keyof { [x: string]: Person }; // string | number



// 4.3、约束类
class Stack<T>{
  private data: T[] = []
  push (item:T){
    return this.data.push(item)
  }
  pop ():T | undefined{
    return this.data.pop()
  }
}
const s1 = new Stack<number>()
// s1.push("li") // 报错只能 push number
s1.push(18)



// 4.4、实战约束 API
import axios from "axios"
interface API {
  "/book/detail": {
      id: number,
  },
  "/book/comment": {
      id: number
      comment: string
  }
}

function request<T extends keyof API> (url: T, obj: API[T]){
  return axios.post(url, obj)
}
// request("/book/comment", {
//   id: 1,
//   comment: "非常棒！"
// })



export default {}