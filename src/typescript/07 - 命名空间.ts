
// 1、声明
//   1.1 在 .ts 文件内声明 namespace
//   1.2 内部使用 export 外部才能使用
// 对象形式：namespace
namespace GreetingLib {
  const age = 18
  export const name = "张三"
}


// 2、使用
// // / <reference path="./typescript/07 - 命名空间.ts"/>
const libName = GreetingLib.name
console.log("空间命名", libName)