![](https://gitee.com/gankai/vue-jd-h5/raw/master/src/assets/image/home_img.jpg)
<!-- ![](https://gitee.com/gankai/vue-jd-h5/raw/master/src/assets/image/WechatIMG15.png) -->


# vue3-jd-h5

<p algin='center'>
  <a href="#"><img src="https://img.shields.io/badge/%E7%89%88%E6%9C%AC-v0.1.1-green.svg" alt="github"></a>
  <a href="#"><img src="https://img.shields.io/badge/npm-6.9.0-green.svg" alt="npm"></a>
 <a href="https://codecov.io/gh/GitHubGanKai/vue-jd-h5">
  <img src="https://codecov.io/gh/GitHubGanKai/vue-jd-h5/branch/master/graph/badge.svg" />
</a>
</p>

<!-- <div style="text-align:center">
<img style='width:200px;height:300px;' src='src/assets/image/title-gif.gif' />
</div> -->


##  项目介绍

`vue3-jd-h5`是一个电商H5页面前端项目，基于**Vue 3.0.0-beta.1** +  Vant 实现，主要包括首页、分类页面、我的页面、购物车等。

📖本地线下代码**vue2.6**在分支<a target='_blank' href='https://github.com/GitHubGanKai/vue-jd-h5/blob/demo/README.md'>demo</a>中，使用**mockjs**数据进行开发，效果图请点击🔗<a target='_blank' href='http://gankai.gitee.io/vue-jd-h5/index'>这里</a>

⚠️master分支是线上生产环境代码，因为部分后台接口已经挂了😫，可能无法看到实际效果。

📌 本项目还有很多不足之处，如果有想为此做贡献的伙伴，也欢迎给我们提出PR，或者issue ；

🔑 本项目是免费开源的，如果有伙伴想要在次基础上进行二次开发，可以clone或者fork整个仓库，如果能帮助到您，我将感到非常高兴，如果您觉得这个项目不错还请给个start！🙏


## vue3搭建步骤

1. 首先,在本地选择一个文件，将代码clone到本地：

```bash
git clone https://github.com/GitHubGanKai/vue-jd-h5.git 
```

2. 查看所有分支：

```bash
gankaideMacBook-Pro:vue-jd-h5 gankai$ git branch -a
  demo
  demo_vue3
  dev
  feature
  gh-pages
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/demo
  remotes/origin/demo_vue3
  remotes/origin/dev
  remotes/origin/feature
  remotes/origin/gh-pages
  remotes/origin/master
```

3. 切换到分支**demo_vue3**开始进行开发！

4. 在 IDEA 命令行中运行命令：npm install,下载相关依赖;

5. 🔧 开发环境 在 IDEA 命令行中运行命令：`npm run dev`,运行项目;

6. 📦在 IDEA 命令行中运行命令：`npm run dll:build`,打包项目;


![](https://gitee.com/gankai/vue-jd-h5/raw/master/src/assets/image/qrcode.png)

## 项目的初始化

💡如果你在安装包的时候速度比较慢，那是因为NPM服务器在国外，这里给大家推荐一个可以随时切换NPM镜像的工具👉[NRM](https://www.npmjs.com/package/nrm)，有时候，我们开发的时候，为了加快安装包的安装速度，我们需要切换镜像源为国内的，但是，如果需要发布一些自己的组件到NPM的时候，又要来回切换回来，有了这个我们就方便多了！使用`$ npm install -g nrm`全局安装，然后，可以使用`nrm ls` 查看所有镜像：

```bash
gankaideMacBook-Pro:~ gankai$ nrm ls

  npm -------- https://registry.npmjs.org/
* yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
  taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/
```

如果需要使用淘宝镜像，执行： `nrm use taobao`  可以随时切换源，当然了还有一个npm包版本管理工具[nvm](https://github.com/nvm-sh/nvm)，主要是管理包版本的，如果有兴趣的小伙伴，可以自己去了解一下，这里就不啰嗦了😊！

### 安装体验 vue3 新特性。

进入刚才clone下来的项目根目录，安装`@vue/composition-api` 体验 vue3 新特性。

`npm`安装：

```javascript
npm install @vue/composition-api --save
```

`yarn`安装：

```javascript
yarn add @vue/composition-api
```

**CDN**

```html
<script src="https://unpkg.com/@vue/composition-api/dist/vue-composition-api.umd.js"></script>
```

通过全局变量 `window.vueCompositionApi` 来使用。

### 使用

在使用任何 `@vue/composition-api` 提供的能力前，必须先通过 `Vue.use()` 进行安装:

在入口文件`main.js`中：

```javascript
import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';

Vue.use(VueCompositionApi);
```

安装插件后，您就可以使用新的 [Composition API](https://vue-composition-api-rfc.netlify.com/) 来开发组件了。

⚠️目前vue官方为vue-cli提供了一个插件[vue-cli-plugin-vue-next](https://github.com/vuejs/vue-cli-plugin-vue-next)，你也可以直接在项目中直接添加最新的版本！

```bash
# in an existing Vue CLI project
vue add vue-next
```

**如果有想从零开始体验新版本的小伙伴可以采用这种方法进行安装，由于我们这个项目有依赖第三方库，如果全局安装，整个项目第三方UI库都无法运行！所以我们还是选择采用安装`@vue/composition-api`来进行体验，从而慢慢过渡到vue3最新版本！**

## Vue 3.0 Composition-API基本特性体验

###  setup函数

`setup()` 函数是 vue3 中专门为组件提供的新属性，相当于2.x版本中的`created`函数,之前版本的组件逻辑选项，现在都统一放在这个函数中处理。它为我们使用 vue3 的 `Composition API` 新特性提供了统一的入口,具体可以参考如下：

|      vue2.x      |      vue3       |
| :--------------: | :-------------: |
| ~~beforeCreate~~ |   setup(替代)   |
|   ~~created~~    |   setup(替代)   |
|   beforeMount    |  onBeforeMount  |
|     mounted      |    onMounted    |
|   beforeUpdate   | onBeforeUpdate  |
|     updated      |    onUpdated    |
|  beforeDestroy   | onBeforeUnmount |
|    destroyed     |   onUnmounted   |
|  errorCaptured   | onErrorCaptured |

**setup** 函数会在相对于2.x来说，会在 **beforeCreate** 之后、**created** 之前执行！


#### **新钩子**

除了2.x生命周期等效项之外，Composition API还提供了以下debug hooks：

- `onRenderTracked`
- `onRenderTriggered`

两个钩子都收到`DebuggerEvent`类似于`onTrack`和`onTrigger`观察者的选项：

```javascript
export default {
  onRenderTriggered(e) {
    debugger
    // inspect which dependency is causing the component to re-render
  }
}
```


### 依赖注入

`provide`和`inject`启用类似于2.x `provide/inject`选项的依赖项注入。两者都只能在`setup()`当前活动实例期间调用。

```javascript
import { provide, inject } from '@vue/composition-api'

const ThemeSymbol = Symbol()

const Ancestor = {
  setup() {
    provide(ThemeSymbol, 'dark')
  }
}

const Descendent = {
  setup() {
    const theme = inject(ThemeSymbol, 'light' /* optional default value */)
    return {
      theme
    }
  }
}
```

`inject`接受可选的默认值作为第二个参数。如果未提供默认值，并且在Provide上下文中找不到该属性，则`inject`返回`undefined`。



**注入 响应式数据**



为了保持提供的值和注入的值之间的响应式，可以使用`ref`

```javascript
// 在父组建中
const themeRef = ref('dark')
provide(ThemeSymbol, themeRef)

// 组件中
const theme = inject(ThemeSymbol, ref('light'))
watchEffect(() => {
  console.log(`theme set to: ${theme.value}`)
})
```



#### setup函数

1. 因为`setup`函数接收2个形参，第一个是`initProps`，即父组建传送过来的值！，第二个形参是一个**上下文对象**  

`setupContext`，这个对象的主要属性有 ：

```javascript
attrs: Object    				// 等同 vue 2.x中的 this.$attrs
emit: ƒ ()       				// 等同 this.$emit()
isServer: false  				// 是否是服务端渲染
listeners: Object				// 等同 vue2.x中的this.$listeners
parent: VueComponent		// 等同 vue2.x中的this.$parent
refs: Object						// 等同 vue2.x中的this.$refs
root: Vue								// 这个root是我们在main.js中，使用new Vue()的时候，返回的全局唯一的实例对象，注意别和单文件组建中的this混淆了
slots: {}								// 等同 vue2.x中的this.$slots
ssrContext:{}						// 服务端渲染相关
```

⚠️**注意**：在 `setup()` 函数中无法访问到 `this`的，不管这个`this`指的是全局的的vue对象(即：在main.js 中使用new生成的那个全局的vue实例对象)，还是指单文件组建的对象。

但是，如果我们想要访问当前组件的实例对象，那该怎么办呢？我们可以引入`getCurrentInstance`这个api,返回值就是当前组建的实例！

```javascript
import { computed, getCurrentInstance } from "@vue/composition-api";
export default {
  name: "svg-icon",
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  },
  setup(initProps,setupContext) { 
    // ⚠️注意，如果是通过vue add vue-next添加的这个地方需要结构出ctx
    const ctx = getCurrentInstance();
    const iconName = computed(() => {
      return `#icon-${initProps.iconClass}`;
    });
    const svgClass = computed(() => {
      if (initProps.className) {
        return "svg-icon " + initProps.className;
      } else {
        return "svg-icon";
      }
    });
    return {
      iconName,
      svgClass
    };
  }
};
</script>

```



#### Ref自动展开（unwrap）

`ref()` 函数用来根据给定的值创建一个**响应式**的**数据对象**，`ref()` 函数调用的返回值是一个被包装后的对象（RefImpl），这个对象上只有一个 `.value` 属性，如果我们在`setup`函数中，想要访问的对象的值，可以通过`.value`来获取，但是如果是在`<template>`**模版中**，直接访问即可，不需要`.value`！

```javascript
import { ref } from '@vue/composition-api'

setup() {
    const active = ref("");
    const timeData = ref(36000000);
    
     return {
         active,
       	 timeData
     }
}
```



```html
<template>
  <p>活动状态：{{active}}</p>
  <p>活动时间：{{timeData}}</p>
</template>
```



⚠️注意：不要将`Array`放入`ref`中，数组索引属性无法进行自动展开，也**不要**使用 `Array` 直接存取 `ref` 对象:

```javascript
const state = reactive({
  list: [ref(0)],
});
// 不会自动展开, 须使用 `.value`
state.list[0].value === 0; // true

state.list.push(ref(1));
// 不会自动展开, 须使用 `.value`
state.list[1].value === 1; // true
```



当我们需要操作DOM的时候，比如我们在项目中使用`swiper`需要获取DOM,那么我们还可以这样👇！

```javascript
  <div class="swiper-cls">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(img ,index) in tabImgs.value" :key="index">
          <img class="slide_img" @click="handleClick(img.linkUrl)" :src="img.imgUrl" />
        </swiper-slide>
      </swiper>
   </div>
```

然后在`setup`函数中定义一个`const mySwiper = ref(null);`，之前在vue2.x中，我们是通过`this.$refs.mySwiper`来获取DOM对象的，现在也可以使用`ref`函数代替，返回的`mySwiper`要和`template`中绑定的`ref`相同！



```javascript
import { ref, onMounted } from "@vue/composition-api";
setup(props, { attrs, slots, parent, root, emit, refs }) {
	const mySwiper = ref(null);
  onMounted(() => {
    // 通过mySwiper.value 即可获取到DOM对象！
    // 同时也可以使用vue2.x中的refs.mySwiper ，他其实mySwiper.value 是同一个DOM对象！
    mySwiper.value.swiper.slideTo(3, 1000, false);
  });
	return {
    mySwiper
  }
}
```



####  reactive

`reactive()` 函数接收一个普通对象，返回一个响应式的数据对象，等价于 `vue 2.x` 中的 `Vue.observable()` 函数，`vue 3.x` 中提供了 `reactive()` 函数，用来创建响应式的数据对象`Observer`，`ref`中我们一般存放的是**基本类型数据**，如果是引用类型的我们可以使用`reactive`函数。

当`reactive`函数中，接收的类型是一个`Array`数组的时候，我们可以在这个`Array`外面在用对象包裹一层，然后给对象添加一个属性比如：`value`（这个属性名你可以自己随便叫什么），他的值就是这个数组！

```javascript
<script>
// 使用相关aip之前必须先引入
import { ref, reactive } from "@vue/composition-api";
export default {
  name: "home",
  setup(props, { attrs, slots, parent, root, emit, refs }) {
    
    const active = ref("");
    const timeData = ref(36000000);
    // 将tabImgs数组中每个对象都变成响应式的对象 
    const tabImgs = reactive({
      value: []
    });
    const ball = reactive({
      show: false,
      el: ""
    });
    return {
      active,
      timeData,
      tabImgs,
      ...toRefs(ball),
    };
  }
};
</script>
```

那么在`template`模版中我们想要访问这个数组的时候就是需要使用`.value`的形式来获取这个数组的值。

```html
<template>
    <div class="swiper-cls">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(img ,index) in tabImgs.value" :key="index">
          <img class="slide_img" @click="handleClick(img.linkUrl)" :src="img.imgUrl" />
        </swiper-slide>
      </swiper>
    </div>
</template>
```



#### isRef

`isRef()` 用来判断某个值是否为 `ref()` 创建出来的对象；当需要展开某个可能为 `ref()` 创建出来的值的时候，可以使用`isRef`来判断！



```javascript
import { isRef } from '@vue/composition-api'

setup(){
	const headerActive = ref(false);
  // 在setup函数中，如果是响应式的对象，在访问属性的时候，一定要加上.value来访问！
  const unwrapped = isRef(headerActive) ? headerActive.value : headerActive
  return {}
}
```



#### toRefs

`toRefs`函数会将**响应式对象**转换为**普通对象**，其中返回的对象上的每个属性都是指向原始对象中相应属性的`ref`，将一个对象上的所有属性转换成响应式的时候，将会非常有用！



```javascript
import { reactive,toRefs } from '@vue/composition-api'
setup(){
  // ball 是一个 Observer
	 const ball = reactive({
      show: false,
      el: ""
    });
  // ballToRefs 就是一个普通的Object，但是ballToRefs里面的所有属性都是响应式的（RefImpl）
  const ballToRefs  = toRefs(ball)
  // ref和原始属性是“链接的”
  ball.show = true
  console.log(ballToRefs.show) // true
  ballToRefs.show.value = false
  console.log(ballToRefs.show) // false
  return {
    ...ballToRefs    // 将ballToRefs对象展开，我们就可以直接在template模板中直接这样使用这个对象上的所有属性！
  }
}

```



点击添加按钮，小球飞入购物车动画：

```html
<template>  
  <div class="ballWrap">
      <transition @before-enter="beforeEnter" @enter="enter" @afterEnter="afterEnter">
        <!-- 可以直接使用show-->
        <div class="ball" v-if="show">
          <li class="inner">
            <span class="cubeic-add" @click="addToCart($event,item)">
              <svg-icon class="add-icon" icon-class="add"></svg-icon>
            </span>
          </li>
        </div>
      </transition>
   </div>
</template>
```



#### computed

`computed`函数的第一个参数，可以接收一个函数，或者是一个对象！如果是函数默认是`getter`函数，并为`getter`返回的值返回一个只读的`ref`对象。



```javascript
import { computed } from '@vue/composition-api'

const count = ref(1)
// computed接收一个函数作为入参
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // 错误，plusOne是只读的！
```



或者也可以是个函数，可以使用具有`get`和`set`功能的对象来创建可写`ref`对象。

```javascript
const count = ref(1)
// computed接收一个对象作为入参
const plusOne = computed({
  get: () => count.value + 1,
  set: val => {
    count.value = val - 1
  }
})

plusOne.value = 1
console.log(count.value) // 0
```



####  watch

`watch(source, cb, options?)`

该`watch`API与2.x `this.$watch`（以及相应的`watch`选项）完全等效。

**观察单一来源**

观察者数据源可以是返回值的getter函数，也可以直接是ref：

```javascript
// watching a getter函数
const state = reactive({ count: 0 })
watch(
  () => state.count, // 返回值的getter函数
  (count, prevCount,onCleanup) => {
    /* ... */
  }
)

// directly watching a ref
const count = ref(0)
watch(
  count, // 也可以直接是ref
  (count, prevCount,onCleanup) => {
  /* ... */
})
```

**watch多个来源**

观察者还可以使用数组同时监视多个源：

```javascript
const me = reactive({ age: 24, name: 'gk' })
// reactive类型的
watch(
  [() => me.age, () => me.name], // 监听reactive多个数据源，可以传入一个数组类型，返回getter函数
  ([age, name], [oldAge, oldName]) => {
    console.log(age) // 新的 age 值
    console.log(name) // 新的 name 值
    console.log(oldAge) // 旧的 age 值
    console.log(oldName) // 新的 name 值
  },
  // options
  {
    lazy: true //默认 在 watch 被创建的时候执行回调函数中的代码，如果lazy为true ，怎创建的时候，不执行！
  }
)

setInterval(() => {
  me.age++
  me.name = 'oldMe'
}, 7000000)

// ref类型的
const work = ref('web')
const addres = ref('sz')
watch(
  [work,address],  // 监听多个ref数据源
  ([work, addres], [oldwork, oldaddres]) => {
   //......
  },
  {
    lazy: true 
  }
)

```



`watch`和组件的生命周期绑定，当组件卸载后，watch也将自动停止。在其他情况下，它返回停止句柄，可以调用该句柄以显式停止观察程序：

```javascript
// watch 返回一个函数句柄，我们可以决定该watch的停止和开始！
const stopWatch = watch(
  [work,address],  // 监听多个ref数据源
  ([work, addres], [oldwork, oldaddres]) => {
   //......
  },
  {
    lazy: true 
  }
)

// 调用停止函数，清除对work和address的监视
stopWatch()
```



### 在 watch 中清除无效的异步任务



```html
<div class="search-con">
  <svg-icon class="search-icon" icon-class="search"></svg-icon>
  <input v-focus placeholder="搜索、关键词" v-model="searchText" />
</div>
```

```javascript
setup(props, { attrs, slots, parent, root, emit, refs }){
  const CancelToken = root.$http.CancelToken 
  const source = CancelToken.source() 
	// 定义响应式数据 keywords
	const searchText = ref('')

  // 向后台发送异步请求
	const getSearchResult = searchText => {
 	root.$http.post("http://test.happymmall.com/search",{text:searchText}, {
        cancelToken: source.token
    }).then(res => {
    // .....
    });
  return source.cancel
}

// 定义 watch 监听
watch(
  searchText,
  (searchText, oldSearchText, onCleanup) => {
    // 发送axios请求，并得到取消axios请求的 cancel函数
    const cancel = getSearchResult(searchText)

    // 若 watch 监听被重复执行了，则会先清除上次未完成的异步请求
    onCleanup(cancel)
  },
  // watch 刚被创建的时候不执行
  { lazy: true }
)

  return {
    searchText
  }
}
```



## 最后

趁着五一假期，有时间可以熟悉以下vue3的新特性，可以用这个项目练练手！但是实际工作中，个人觉得没必要从Vue2.x升级到vue3，以下是个人分析：

vue3新增 Composition API。新的 API 兼容 Vue2.x，只需要在项目中单独引入 @vue/composition-api 这个包就能够解决我们目前 Vue2.x 中存在的一些个别难题比如：如何组织逻辑，以及如何在多个组件之间抽取和复用逻辑。基于 Vue 2.x 目前的 API 我们有一些常见的逻辑复用模式，但都或多或少存在一些问题：

这些模式包括：

1. Mixins
2. 高阶组件 (Higher-order Components, aka HOCs)
3. Renderless Components (基于 scoped slots / 作用域插槽封装逻辑的组件）

总体来说，以上这些模式存在以下问题：

1. 模版中的数据来源不清晰。举例来说，当一个组件中使用了多个 mixin 的时候，光看模版会很难分清一个属性到底是来自哪一个 mixin。HOC 也有类似的问题。
2. 命名空间冲突。由不同开发者开发的 mixin 无法保证不会正好用到一样的属性或是方法名。HOC 在注入的 props 中也存在类似问题。
3. 性能。HOC 和 Renderless Components 都需要额外的组件实例嵌套来封装逻辑，导致无谓的性能开销。



vue3中，新增 `Composition API`。而且新的`API`兼容 `Vue2.x`，只需要在项目中，单独引入 `@vue/composition-api` 这个包就可以，就能够解决我们目前 以上大部分问题。同时，如果我直接升级到 `Vue3.x`，我要做的事情会更多，只要当前项目中使用到的第三方ui库，都需要重新改造，以及升级后的诸多坑要填！刚开始的时候，我就是直接在当前脚手架的基础上 `vue add vue-next` 安装升级，但是只要是有依赖第三方生态库的地方，就有许多的坑。。。

`Vue3.x` 没有导出默认对象 `export default`，在第三方生态中，常用`Vue.xxx()`来进行依赖，现在这些语法需要重写，工作量可不小啊！



如果是新团队、小型的项目，可以尝试使用vue3进行尝试开发，慢慢过度，当 `Vue3.x` 正式 发布 后，而且周边生态跟上来了，就可以直接用vue3了！



在B站直播的时候， 尤大也说了，目前vue3beta版本， 最重要的是**提升稳定性**，和对**第三方工具库的支持**。

--------------
