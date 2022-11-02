const stylConfig = require('./baseConfig/webpack.style.js')
const scriptConfig = require('./baseConfig/webpack.script.js')
const staticConfig = require('./baseConfig/webpack.static')
const serverConfig = require('./baseConfig/webpack.server')
const pluginConfig = require('./baseConfig/webpack.plugin')
const path = require('path')

module.exports = {
  // 入口使用 相对路径：在虚拟内存中运行与src并排 (并非相对于当前目录)
  entry: () => {
    // 项目启动、watch执行
    return './src/index.js'
  },

  output: {
    // 开发环境下没有输出文件
    path: undefined,

    // 入口文件的打包名称
    filename: 'static/js/main.js', // 单入口打包，可以固定名称
    chunkFilename: 'static/js/[name].chunk.js', // 打包出的chunk名称，支持动态导入 import()
    assetModuleFilename: 'static/media/[hash:10][ext][query]' // 图片、字体等（type:'asset'静态资源）
  },

  mode: 'development',

  // 浏览器加载资源前缀
  // publicPath: 'auto', // 默认
  // publicPath: 'https://cdn.example.com/assets/', // CDN（总是 HTTPS 协议）
  // publicPath: '//cdn.example.com/assets/', // CDN（协议相同）
  // publicPath: '/assets/', // 相对于服务(server-relative)
  // publicPath: 'assets/', // 相对于 HTML 页面
  // publicPath: '../assets/', // 相对于 HTML 页面
  // publicPath: '', // 相对于 HTML 页面（目录相同）

  // 能检测到行的报错
  // 1、eval：开发环境下默认值，eval包裹每个module模块，每个模块后增加sourceURL（定位到行、列）
  // 2、source-map：每个模块生成独立的sourcemap文件，module中sourceMappingURL链接（定位到行、列）
  // 3、hidden-source-map：生成一个SourceMap文件，但是bundle中没有链接（找不到报错位置）
  // 4、inline-source-map：bundle文件内部生成 'sourcemap' 关系（行、列信息）
  // 5、cheap-source-map：生成一个没有列信息的 'sourcemap'（只有行信息）
  // 6、cheap-module-source-map：同 cheap-source-map，会将 loader 的 source map 加入
  devtool: 'cheap-module-source-map',

  // 开发服务器：webpack-dev-server（内存中）
  devServer: serverConfig.config,

  module: {
    rules: [
      {
        // 直接找到对应的loader，不用一个个对比
        oneOf: [
          // 处理样式：css、less、sass
          ...stylConfig.config,

          // 处理 js、ts
          ...scriptConfig.config,

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

  // 外部扩展(Externals)：禁止打包到bundle中，运行时使用 CDN
  // externalsType: 'script', // external 作为脚本加载
  // externals: {
  //   // 数组形式
  //   jquery: ['https://cdn.bootcdn.net/ajax/libs/jquery/3.6.1/jquery.js', '$'],
  //   // 对象形式
  //   lodash: {
  //     commonjs: 'lodash',
  //     amd: 'lodash',
  //     root: '_' // 指向全局变量
  //   },
  //   // 函数形式
  //   function({ context, request }, callback) {
  //     if (/^yourregex$/.test(request)) {
  //       // 使用 request 路径，将一个 commonjs 模块外部化
  //       return callback(null, 'commonjs ' + request)
  //     }
  //     // 继续下一步且不外部化引用
  //     callback()
  //   }
  // },

  // 使用插件
  plugins: [...pluginConfig.config],

  // 解析模块规则
  resolve: {
    mainFiles: ['index'], // 默认值是["index"]，意思是解析目录时，入口文件名是index
    // 解析同名文件的先后顺序，手动添加".ts" (默认为[".wasm",".mjs",".js",".json"])
    extensions: ['.ts', '.js', '.jsx', '.json', '.less'],
    // 别称
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  }
}
