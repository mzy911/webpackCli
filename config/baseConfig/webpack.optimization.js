const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
// const os = require('os')
// const threads = os.cpus().length - 1
// const path = require('path')
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
          extractComments: true // 注释
          // parallel: threads // 使用多进程并发运行以提高构建速度
          // 自定义压缩函数
          // minify: (file, sourceMap, minimizerOptions) => {
          //   const extractedComments = []
          //   const { map, code } = require('uglify-module').minify(file, {})
          //   return { map, code, extractedComments }
          // }
        })
    ].filter(Boolean),

    // 拆分代码块、按需加载
    // 1、每个入口单独生成一个chunk
    // 2、动态导入会单独生成一个chunk
    // 3、手动配置规则，创建chunk
    // 4、作用：拆分chunk、独自第三方模块让浏览器形成缓存(内容不变)
    splitChunks: {
      chunks: 'all', // 默认为async async | all | initial
      // 以下为默认值
      // minSize: 20000, // 默认20000，生成 chunk 的最小体积
      // minRemainingSize: 0, // 类似于明Size，默认为0，避免拆分后的文件为0
      // minChunks: 1,// 默认为1，至少引用一次被才能被拆分
      // maxAsyncRequests: 30, // 默认为30，按需加载时的最大并行请求数（超出数量被合并）
      // maxInitialRequests: 30, // 默认为30，入口点的最大并行请求数
      // enforceSizeThreshold: 50000 // 默认 50000，强制执行拆分的体积阈值和其他限制
      // automaticNameDelimiter: '~', //默认的连接符
      // name: true, // 设为true表示根据模块名和CacheGroup的key来自动生成,使用上面连接符连接

      // *** 自定义分组（两个默认的组：defaultVendors、default）
      cacheGroups: {
        // // layouts通常是admin项目的主体布局组件，所有路由组件都要使用的
        // layouts: {
        //   name: 'layouts',
        //   test: path.resolve(__dirname, '../src/layouts'),
        //   priority: 40
        // },
        // // 如果项目中使用element-plus，进行单独打包
        // elementUI: {
        //   name: 'chunk-elementPlus',
        //   test: /[\\/]node_modules[\\/]_?element-plus(.*)/,
        //   priority: 30
        // },
        // // 将vue相关的库单独打包，减少node_modules的chunk体积。
        // vue: {
        //   name: 'vue',
        //   test: /[\\/]node_modules[\\/]vue(.*)[\\/]/,
        //   chunks: 'initial',
        //   priority: 20
        // },
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10, // 权重最低，优先考虑前面内容
          chunks: 'initial'
        }
        // // 默认缓存组名（merge上面默认配置）
        // default: {
        //   enforceSizeThreshold: 30000
        //   // minSize: 0,
        //   // minChunks: 2, // 最少引用两次才会被拆分
        //   // priority: -20, //权重-20
        //   // reuseExistingChunk: true // a -> b -> c (直接复用不抽离)
        //   //filename:"customname"//还可以重新定义生成模块的名称
        // }
      }
    },

    // 解决由于某个文件hash值变化，引起的连带关系（由一个文件维护映射关系）
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}.js`
    }
  }
}
