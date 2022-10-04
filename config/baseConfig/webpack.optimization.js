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
    ],

    // 多入口打包，拆分代码块
    splitChunks: {
      // async|all|initial
      //  async：默认值，抽离异步代码块（如import()）
      //  initial：抽离被重复引用的静态模块
      //  all：无论静态还是动态模块，都会抽离重复的代码块（一般用于多入口打包）
      chunks: 'all',
      // maxSize: 0, // 大于 maxSize 个字节的 chunk 分割成较小的部分
      // minSize: 20000, // 默认20000，生成 chunk 的最小体积
      // minRemainingSize: 0, // 默认为0，避免拆分后的文件为0
      // minChunks: 1,// 默认为1，至少引用一次被才能被拆分
      // maxAsyncRequests: 30, // 默认为30，按需加载时的最大并行请求数
      // maxInitialRequests: 30, // 默认为30，入口点的最大并行请求数
      // enforceSizeThreshold: 50000, // 默认 50000，强制执行拆分的体积阈值和其他限制
      // automaticNameDelimiter: '~', //默认的连接符
      // name: true, // 设为true表示根据模块名和CacheGroup的key来自动生成,使用上面连接符连接

      // splitChunks就是根据cacheGroups模块的拆分、分组
      cacheGroups: {
        // //第三方的模块：生成的模块名称vendors...
        // //自定义缓存组名
        // vendors: {
        //   //vendors~main.bundle.js
        //   //检查node_modules目录
        //   //只要模块在该目录下就使用上面配置拆分到这个组
        //   test: /[\\/]node_modules[\\/]/,
        //   //权重-10,决定了哪个组优先匹配
        //   //例如node_modules下有个模块要拆分
        //   //同时满足vendors和default组
        //   //此时就会分到vendors组,因为-10>-20
        //   priority: -10
        //   //filename:"customname"//含有动态导入的模块，不能使用filename
        // },
        // 默认缓存组名（merge上面默认配置）
        default: {
          minSize: 0,
          minChunks: 2, // 最少引用两次才会被拆分
          priority: -20, //权重-20
          reuseExistingChunk: true // a -> b -> c (直接复用不抽离)
          //filename:"customname"//还可以重新定义生成模块的名称
        }
      }
    }
  }
}
