const path = require('path')
const stylConfig = require('./baseConfig/webpack.style')
const scriptConfig = require('./baseConfig/webpack.script')
const staticConfig = require('./baseConfig/webpack.static')
const optimizationConfig = require('./baseConfig/webpack.optimization')
const pluginConfig = require('./baseConfig/webpack.plugin')

module.exports = {
  // 相对路径：生产模式下，生成dist目录与src平级
  // entry: {
  //   // app: './src/app.js',
  //   // main: './src/main.js'
  // },
  entry: './src/index.js',
  output: {
    // 绝对路径："dist" ==> "../dist"
    path: path.resolve(__dirname, '../dist'),

    // 入口文件的打包名称
    filename: 'static/js/[name].[hash:8].js',
    chunkFilename: 'static/js/[name].js', // 打包出的chunk名称，包含动态导入 import()

    // 告诉webpack打包出来的文件中，不使用箭头函数( 默认为立刻执行的箭头函数 )
    environment: {
      arrowFunction: false
    },

    // 打包前清除dist目录下文件(等同于CleanWebpackPlugin)
    clean: true
  },

  mode: 'production',

  // 能检测到行、列的报错
  // devtool: 'source-map',

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
  },

  // webpack打包优化
  optimization: {
    ...optimizationConfig.config
  }
}
