const path = require('path')
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
    {
      test: /\.ts$/,
      use: [
        // 开启多线程打包
        {
          loader: 'thread-loader',
          options: {
            works: threads // 线程数量
          }
        },
        {
          // 指定加载器
          loader: 'babel-loader',
          options: {
            cacheDirectory: true, // 开启babel缓存
            cacheCompression: false, // 关闭缓存文件压缩

            // 设置预定义环境
            presets: [
              [
                // 指定环境的插件
                '@babel/preset-env',
                // 配置信息
                {
                  // 兼容浏览器的版本
                  targets: {
                    chrome: '88', // 转为 es6
                    ie: '11' // 转为es5
                  },
                  // 提供 js 的运行环境（ 垫片：primise、高级语法...... ）
                  corejs: 3,
                  // 使用 corejs 的方式：usage-按需加载
                  useBuiltIns: 'usage'
                }
              ]
            ]
          }
        },
        'ts-loader'
      ],
      exclude: /node_modules/,
      include: path.resolve(__dirname, '../../src')
    }
  ]
}
