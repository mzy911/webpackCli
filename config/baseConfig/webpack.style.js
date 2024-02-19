/**
 * 处理 style 样式
 * 1、webpack 默认使用 style-loader 将 css 被一块打包 bundle（js模块-加载较慢）
 * 2、使用 plugins 插件：new MiniCssExtractPlugin(options) 需要将css打包成单独的文件（提高加载速度）
 */
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

let cssExtract = "style-loader" 
if (process.env.NODE_ENV === "production"){
  cssExtract = MiniCssExtractPlugin.loader
}

const getStyleLoaders = (pre) => {
  return [
    // style-loader：动态创建一个 Style 标签，里面放置 Webpack 中 Css 模块内容
    // 1、将结果以style标签的方式插入DOM树中
    // 2、作用如下，以 style 的形式插入到 header 中
    // module.exports = function (content) {
    //   return `
    //     const style = document.createElement('style');
    //     style.innerHTML = '${content}';
    //     document.head.appendChild(style);
    //   `;
    // };

    // mini-css-extract-plugin：代替 style-loader 功能
    // 1、将 CSS 提取到单独的文件中
    // 2、为每个包含 CSS 的 JS 文件创建一个 CSS 文件
    // 3、它支持按需加载 CSS 和 SourceMaps
    cssExtract,

    // css-loader：将 Css 文件编译成 Webpack 能识别的模块(js模块)
    // 1、从 css 文件中读取 css 代码，并将解析成 JavaScript 可识别的模块
    // - 处理导入 @import 语句，递归检查导入的 css 文件，并将他们合到主 CSS 文件中
    // - 处理 url() 和 背景图片，将 background 资源转为模块，在 webpack 中进行加载和处理
    // - 编译 css 代码
    // 2、导出处理后的 JavaScript 模块
    // - 返回处理好、完整的 "JavaScript" 模块
    // - 交给 style-loader 将结果以 style 标签的方式插入 DOM 树中
    "css-loader",

    // 解决浏览器样式的兼容性问题
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            [
              "postcss-preset-env",
              {
                browsers: ["last 3 versions", "> 1%", "not dead"]
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
    // 解析处理less文件（less、less-loader ）
    {
      test: /\.less$/,
      use: getStyleLoaders("less-loader")
    },
    // 解析处理sass、scss文件（sass、sass-loader ）
    {
      test: /\.s[ac]ss$/,
      use: getStyleLoaders("sass-loader")
    }
  ]
}
