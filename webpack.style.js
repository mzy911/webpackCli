module.exports = {
  config: [
    // 处理、解析css文件
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    // 解析、处理 less 文件
    {
      test: /\.less$/,
      use: [
        'style-loader', // 将js中css通过创建style标签添加到html中
        'css-loader', // 将css资源编译到common.js模块中
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                [
                  'postcss-preset-env',
                  {
                    browsers: 'last 3 versions'
                  }
                ]
              ]
            }
          }
        },
        'less-loader'
      ]
    },
    {
      test: /\.s[ac]ss$/,
      use: [
        'style-loader', // 将js中css通过创建style标签添加到html中
        'css-loader', // 将css资源编译到common.js模块中
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                [
                  'postcss-preset-env',
                  {
                    browsers: 'last 3 versions'
                  }
                ]
              ]
            }
          }
        },
        'sass-loader'
      ]
    }
  ]
}
