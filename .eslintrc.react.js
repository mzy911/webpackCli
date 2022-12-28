module.exports = {
  // 继承 react 官方配置
  extends: ["react-app"],

  // 模块的解析规则
  parserOptions: {
    babelOptions: {
      // 解决页面报错的问题
      presets: [["babel-preset-react-app", false], "babel-preset-react-app/prod"]
    }
  }
}
