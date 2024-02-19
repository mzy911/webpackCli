// 配置 eslint 的步骤
// 1、安装 eslint
//    pnpm i eslint -D

// 2、初始化 eslint 配置文件，会有自定义选择项
//    npx eslint --init 
//    npm init @eslint/config

// 3、配置文件：.eslintrc

// 4、忽略文件：.eslintignore

// 5、vscode 配置
// "editor.codeActionsOnSave": {
//   "source.fixAll.eslint": true
// },
// "eslint.validate": [
//   "javascript", // 用eslint的规则检测js文件
//   "javascriptreact",
//   "typescriptreact",
//   "vue",
//   "html",
//   "json",
//   "typescript",
//   "css"
// ],


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
    utils: true,
    jQuery: true
  },

  /**
   * ESTree 转换检验器
   * 1、将代码转换为 ESTree
   * 2、ESLint 会对 ESTree 进行校验
   * 3、ESTree 只是一个 AST 的某一种规范，ESTree 本质上还是 AST
   * @value：Esprima：默认只转换 js
   * @value：@babel/eslint-parser
   *   1、允许你使用 ESLint 校验所有 babel code
   *   2、babel 的解析器会把你的 code 转换为 AST，该解析器会将其转换为 ESLint 能懂的 ESTree
   * @value：@typescript-eslint/parser：将 TypeScript 转换成与 estree 兼容的形式
   *   1、ESLint 默认的 parser 会将代码转换为 AST（ESTree）
   *   2、ESTree 默认的 parser 会将源码转换为 AST（TSTree）
   *   3、@typescript-eslint 目的是兼容前两者的 “AST”
   */
  parser: "@typescript-eslint/parser",

  // 指定解析器选项
  parserOptions: {
    ecmaVersion: "latest", // 指定 ECMAScript 版本：，默认 3，5 使用const报错
    sourceType: "module", // 指定要解析的代码是模块化代码还是脚本代码，默认为 "script"，可选值为 "module"
    ecmaFeatures: { // 指定要启用的 JavaScript 语言特性
      globalReturn: true, //  允许在全局作用域下使用 return 语句
      impliedStrict: true, // 启用全局严格模式（ ecmaVersion >= 5）
      jsx: true // 启用 jsx 语法（react）中
    } 
  },  

  // 继承语法规则（  别人定义好的 ）
  extends: [
    // 'eslint:all' // eslint全部内置规则（285个，一般不用）
    "eslint:recommended" //  eslint中的recommended规范（50多个，推荐使用）
    // 'standard' // 第三方：标准规范 - eslint-config-standard 插件（200多个）

  ],

  // 自定义语法规则（覆盖extends）
  rules: {
    "no-var": 0, // 不让使用var
    "semi": [2, "never"], // 行尾出现分号报错
    "quotes": [2, "double"], // 单双引号：single、double
    "indent": ["error", 2, {outerIIFEBody: 0}], // 缩进对齐两个空格
    "comma-dangle": [2, "never"], // "最后" 出现逗号报错
    "no-undef": [0, "never"], // 不定义直接使用
    "no-unused-vars": [0, {vars: "all", args: "after-used"}], // 冗余变量
    "no-multiple-empty-lines": ["error", {max: 3, maxBOF: 1}], // 允许多个空行数量
    "no-multi-spaces": "error", // 连续使用多个空格
    "array-bracket-spacing": ["error", "never"], // 数组
    "object-curly-spacing": ["error", "never"], // 对象
    "block-spacing": ["error", "always"], // 在代码块'内部'
    "space-before-blocks": ["error", "never"], // 句块之前的空格
    "space-in-parens": ["error", "never"], // 圆括号内
    "comma-spacing": ["error", {before: false, after: true}], // 逗号以后空格
    "keyword-spacing": ["error", {after: true}], // 关键字之后空格
    "no-mixed-spaces-and-tabs": "error", // 禁止空格、tab混用
    "spaced-comment": ["error", "always"], // 注释前后空格
    "semi-spacing": "error", // 分号之后空格
    "space-infix-ops": "error", // 操作符
    "key-spacing": ["error", {afterColon: true}], // 对象属性后空格(冒号后)
    "arrow-spacing": "error", // 箭头函数前后空格
    "space-before-function-paren": ["error", {anonymous: "always", named: "always"}], // 函数
    "no-redeclare": "off"
  },

  // 解决动态导入语法报错：import('@/utils/a.js')
  plugins: ["import"]

  // 给某些文件单独设置规则
  // overrides: [
  //   {
  //     files: ["*-test.js", "*.spec.js"],
  //     rules: {
  //       "no-unused-expressions": "off"
  //     }
  //   }
  // ]
}
