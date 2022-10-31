const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const os = require('os')
const threads = os.cpus().length - 1
const isProduction = process.env.NODE_ENV === 'production'

// webpack优化处理
module.exports = {
  config: {
    // 文件压缩
    minimizer: [
      // 将 CSS 从你的 bundle 中分离出来
      isProduction &&
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].css', // 抽离后的文件名称
          chunkFilename: 'static/css/[name].chunk.css' // 拆分、动态导入后的文件名称
        }),

      // 压缩css
      isProduction && new CssMinimizerPlugin(),

      // 压缩js
      isProduction &&
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
    ].filter(Boolean),

    // 拆分代码块
    // 1、动态导入会单独生成一个chunk：import(/* webpackChunkName:"customName" */,"@/a.js").then
    splitChunks: {
      chunks: 'all', // 默认为async async|all|initial
      cacheGroups: {
        // layouts通常是admin项目的主体布局组件，所有路由组件都要使用的
        // 可以单独打包，从而复用
        // 如果项目中没有，请删除
        layouts: {
          name: 'layouts',
          test: path.resolve(__dirname, '../src/layouts'),
          priority: 40
        },
        // 如果项目中使用element-plus，此时将所有node_modules打包在一起，那么打包输出文件会比较大。
        // 所以我们将node_modules中比较大的模块单独打包，从而并行加载速度更好
        // 如果项目中没有，请删除
        elementUI: {
          name: 'chunk-elementPlus',
          test: /[\\/]node_modules[\\/]_?element-plus(.*)/,
          priority: 30
        },
        // 将vue相关的库单独打包，减少node_modules的chunk体积。
        vue: {
          name: 'vue',
          test: /[\\/]node_modules[\\/]vue(.*)[\\/]/,
          chunks: 'initial',
          priority: 20
        },
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10, // 权重最低，优先考虑前面内容
          chunks: 'initial'
        }
      }
    },

    // 解决由于某个文件hash值变化，引起的连带关系（由一个文件维护映射关系）
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}.js`
    }
  }
}
