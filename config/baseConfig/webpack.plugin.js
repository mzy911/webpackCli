const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const os = require('os')
const threads = os.cpus().length - 1 // 获取cpu的个数，每个cpu启动时间大概为600ms
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const WorkboxPlugin = require('workbox-webpack-plugin')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

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
      // publicPath:''
    }),

    // 配置eslint：webpack4中使用loader、webpack5中使用plugin
    new ESLintPlugin({
      // 开发环境下修改："src" ==> "../src"
      context: path.resolve(__dirname, '../../src'),
      cache: true, // 开启缓存
      cacheLocation: path.resolve(__dirname, '../../node_modules/.cache/eslintCatch'), // 自定义缓存路径
      threads // 开启多线程、和设置进程数量
    }),

    // 提供全局变量
    new webpack.ProvidePlugin({
      // 1、组件内不用单独导入lodash，可以直接使用
      // 2、默认路径，(./**) 指向 node_modules
      // 3、可以手动修改路径，path.resolve(path.join(__dirname, 'src/module1')),
      // _: 'lodash', // 可以是字符串
      // _map: ['lodash', 'map'], // 可以是数据
      // Vue: ['vue/dist/vue.esm.js', 'default']
    }),

    // 1、动态打包：需要单独进行 webpack.all.js 配置打包
    // 2、还需配置：add-asset-html-webpack-plugin使用
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../../dll/manifest.json')
    }),

    // 将动态打包的插件，动态添加到html中
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, '../../dll/jquery.js'),
      publicPath: './'
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
