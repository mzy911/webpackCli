module.exports = {
  // 环境变量(全局变量)
  env: {
    es2021: true, // 声明js新的语法：WeakRef
    node: true, // 声明node下全局变量：__dirname
    browser: true, // 声明浏览器下全局变量：window、document
    commonjs: true
    // jquery: true, // 项目中可以直接使用API: $('idname')
    // lodash: true // 项目中可以直接使用API: $('idname')
  },

  // 自定义全局变量
  globals: {
    _: true,
    $: true,
    utils: true
  },

  /**
   * 解析器：默认'Espree'
   * @value：Esprima
   * @value：Babel-ESLint: 一个对Babel解析器的包装，使其能够与 ESLint 兼容
   * @value：@typescript-eslint/parser：将 TypeScript 转换成与 estree 兼容的形式
   */
  parser: 'Espree',

  // 模块的解析规则
  parserOptions: {
    ecmaVersion: 'latest', // js解析规则：，默认 3，5 （ 不设置，使用const关键词会报错）
    sourceType: 'module', // 模块化：es module
    ecmaFeatures: {
      globalReturn: true, //  允许在全局作用域下使用 return 语句
      impliedStrict: true, // 启用全局严格模式（ ecmaVersion >= 5）
      jsx: true // 启用 jsx 语法（react）中
    }
  },

  // 继承语法规则（  别人定义好的 ）
  extends: [
    // 'eslint:all' // eslint全部内置规则（285个，一般不用）
    // 'eslint:recommended' //  eslint中的recommended规范（50多个，推荐使用）
    'standard' // 第三方：标准规范 - eslint-config-standard 插件（200多个）
  ],

  // 自定义语法规则（覆盖extends）
  rules: {
    'no-var': 2,
    semi: [2, 'never'], // 行尾出现分号报错
    'comma-dangle': [2, 'never'], // "最后"出现逗号报错
    'no-unused-vars': [2, { vars: 'all', args: 'after-used' }], // 冗余变量
    quotes: [2, 'single'] // 单双引号：single、double
  },

  // 解决动态导入语法报错：import('@/utils/a.js')
  plugins: ['import'],

  // 给某些文件单独设置规则
  overrides: [
    {
      files: ['*-test.js', '*.spec.js'],
      rules: {
        'no-unused-expressions': 'off'
      }
    }
  ]
}
