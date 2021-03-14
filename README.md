<!--
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-04-03 11:51:26
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-02 20:55:34
 * @FilePath: /vue-jd-h5/README.md
 -->

<div style="text-align:center">
<img width='110' height='200'  src='https://gitee.com/gankai/vue-jd-h5/raw/master/src/assets/image/home_img.jpg' />
<img width='110px' height='200' src='https://gitee.com/gankai/vue-jd-h5/raw/master/src/assets/image/cart_home.jpg' />
<img width='110px' height='200' src='https://gitee.com/gankai/vue-jd-h5/raw/master/src/assets/image/me_home.jpg' />
<img width='110px' height='200' src='https://gitee.com/gankai/vue-jd-h5/raw/master/src/assets/image/WechatIMG15.png' />
<img width='110px' height='200' src='https://gitee.com/gankai/vue-jd-h5/raw/master/src/assets/image/shal_home.jpg' />
<img width='110px' height='200' src='https://gitee.com/gankai/vue-jd-h5/raw/master/src/assets/image/buy_home.jpg' />
<img width='110px' src='https://gitee.com/gankai/vue-jd-h5/raw/master/src/assets/image/hotal_home.jpg' height='200' />
<img width='110px' height='200' src='https://gitee.com/gankai/vue-jd-h5/raw/master/src/assets/image/search_img.jpg' />
</div>

# vue3-jd-h5

<p align='center'>
	<a href="https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FGitHubGanKai%2Fvue3-jd-h5"><img alt="Twitter" src="https://img.shields.io/twitter/url/https/github.com/GitHubGanKai/vue3-jd-h5.svg?style=social"></a>
	<a href="https://github.com/GitHubGanKai/vue3-jd-h5/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/GitHubGanKai/vue3-jd-h5.svg"></a>
	<a href="https://github.com/GitHubGanKai/vue3-jd-h5/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/GitHubGanKai/vue3-jd-h5.svg"></a>
	<a href="https://github.com/GitHubGanKai/vue3-jd-h5/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/GitHubGanKai/vue3-jd-h5.svg"></a>
</p>

<p align='center'>
  <a target='_blank' href='https://github.com/GitHubGanKai/vue3-jd-h5/blob/vue-next/README.md'> English</a>|<a target='_blank' href='https://github.com/GitHubGanKai/vue3-jd-h5/blob/vue-next/README-zh-CN.md'> 简体中文</a>
</p>

##  Project Introduction

`vue3-jd-h5` is an e-commerce H5 page front-end project, based on **Vue 3.0.0** + **Vant 3.0.0** implementation, mainly including homepage, category page, my page, shopping cart, etc. .


📖Local offline code **vue2.6** in the branch <a target='_blank' href='https://github.com/GitHubGanKai/vue-jd-h5/blob/demo/README.md'>demo </a>, use **mockjs** data for development, please click for the renderings 🔗<a target='_blank' href='http://gankai.gitee.io/vue-jd-h5/index'> Here</a>


⚠️The master branch is the code of the online production environment, because part of the background interface has been hung up 😫, the actual effect may not be seen.

📌 There are still many shortcomings in this project. If you have partners who want to contribute to this, please send us a PR or issue;

🔑 This project is free and open source. If you have a partner who wants to carry out secondary development on a secondary basis, you can clone or fork the entire warehouse. If it can help you, I will be very happy. If you think this project is good, please give it back Start! 🙏


## Vue3 build steps

1. First, select a file locally and clone the code locally:

```bash
git clone https://github.com/GitHubGanKai/vue-jd-h5.git 
```

2. View all branches:

```bash
gankaideMacBook-Pro:vue-jd-h5 gankai$ git branch -a
  demo
  vue-next
  dev
  feature
  gh-pages
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/demo
  remotes/origin/vue-next
  remotes/origin/dev
  remotes/origin/feature
  remotes/origin/gh-pages
  remotes/origin/master
```

3. Switch to the branch **vue-next** to start development!

4. Run the command in the IDEA command line: npm install, download related dependencies;

