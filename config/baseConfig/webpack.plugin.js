const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const os = require('os')
const threads = os.cpus().length - 1 // 获取cpu的个数，每个cpu启动时间大概为600ms
const { VueLoaderPlugin } = require('vue-loader')
const { DefinePlugin } = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  config: [
    // 利用html模版动态引入webpack打好的包
    new HtmlWebpackPlugin({
      // 开发环境下修改："public/index.html" ==> "../public/index.html"
      template: path.resolve(__dirname, '../../public/index.html')
    }),

    // 配置eslint：webpack4中使用loader、webpack5中使用plugin
    new ESLintPlugin({
      // 开发环境下修改："src" ==> "../src"
      context: path.resolve(__dirname, '../../src'),
      cache: true, // 开启缓存
      cacheLocation: path.resolve(__dirname, '../../node_modules/.cache/eslintCatch'), // 自定义缓存路径
      threads // 开启多线程、和设置进程数量
    }),

    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../../public'),
          to: path.resolve(__dirname, '../../dist/public'),
          toType: 'dir',
          noErrorOnMissing: true,
          globOptions: {
            ignore: ['**/index.html']
          },
          info: {
            minimized: true
          }
        }
      ]
    }),

    // vue插件：配合loader使用
    new VueLoaderPlugin(),

    // 1、corss-env定义的变量是给webpack打包使用
    // 2、webpack定义的环境变量是给vue使用的，解决vue3页面告警的问题
    new DefinePlugin({
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false'
    })
  ].filter(Boolean)
}
