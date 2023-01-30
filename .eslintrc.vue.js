
// cnpm i -D eslint typescript eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin
module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "plugins": [
    "vue",
    "@typescript-eslint"
  ],
  "rules": {
  }
}
