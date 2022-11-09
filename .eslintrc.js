module.exports = {
  root: true,
  env: {
    node: true
  },
  // 使用 eslint-plugin-vue
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  // 自定义语法规则（覆盖extends）
  rules: {
    'no-var': 2,
    semi: [2, 'never'], // 行尾出现分号报错
    quotes: [2, 'single'], // 单双引号：single、double
    indent: ['error', 2, {outerIIFEBody: 2}], // 缩进对齐两个空格
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
  }
}
