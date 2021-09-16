const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
// eslint-disable-next-line no-unused-vars
const webpack = require('webpack')
const path = require('path')
// const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  // 资源路径
  publicPath: '/',
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.transformAssetUrls = {
          img: 'src',
          image: 'xlink:href',
          'b-avatar': 'src',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src'
        }
        return options
      })
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') return
    return {
      plugins: [
        new PrerenderSPAPlugin({
          // 生成文件的路径，也可以与webpakc打包的一致。
          // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
          staticDir: path.join(__dirname, 'dist'),
          // outputDir: path.join(__dirname, 'fanfanmedia'),
          // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
          routes: ['/home','/logon','/business','/case','/school','/about',
            '/business/VideoMaking','/business/LiveBusiness','/business/BrandMarket','/business/ElectronicBusiness',
          '/admin','/admin/case','/admin/about','/admin/school'],
          // 这个很重要，如果没有配置这段，也不会进行预编译
          renderer: new Renderer({
            inject: { //默认挂在window.__PRERENDER_INJECTED对象上，可以通过window.__PRERENDER_INJECTED.foo在预渲染页面取值
              foo: 'bar'
            },
            headless: false,
            // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
            renderAfterDocumentEvent: 'render-event'//等到事件触发去渲染，此处我理解为是Puppeteer获取页面的时机
          })
        }),
        // new CompressionPlugin({
        //   test:/\.js$|\.html$|\.css/,
        //   threshold:10240,
        //   deleteOriginalAssets:false,
        // })
      ]
    }
  },
}