5. 🔧 Development environment Run the command in the IDEA command line: `npm run dev`, run the project;

6. 📦Run the command in the IDEA command line: `npm run dll:build`, package the project, 📱scan the QR code below 👇 to view!


<div style="text-align:center">
<img width='200px' height='200px' src='https://gitee.com/gankai/vue-jd-h5/raw/master/src/assets/image/qrcode.png' />
</div>

## Initialization of the project

💡If you are slow when installing the package, it is because the NPM server is abroad. Here is a tool for you to switch NPM mirroring at any time. 👉[NRM](https://www.npmjs.com/package/nrm ), sometimes when we are developing, in order to speed up the installation of the installation package, we need to switch the mirror source to domestic, but if we need to publish some of our own components to NPM, we have to switch back and forth again. With this We are much more convenient! Use `$ npm install -g nrm` to install globally, and then use `nrm ls` to view all mirrors:

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
If you need to use Taobao mirror, execute: `nrm use taobao` You can switch the source at any time, of course, there is also an npm package version management tool [nvm](https://github.com/nvm-sh/nvm), mainly for management In the package version, if you are interested, you can find out for yourself, here is not a long time 😊!

### Installation

Enter the root directory of the project that was cloned just now, install related dependencies, and experience the new features of vue3.

`npm` installation:

```javascript
npm install
```

`yarn` installation:

```javascript
yarn
```

**CDN**

```html
<script src="https://unpkg.com/vue@next"></script>
```

### use

In the entry file `main.js`:

```javascript
import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';

Vue.use(VueCompositionApi);
```
After installing the plug-in, you can use the new [Composition API](https://vue-composition-api-rfc.netlify.com/) to develop components.

⚠️At present, vue officially provides a plug-in for vue-cli [vue-cli-plugin-vue-next](https://github.com/vuejs/vue-cli-plugin-vue-next), you can also directly Add the latest version directly to the project!

```bash
# in an existing Vue CLI project
vue add vue-next
```

<blockquote style='background-color: #ffffcc;border-left: 4px solid #ffeb3b;padding:10px 20px 10px 20px;box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)!important;'> 

If you have a small partner who wants to experience the new version from scratch, you can use this method to install it. Since our project relies on third-party libraries, if you install it globally, the third-party UI library of the entire project cannot run! So we still choose to install `@vue/composition-api` to experience, so as to slowly transition to the latest version of vue3

</blockquote>

## Vue 3.0 Composition-API Basic Features Experience

### setup function

The `setup()` function is a new attribute specially provided for components in vue3, which is equivalent to the `created` function in the 2.x version. The component logic options of the previous version are now handled in this function. It provides a unified entry point for us to use the new features of vue3 `Composition API`. The **setup** function will be executed after **beforeCreate** and before **created** relative to 2.x ! For details, please refer to the following:

|      vue2.x      |      vue3       |
| :--------------: | :-------------: |
| ~~beforeCreate~~ |   setup(replace)   |
|   ~~created~~    |   setup(replace)   |
|   beforeMount    |  onBeforeMount  |
|     mounted      |    onMounted    |
|   beforeUpdate   | onBeforeUpdate  |
|     updated      |    onUpdated    |
|  beforeDestroy   | onBeforeUnmount |
|    destroyed     |   onUnmounted   |
|  errorCaptured   | onErrorCaptured |

### New hook

In addition to the 2.x life cycle equivalent, the Composition API also provides the following debugging hooks:

-`onRenderTracked`
-`onRenderTriggered`

Both hooks received the options of `DebuggerEvent` and `onTrack` and `onTrigger` observers:

javascript
Export default value {
    onRenderTriggered(e){
      Debugger
      //Check which dependency caused the component to re-render
    }
}
```

### Dependency Injection

`provider` and `inject` enable dependency injection similar to the 2.x `provide/inject` option. Both can only be called during the current active instance of `setup()`.

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

`inject` accepts an optional default value as the second parameter. If no default value is provided, and the property cannot be found in the Provide context, then `inject` returns `undefined`.

**Inject responsive data**

In order to maintain the responsiveness between the provided value and the injected value, you can use `ref`

```javascript
// in the parent component
const themeRef = ref('dark')
provide(ThemeSymbol, themeRef)

// in the component
const theme = inject(ThemeSymbol, ref('light'))
watchEffect(() => {
   console.log(`theme set to: ${theme.value}`)
})
```

1. Because the `setup` function receives 2 formal parameters, the first is `initProps`, which is the value passed by the parent component! , The second parameter is a **context object**

`setupContext`, the main attributes of this object are:

```javascript
attrs: Object // equivalent to this.$attrs in vue 2.x
emit: ƒ () // equivalent to this.$emit()
isServer: false // Is it server-side rendering
listeners: Object // equivalent to this.$listeners in vue2.x
parent: VueComponent // equivalent to this.$parent in vue2.x
refs: Object // equivalent to this.$refs in vue2.x
root: Vue // This root is the globally unique instance object returned when we use newVue() in main.js. Be careful not to confuse this with this in the single file assembly
slots: {} // equivalent to this.$slots in vue2.x
ssrContext:{} // server-side rendering related
```

⚠️**Note**: The `this` cannot be accessed in the `setup()` function, regardless of whether this `this` refers to the global vue object (ie: the global generated by using new in main.js The vue instance object), still refers to the object of the single file component.

But what if we want to access the instance object of the current component? We can introduce the api of `getCurrentInstance`, and the return value is the instance of the current component!

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
  
    const { ctx } = getCurrentInstance();
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
### Ref automatically expand (unwrap)

The `ref()` function is used to create a **reactive** **data object** according to the given value. The return value of the `ref()` function call is a wrapped object (RefImpl), There is only one `.value` property on this object. If we want to access the value of the object in the `setup` function, we can get it through `.value`, but if it is in the `<template>`** template **, just visit directly, no need for `.value`!

```javascript
import {ref} from'@vue/composition-api'

setup() {
     const active = ref("");
     const timeData = ref(36000000);
     console.log('output ===>',timeData.value)
     return {
        active,
        timeData
     }
}
```

```html
<template>
   <p>Activity status: {{active}}</p>
   <p>Activity time: {{timeData}}</p>
</template>
```

⚠️Note: Do not put `Array` in `ref`, the array index property cannot be expanded automatically, and **do not use `Array` to directly access the `ref` object:

```javascript
const state = reactive({
   list: [ref(0)],
});
// will not be expanded automatically, you must use `.value`
state.list[0].value === 0; // true

state.list.push(ref(1));
// will not be expanded automatically, you must use `.value`
state.list[1].value === 1; // true
```

When we need to manipulate the DOM, such as when we use `swiper` in a project to get the DOM, then we can still do this 👇!

```javascript
  <div class="swiper-cls">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(img ,index) in tabImgs.value" :key="index">
          <img class="slide_img" @click="handleClick(img.linkUrl)" :src="img.imgUrl" />
        </swiper-slide>
      </swiper>
   </div>
```

Then define a `const mySwiper = ref(null);` in the `setup` function. Previously in vue2.x, we used `this.$refs.mySwiper` to get the DOM object. Now you can also use `ref Instead of `function, the returned `mySwiper` should be the same as the `ref` bound in the `template`!



```javascript
import { ref, onMounted } from "@vue/composition-api";
setup(props, { attrs, slots, parent, root, emit, refs }) {
	const mySwiper = ref(null);
  onMounted(() => {
    // You can get the DOM object through mySwiper.value!
     // At the same time, refs.mySwiper in vue2.x can also be used. In fact, mySwiper.value is the same DOM object!
    mySwiper.value.swiper.slideTo(3, 1000, false);
  });
  return {
    mySwiper
  }
}
```



###  reactive

The `reactive()` function receives an ordinary object and returns a reactive data object, which is equivalent to the `Vue.observable()` function in `vue 2.x`. `vue 3.x` provides `reactive' ()` function, used to create a reactive data object `Observer`, in `ref` we generally store **basic type data**, if it is a reference type, we can use the `reactive` function.

When the received type in the `reactive` function is an array of `Array`, we can wrap a layer of objects outside the `Array`, and then add an attribute to the object such as: `value` (this attribute name is your You can call it whatever you want), his value is this array!

```javascript
<script>
// Must be introduced before using related aip
import { ref, reactive } from "@vue/composition-api";
export default {
  name: "home",
  setup(props, { attrs, slots, parent, root, emit, refs }) {
    
    const active = ref("");
    const timeData = ref(36000000);
    // Turn each object in the tabImgs array into a responsive object
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

So when we want to access this array in the `template` template, we need to use the form of `.value` to get the value of this array.

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



### isRef

`isRef()` is used to determine whether a value is an object created by `ref()`; when you need to expand a value that may be created for `ref()`, you can use `isRef` to judge!



```javascript
import { isRef } from '@vue/composition-api'

setup(){
  const headerActive = ref(false);
  // In the setup function, if it is a responsive object, when accessing properties, you must add .value to access!
  const unwrapped = isRef(headerActive) ? headerActive.value : headerActive
  return {}
}
```



### toRefs

The `toRefs` function will convert the **reactive object** into an **ordinary object**, where each attribute on the returned object is a `ref` that points to the corresponding attribute in the original object, and all the objects on an object It will be very useful when the attribute is converted to responsive!



```javascript
import { reactive,toRefs } from '@vue/composition-api'
setup(){
  // ball is a Observer
  const ball = reactive({
    show: false,
    el: ""
  });
  // ballToRefs is an ordinary Object, but all the attributes in ballToRefs are responsive (RefImpl)
  const ballToRefs  = toRefs(ball)
  // ref and original attributes are "linked"
  ball.show = true
  console.log(ballToRefs.show) // true
  ballToRefs.show.value = false
  console.log(ballToRefs.show) // false
  return {
    ...ballToRefs    // Expand the ballToRefs object, we can directly use all the attributes on this object in the template template!
  }
}

```
Click the add button, the ball flies into the shopping cart animation:

```html
<template>  
  <div class="ballWrap">
      <transition @before-enter="beforeEnter" @enter="enter" @afterEnter="afterEnter">
       <!-- You can use v-show-->
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


### computed

The first parameter of the `computed` function can receive a function or an object! If it is a function, it defaults to a `getter` function, and returns a read-only `ref` object for the value returned by `getter`.



```javascript
import { computed } from '@vue/composition-api'

const count = ref(1)
// computed receives a function as an input parameter
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // Error, plusOne is read-only!
```

Or it can be an object, you can use objects with `get` and `set` functions to create writable `ref` objects.

```javascript
const count = ref(1)
// computed receives an object as an input parameter
const plusOne = computed({
  get: () => count.value + 1,
  set: val => {
    count.value = val - 1
  }
})

plusOne.value = 1
console.log(count.value) // 0
```



###  watch

`watch(source, cb, options?)`

The `watch` API is exactly equivalent to 2.x `this.$watch` (and the corresponding `watch` option).

#### Observe a single source

The observer data source can be a getter function that returns a value, or it can be directly a ref:

```javascript
// watching a getter function
const state = reactive({ count: 0 })
watch(
  () => state.count, // Getter function for return value
  (count, prevCount,onCleanup) => {
    /* ... */
  }
)

// directly watching a ref
const count = ref(0)
watch(
  count, // It can also be directly ref
  (count, prevCount,onCleanup) => {
  /* ... */
})
```

#### watch multiple sources

Observers can also use arrays to monitor multiple sources at the same time:

```javascript
const me = reactive({ age: 24, name:'gk' })
// reactive type
watch(
  [() => me.age, () => me.name], // To monitor multiple reactive data sources, you can pass in an array type and return a getter function
  ([age, name], [oldAge, oldName]) => {
    console.log(age) // new age value
    console.log(name) // new name value
    console.log(oldAge) // old age value
    console.log(oldName) // new name value
  },
  // options
  {
    lazy: true //default. The code in the callback function is executed when the watch is created. If lazy is true, how can it not be executed when it is created!
  }
)

setInterval(() => {
  me.age++
  me.name ='oldMe'
}, 7000000)

// ref type
const work = ref('web')
const addres = ref('sz')
watch(
  [work,address], // monitor multiple ref data sources
  ([work, addres], [oldwork, oldaddres]) => {
   //...
  },
  {
    lazy: true
  }
)

```

`watch` is bound to the life cycle of the component. When the component is uninstalled, the watch will automatically stop. In other cases, it returns a stop handle, which can be called to stop the watcher explicitly:

```javascript
// watch returns a function handle, we can decide the stop and start of the watch!
const stopWatch = watch(
  [work,address], // monitor multiple ref data sources
  ([work, addres], [oldwork, oldaddres]) => {
   //...
  },
  {
    lazy: true
  }
)

// Call the stop function to clear the monitoring of work and address
stopWatch()
```

#### Clear invalid asynchronous tasks in watch


```html
<div class="search-con">
  <svg-icon class="search-icon" icon-class="search"></svg-icon>
  <input v-focus placeholder="search, keyword" v-model="searchText" />
</div>
```

```javascript
setup(props, {attrs, slots, parent, root, emit, refs }){
  const CancelToken = root.$http.CancelToken
  const source = CancelToken.source()
  // Define responsive data searchText
  const searchText = ref('')

  // Send an asynchronous request to the background
  const getSearchResult = searchText => {
   root.$http.post("http://test.happymmall.com/search",{text:searchText}, {
     cancelToken: source.token
   }).then(res => {
    // .....
   });
  return source.cancel
}

// define watch monitor
watch(
  searchText,
  (searchText, oldSearchText, onCleanup) => {
    // Send an axios request and get the cancel function to cancel the axios request
    const cancel = getSearchResult(searchText)

    // If the watch is repeatedly executed, the last unfinished asynchronous request will be cleared first
    onCleanup(cancel)
  },
  // watch is not executed when it is just created
  {lazy: true}
)

  return {
    searchText
  }
}
```

## At last


Vue3 adds Composition API. The new API is compatible with Vue2.x. You only need to introduce the @vue/composition-api package separately in the project to solve our current individual problems in Vue2.x. For example: how to organize logic, and how to extract and reuse logic among multiple components. Based on the current API of Vue 2.x, we have some common logic reuse patterns, but there are more or less problems:

These modes include:

1. Mixins
2. Higher-order Components (aka HOCs)
3. Renderless Components (components based on scoped slots / scoped slots encapsulation logic)

In general, the above models have the following problems:

1. The source of the data in the template is not clear. For example, when multiple mixins are used in a component, it is difficult to tell which mixin a property comes from by just looking at the template. HOC has similar problems.
2. Namespace conflict. There is no guarantee that mixins developed by different developers will not use exactly the same attribute or method name. HOC has similar problems in injected props.
3. Performance. Both HOC and Renderless Components require additional component instance nesting to encapsulate logic, resulting in unnecessary performance overhead.


In vue3, `Composition API` is added. And the new `API` is compatible with `Vue2.x`, only need to introduce the package `@vue/composition-api` separately in the project, which can solve most of our current problems. At the same time, if I directly upgrade to `Vue3.x`, I will have more things to do. As long as the third-party ui library used in the current project needs to be remodeled, and many pits after the upgrade have to be filled! At the beginning, I installed and upgraded the `vue add vue-next` directly on the basis of the current scaffolding, but as long as there are places that rely on third-party ecological libraries, there are many pitfalls. . .

`Vue3.x` does not export the default object `export default`. In the third-party ecosystem, `Vue.xxx()` is often used for dependency. Now these grammars need to be rewritten, and the workload is not small!



If it is a new team or a small project, you can try to use vue3 for trial development, and gradually overstep it. When `Vue3.x` is officially released and the surrounding ecology keeps up, you can use vue3 directly!

