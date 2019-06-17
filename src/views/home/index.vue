<template>
  <div class="home">
    <div class="header_search">
      <!-- <li class="left_icon"></li> -->
      <van-search placeholder="推荐搜索 关键词"/>
      <!-- <li>
        <img src="@/assets/image/home/header_detail.png" alt>
      </li>-->
    </div>
    <van-swipe class="swiper_carousel" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img class="lazy_img" v-lazy="image">
      </van-swipe-item>
    </van-swipe>
    <div class="swiperCls">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(img ,index) in images" :key="index">
          <img class="slide_img" :src="img" alt>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      images: [
        // require('@/assets/image/home/xx.png'),
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg"
      ],
      swiperOption: {
        // swiper configs 所有的配置同swiper官方api配置
        loop: true,
        autoplay: false,
        loadOnTransitionStart: true,
        notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        direction: "horizontal", //水平方向移动
        grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        mousewheel: false, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: false, //同上
        height: window.innerHeight, // 高度设置，占满设备高度
        resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
        observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        touchRatio: 1, // 默认为1，按照1:1的触摸比例滑动。设置为0时，完全无法滑动
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样,
        effect: "coverflow",
        slidesPerView: 2, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        centeredSlides: true,
        coverflowEffect: {
          rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
          stretch: 22, //每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
          depth: 200, // slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
          modifier: 2, //  depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
          slideShadows: false // 开启slide阴影。默认 true
        }
      }
    };
  },
  created() {
    console.log("=====首页==>");
  },
  mounted() {
    this.$eventBus.$emit("changeTag", 0);
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
  methods: {},
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>

<style scoped lang="scss">
.home {
  .header_search {
    // position: fixed;
    text-align: center;
    display: inline-block;
    padding-top: 20px;
    // top: 0;
    // left: 0;
    width: 100%;
    .van-search {
      width: 350px;
      display: inline-block;
      background-color: transparent !important;
    }
  }
  .swiper_carousel {
    // position: absolute;
    // top: 100px;
    // right: 0;
    // left: 0;
    padding-bottom: 10px;
    .lazy_img {
      width: 100%;
      height: 203px;
    }
  }
  .swiperCls {
    .slide_img {
      width: 130px;
    }
  }
  // background: url("../../assets/image/home/header_bag.png") no-repeat top;
  // background-size: 100% 50%;
  // padding-top: 20px;
  //   .header {
  //     position: fixed;
  //     height: 40px;
  //     width: 343px;
  //     text-align: center;
  //     padding-top: 40px;
  //     z-index: 1000;
  //     .left_icon {
  //       width: 24px;
  //       height: 24px;
  //       background: url("../../assets/image/left_icon.png") no-repeat center;
  //       background-size: 100% 100%;
  //       line-height: 24px;
  //       border-radius: 50%;
  //       margin-left: 16px;
  //       text-align: center;
  //       vertical-align: middle;
  //       display: inline-block;
  //     }
  //   }
}
</style>
