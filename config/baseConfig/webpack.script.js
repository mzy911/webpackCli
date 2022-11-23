const path = require('path')
// const os = require('os')
// const threads = os.cpus().length - 1

const getScriptLoaders = (pre) => {
  return [
    // // 开启多线程
    // {
    //   loader: 'thread-loader' // 开启多线程
    //   // options: {
    //   //   works: threads // 线程数量
    //   // }
    // },

    {
      loader: 'babel-loader',
      options: {
        include: path.resolve(__dirname, '../../src'),
        exclude: /node_modules/,
        cacheDirectory: true, // 开启babel缓存(默认缓存路径：node_modules/.catch...)
        cacheCompression: false // 关闭缓存文件压缩
      }
    },

    // 接受、处理传入的loader(如：ts-loader)
    pre

    // webpack4中使用loader、webpack5中使用plugin
    // {
    //   loader: 'eslint-loader',
    //   enforce: "pre",
    //   include: [path.resolve(__dirname, 'src')], // 指定检查的目录
    //   options: { // 自动合并 eslintrc.js
    //     ...
    //   }
    // }
  ].filter(Boolean)
}

module.exports = {
  config: [
    // 处理js、jsx文件
    {
      test: /\.js$|\.jsx$/,
      use: getScriptLoaders()
    },

    // 处理ts文件
    {
      test: /\.ts$/,
      use: getScriptLoaders('ts-loader')
    }

    // 给某个某块提供 window 对象
    // {
    //   test: require.resolve('../../src/index.js'),
    //   use: 'imports-loader?wrapper=window'
    // },
  ]
}
