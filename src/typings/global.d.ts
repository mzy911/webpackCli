interface Person {
  name:string, 
  age:number
}


// 同名会类型合并
interface Foo{
  x:number
}
interface Foo{
  y:number
}
