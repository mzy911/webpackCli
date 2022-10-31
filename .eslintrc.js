module.exports = {
  root: true,
  env: {
    node: true
  },
  // 使用 eslint-plugin-vue
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  }
}
