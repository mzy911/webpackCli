/**
 * Babel的作用
 * 1、默认情况下 Babel 只会做语法转换(let、const、class、箭头函数等)
 * 2、不做新 api 的转换（分为两类）、需要借助 polyfill 解析
 *   a、全局对象和全局对象相关的方法，例如 Promise、Map、Set、Object.assign......
 *   b、实例的新方法，例如数组的 find、flat 等等......
 */


/**
 * 1、@babel/core：核心模块
 * 2、babel-loader： 在 webpack 中是 babel 解析 ES6 的桥梁
 */


/**
 * 
 * @babel/polyfill：垫片 - 模拟完整的 ES2015+ 环境（更改扩展原型）
 * 1、功能垫片( 模拟环境 )
 * 2、变更
 *   a、在 babel 7.4 之前，只需要安装 @babel/polyfill 这个包就可以了
 *   b、从 7.4 版本开始，虽然 @babel/polyfill 还会更新，
 *      但它内部的 core-js 包版将一直使用 2.x，
 *      无法使用 core-js 3.x 中新增的补丁代码（例如：数组的 includes 方法）
 *   c、官方建议直接安装 core-js 和 regenerator-runtime 这两个包
 * 2、缺点：
 *   a、更改原型
 *   b、引入过量的辅助函数
 * 3、由于以上缺点，需要配合 '@babel/plugin-transform-runtime' 使用
 */


/**
 * @babel/preset-env：通过插件处理高级语法
 */
// 1、预设一组预先设定的插件
//    1.1 只转换语法：箭头函数
//    1.2 不转换全局函数和实例方法：Promise、async-await、Array.from | Array.prototype.includes
//    1.3 由于上一步的缺点，需要引入 polyfill
// 2、结合配置项 useBuiltIns 使用，按需引入 polyfill


/**
 * regenerator-runtime：提供独立的函数的运行时，es5 环境下的 es6 的 generator 实现
 * 1、包含 regenerator 模块。 生成器函数（function*(),yeil）、async、await函数.
 */


/**
 * @babel/helpers：定义了一些处理新的语法关键字的辅助函数
 * 1、@babel/core 在处理的时候也会向代码中插入帮助函数，它的处理方法是在每个文件中都插入相应的帮助函数
 * 2、@babel/helpers 则是把帮助函数当做模块引入，每个文件只需要调用这个模块就可以了
 */


/**
 * @babel/runtime："运行态" 辅助 "函数包"(类似于_createClass辅助函数库集合)
 * 1、目前包含三个版本
      @babel/runtime
      @babel/runtime-corejs2：仅支持全局变量(如promise)和静态属性(Array.from)
      @babel/runtime-corejs3：新增支持实例属性([].includes())
      分别适合于 @babel/plugin-transform-runtime 的 core-js 的设置：corejs: false｜2｜3, 
 * 2、包含模块化 runtime helpers 和 regenerator-runtime 两个库
 */


/**
 * @babel/plugin-transform-runtime：包含 @babel/runtime、core-js、引入垫片的时候借助的插件
 */
// 1、自动引入 @babel/runtime 下的辅助函数（ @babel/runtime/helpers ）
//    例如使用class类函数：class Person {}
//    a、使用 plugin-transform-runtime
//    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
//    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
//    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
//    b、不使用 plugin-transform-runtime，每个文件内都会有此方法
//    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
//    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
//    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
// 2、当代码里使用了 core-js 的API
//    自动引入@babel/runtime-corejs3/core-js-stable/
//    以此来替代全局引入的core-js/stable;
// 3、当代码里使用了 Generator/async函数
//    自动引入@babel/runtime/regenerator
//    以此来替代全局引入的regenerator-runtime/runtime；
// 4、此转换器的另一个用途是为您的代码创建沙盒环境，避免污染全局

module.exports = {
  presets: [
    [
      // 预设一堆插件：
      '@babel/preset-env',
      {
        // 转码之后要兼容的浏览器及版本
        targets: {
          chrome: '80',
          ie: '8'
          // 转化为ES6模块规范、而非require
          // esmodules: true 
        },

        // 是否将 ES 模块语法转换为其他模块类型
        // 1、默认为 auto："amd"、"umd"、"systemjs"、"commonjs"、"cjs"、"auto"、false
        // 2、设置为 false 将保留 ES 模块, require() ==> import ...
        // 3、Es 模块语法可以用来 webpack 做tree shaking
        modules: false,

        // 1、提供 js 的运行环境:3、2
        // 2、需要结果 core-js@3 插件使用
        corejs: 3,

        // useBuiltIns ==> 翻译使用内置插件的方式
        // 作用：决定了 babel 打包时如何处理 @babel/polyfill 语句
        // 1、默认为false，不加载 polyfill
        // 2、entry：需要手动引入 polyfill 需要的 api
        //    1、需要手动引入：require("@babel/polyfill")
        //    2、babel处理后，会引入全部的 polyfill 方法
        //    3、此时版本时 corejs2，如果为 corejs3 会报错
        // 3、usage：自动引入 polyfill 需要的api，window.promise = ...
        //    例如：如果使用到了 Promise 会自动引入下面两个 polyfill
        //    require("core-js/modules/es6.object.to-string.js");
        //    require("core-js/modules/es6.promise.js");
        //    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
        //    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
        //    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
        useBuiltIns: 'usage'

        // 设置为true时，它会尽可能的将ES6+代码转化为ES5标准代码
        // loose: true
      }
    ]
  ],
  plugins: [
    [
      // 只有配置 @babel/plugin-transform-runtime 才会使用 @babel/runtime
      // 1、包含 @babel/runtime、core-js
      // 2、动态引入 @babel/runtime 下的辅助函数
      '@babel/plugin-transform-runtime',
      {
        // 设定版本
        corejs: {
          version: 3 // 优先级高于，preset-env 的 corejs
        }
      }
      // {
      //   helpers: true, // 是否要自动引入辅助函数包
      //   corejs: false, // 是否做API转换,即不对Promise这一类的API进行转换。而在开发JS库的时候设置为2或3
      //   regenerator: true, // 是否做API转换,
      //   useESModules: false, // 是否使用ES6的模块化用法
      //   absoluteRuntime: false // 自定义引入@babel/runtime/模块的路径规则，取值是布尔值或字符串
      // }
    ]
  ]
}
