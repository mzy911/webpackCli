module.exports = {
  config: {
    host: 'localhost',
    port: 3000,
    open: true,

    // https: true,
    // https: { // 使用自签名证书
    //   minVersion: 'TLSv1.1',
    //   key: fs.readFileSync(path.join(__dirname, './server.key')),
    //   pfx: fs.readFileSync(path.join(__dirname, './server.pfx')),
    //   cert: fs.readFileSync(path.join(__dirname, './server.crt')),
    //   ca: fs.readFileSync(path.join(__dirname, './ca.pem')),
    //   passphrase: 'webpack-dev-server',
    //   requestCert: true
    // },

    // 设置请求头
    // headers: {
    //   'X-Custom-Foo': 'bar'
    // },

    // 当使用HTML5 History API时，index.html页面可能要代替404响应。
    // 启用devServer。将historyApiFallback设置为true:
    // historyApiFallback: true,
    // historyApiFallback: {
    //   rewrites: [
    //     { from: /^\/$/, to: '/views/landing.html' },
    //     { from: /^\/subpage/, to: '/views/subpage.html' },
    //     { from: /./, to: '/views/404.html' }
    //   ]
    // },

    // 可以拦截接口
    // before: function (app) {
    //   // 直接自己造数据，不访问后端接口
    //   app.get('/api/user', function (req, res) {
    //     // 请求成功返回数据
    //     res.json({ app: 'app', name: 'before' })
    //   })
    // },

    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' }
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
