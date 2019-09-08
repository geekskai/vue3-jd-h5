const path = require('path')
// https://webpack.docschina.org/plugins/compression-webpack-plugin/
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// vue inspect > output.js
// 是否使用gzip
const productionGzip = true
// 需要gzip压缩的文件后缀
const productionGzipExtensions = ['js', 'css']

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  productionSourceMap: false,
  chainWebpack: config => {
    config.module.rules.delete('svg') // 重点:删除默认配置中处理svg,
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('src/icons')) // 处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('router', resolve('src/router'))
      .set('utils', resolve('src/utils'))
      .set('static', resolve('src/static'))
      .set('store', resolve('src/store'))
      .set('~', resolve('src/views'))
    // 压缩代码
    config.optimization.minimize(true)
    // 分割代码
    config.optimization.splitChunks({
      chunks: 'all'
    })
  },
  configureWebpack: config => {
    const configs = {}
    if (process.env.NODE_ENV === 'production') {
      // 1. 生产环境npm包转CDN
      //  configs.externals = externals
      configs.plugins = []
      // 2. 构建时开启gzip，降低服务器压缩对CPU资源的占用，服务器也要相应开启gzip
      productionGzip && configs.plugins.push(
        new CompressionWebpackPlugin({
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 8192, // 超过8192KB的数据进行压缩
          deleteOriginalAssets: true, // 打包完成之后是否删除原文件 默认false
          minRatio: 0.8 // 只有压缩率比这个值小的资源才会被处理 默认0.8
        })
      )
    }
    if (process.env.NODE_ENV === 'development') {
      /**
       * 关闭host check，禁用webpack热重载检查 解决热更新失效问题方便使用ngrok之类的内网转发工具
       */
      configs.devServer = {
        disableHostCheck: true
      }
    }
    return configs
  }
}
