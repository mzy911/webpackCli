const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const stylConfig = require('./webpack.style.js')
const scriptConfig = require('./webpack.script.js')
const staticConfig = require('./webpack.static')
const serverConfig = require('./webpack.server')

module.exports = {
  // 相对路径：开发环境下，在虚拟内存中运行与src并排 (并非相对于当前目录)
  entry: './src/index.js',

  output: {
    // 开发环境下没有输出文件
    path: undefined,

    // 入口文件的打包名称
    filename: 'static/js/main.js'
  },

  mode: 'development',
  //   devtool: 'cheap-module-eval-source-map',

  // 开发服务器：webpack-dev-server（内存中）
  devServer: serverConfig.config,

  module: {
    rules: [
      // 处理 ts
      ...scriptConfig.config,

      // 处理样式：css、less、sass
      ...stylConfig.config,

      // 处理静态资源
      ...staticConfig.config,

      // 以json5的文件形式给json文件添加注释
      {
        test: /\.json5$/,
        loader: 'json5-loader'
      }
    ]
  },

  plugins: [
    // 打包前清除dist目录下文件，webpack4中配置方式
    // new CleanWebpackPlugin(),

    // 利用html模版动态引入webpack打好的包
    new HtmlWebpackPlugin({
      // 开发环境下修改："public/index.html" ==> "../public/index.html"
      template: path.resolve(__dirname, '../public/index.html')
    }),

    // 配置eslint：webpack4中使用loader、webpack5中使用plugin
    new ESLintPlugin({
      // 开发环境下修改："src" ==> "../src"
      context: path.resolve(__dirname, '../src')
    })
  ],

  // 解析模块规则
  resolve: {
    mainFiles: ['index'], // 默认值是["index"]，意思是解析目录时，入口文件名是index
    // 解析同名文件的先后顺序，手动添加".ts" (默认为[".wasm",".mjs",".js",".json"])
    extensions: ['.ts', '.js', '.jsx', '.json', '.less'],
    // 别称
    alias: {
      '@': '/src/'
    }
  }
}
