const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const os = require('os')
const threads = os.cpus().length - 1 // 获取cpu的个数，每个cpu启动时间大概为600ms
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const WorkboxPlugin = require('workbox-webpack-plugin')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  config: [
    // 打包前清除dist目录下文件，webpack4中配置方式
    // new CleanWebpackPlugin(),

    // 利用html模版动态引入webpack打好的包
    new HtmlWebpackPlugin({
      // 开发环境下修改："public/index.html" ==> "../public/index.html"
      template: path.resolve(__dirname, '../../public/index.html'),
      inject: 'head' // script 标签插入的位置
      // filename: '**/index.html' // 自定义html名称(路径)
      // chunks: [], // 根据多入口，可手动导入要使用的chunk
      // publicPath:'' // 给script、style添加公共路径
    }),

    // 配置eslint：webpack4中使用loader、webpack5中使用plugin
    new ESLintPlugin({
      // 开发环境下修改："src" ==> "../src"
      context: path.resolve(__dirname, '../../src'),
      cache: true, // 开启缓存
      cacheLocation: path.resolve(__dirname, '../../node_modules/.cache/eslintCatch') // 自定义缓存路径
      // threads // 开启多线程、和设置进程数量
    }),

    // 1、自动加载模块，而不必在任何地方导入或要求它们(如：jquery、lodash)
    // 2、默认路径，(./**) 指向 node_modules
    // 3、导入自定义模块：utils: path.resolve(path.join(__dirname, 'src/module1'))
    // 4、** 如果开启eslint，记得暴露全局变量
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'lodash',
      utils: path.resolve(path.join(__dirname, '../../src/utils'))
      // _map: ['lodash', 'map'] // 可以是数据
      // Vue: ['vue/dist/vue.esm.js', 'default']
    }),

    // 1、动态打包：需要单独进行 webpack.all.js 配置打包
    // 2、配合 webpack.DllPlugin()
    // 3、还需配置：add-asset-html-webpack-plugin使用
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../../dll/jquery_manifest.json')
    }),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../../dll/lodash_manifest.json')
    }),

    // 将动态打包的插件，动态添加到html中
    new AddAssetHtmlPlugin([
      {
        filepath: path.resolve(__dirname, '../../dll/jquery.js'),
        outputPath: '/dll/',
        publicPath: './dll'
      },
      {
        filepath: path.resolve(__dirname, '../../dll/lodash.js'),
        outputPath: '/dll/',
        publicPath: './dll'
      }
    ]),

    // 将public下面的资源复制到dist目录去（除了index.html）
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../../public'),
          to: path.resolve(__dirname, '../../dist/public'),
          toType: 'dir',
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

    // 分析包的依赖关系
    // new BundleAnalyzerPlugin()

    // 网页离线访问，兼容性较差( 需要手动注册 )
    // new WorkboxPlugin.GenerateSW({
    //   // 帮组 serviceworkder 快速启动
    //   clientsClaim: true,
    //   // 删除旧的 serviceworker
    //   skipWaiting: true
    // })
  ]
}
