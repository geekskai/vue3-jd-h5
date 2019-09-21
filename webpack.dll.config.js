const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    vendor: ['swiper/dist/js/swiper.js', 'better-scroll/dist/bscroll.esm.js', 'vue-lazyload/vue-lazyload.js', 'qrcodejs2/qrcode.js'],
    util: ['lodash']
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, 'dll'),
    library: 'dll_[name]'
  },
  plugins: [
    new CleanWebpackPlugin(), // clean-wepback-plugin目前已经更新到2.0.0，不需要传参数path
    new webpack.DllPlugin({
      name: 'dll_[name]',
      path: path.join(__dirname, 'dll', '[name].manifest.json'),
      context: __dirname
    })
  ]
}
