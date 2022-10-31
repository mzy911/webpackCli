const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const os = require('os')
const threads = os.cpus().length - 1

module.exports = {
  config: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      include: path.resolve(__dirname, '../../src'),
      use: [
        // 开启多线程打包
        {
          loader: 'thread-loader',
          options: {
            works: threads // 线程数量
          }
        },
        {
          loader: 'babel-loader',
          // babel 相关配置写到 .babelrc.js
          options: {
            cacheDirectory: true, // 开启babel缓存(默认缓存路径：node_modules/.catch...)
            cacheCompression: false // 关闭缓存文件压缩
          }
        }
      ]
    },
    // vue-loader不支持oneOf：配合插件使用
    {
      test: /\.vue$/,
      loader: 'vue-loader', // 内部会给vue文件注入HMR功能代码
      options: {
        // 开启缓存
        cacheDirectory: path.resolve(__dirname, 'node_modules/.cache/vue-loader')
      }
    },
    {
      test: /\.ts$/,
      use: [
        {
          // .babelrc 中的配置对此处起作用
          loader: 'babel-loader',
          options: {
            cacheDirectory: true, // 开启babel缓存
            cacheCompression: false // 关闭缓存文件压缩
          }
        },
        'ts-loader'
      ],
      exclude: /node_modules/,
      include: path.resolve(__dirname, '../../src')
    }
  ]
}
