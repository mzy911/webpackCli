const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const os = require('os')
const threads = os.cpus().length - 1

// webpack优化处理
module.exports = {
  config: {
    minimizer: [
      // 将 CSS 从你的 bundle 中分离出来
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[hash:8].css',
        chunkFilename: 'static/css/[id].[hash:8].css'
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
    ]
  }
}
