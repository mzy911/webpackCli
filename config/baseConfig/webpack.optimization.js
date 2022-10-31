const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const os = require('os')
const threads = os.cpus().length - 1

// webpack优化处理
module.exports = {
  config: {
    // 文件压缩
    minimizer: [
      // 将 CSS 从你的 bundle 中分离出来
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].css', // 抽离后的文件名称
        chunkFilename: 'static/css/[name].chunk.css' // 拆分、动态导入后的文件名称
      }),

      // 压缩css
      new CssMinimizerPlugin(),

      // 压缩js
      new TerserPlugin({
        // include: /\/includes/,
        // exclude: /\/excludes/,
        // extractComments: true, // 注释
        parallel: threads // 使用多进程并发运行以提高构建速度
        // 自定义压缩函数
        // minify: (file, sourceMap, minimizerOptions) => {
        //   const extractedComments = []
        //   const { map, code } = require('uglify-module').minify(file, {})
        //   return { map, code, extractedComments }
        // }
      })
    ],

    // 拆分代码块
    // 1、动态导入会单独生成一个chunk：import(/* webpackChunkName:"customName" */,"@/a.js").then
    splitChunks: {
      chunks: 'all' // 默认为async async|all|initial
    },

    // 解决由于某个文件hash值变化，引起的连带关系（由一个文件维护映射关系）
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}.js`
    }
  }
}
