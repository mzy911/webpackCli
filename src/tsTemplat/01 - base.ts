// 布尔类型
let bool: boolean
bool = true


// 数值类型
let num:number
num = 3


// 数组类型
// let arr:string[]
// let arr:Array<string>
let arr:(string | number)[]
arr = ['a', 'b']


// 元组类型
let tuple:[string, number]
tuple = ['a',2]


// 枚举类型
enum Roles {
  SUPER,
  ADMIN=3,
  USER
}
// Roles[3] 'ADMIN'
// Roles['ADMIN'] 3


// any类型：值可以时任意类型
let vlaue: any
vlaue = 'a'
vlaue = 3



// void 类型：没指定返回值
let constText = (text:string):void => {
  console.log(text)
}


// null 和 undefined
// 1、是其它类型的子类型


// never类型：不存在返回值
const errorFunc = (): never => {
  throw new Error('error')
}
const infiniteFunc = (): never => {
  while(true){}
}


// 类型断言
// 1、 <string>target
// 2、target as string
const getLength = (target:string | number) => {
  if((target as string).length || (target as string).length === 0){
    return (target as string).length;
  }else {
    return target.toString().length
  }
}









export default {
  bool,
  num,
  arr,
  Roles
}
