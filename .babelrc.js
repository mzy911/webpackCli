// babel-loader： 在 webpack 里应用 babel 解析 ES6 的桥梁


// @babel/core：核心模块


// @babel/preset-env：处理新的语法
// 1、babel 预设，一组预先设定的插件
//    只转换语法：箭头函数
//    不转换Api：Promise、async-await
// 2、结合配置项 useBuiltIns 使用，按需引入 polyfill


// @babel/polyfill：处理新的静态、原型方法
// 1、功能垫片
//    a、包含 core-js 和一个自定义的 regenerator runtime 来模拟完整的 ES2015+ 环境
//    b、Promise 和 WeakMap、Array.from、Array.prototype.includes(包含静态方法、原型方法)
//    c、polyfill 将添加到全局范围（glob）和类似 String 这样的原生原型（prototypes）
// 2、应用到 "生产环境"
// 3、从 Babel 7.4.0 版本开始不建议使用了，建议直接包含 core-js/stable
// 4、缺点：
//    a、更改原型
//    b、引入过量的辅助函数
// 5、由于以上缺点，需要配合 '@babel/plugin-transform-runtime' 使用


// @babel/runtime：运行态辅助函数包
// 1、运行态 "辅助函数" 的npm包
//    a、转换后的代码上面增加了好几个函数声明，称之为辅助函数
//    b、如果每个文件里都有好多被转换的代码，所有文件都会被注入类似的函数
//    c、@babel/runtime把所有语法转换会用到的辅助函数都集成在了一起
// 2、不会污染全局 空间和内置对象原型（按需引用） 
//    使用 async/await 时，自动引入 @babel/runtime/regenerator
//    使用 ES6 的静态事件或内置对象时，自动引入 @babel/runtime/core-js
//    移除内联babel helpers并替换使用@babel/runtime/helpers 来替换


// @babel/plugin-transform-runtime：包含 @babel/runtime、core-js
// 1、自动引入 @babel/runtime 下的辅助函数（ @babel/runtime/helpers ）
//    例如使用class类函数：class Person {}
//    a、使用 plugin-transform-runtime
//    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
//    var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
//    var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
//    b、不使用plugin-transform-runtime，每个文件内都会有此方法
//    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
//    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
//    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
// 2、当代码里使用了core-js的API
//    自动引入@babel/runtime-corejs3/core-js-stable/
//    以此来替代全局引入的core-js/stable;
// 3、当代码里使用了Generator/async函数
//    自动引入@babel/runtime/regenerator
//    以此来替代全局引入的regenerator-runtime/runtime；
// 4、作用2和3其实是在做API转换，对内置对象进行重命名，以防止污染全局环境

module.exports = {
  presets: [
    [
      // 预设一堆插件：
      '@babel/preset-env',
      {
        // 转码之后，要兼容的浏览器
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

        // 作用：控制 polyfill 的加载方式
        // 1、默认为false，不加载 polyfill
        // 2、entry：需要手动引入 polyfill 需要的api
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
      // 1、包含 @babel/runtime、core-js
      // 2、动态引入 @babel/runtime 下的辅助函数
      '@babel/plugin-transform-runtime',
      {
        // 需要结合 @babel/runtime-corejs3 插件使用
        // 1、作用2和3其实是在做API转换，对内置对象进行重命名；避免污染全局
        // 2、corejs
        //    不使用时：promise 挂在到window上 require("core-js/modules/es6.promise.js");
        //    使用后：var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));
        corejs: {
          version: 3 // 优先级高于，preset-env的corejs
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
