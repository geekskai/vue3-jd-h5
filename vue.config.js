// vue inspect > output.js
const path = require('path')
const webpack = require('webpack')
// npm i webpack - bundle - analyzer - D
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const dllReference = config => {
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
      var externals = {
        vue: 'Vue',
        axios: 'axios',
        'vue-router': 'VueRouter',
        vuex: 'Vuex'
      }
      config.externals(externals)
      const cdn = {
        css: [
          'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.min.css',
          'https://cdn.jsdelivr.net/npm/vant@2.2.1/lib/index.css'
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
          // vant
          'https://cdn.jsdelivr.net/npm/vant@2.2.1/lib/vant.min.js',
          // vue-awesome-swiper
          'https://cdn.jsdelivr.net/npm/vue-awesome-swiper@3.1.3/dist/vue-awesome-swiper.min.js'
        ]
      }
      config.plugin('html')
        .tap(args => {
          args[0].cdn = cdn
          args[0].minify.removeComments = false
          return args
        })
    }
    // 开启多线程打包
    config.module
      .rule('thread-loader')
      .test(/.js$/)
      .include
      .add(path.resolve(__dirname, 'src'))
      .end()
      .use('thread-loader')
      .loader('thread-loader')
      .options({
        workers: 3
      })
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
    config.module
      .rule('images')
      .test(/\.(gif|png|jpe?g|webp)$/i)
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        mozjpeg: {
          progressive: true,
          quality: 65
        },
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: [0.65, 0.90],
          speed: 4
        },
        gifsicle: {
          interlaced: false,
        },
        webp: {
          quality: 75
        }
      })
  },
  configureWebpack: config => {
    const configs = {}
    configs.plugins = []
    if (process.env.NODE_ENV === 'production') {
      configs.plugins.push(
        new BundleAnalyzerPlugin()
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