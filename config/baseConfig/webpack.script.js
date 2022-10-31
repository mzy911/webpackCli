const path = require('path')
const os = require('os')
const threads = os.cpus().length - 1
const isProduction = process.env.NODE_ENV === 'production'
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
            cacheCompression: false, // 关闭缓存文件压缩
            // react配置热更新：还需要配置插件
            plugins: [
              !isProduction && 'react-refresh/babel' // 开启js的HMR功能
            ].filter(Boolean)
          }
        }
      ]
    },
    // 处理jsx文件
    {
      test: /\.jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      include: path.resolve(__dirname, '../../src'),
      options: {
        cacheDirectory: true, // 开启babel缓存
        cacheCompression: false, // 关闭缓存文件压缩
        // react配置热更新：还需要配置插件
        plugins: [
          !isProduction && 'react-refresh/babel' // 开启js的HMR功能
        ].filter(Boolean)
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
            cacheCompression: false, // 关闭缓存文件压缩
            // react配置热更新：还需要配置插件
            plugins: [
              !isProduction && 'react-refresh/babel' // 开启js的HMR功能
            ].filter(Boolean)
          }
        },
        'ts-loader'
      ],
      exclude: /node_modules/,
      include: path.resolve(__dirname, '../../src')
    }
  ]
}
