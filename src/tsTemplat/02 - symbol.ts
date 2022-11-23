// 1、每个Symbol返回唯一值
// const s1 = Symbol()
// const s2 = Symbol()
// console.log(s1 === s2);


// 2、描述符相同，返回的值也不同
// const s3 = Symbol('a')
// const s4 = Symbol('a')
// console.log(s3 === s4);



// 3、可以作为属性名使用
// const s5 = Symbol('s5')
// const obj = {
//   [s5] : 's5的属性值'
// }
// console.log(obj[s5]); // s5的属性值



// 4、Symbol的遍历
// for in : 获取不到Symbol
// Oblect.getOwnPropertyNames : 获取不到Symbol
// JSON.stringify(): 获取不到Symbol
// Oblect.getOwnPropertySymbols : 可以获取Symbol
// Oblect.ownKeys : 可以获取Symbol
// const newObj = {
//   [s5] : 's5的属性值',
//   name:"张三",
//   age:18
// }


// 5、静态方法
// Symbol.for()：全局搜索
// Symbol.keyFor()：获取描述符
// const s3 = Symbol.for('a')
// const s4 = Symbol.for('a')
// console.log(s3 === s4); // true
// console.log(Symbol.keyFor(s3)); // 'a'



// 6、内置Symbol方法

// 6.1 Symbol.hasInstance()
// const obj = {
//   [Symbol.hasInstance](otherObj:any){
//     console.log('otherObj',otherObj);
//   }
// }
// console.log(
//   {a:'a'} instanceof <any>obj
// );


// 6.2 Symbol.isConcatSpreadable()
// const arr = [1, 2]
// arr[Symbol.isConcatSpreadable] = false // 禁止concat的数组平铺
// arr.concat([3, 4])
// console.log(arr);



// 6.3 Symbol.species()
// class C extends Array{
//   constructor(...args:any){
//     super(...args)
//   }

//   // 1、不设置
//   //    es6 中C和Array是衍生对象的构造函数
//   //    ts 中C和Array是衍生对象的构造函数
//   // 2、设置
//   //    ts 中C不是衍生对象的构造函数
//   //    ts 中Array是衍生对象的构造函数
//   static get [Symbol.species]() {
//     return Array
//   }

//   getName(){
//     return 'aa'
//   }
// }
// const c = new C(1, 2, 3)
// var mapped = c.map(x => x * x); // 衍生对象
// console.log(mapped instanceof C ); // false
// console.log(mapped instanceof Array ); // true


// 6.4 Symbol.match()
let obj3 = {
  [Symbol.match](str:string){
    console.log('str', str.length);
  }
}
'abcd'.match(<RegExp>obj3)


// 6.5 
// Symbol.replace()
// Symbol.search()
// Symbol.split()


// 6.6 Symbol.toPrimitive() ：被转为哪种原始类型的值
let obj4:unknown = {
  [Symbol.toPrimitive](type:string){
    console.log('type', type);
  }
}
// const res = (obj4 as number)++ // number
const res =  `abc${obj4}` // string



// 6.7 Symbol.toStringTag() ：调用toString方式时执行
let obj5 = {
 get [Symbol.toStringTag](){
    return 'lala'  
  }
  // [Symbol.toStringTag]:'lala'
}
console.log(obj5.toString()); // [object lala]



// 6.8 Symbol.unscopables() 






















export default{}
