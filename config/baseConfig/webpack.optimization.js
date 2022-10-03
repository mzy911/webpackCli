const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

// webpack优化处理
module.exports = {
  config: {
    minimizer: [
      // 压缩抽离出来的css文件
      new CssMinimizerPlugin()
    ]
  }
}
