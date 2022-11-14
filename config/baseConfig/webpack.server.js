module.exports = {
  config: {
    host: 'localhost', // 0.0.0.0 同局域网内可以被访问到
    port: 3000,
    open: false,
    /**
     * 模块热更新(默认为true)
     * 1、hot为false
     *    a、css、js的 '任何改动'，整个项目重新打包
     *    b、浏览器刷新整个页面
     * 2、hot为true
     *    a、改动css，会实现"热更新"(style-lodaer：局部更新)
     *    b、改动js依然会重新打包整个项目、刷新浏览器
     *    c、手动实现"热更新"：module.hot.accept('@/js/a.js', callback)
     *    d、热更新插件
     *       vue：
     *          vue-loader：处理vue项目热更新
     *       react：
     *          react-hot-loader：旧插件
     *          @pmmmwh/react-refresh-webpack-plugin react-refresh：最新插件
     * 3、webpack4中还需要使用 new webpack.HotModuleReplacementPlugin() 插件
     */
    hot: true,

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
    historyApiFallback: true, // 解决history路由页面刷新404问题

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
