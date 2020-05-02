<template>
  <div class="home">
    <header class="home-header" :class="{'active' : headerActive}">
      <div class="header-search">
        <svg-icon class="search-icon" icon-class="search"></svg-icon>
        <router-link tag="span" class="search-title" to="./search">推荐搜索 关键词</router-link>
      </div>
      <svg-icon class="customer-service-icon" icon-class="customer-service"></svg-icon>
    </header>
    <van-swipe class="swiper-carousel" :autoplay="3000" :show-indicators="false">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <!-- <img class="lazy_img" @click="handleClick" v-lazy="image.imageUrl" /> -->
        <img class="lazy_img" @click="handleClick" v-lazy="image.imgUrl" />
      </van-swipe-item>
    </van-swipe>
    <div class="swiper-cls">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(img ,index) in images2" :key="index">
          <!-- <img class="slide_img" @click="handleClick(img.linkUrl)" v-lazy="img.imageUrl" /> -->
          <img class="slide_img" @click="handleClick(img.linkUrl)" :src="img.imgUrl" />
        </swiper-slide>
      </swiper>
    </div>
    <section class="home-tags">
      <ul class="tags-content">
        <router-link tag="li" class="tags-item" to="./search">
          <svg-icon class="tags-icon" icon-class="chain-cat-boutique"></svg-icon>
          <span class="item-text">链猫精品</span>
        </router-link>
        <router-link tag="li" class="tags-item" to="./search">
          <svg-icon class="tags-icon" icon-class="cm-area"></svg-icon>
          <span class="item-text">CM专区</span>
        </router-link>
        <router-link tag="li" class="tags-item" to="./search">
          <svg-icon class="tags-icon" icon-class="collar-cm"></svg-icon>
          <span class="item-text">领CM币</span>
        </router-link>
        <router-link tag="li" class="tags-item" to="./search">
          <svg-icon class="tags-icon" icon-class="coupon-svg"></svg-icon>
          <span class="item-text">领券</span>
        </router-link>
        <router-link tag="li" class="tags-item" to="./search">
          <svg-icon class="tags-icon" icon-class="chain-cat-member"></svg-icon>
          <span class="item-text">链猫会员</span>
        </router-link>
      </ul>
    </section>

    <section class="spike-area">
      <ul class="spike-top">
        <router-link class="top-left" to="/chainCatSpike" tag="li">
          <div class="item-top">
            <span class="item-title">链猫秒杀</span>
            <div class="time-text">
              <span class="eight-time">8点场</span>
              <van-count-down :time="timeData" class="time-count-down">
                <template v-slot="timeData">
                  <span class="time-item" v-if="timeData.hours<10">{{ '0'+timeData.hours }}</span>
                  <span class="time-item" v-else>{{ timeData.hours }}</span>
                  <i class="tow-point">:</i>
                  <span class="time-item" v-if="timeData.minutes<10">{{'0'+ timeData.minutes }}</span>
                  <span class="time-item" v-else>{{ timeData.minutes }}</span>
                  <i class="tow-point">:</i>
                  <span class="time-item" v-if="timeData.seconds<10">{{ '0'+timeData.seconds }}</span>
                  <span class="time-item" v-else>{{ timeData.seconds }}</span>
                </template>
              </van-count-down>
            </div>
          </div>
          <div class="item-info">
            <div class="item-content">
              <img src="../../assets/image/home/demo1.png" />
              <span class="new-price">¥298</span>
              <span class="old-price">¥399</span>
            </div>
            <div class="item-content">
              <img src="../../assets/image/home/demo2.png" />
              <span class="new-price">¥298</span>
              <span class="old-price">¥399</span>
            </div>
            <div class="item-content">
              <img src="../../assets/image/home/demo3.png" />
              <span class="new-price">¥298</span>
              <span class="old-price">¥399</span>
            </div>
          </div>
        </router-link>
        <router-link class="top-right" to="/foundGoodGoods" tag="li">
          <div class="right-header">
            <span class="cat-spike-text">发现好货</span>
            <span class="tag-text">品质好物</span>
          </div>
          <span class="good-item">好物不贵</span>
          <div class="item-imgs">
            <img src="../../assets/image/home/demo4.png" />
            <img src="../../assets/image/home/demo5.png" />
          </div>
        </router-link>
      </ul>

      <ul class="spike-center">
        <router-link class="center-item" to="/specialSpike" tag="li">
          <span class="center-title">特价秒杀</span>
          <span class="center-descr">10元抢购</span>
          <img src="../../assets/image/home/demo6.png" />
        </router-link>
        <router-link class="center-item" to="/brandSpike" tag="li">
          <span class="center-title">品牌秒杀</span>
          <span class="center-descr" style="color:#DD3749">笔记本秒杀</span>
          <img src="../../assets/image/home/demo7.png" />
        </router-link>
        <router-link class="center-item" to="/newProductLaunch" tag="li">
          <span class="center-title">新品首发</span>
          <span class="center-descr" style="#FC6380">小黑盒新品</span>
          <img src="../../assets/image/home/demo8.png" />
        </router-link>
        <router-link class="center-item" to="/premiumRanking" tag="li">
          <span class="center-title">优品排行</span>
          <span class="center-descr" style="color:#91C95B">榜上好物购</span>
          <img src="../../assets/image/home/demo9.png" />
        </router-link>
      </ul>
      <ul class="spike-bottom">
        <li class="bottom-left">
          <div class="bottom-left-header">
            <span class="big-buy">大牌购走</span>
            <span class="goods-name">
              戴尔
              <svg-icon icon-class="right-arrow"></svg-icon>
            </span>
          </div>
          <span class="belive-big">信赖大品牌</span>
          <div class="bottom-images">
            <img src="../../assets/image/home/demo10.png" />
            <img src="../../assets/image/home/demo11.png" />
          </div>
        </li>
        <router-link class="bottom-left" to="/loveShop" tag="li">
          <div class="bottom-left-header">
            <span class="big-buy">爱逛好店</span>
            <span class="goods-name addColor">懂你所要</span>
          </div>
          <span class="belive-big">来逛个够</span>
          <div class="bottom-images">
            <img src="../../assets/image/home/demo12.png" />
            <img src="../../assets/image/home/demo13.png" />
          </div>
        </router-link>
      </ul>
    </section>

    <div class="content-tabs">
      <van-tabs
        :swipe-threshold="5"
        title-inactive-color="#3a3a3a"
        title-active-color="#D8182D"
        background="transparent"
        v-model="active"
        animated
      >
        <!-- @click="handleTabClick" -->
        <!-- v-for="(list,index) in catList" -->
        <van-tab
          v-for="(list,index) in tabList"
          :title="list.describe"
          :name="list.type"
          :key="index"
        >
          <div slot="title" class="slot-title">
            <b class="tab-title">{{list.title}}</b>
            <!-- <span class="tab-name">{{list.describe}}</span> -->
            <span class="tab-name">{{list.name}}</span>
          </div>

          <section class="goods-box search-wrap">
            <ul class="goods-content">
              <!-- <li v-for="(item,index) in tabItemLists" :key="index"> -->
              <li v-for="(item,index) in list.list" :key="index">
                <router-link class="goods-img" tag="div" to="/classify/product">
                  <!-- <img v-lazy="item.productMainImage" /> -->
                  <img :src="item.img" />
                </router-link>
                <div class="goods-layout">
                  <div class="goods-title">{{item.productName}}</div>
                  <span class="goods-div">{{item.title}}</span>
                  <div class="goods-desc">
                    <span class="goods-price">
                      <i>{{item.productCnyPrice}}</i>
                      <span class="force-value">{{item.forceValue}}倍算力</span>
                    </span>
                    <span class="add-icon" @click="addToCart($event,item)">
                      <svg-icon icon-class="add"></svg-icon>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </van-tab>
      </van-tabs>
    </div>
    <div class="ballWrap">
      <transition @before-enter="beforeEnter" @enter="enter" @afterEnter="afterEnter">
        <div class="ball" v-if="ball.show">
          <li class="inner">
            <span class="cubeic-add" @click="addToCart($event,item)">
              <svg-icon class="add-icon" icon-class="add"></svg-icon>
            </span>
          </li>
        </div>
      </transition>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      active: "",
      timeData: 36000000,
      catList: [],
      tabItemLists: [],
      tabList: [],
      ball: {
        show: false,
        el: ""
      },
      isLogin: false,
      headerActive: false,
      images: [],
      images2: [],
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
    // this.initData();

    this.$http.get("http://test.happymmall.com/home/homeData").then(res => {
      const { tabList } = res.data;
      const { images } = res.data;
      const { images2 } = res.data;
      this.tabList = tabList;
      this.images = images;
      this.images2 = images2;
    });
  },
  mounted() {
    this.$eventBus.$emit("changeTag", 0);
    this.swiper.slideTo(3, 1000, false);
    window.addEventListener("scroll", this.pageScroll);
  },
  methods: {
    initData() {
      this.$http.get(`api/index`).then(response => {
        // console.log("=====res==>", response.data.content);
        this.images = response.data.content.bannerList;
        this.images2 = response.data.content.adList;
        this.catList = response.data.content.catList;
      });
      this.handleTabClick(0);
    },
    handleTabClick(type) {
      console.log("=====type==>", type);
      this.$http.get(`/api/index/choiceness?type=${type}`).then(response => {
        this.tabItemLists = response.data.content;
      });
    },
    addToCart(event, tag) {
      this.$store.commit("cart/addToCart", tag);
      this.ball.show = true;
      this.ball.el = event.target;
    },
    beforeEnter(el) {
      const dom = this.ball.el;
      const rect = dom.getBoundingClientRect();
      const x = rect.left - window.innerWidth * 0.6;
      const y = -(window.innerHeight - rect.top);
      el.style.display = "block";
      el.style.transform = `translate3d(0,${y}px,0)`;
      const inner = el.querySelector(".inner");
      inner.style.transform = `translate3d(${x}px,0,0)`;
    },
    enter(el, done) {
      document.body.offsetHeight;
      el.style.transform = `translate3d(0,0,0)`;
      const inner = el.querySelector(".inner");
      inner.style.transform = `translate3d(0,0,0)`;
      el.addEventListener("transitionend", done);
    },
    afterEnter(el) {
      this.ball.show = false;
      el.style.display = "none";
    },

    onChange(index) {
      this.$toast("当前 Swipe 索引：" + index);
    },
    handleClick(linkUrl) {
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
      display: none;
      // top: 10px;
      // background-color: #efeff4;
    }
    position: fixed;
    left: 0;
    top: 10px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include boxSizing;
    font-size: 30px;
    color: #fdc;
    z-index: 10000;
    .header-search {
      border-radius: 3px;
      display: flex;
      width: 90%;
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

  .swiper-carousel {
    padding-bottom: 10px;
    .lazy_img {
      width: 100%;
      height: 250px;
    }
  }
  .swiper-cls {
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
  .home-tags {
    margin-top: 23px;
    .tags-content {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .tags-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .tags-icon {
          width: 43px;
          height: 43px;
        }
        .item-text {
          padding-top: 5px;
          font-size: 11px;
          color: #3a3a3a;
        }
      }
    }
  }
  .spike-area {
    margin: 12px;
    padding-top: 5px;
    border-radius: 4px;
    background-color: white;
    .spike-top {
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      .top-left {
        padding: 12px;
        .item-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .item-title {
            font-size: 14px;
            color: #3a3a3a;
            padding-right: 5px;
            font-weight: 600;
          }
          .time-text {
            border: 1px solid #ccc;
            width: 110px;
            height: 18px;
            line-height: 18px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .eight-time {
              font-size: 11px;
              color: white;
              text-align: center;
              width: 42px;
              background-color: #d8182d;
            }
            .time-count-down {
              flex: 1;
              font-size: 9px;
              color: #dd3749;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
        .item-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .item-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 4px;
            .new-price {
              font-size: 11px;
              color: #d8182d;
              font-weight: 600;
            }
            .old-price {
              font-size: 9px;
              color: #949497;
              text-decoration: line-through;
            }
          }
        }
      }
      .top-right {
        background-color: white;
        font-size: 11px;
        padding: 12px;
        border-radius: 4px;
        flex: 1;
        .right-header {
          .cat-spike-text {
            font-size: 14px;
            color: #3a3a3a;
            font-weight: 600;
          }
          .tag-text {
            border: 1px solid #d8182d;
            display: inline-block;
            text-align: center;
            margin-left: 7px;
            border-radius: 2px;
            color: #d8182d;
            width: 64px;
          }
        }
        .good-item {
          color: #949497;
          font-size: 11px;
        }
        .item-imgs {
          display: flex;
          justify-content: space-between;
          align-items: center;
          img {
            width: 63px;
            height: 63px;
          }
        }
      }
    }
    .spike-center {
      padding-top: 20px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .center-item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .center-title {
          font-size: 14px;
          color: #3a3a3a;
          font-weight: 600;
        }
        .center-descr {
          font-size: 11px;
          color: #ff9351;
        }
        img {
          width: 70px;
          height: 70px;
        }
      }
    }
    .spike-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .bottom-left {
        padding: 12px;
        display: flex;
        flex-direction: column;

        .bottom-left-header {
          .big-buy {
            font-size: 14px;
            color: #3a3a3a;
            font-weight: 600;
          }
          .goods-name {
            width: 66px;
            height: 18px;
            display: inline-block;
            border-radius: 2px;
            margin-left: 8px;
            text-align: center;
            border: 1px solid #d8182d;
            font-size: 11px;
            color: #dd3749;
            .svg-icon {
              width: 4px;
              height: 7px;
            }
          }
          .addColor {
            color: #dbbaff;
            border: 1px solid #dbbaff;
          }
        }
        .belive-big {
          font-size: 11px;
          color: #949497;
        }
        .bottom-images {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
      }
    }
  }
  .content-tabs {
    padding-top: 10px;
    .slot-title {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .tab-title {
        font-size: 14px;
        font-weight: 600;
        font-size: 17px;
        height: 24px;
        display: inline-block;
        width: 40px;
        line-height: 22px;
      }
      .tab-name {
        line-height: 16px;
        font-size: 10px;
        display: inline-block;
      }
    }
    .goods-box {
      padding: 10px 16px;
      .good-things {
        font-size: 18px;
        color: #d8182d;
        font-weight: 600;
      }
      .goods-content {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
          display: inline-block;
          width: 165px;
          margin-top: 10px;
          border-radius: 8px;
          background-color: white;
          box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
          img {
            width: 100%;
          }
        }
        li:nth-of-type(even) {
          padding-right: 0;
        }
        .goods-img {
          img {
            width: 165px;
            height: 196px;
            border-radius: 8px 8px 0 0;
          }
        }
        .goods-layout {
          width: 165px;
          padding: 0 10px;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          .goods-title {
            color: #3a3a3a;
            font-size: 14px;
            font-weight: 600;
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
            padding-bottom: 10px;
            .goods-price {
              padding-top: 5px;
              font-size: 14px;
              color: #d8182d;
              display: flex;
              justify-content: center;
              align-items: center;
              .force-value {
                margin-left: 7px;
                color: white;
                border-radius: 20px 20px;
                background-color: #d8182d;
                display: inline-block;
                font-size: 7px;
                line-height: 17px;
                text-align: center;
                width: 42px;
                height: 17px;
              }
            }
            .add-icon {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
      }
    }
  }

  .ballWrap {
    .ball {
      position: fixed;
      left: 60%;
      bottom: 10px;
      z-index: 1003;
      color: red;
      transition: all 0.5s cubic-bezier(0.49, -0.29, 0.75, 0.41);
      .inner {
        width: 16px;
        height: 16px;
        transition: all 0.5s linear;
      }
    }
  }
}
</style>
