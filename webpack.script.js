module.exports = {
  config: [
    {
      test: /\.ts$/,
      use: [
        {
          // 指定加载器
          loader: 'babel-loader',
          options: {
            // 设置预定义环境
            presets: [
              [
                // 指定环境的插件
                '@babel/preset-env',
                // 配置信息
                {
                  // 兼容浏览器的版本
                  targets: {
                    chrome: '88', // 转为 es6
                    ie: '11' // 转为es5
                  },
                  // 提供 js 的运行环境（ 垫片：primise、高级语法...... ）
                  corejs: 3,
                  // 使用 corejs 的方式：usage-按需加载
                  useBuiltIns: 'usage'
                }
              ]
            ]
          }
        },
        'ts-loader'
      ],
      exclude: /node_modules/
    }
  ]
}
