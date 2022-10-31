const svgToMiniDataURI = require('mini-svg-data-uri')

module.exports = {
  config: [
    // 通用资源分类
    {
      test: /\.(png|jpg|gif|txt)$/i,
      type: 'asset',
      parser: {
        dataUrlCondition: {
          maxSize: 4 * 1024 // 4kb
        }
      }
    },
    // 处理其他资源
    {
      test: /\.(ttf|woff2?|mp3|mp4)$/i,
      type: 'asset/resource'
    }
  ]
}
