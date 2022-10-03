const stylConfig = require('./baseConfig/webpack.style.js')
const scriptConfig = require('./baseConfig/webpack.script.js')
const staticConfig = require('./baseConfig/webpack.static')
const serverConfig = require('./baseConfig/webpack.server')
const pluginConfig = require('./baseConfig/webpack.plugin')

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

  // 能检测到行的报错
  devtool: 'cheap-module-source-map',

  // 开发服务器：webpack-dev-server（内存中）
  devServer: serverConfig.config,

  module: {
    rules: [
      {
        // 让每个文件直接找到对应的loader，不用一个个对比
        oneOf: [
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
      }
    ]
  },

  // 使用插件
  plugins: [...pluginConfig.config],

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
