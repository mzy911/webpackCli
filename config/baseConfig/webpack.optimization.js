const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// webpack优化处理
module.exports = {
  config: {
    minimizer: [
      // 将 CSS 从你的 bundle 中分离出来
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[hash:8].css',
        chunkFilename: 'static/css/[id].[hash:8].css'
      }),

      // 压缩抽离出来的css文件
      new CssMinimizerPlugin()
    ]
  }
}
