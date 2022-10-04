const svgToMiniDataURI = require('mini-svg-data-uri')

module.exports = {
  config: [
    /**
     * webpack4 配置规则
     *   1、file-loader ：将文件发送到输出目录
     *   2、url-loader ：将文件作为 data URI 内联到 bundle 中
     *   3、raw-loader ：将文件导入为字符串（例如模版字符串‘原样’返回）
     */
    // {
    //   test: /\.(jpg|jpeg|png|bmp|gif)$/,
    //   use: {
    //     loader: 'url-loader', // 依赖 file-loader
    //     options: {
    //       outputPath: 'images', // 指定输出目录：dist/images
    //       name: '[name]-[hash:4].[ext]', // 打包输出图片名称
    //       limit: 10 * 1024 // 超出10KB单独打包，会调用file-loader
    //     }
    //   }
    // }

    /**
     * webpack5 的配置形式
     *   1、三种形式
     *      a、asset/resource ：等同于 file-loader
     *      b、asset/inline ：等同于 url-loader（默认base64编译）
     *      c、asset/source ：等同于 raw-loader
     *   2、指定文件输出的位置：
     *      a、方式一：当前loader处：generator.filename
     *      b、方式二：统一出口处处理：output.assetModuleFilename
     *   3、自定义 data URI 生成器
     *      a、默认是呈现为使用 Base64 算法编码的文件内容
     *      b、自定义编码算法
     *   4、通用资源类型
     *      a、小于 8kb 默认使用 asset/inline
     *      b、大于 8kb 默认使用 asset/resource
     *      c、可以通过 parser.dataUrlCondition 自定义大小
     */
    // {
    //   test: /\.(svg)$/i,
    //   type: 'asset/resource',
    //   generator: {
    //     // 指定文件的输出位置
    //     filename: 'static/[hash][ext][query]'
    //   }
    // },
    // {
    //   test: /\.(png)$/i,
    //   type: 'asset/inline',
    //   generator: {
    //     // 自定义编码算法
    //     dataUrl: (content) => {
    //       content = content.toString()
    //       return svgToMiniDataURI(content)
    //     }
    //   }
    // },
    // {
    //   test: /\.txt/,
    //   type: 'asset/resource',
    //   generator: {
    //     // 指定文件的输出位置
    //     filename: 'static/[hash][ext][query]'
    //   }
    // },
    // 通用资源分类
    {
      test: /\.(png|jpg|gif|txt)$/i,
      type: 'asset',
      parser: {
        dataUrlCondition: {
          maxSize: 4 * 1024 // 4kb
        }
      }
      // generator: {
      // 指定文件的输出位置
      // filename: 'static/images/[hash:10][ext][query]',
      // 自定义编码算法:默认base64
      //   dataUrl: (content) => {
      //     content = content.toString()
      //     return svgToMiniDataURI(content)
      //   }
      // }
    },
    // 处理其他资源
    {
      test: /\.(ttf|woff2?|mp3|mp4)$/i,
      type: 'asset/resource'
    }

    /**
     * 如果在 webpack5 中使用了 webpack4 的配置规则
     *   1、配置 type: 禁用 webpack5 的默认规则
     *   2、配置 dependency：让某种规则失效
     *   3、按照 webpack4 进行配置
     */
    // {
    //   test: /\.(png|jpg|gif)$/i,
    //   dependency: { not: ['url'] }, // 无论大小都要输出，禁用'file-loader'
    //   use: [
    //     {
    //       loader: 'url-loader',
    //       options: {
    //         limit: 1024 * 100 // 超出limit单独输出
    //       }
    //     }
    //   ],
    //   type: 'javascript/auto' // 禁用 webpack5 的默认规则
    // }
  ]
}
