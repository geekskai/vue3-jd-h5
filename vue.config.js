// vue inspect > output.js
const path = require('path')
const webpack = require('webpack')
// npm i webpack - bundle - analyzer - D
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
// https://webpack.docschina.org/plugins/compression-webpack-plugin/
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const dllReference = (config) => {
  config.plugin('vendorDll')
    .use(webpack.DllReferencePlugin, [{
      context: __dirname,
      manifest: require('./dll/vendor.manifest.json')
    }])

  config.plugin('utilDll')
    .use(webpack.DllReferencePlugin, [{
      context: __dirname,
      manifest: require('./dll/util.manifest.json')
    }])

  config.plugin('addAssetHtml')
    .use(AddAssetHtmlPlugin, [
      [
        {
          filepath: require.resolve(path.resolve(__dirname, 'dll/vendor.dll.js')),
          outputPath: 'dll',
          publicPath: '/dll'
        },
        {
          filepath: require.resolve(path.resolve(__dirname, 'dll/util.dll.js')),
          outputPath: 'dll',
          publicPath: '/dll'
        }
      ]
    ])
    .after('html')
}

// 是否使用gzip
const productionGzip = true
// 需要gzip压缩的文件后缀
const productionGzipExtensions = ['js', 'css']
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
    if (process.env.NODE_ENV === 'production') {
      dllReference(config)
    }
    config.module.rules.delete('svg') // 重点:删除默认配置中处理svg,
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(path.resolve(__dirname, 'src/icons')) // 处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    config.module.rule('svg-inline-loade').test(/\.svg$/).use('svg-inline-loade').loader('svg-inline-loader')
    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(path.resolve(__dirname, 'src/icons'))
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    // 压缩代码
    config.optimization.minimize(true)
    // 分割代码
    config.optimization.splitChunks({
      chunks: 'all'
    })
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(
        options,
        {
          mozjpeg: { progressive: true, quality: 65 },
          optipng: { enabled: false },
          pngquant: { quality: '65-90', speed: 4 },
          gifsicle: { interlaced: false },
          webp: { quality: 75 },
          limit: 10
        }
      ))
    // { limit: 1024 }
    var externals = {
      vue: 'Vue',
      axios: 'axios',
      'vue-router': 'VueRouter',
      vuex: 'Vuex'
    }
    config.externals(externals)
    const cdn = {
      css: [
        'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.min.css'
      ],
      js: [
        // vue
        'https://unpkg.com/vue@2.6.10/dist/vue.min.js',
        // vue-router
        'https://unpkg.com/vue-router@3.1.3/dist/vue-router.min.js',
        // vuex
        'https://unpkg.com/vuex@3.1.1/dist/vuex.min.js',
        // axios
        'https://unpkg.com/axios@0.19.0/dist/axios.min.js',
        // vue-lazyload
        'https://unpkg.com/vue-lazyload/vue-lazyload.js',
        // vue-awesome-swiper
        'https://cdn.jsdelivr.net/npm/vue-awesome-swiper@3.1.3/dist/vue-awesome-swiper.min.js'
      ]
    }
    config.plugin('html')
      .tap(args => {
        args[0].cdn = cdn
        return args
      })
  },
  configureWebpack: config => {
    const configs = {}
    if (process.env.NODE_ENV === 'production') {
      // 1. 生产环境npm包转CDN
      //  configs.externals = externals
      configs.plugins = [
        new BundleAnalyzerPlugin()
      ]
      // 2. 构建时开启gzip，降低服务器压缩对CPU资源的占用，服务器也要相应开启gzip
      productionGzip && configs.plugins.push(
        new CompressionWebpackPlugin({
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 0, // 超过8192KB的数据进行压缩
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
