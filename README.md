<!--
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-04-03 11:51:26
 * @LastEditors: gankai
 * @LastEditTime: 2020-05-02 20:39:01
 * @FilePath: /vue-jd-h5/README.md
 -->
# jd-mall-h5

<p algin='center'>
  <a href="#"><img src="https://img.shields.io/badge/%E7%89%88%E6%9C%AC-v0.1.1-green.svg" alt="github"></a>
  
  <a href="#"><img src="https://img.shields.io/badge/npm-6.9.0-green.svg" alt="npm"></a>
 <a href="https://codecov.io/gh/GitHubGanKai/vue-jd-h5">
  <img src="https://codecov.io/gh/GitHubGanKai/vue-jd-h5/branch/master/graph/badge.svg" />
</a>
</p>


## 项目介绍

`whale-mall-h5`是一个电商H5页面前端项目，基于Vue 3.0.0-beta.1 Vant UI实现，主要包括首页、分类页面、我的页面、购物车等。

<a href='http://gankai.gitee.io/vue-jd-h5/#/index'>demo地址</a>

### 技术选型

技术 | 说明 | 官网
----|----|----
Vue | 前端框架 | [https://vuejs.org/](https://vuejs.org/)
Vue-router | 路由框架 | [https://router.vuejs.org/](https://router.vuejs.org/)
Vuex | 全局状态管理框架 | [https://vuex.vuejs.org/](https://vuex.vuejs.org/)
Vant | 前端UI框架 | [https://youzan.github.io/vant/#/zh-CN/intro](https://youzan.github.io/vant/#/zh-CN/intro)
Axios | 前端HTTP框架 | [https://github.com/axios/axios](https://github.com/axios/axios)
nprogress | 进度条控件 | [https://github.com/rstacruz/nprogress](https://github.com/rstacruz/nprogress)
vue-clipboard2 | 复制控件 | [https://github.com/Inndy/vue-clipboard2](https://github.com/Inndy/vue-clipboard2)
vue-element-admin | 项目脚手架参考 | [https://github.com/PanJiaChen/vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)
前端H5 UI地址 | UI高保真地址 | [https://lanhuapp.com/web/#/item/project/board/detail?pid=cf279f00-9937-489e-975c-b35a1130f643&project_id=cf279f00-9937-489e-975c-b35a1130f643&image_id=764b8364-b1a0-4533-90c9-793ff584f07d](https://lanhuapp.com/web/#/item/project/board/detail?pid=cf279f00-9937-489e-975c-b35a1130f643&project_id=cf279f00-9937-489e-975c-b35a1130f643&image_id=764b8364-b1a0-4533-90c9-793ff584f07d)

### 项目布局

``` lua
|-- work
    |-- .DS_Store
    |-- .editorconfig
    |-- .env.development
    |-- .env.production
    |-- .env.test
    |-- .eslintrc.js
    |-- .gitignore
    |-- README.md
    |-- babel.config.js
    |-- package.json
    |-- postcss.config.js
    |-- vue.config.js
    |-- yarn.lock
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |-- src
        |-- .DS_Store
        |-- App.vue
        |-- main.js
        |-- api
        |   |-- index.js
        |-- assets
        |   |-- icons
        |   |-- image
        |-- components
        |   |-- index.js
        |   |-- DropList
        |   |   |-- index.js
        |   |   |-- index.vue
        |   |-- ProgressBar
        |   |   |-- index.vue
        |   |-- SvgIcon
        |   |   |-- index.vue
        |   |-- picker
        |   |   |-- index.vue
        |   |-- popup
        |   |   |-- index.vue
        |   |-- scroll
        |   |   |-- ListScroll.vue
        |   |-- tabbar
        |       |-- index.vue
        |-- icons
        |   |-- index.js
        |   |-- svg
        |-- mock
        |   |-- area.js
        |   |-- mock.js
        |-- plugins
        |   |-- axios.js
        |-- router
        |   |-- index.js
        |   |-- modules
        |-- store
        |   |-- index.js
        |   |-- modules
        |       |-- cart.js
        |       |-- search.js
        |-- styles
        |   |-- base.scss
        |   |-- index.scss
        |   |-- mixin.scss
        |-- utils
        |   |-- eventBus.js
        |   |-- util.js
        |-- views
            |-- index.vue
            |-- brandSpike
            |   |-- index.vue
            |-- chainCatSpike
            |   |-- index.vue
            |-- classify
            |   |-- index.vue
            |   |-- recommend.vue
            |-- error
            |   |-- 404.vue
            |   |-- NoPermission.vue
            |-- foundGoodGoods
            |   |-- index.vue
            |-- home
            |   |-- index.vue
            |-- login
            |   |-- index.vue
            |-- loveShop
            |   |-- index.vue
            |-- mine
            |   |-- aboutAs.vue
            |   |-- addAddress.vue
            |   |-- changePassword.vue
            |   |-- countryRegion.vue
            |   |-- feedback.vue
            |   |-- forgetPassword.vue
            |   |-- helpCenter.vue
            |   |-- index.vue
            |   |-- messageCenter.vue
            |   |-- personInfo.vue
            |   |-- phoneNumberSetting.vue
            |   |-- setInfo.vue
            |   |-- setting.vue
            |   |-- settingMail.vue
            |   |-- shippingAddress.vue
            |-- myFocus
            |   |-- index.vue
            |-- newProductLaunch
            |   |-- index.vue
            |-- node
            |   |-- areaNode.vue
            |   |-- cityNode.vue
            |   |-- industryNode.vue
            |   |-- nodeApplication.vue
            |   |-- stateNode.vue
            |   |-- superNode.vue
            |-- order
            |   |-- appeal.vue
            |   |-- appealDetail.vue
            |   |-- appealRecord.vue
            |   |-- cancelOrder.vue
            |   |-- index.vue
            |   |-- orderDetail.vue
            |   |-- pendingReceipt.vue
            |   |-- toBeDelivered.vue
            |   |-- transactionDetails.vue
            |   |-- viewLogistics.vue
            |-- pool
            |   |-- advertisementPool.vue
            |   |-- consumptionPool.vue
            |   |-- nodePool.vue
            |-- premiumRanking
            |   |-- index.vue
            |-- product
            |   |-- index.vue
            |-- register
            |   |-- emailRegister.vue
            |   |-- emailRegisterTwo.vue
            |   |-- phoneRegister.vue
            |   |-- phoneRegisterTwo.vue
            |-- search
            |   |-- index.vue
            |-- shopCart
            |   |-- index.vue
            |-- specialSpike
            |   |-- index.vue
            |-- storeDetail
            |   |-- index.vue
            |-- wallet
                |-- balanceWallet.vue
                |-- consumerWallet.vue
                |-- myWallet.vue
```

## 搭建步骤
- 下载node并安装：[https://nodejs.org/dist/v8.9.4/node-v8.9.4-x64.msi](https://nodejs.org/dist/v8.9.4/node-v8.9.4-x64.msi);
- 该项目为前后端分离项目，访问本地访问接口需搭建后台环境，在分支demo上，我们采用mockjs进行开发;
- 克隆源代码到本地，使用IDEA打开，并完成编译;
- 在IDEA命令行中运行命令：npm install,下载相关依赖;
- 开发环境： 在IDEA命令行中运行命令：npm run dev,运行项目;
- 生产环境： 在IDEA命令行中运行命令：npm run build,运行项目;
## 许可证

[Apache License 2.0](https://github.com/macrozheng/mall-admin-web/blob/master/LICENSE)

Copyright (c) 2018-2019 whatech
