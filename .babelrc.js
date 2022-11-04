// babel-loader： 在 webpack 里应用 babel 解析 ES6 的桥梁

// @babel/core：
// 1、babel 核心模块
// 2、转换code：es5--->es6
//    require('@babel/core').transformSync('code', {
//      plugins: ['@babel/plugin-transform-arrow-functions']
//    })

// @babel/preset-env：处理新的语法
// 1、babel 预设，一组预先设定的插件
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

// @babel/runtime：辅助函数包
// 1、运行态 "辅助函数" 的npm包
//    a、转换后的代码上面增加了好几个函数声明，称之为辅助函数
//    b、如果每个文件里都有好多被转换的代码，所有文件都会被注入类似的函数
//    c、@babel/runtime把所有语法转换会用到的辅助函数都集成在了一起
// 2、不会污染全局 空间和内置对象原型（按需引用）
//    使用 async/await 时，自动引入 @babel/runtime/regenerator
//    使用 ES6 的静态事件或内置对象时，自动引入 @babel/runtime/core-js
//    移除内联babel helpers并替换使用@babel/runtime/helpers 来替换

// @babel/plugin-transform-runtime
// 1、自动移除语法转换后内联的辅助函数，使用@babel/runtime/helpers里的辅助函数来替代；
// 2、当代码里使用了core-js的API，自动引入@babel/runtime-corejs3/core-js-stable/，以此来替代全局引入的core-js/stable;
// 3、当代码里使用了Generator/async函数，自动引入@babel/runtime/regenerator，以此来替代全局引入的regenerator-runtime/runtime；
// 4、作用2和3其实是在做API转换，对内置对象进行重命名，以防止污染全局环境

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // 转码之后，要兼容的浏览器
        targets: {
          chrome: '80',
          ie: '8'
          //   esmodules: true // 表示直接转化为ES6模块规范，而不会转码到require
        },

        // 是否将 ES 模块语法转换为其他模块类型
        // 1、默认为 auto："amd"、"umd"、"systemjs"、"commonjs"、"cjs"、"auto"、false
        // 2、设置为 false 将保留 ES 模块
        // 3、Es 模块语法可以用来webpack做tree shaking
        // modules: false,

        // 提供 js 的运行环境:3、2
        corejs: 3,

        // 按需引入 polyfill (useBuiltIns: 'usage')
        // 1、默认为false，不加载 polyfill
        // 2、entry：需要手动导入"import 'core-js'"（自动依据targets动态选择版本）
        // 3、usage：根据"上面"的环境配置，按需引入
        useBuiltIns: 'usage'

        // 设置为true时，它会尽可能的将ES6+代码转化为ES5标准代码
        // loose: true
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
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
