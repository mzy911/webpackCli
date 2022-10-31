/**
 * 1、默认css被一块打包bundle中，混入js中
 * 2、将css 打包成单独的文件
 * 3、不再使用 style-loader
 * 4、需要配置在 plugins 中调用：new MiniCssExtractPlugin(options)
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let cssExtract = 'vue-style-loader' // 解析出来的css，插入html中
if (process.env.NODE_ENV === 'production') {
  cssExtract = MiniCssExtractPlugin.loader
}

const getStyleLoaders = (pre) => {
  return [
    cssExtract,
    'css-loader', // 将css资源编译到common.js模块中
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            [
              'postcss-preset-env',
              {
                browsers: ['last 3 versions', '> 1%', 'not dead']
              }
            ]
          ]
        }
      }
    },
    pre
  ].filter(Boolean)
}

module.exports = {
  config: [
    // 处理、解析css文件
    {
      test: /\.css$/,
      use: getStyleLoaders()
    },
    // 解析、处理 less 文件
    {
      test: /\.less$/,
      use: getStyleLoaders('less-loader')
    },
    {
      test: /\.s[ac]ss$/,
      use: getStyleLoaders('sass-loader')
    }
  ]
}
