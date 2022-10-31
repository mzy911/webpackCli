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
  ]
}
