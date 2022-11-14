module.exports = {
  // 指定脚本运行的环境(预定义的全局变量)
  env: {
    es2021: true, // 声明js新的语法：WeakRef
    node: true, // 声明node下全局变量：__dirname
    browser: true, // 声明浏览器下全局变量：window、document
    commonjs: true
  },

  // 自定义全局变量
  globals: {
    _: true, // readonly、writable、off、
    $: true,
    utils: true
  },

  /**
   * 解析器：默认'Espree'
   * @value：Esprima
   * @value：Babel-ESLint: 一个对Babel解析器的包装，使其能够与 ESLint 兼容
   * @value：@typescript-eslint/parser：将 TypeScript 转换成与 estree 兼容的形式
   */
  // parser: 'Espree',

  // 模块的解析规则
  parserOptions: {
    ecmaVersion: 'latest', // 按照哪个js版本解析规则：，默认 3，5 使用const报错
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
    // 'standard' // 第三方：标准规范 - eslint-config-standard 插件（200多个）

  ],

  // 自定义语法规则（覆盖extends）
  rules: {
    'no-var': 2,
    semi: [2, 'never'], // 行尾出现分号报错
    quotes: [2, 'single'], // 单双引号：single、double
    indent: ['error', 2, {outerIIFEBody: 0}], // 缩进对齐两个空格
    'comma-dangle': [2, 'never'], // "最后" 出现逗号报错
    'no-unused-vars': [2, {vars: 'all', args: 'after-used'}], // 冗余变量
    'no-multiple-empty-lines': ['error', {max: 2, maxBOF: 1}], // 允许多个空行数量
    'no-multi-spaces': 'error', // 连续使用多个空格
    'array-bracket-spacing': ['error', 'never'], // 数组
    'object-curly-spacing': ['error', 'never'], // 对象
    'block-spacing': ['error', 'always'], // 在代码块'内部'
    'space-before-blocks': ['error', 'never'], // 句块之前的空格
    'space-in-parens': ['error', 'never'], // 圆括号内
    'comma-spacing': ['error', {before: false, after: true}], // 逗号以后空格
    'keyword-spacing': ['error', {after: true}], // 关键字之后空格
    'no-mixed-spaces-and-tabs': 'error', // 禁止空格、tab混用
    'spaced-comment': ['error', 'always'], // 注释前后空格
    'semi-spacing': 'error', // 分号之后空格
    'space-infix-ops': 'error', // 操作符
    'key-spacing': ['error', {afterColon: true}], // 对象属性后空格(冒号后)
    'arrow-spacing': 'error', // 箭头函数前后空格
    'space-before-function-paren': ['error', {anonymous: 'always', named: 'always'}] // 函数
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
