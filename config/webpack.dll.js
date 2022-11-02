const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    jquery: ['jquery'],
    lodash: ['lodash']
  },
  output: {
    path: path.resolve(__dirname, '../dll'),
    filename: '[name].js',
    library: '[name]_[hash]'
    // clean: true
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.resolve(__dirname, '../dll/[name]_manifest.json')
    })
  ]
}
