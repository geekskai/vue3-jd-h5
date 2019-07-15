<template>
  <div class="home">
    <header class="home-header" :class="{'active' : headerActive}">
      <div class="header-search">
        <svg-icon class="search-icon" icon-class="search"></svg-icon>
        <router-link tag="span" class="search-title" to="./search">推荐搜索 关键词</router-link>
      </div>
    </header>
    <van-swipe class="swiper_carousel" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img class="lazy_img" @click="handleClick" v-lazy="image.imgUrl" />
      </van-swipe-item>
    </van-swipe>
    <div class="swiperCls">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(img ,index) in images2" :key="index">
          <img class="slide_img" @click="handleClick" :src="img.imgUrl" alt />
        </swiper-slide>
      </swiper>
    </div>
    <section class="goods-box search-wrap">
      <span class="good-things">链猫自营</span>
      <ul class="goods-content">
        <router-link tag="li" to="/classify/product">
          <img src="../../assets/image/home/test1.png" alt />
          <div class="goods-layout">
            <div class="goods-title">多功能料理机</div>
            <span class="goods-div">限量套装 新品上市</span>
            <div class="goods-desc">
              <span class="goods-price">
                <i>$</i>245
              </span>
              <svg-icon class="add-icon" icon-class="add"></svg-icon>
            </div>
          </div>
        </router-link>
        <router-link tag="li" to="/classify/product">
          <img src="../../assets/image/home/test2.png" alt />
          <div class="goods-layout">
            <div class="goods-title">遥控制空调扇</div>
            <span class="goods-div">限量套装 新品上市</span>
            <div class="goods-desc">
              <span class="goods-price">
                <i>$</i>245
              </span>
              <svg-icon class="add-icon" icon-class="add"></svg-icon>
            </div>
          </div>
        </router-link>
        <router-link tag="li" to="/classify/product">
          <img src="../../assets/image/home/test3.png" alt />
          <div class="goods-layout">
            <div class="goods-title">时尚双肩包</div>
            <span class="goods-div">限量套装 新品上市</span>
            <div class="goods-desc">
              <span class="goods-price">
                <i>$</i>245
              </span>
              <svg-icon class="add-icon" icon-class="add"></svg-icon>
            </div>
          </div>
        </router-link>
        <router-link tag="li" to="/classify/product">
          <img src="../../assets/image/home/test4.png" alt />
          <div class="goods-layout">
            <div class="goods-title">商务行李箱</div>
            <span class="goods-div">限量套装 新品上市</span>
            <div class="goods-desc">
              <span class="goods-price">
                <i>$</i>245
              </span>
              <svg-icon class="add-icon" icon-class="add"></svg-icon>
            </div>
          </div>
        </router-link>
        <router-link tag="li" to="/classify/product">
          <img src="../../assets/image/home/test5.png" alt />
          <div class="goods-layout">
            <div class="goods-title">无线消噪耳机</div>
            <span class="goods-div">限量套装 新品上市</span>
            <div class="goods-desc">
              <span class="goods-price">
                <i>$</i>245
              </span>
              <svg-icon class="add-icon" icon-class="add"></svg-icon>
            </div>
          </div>
        </router-link>
        <router-link tag="li" to="/classify/product">
          <img src="../../assets/image/home/test6.png" alt />
          <div class="goods-layout">
            <div class="goods-title">无线蓝牙耳机</div>
            <span class="goods-div">限量套装 新品上市</span>
            <div class="goods-desc">
              <span class="goods-price">
                <i>$</i>245
              </span>
              <svg-icon class="add-icon" icon-class="add"></svg-icon>
            </div>
          </div>
        </router-link>
      </ul>
    </section>
    <section class="recommended-shop">
      <span class="shop-things">推荐店铺</span>
      <ul class="shop-content">
        <router-link class="shop-item" tag="li" to="/classify/product">
          <div class="item-header">
            <img class="store-logo" src="../../assets/image/home/store-logo.png" />
            <div class="item-text">
              <p>品炫旗舰店</p>
              <i>正品大牌 产家直营</i>
            </div>
            <svg-icon class="into-store" icon-class="into-store"></svg-icon>
            <!-- <van-button plain hairline size="small" type="danger">进店</van-button> -->
          </div>
          <div class="item-iamgs">
            <img src="../../assets/image/home/store1.png" />
            <img src="../../assets/image/home/store2.png" />
            <img src="../../assets/image/home/store3.png" />
          </div>
        </router-link>
        <router-link class="shop-item" tag="li" to="/classify/product">
          <div class="item-header">
            <img class="store-logo" src="../../assets/image/home/store-logo2.png" />
            <div class="item-text">
              <p>北欧家居旗舰店</p>
              <i>正品大牌 产家直营</i>
            </div>
            <router-link  to='/storeDetail'></router-link>
            <svg-icon  class="into-store" icon-class="into-store"></svg-icon>
          </div>
          <div class="item-iamgs">
            <img src="../../assets/image/home/store4.png" />
            <img src="../../assets/image/home/store5.png" />
            <img src="../../assets/image/home/store6.png" />
          </div>
        </router-link>
      </ul>
    </section>
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      isLogin: false,
      headerActive: false,
      images: [
        {
          imgUrl: require("../../assets/image/home/huawei1.png"),
          categoryId: 100018
        },
        {
          imgUrl:
            "//m.360buyimg.com/mobilecms/s1125x690_jfs/t29188/301/133996293/200131/61f42a01/5be8eed6Nda6a18a5.jpg!cr_1125x549_0_72!q70.jpg.dpg",
          categoryId: 100008
        },
        {
          imgUrl:
            "//m.360buyimg.com/mobilecms/s1125x690_jfs/t30757/316/208746402/123953/9fa18794/5beb7d13Ne77e9f29.jpg!cr_1125x549_0_72!q70.jpg.dpg",
          categoryId: 100016
        },
        {
          imgUrl:
            "//m.360buyimg.com/mobilecms/jfs/t1/3926/29/4138/254748/5b9b646dE45cbeb7f/f80c8f7c24273bc1.jpg!cr_1125x549_0_72",
          categoryId: 100035
        }
      ],
      images2: [
        {
          imgUrl:
            "//m.360buyimg.com/mobilecms/jfs/t1/3926/29/4138/254748/5b9b646dE45cbeb7f/f80c8f7c24273bc1.jpg!cr_1125x549_0_72",
          categoryId: 100035
        },

        {
          imgUrl: require("../../assets/image/home/test11.png"),
          categoryId: 100020
        },
        {
          imgUrl: require("../../assets/image/home/test10.png"),
          categoryId: 100019
        }
      ],
      swiperOption: {
        loop: true,
        autoplay: false,
        width: 480,
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
        slidesPerView: 2 //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
      }
    };
  },

  created() {
    this.$http.get("http://test.happymmall.com/home/data").then(res => {
      const { data } = res.data;
    });
  },
  mounted() {
    this.$eventBus.$emit("changeTag", 0);
    this.swiper.slideTo(3, 1000, false);
    window.addEventListener("scroll", this.pageScroll);
  },
  methods: {
    onChange(index) {
      this.$toast("当前 Swipe 索引：" + index);
    },
    handleClick() {
      this.$router.push("/classify/product");
    },
    pageScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      scrollTop > 100
        ? (this.headerActive = true)
        : (this.headerActive = false);
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../styles/mixin.scss";
.home {
  .home-header {
    &.active {
      top: 10px;
    }
    position: fixed;
    left: 0;
    top: 10px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 0 16px;
    display: flex;
    justify-content: flex-start;
    @include boxSizing;
    font-size: 30px;
    color: #fdc;
    z-index: 10000;
    .header-search {
      border-radius: 3px;
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      color: #232326;
      background: #fff;
      .search-icon {
        line-height: 40px;
        padding: 8px 10px;
      }
      .app-name {
        padding: 0 20px;
        color: $red;
        font-size: 40px;
        font-weight: bold;
      }
      .icon-search {
        padding: 0 20px;
        font-size: 34px;
      }
      .search-title {
        font-size: 16px;
        color: #dbdbdb;
        width: 100%;
        padding-left: 80px;
      }
    }
  }

  .swiper_carousel {
    padding-bottom: 10px;
    .lazy_img {
      width: 100%;
      height: 250px;
    }
  }
  .swiperCls {
    background-color: #efeff4;
    .swiper-slide {
      padding-left: 16px;
      background-color: #efeff4;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .slide_img {
      width: 222px;
      height: 90px;
      border-radius: 5px;
    }
  }
  .goods-box {
    padding: 16px;
    .good-things {
      font-size: 18px;
      color: #fe4f70;
      font-weight: 600;
    }
    .goods-content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        display: inline-block;
        width: 165px;
        border-radius: 8px;
        margin-top: 10px;
        background-color: white;
        img {
          width: 100%;
        }
      }
      li:nth-of-type(even) {
        padding-right: 0;
      }
      .goods-layout {
        width: 165px;
        padding: 0 10px;
        .goods-title {
          color: #3a3a3a;
          font-size: 14px;
          font-weight: 700;
        }
        .goods-div {
          color: #949497;
          font-size: 11px;
        }
        .goods-desc {
          background-color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 12px;
          .goods-price {
            font-size: 14px;
            color: #fe4f70;
          }
        }
      }
    }
  }
  .recommended-shop {
    padding: 16px;
    .shop-things {
      font-size: 18px;
      color: #fe4f70;
      font-weight: 600;
    }
    .shop-content {
      .shop-item {
        background-color: #fff;
        border-radius: 8px;
        padding: 11px;
        margin-bottom: 10px;
        .item-iamgs {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding-bottom: 5px;
          padding-left: 5px;
          img {
            display: inline-block;
            width: 100px;
            height: 100px;
            border-radius: 10px;
            margin-right: 7px;
          }
        }
        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          .into-store {
            width: 41px;
            height: 16px;
            margin-right: 12px;
          }
          .item-text {
            flex: 1;
            height: 37px;
            padding-left: 5px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-direction: column;
            p {
              font-size: 14px;
              color: #3a3a3a;
              font-weight: 600;
            }
            i {
              font-size: 11px;
              color: #949497;
            }
          }
          .store-logo {
            width: 37px;
            height: 37px;
          }
        }
      }
    }
  }
}
</style>
