
// ********************************  使用第三方库  ********************************  
// ********************************  使用第三方库  ********************************  
// ********************************  使用第三方库  ********************************  


// 1、CDN方式
//    1.1 html 中直接引入
//        <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
//        <script src="./varfile.js"></script>  // var foo = "小明"

//    1.2 声明全局变量：typings/global.d.ts 
//        declare function jQuery(param: string): void // 函数形式
//        declare let foo: string // 变量形式

//    1.3 直接使用
//        console.log("JQuery", jQuery("#box")) ;
//        console.log("ll", foo) // "小明"
   


// 2、import方式
//    2.1 安装对应的 types 库
//        pnpm i @types/jquery -D

//    2.2 声明 declare(防止红色警告线)：types/_missing.ts 
//        declare module "jquery"

//    2.3 直接使用
//        import jQuery from "jquery"
//        console.log("JQuery", jQuery("#box")) ;



// 3、自定义全局 "interface"
//    3.1 声明全局变量：typings/module.d.ts
//        interface Person {
//          name:string, 
//          age:number
//        }

//    3.2 typings/module.d.ts 内不使用 export、export default 导出
//        const per:Person = {
//          name: "上三",
//          age: 19
//        }
//        console.log("per", per)


//    3.3 typings/module.d.ts 内使用 export、export default 导出
//        3.3.1 修改 tscofig.json 的配置
//              "baseUrl": "./src", // 跟路径
//              "paths": {
//                 // 方式一：统一导出
//                 "*": ["typings/*"], // import sss from "文件夹名称"
//                 // 方式二：分别导出
//                 ":module": [
//                    "typings/module.d.ts" // import sss from ":module"
//                    ...
//                  ], 
//               },
//        3.3.2 使用
//              import {Foo, Person} from ":module"
//              const per:Person = {
//                name: "上三",
//                age: 19
//              }
//              console.log("per", per)


export default {}

