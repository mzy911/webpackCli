module.exports = {
  config: {
    host: 'localhost',
    port: 3000,
    open: false,
    hot: true,
    historyApiFallback: true, // 解决hisroy路由下，页面刷新404问题
    proxy: {
      '/api': {
        target: 'http://localhost:5500',
        pathRewrite: {'^/api': ''}
        // 请求拦截器，可以设置请求等信息
        // bypass: function (req, res, proxyOptions) {
        //   if (req.headers.accept.indexOf('html') !== -1) {
        //     console.log('Skipping proxy for browser request.');
        //     return '/index.html';
        //   }
        // },
      }
    }
  }
}
