module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // 转码之后，要兼容的浏览器
        targets: {
          chrome: '88',
          ie: '10'
          //   esmodules: true // 表示直接转化为ES6模块规范，而不会转码到require
        },

        // 是否将 ES 模块语法转换为其他模块类型
        // 1、默认为 auto："amd"、"umd"、"systemjs"、"commonjs"、"cjs"、"auto"、false
        // 2、设置为 false 将保留 ES 模块
        // 3、import 语法可以用来webpack做tree shaking
        // modules: false,

        corejs: 3, // 提供 js 的运行环境

        // 是否自动加载polyfill
        // 1、默认为false，不加载
        // 2、entry：需要手动导入"import 'core-js'"，会根据targets的情况选择对应的'core-js'版本
        // 3、usage：根据环境配置，按需引入
        useBuiltIns: 'usage' // 按需引入

        // 设置为true时，它会尽可能的将ES6+代码转化为ES5标准代码
        loose: true
      }
    ]
  ]
}
