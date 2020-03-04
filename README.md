# whale-mall-h5

<img src="./src/assets/WechatIMG14.png" alt="npm">
<img src="./src/assets/WechatIMG15.png" alt="npm">

<p algin='center'>
  <a href="#"><img src="https://img.shields.io/badge/%E9%B2%B8%E5%88%9B%E7%A7%91%E6%8A%80-%E5%95%86%E5%AE%B6%E5%95%86%E5%9F%8E-green.svg" alt="后台项目"></a>
  <a href="#"><img src="https://img.shields.io/badge/%E7%89%88%E6%9C%AC-v0.1.1-green.svg" alt="github"></a>
  
  <a href="#"><img src="https://img.shields.io/badge/npm-6.9.0-green.svg" alt="npm"></a>
 <a href="https://codecov.io/gh/GitHubGanKai/vue-jd-h5">
  <img src="https://codecov.io/gh/GitHubGanKai/vue-jd-h5/branch/master/graph/badge.svg" />
</a>
</p>

## 项目介绍

`whale-mall-h5`是一个电商 H5 页面前端项目，基于 Vue+Vant UI 实现，主要包括首页、分类页面、我的页面、购物车等。


<a href='http://gankai.gitee.io/vue-jd-h5/index'>产品原型地址</a>

<a href='http://jc.cmall.world/#/'>项目线上地址(后天部分接口已经挂了)</a>

## 搭建步骤

- 下载 node 并安装：[https://nodejs.org/dist/v8.9.4/node-v8.9.4-x64.msi](https://nodejs.org/dist/v8.9.4/node-v8.9.4-x64.msi);
- 克隆源代码到本地，使用 IDEA 打开，并完成编译;

- 在 IDEA 命令行中运行命令：npm install,下载相关依赖;

  **development**

- 在 IDEA 命令行中运行命令：npm run dev,运行项目;

  **production**

- 在 IDEA 命令行中运行命令：npm run dll:build,运行项目;


### 技术选型

| 技术              | 说明             | 官网                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Vue               | 前端框架         | [https://vuejs.org/](https://vuejs.org/)                                                                                                                                                                                                                                                                                                                                                   |
| Vue-router        | 路由框架         | [https://router.vuejs.org/](https://router.vuejs.org/)                                                                                                                                                                                                                                                                                                                                     |
| Vuex              | 全局状态管理框架 | [https://vuex.vuejs.org/](https://vuex.vuejs.org/)                                                                                                                                                                                                                                                                                                                                         |
| Vant              | 前端 UI 框架     | [https://youzan.github.io/vant/#/zh-CN/intro](https://youzan.github.io/vant/#/zh-CN/intro)                                                                                                                                                                                                                                                                                                 |
| Axios             | 前端 HTTP 框架   | [https://github.com/axios/axios](https://github.com/axios/axios)                                                                                                                                                                                                                                                                                                                           |
| vue-clipboard2    | 复制控件         | [https://github.com/Inndy/vue-clipboard2](https://github.com/Inndy/vue-clipboard2)                                                                                                                                                                                                                                                                                                         |
| vue-element-admin | 项目脚手架参考   | [https://github.com/PanJiaChen/vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)                                                                                                                                                                                                                                                                                         |
| 前端 H5 UI 地址   | UI 高保真地址    | [https://lanhuapp.com/web/#/item/project/board/detail?pid=cf279f00-9937-489e-975c-b35a1130f643&project_id=cf279f00-9937-489e-975c-b35a1130f643&image_id=764b8364-b1a0-4533-90c9-793ff584f07d](https://lanhuapp.com/web/#/item/project/board/detail?pid=cf279f00-9937-489e-975c-b35a1130f643&project_id=cf279f00-9937-489e-975c-b35a1130f643&image_id=764b8364-b1a0-4533-90c9-793ff584f07d) |

### 项目布局

```lua
src -- 源码目录
├── api -- axios网络请求定义
├── assets -- 静态图片资源文件
├── components -- 通用组件封装
├── icons -- svg矢量图片文件
├── router -- vue-router路由配置
├── store -- vuex的状态管理
├── styles -- 全局css样式
├── utils -- 工具类
├── App.vue -- 入口页面
└── views -- 前端页面
    ├── home -- 首页
    ├── classify -- 分类
    ├── login -- 登录页
    ├── mine -- 我的页面
    ├── shopCart -- 购物车页面
    └── error -- 错误页面
```

Copyright (c) 2018-2019 whatech
