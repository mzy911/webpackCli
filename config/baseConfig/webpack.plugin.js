const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const os = require('os')
const threads = os.cpus().length - 1 // 获取cpu的个数，每个cpu启动时间大概为600ms
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  config: [
    // 打包前清除dist目录下文件，webpack4中配置方式
    // new CleanWebpackPlugin(),

    // 利用html模版动态引入webpack打好的包
    new HtmlWebpackPlugin({
      // 开发环境下修改："public/index.html" ==> "../public/index.html"
      template: path.resolve(__dirname, '../../public/index.html')
    }),

    // 配置eslint：webpack4中使用loader、webpack5中使用plugin
    new ESLintPlugin({
      // 开发环境下修改："src" ==> "../src"
      context: path.resolve(__dirname, '../../src'),
      exclude: 'node_modules',
      cache: true, // 开启缓存
      cacheLocation: path.resolve(__dirname, '../../node_modules/.cache/eslintCatch'), // 自定义缓存路径
      threads // 开启多线程、和设置进程数量
    }),

    // 解决react热更新问题：还需配合loader使用
    !isProduction && new ReactRefreshWebpackPlugin(),

    // 复制public下静态资源
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../../public'),
          to: path.resolve(__dirname, '../../dist/public'),
          // toType: 'dir',
          noErrorOnMissing: true, // 不生成错误
          globOptions: {
            // 忽略文件
            ignore: ['**/index.html']
          },
          info: {
            // 跳过terser压缩js
            minimized: true
          }
        }
      ]
    })
  ].filter(Boolean)
}
