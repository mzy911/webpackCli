import {Foo, Person} from ":module"

// 1、全局库
//    1.1 直接引入 CND, 需要自定义类型
//    1.2 typings/global.d.ts 
//    1.3 定义第三方插件变量
//        console.log("JQuery", jQuery("#box")) ; // index.html 中引入的全局库
//        console.log("小明", foo) // index.html 中引入的自定义js文件



// 2、自定义模块库
//    2.1 引入自定义模块，import sss from ":module"
//    2.2 定义文件夹：typings/module.d.ts
//    2.3 修改 tscofig.json 的配置
//        "baseUrl": "./src", // 跟路径
//        "paths": {
//           // 统一导出
//           "*": ["typings/*"], // import sss from "文件夹名称"
//           // 分别导出
//           ":module": [
//              "typings/module.d.ts" // import sss from ":module"
//              ...
//            ], 
//        },
// const per:Person = {
//   name: "上三",
//   age: 19
// }
// const detail:Foo = {
//   x: 3,
//   y: 8
// }
// console.log("fooModule", detail)

// const reverseModule:reverse = (s:number) => {
//   console.log("s", s)
// }



export default {}

