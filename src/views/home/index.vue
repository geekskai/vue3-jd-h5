<template>
  <div class="home">
    <header class="home-header" :class="{'active' : headerActive}">
      <div class="header-search">
        <svg-icon class="search-icon" icon-class="search"></svg-icon>
        <router-link tag="span" class="search-title" to="./search">推荐搜索 关键词</router-link>
      </div>
      <!-- <svg-icon class="customer-service-icon" icon-class="customer-service"></svg-icon> -->
    </header>
    <van-swipe class="swiper-carousel" :autoplay="3000" :show-indicators="false">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img class="lazy_img" @click="handleClick" v-lazy="image.imageUrl" />
      </van-swipe-item>
    </van-swipe>
    <div class="swiper-cls">
      <swiper :options="swiperOption" v-if="adList.length">
        <swiper-slide v-for="(img ,index) in adList" :key="index">
          <img class="slide_img" @click="handleClick" v-if="img.imageUrl" :src="img.imageUrl" />
        </swiper-slide>
      </swiper>
      <img class="radian-img" src="../../assets/image/radian.png" />
    </div>
    <section class="home-tags">
      <!-- <ul class="tags-content">
        <li v-for="(item,index) in iconList" class="tags-item" :key="index">
          <img class="tags-icon" v-lazy="item.iconUrl" />
          <span class="item-text" v-text="item.title"></span>
        </li>
      </ul>-->
      <ul class="tags-content">
        <router-link tag="li" class="tags-item" to="./index">
          <svg-icon class="tags-icon" icon-class="chain-cat-boutique"></svg-icon>
          <span class="item-text">链猫精品</span>
        </router-link>
        <router-link tag="li" class="tags-item" to="./index">
          <svg-icon class="tags-icon" icon-class="cm-area"></svg-icon>
          <span class="item-text">CM专区</span>
        </router-link>
        <router-link tag="li" class="tags-item" to="./index">
          <svg-icon class="tags-icon" icon-class="collar-cm"></svg-icon>
          <span class="item-text">领CM币</span>
        </router-link>
        <router-link tag="li" class="tags-item" to="./index">
          <svg-icon class="tags-icon" icon-class="coupon-svg"></svg-icon>
          <span class="item-text">领券</span>
        </router-link>
        <router-link tag="li" class="tags-item" to="./index">
          <svg-icon class="tags-icon" icon-class="chain-cat-member"></svg-icon>
          <span class="item-text">链猫会员</span>
        </router-link>
      </ul>
    </section>
    <section class="spike-area">
      <ul class="spike-top">
        <!-- <router-link class="top-left" to="/chainCatSpike" tag="li"> -->
        <router-link class="top-left" to="/index" tag="li">
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
        <!-- <router-link class="top-right" to="/foundGoodGoods" tag="li"> -->
        <router-link class="top-right" to="/index" tag="li">
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
        <!-- <router-link class="center-item" to="/specialSpike" tag="li"> -->
        <router-link class="center-item" to="/index" tag="li">
          <span class="center-title">特价秒杀</span>
          <span class="center-descr">10元抢购</span>
          <img src="../../assets/image/home/demo6.png" />
        </router-link>
        <!-- <router-link class="center-item center-border" to="/brandSpike" tag="li"> -->
        <router-link class="center-item center-border" to="/index" tag="li">
          <span class="center-title">品牌秒杀</span>
          <span class="center-descr" style="color:#DD3749">笔记本秒杀</span>
          <img src="../../assets/image/home/demo7.png" />
        </router-link>
        <!-- <router-link class="center-item" to="/newProductLaunch" tag="li"> -->
        <router-link class="center-item" to="/index" tag="li">
          <span class="center-title">新品首发</span>
          <span class="center-descr" style="#FC6380">小黑盒新品</span>
          <img src="../../assets/image/home/demo8.png" />
        </router-link>
        <!-- <router-link class="center-item" to="/premiumRanking" tag="li"> -->
        <router-link class="center-item" to="/index" tag="li">
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
          <!-- <router-link class="bottom-left" to="/index" tag="li"> -->
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
        title-active-color="#EC3924"
        background="#EFEFF4"
        v-model="active"
        @change="handleTabChange"
        swipeable
      >
        <!-- animated -->
        <div ref="homeWrapper">
          <list-scroll
            ref="listScroll"
            :scroll-data="tabItemLists"
            :pullup="true"
            @scrollToEnd="handleScrollToEnd"
            :pulldown="true"
          >
            <div>
              <van-tab
                v-for="(list,index) in catList"
                :title="list.describe"
                :name="list.type"
                :key="index"
              >
                <div slot="title" class="slot-title">
                  <b class="tab-title">{{list.title}}</b>
                  <span class="tab-name">{{list.describe}}</span>
                </div>
                <section class="goods-box">
                  <ul class="goods-content">
                    <li class="goods-item" v-for="(item,index) in tabItemLists" :key="index">
                      <div @click="handleToProductDetail(item.productId)">
                        <img class="lazy-img" v-lazy="item.productMainImage" />
                      </div>
                      <div class="goods-layout">
                        <div class="goods-title">{{item.productName}}</div>
                        <span class="goods-div">{{item.labels}}</span>
                        <div class="goods-desc">
                          <span class="goods-price">
                            <b>￥{{item.productCnyPrice}}</b>
                            <span v-if="item.calculate" class="force-value">{{item.calculate}}倍算力值</span>
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </section>
              </van-tab>
            </div>
          </list-scroll>
        </div>
      </van-tabs>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      iconList: [],
      active: 0,
      pageNum: 1,
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
      adList: [],
      swiperOption: {
        loop: true,
        autoplay: false,
        width: 480,
        notNextTick: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        direction: "horizontal", //水平方向移动
        setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        height: window.innerHeight, // 高度设置，占满设备高度
        observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
        slidesPerView: 2 //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
      }
    };
  },

  created() {
    this.initData();
    this.handleTabChange();
  },
  watch: {
    active() {
      this.tabItemLists = [];
    }
  },
  mounted() {
    this.$eventBus.$emit("changeTag", 0);
    // window.addEventListener("scroll", this.pageScroll);
    this.setHomeWrapperHeight();
  },
  methods: {
    // 当滑块滑动到底部的时候。
    handleScrollToEnd() {
      this.pageNum++;
      this.handleTabChange();
    },

    //动态设置searc-wrap的高
    setHomeWrapperHeight() {
      let $screenHeight = document.documentElement.clientHeight;
      this.$refs.homeWrapper.style.height = $screenHeight - 100 + "px";
    },
    handleToProductDetail(productId) {
      this.$router.push({
        path: "/product/index",
        query: { productId: productId }
      });
    },
    initData() {
      this.$http.get(`api/index`).then(response => {
        this.images = response.data.content.bannerList;
        this.adList = response.data.content.adList;
        this.catList = response.data.content.catList;
        this.iconList = response.data.content.iconList;
      });
    },
    handleTabChange() {
      this.$http
        .get(
          `/api/index/choiceness?type=${this.active}&clientType=0&pageNum=${this.pageNum}&pageSize=30`
        )
        .then(response => {
          this.tabItemLists.push(...response.data.content);
        });
    },
    handleClick(linkUrl) {
      this.$router.push("/product/index");
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../styles/mixin.scss";
.home {
  .home-header {
    position: fixed;
    width: 100%;
    top: 0;
    background: url("../../assets/image/home_heda_img.png") no-repeat center
      center;
    background-size: 100% 100%;
    padding: 16px 16px 30px 16px;
    height: 55px;
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
      margin-top: 10px;
      // width: 90%;
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
    .customer-service-icon {
      margin-top: 10px;
    }
  }

  .swiper-carousel {
    padding-bottom: 10px;
    margin-top: 55px;
    background: url("../../assets/image/home_big_rand.png") no-repeat center
      bottom;
    background-size: 100% 6%;
    .lazy_img {
      width: 100%;
      height: 250px;
    }
  }
  .swiper-cls {
    background-color: #efeff4;
    position: relative;
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
    .radian-img {
      position: absolute;
      bottom: -9px;
      margin-left: 40px;
    }
  }
  .home-tags {
    margin-top: 23px;
    .tags-content {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 10px;
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
    padding: 10px 16px;
    box-sizing: border-box;
    padding-top: 10px;
    border-radius: 4px;
    .spike-top {
      border-radius: 4px;
      padding-bottom: 20px;
      background: url("../../assets/image/spike_center.png") no-repeat center
        bottom;
      background-size: 100% 5%;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      .top-left {
        padding: 10px 4px 10px 10px;
        border-style: solid;
        border-color: transparent;
        border-right-color: #efefef;
        border-right-style: solid;
        border-right-width: 1px;
        .item-top {
          display: flex;
          justify-content: safe;
          align-items: center;
          .item-title {
            font-size: 14px;
            color: #3a3a3a;
            padding-right: 5px;
            font-weight: 600;
          }
          .time-text {
            border: 1px solid #ccc;
            width: 86px;
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
              background-color: #ec3924;
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
              color: #ec3924;
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
            border: 1px solid #ec3924;
            display: inline-block;
            text-align: center;
            margin-left: 7px;
            border-radius: 2px;
            color: #ec3924;
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
      padding-bottom: 15px;
      background: url("../../assets/image/spike_center.png") no-repeat center
        bottom;
      background-size: 100% 5%;
      background-color: #fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .center-item.center-border {
        border-style: solid;
        border-color: transparent;
        border-right-color: #efefef;
        border-right-style: solid;
        border-right-width: 1px;
        padding-right: 20px;
      }
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
      border-radius: 4px;
      padding-bottom: 5px;
      background: url("../../assets/image/spike_center.png") no-repeat center
        bottom;
      background-size: 100% 1%;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .bottom-left {
        padding: 0 17px;
        margin: 10px 0;
        border-style: solid;
        border-color: transparent;
        border-right-color: #efefef;
        border-right-style: solid;
        border-right-width: 1px;
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
            border: 1px solid #ec3924;
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
    /deep/ .van-tabs__line {
      bottom: 23px;
    }
    /deep/ .van-tabs--line .van-tabs__wrap {
      height: 56px;
    }
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
      padding: 0 16px;
      .goods-content {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .goods-item {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 165px;
          margin-top: 10px;
          border-radius: 8px;
          background-color: white;
          box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
          .lazy-img {
            width: 100%;
            border-radius: 8px 8px 0 0;
            min-height: 196px;
            min-width: 165px;
          }
          .lazy-img[lazy="loading"] {
            background: #949497 url("../../assets/icons/pre-view.png") no-repeat
              center center;
            background-size: 100% 100%;
          }
        }
        li:nth-of-type(even) {
          padding-right: 0;
        }
        .goods-layout {
          width: 165px;
          padding: 0 5px;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          .goods-title {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            color: #3a3a3a;
            font-size: 14px;
            font-weight: 600;
          }
          .goods-div {
            color: #949497;
            font-size: 11px;
            padding-top: 3px;
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
              color: #ec3924;
              display: flex;
              justify-content: center;
              align-items: center;
              .force-value {
                margin-left: 7px;
                color: white;
                border-radius: 20px 20px;
                background-color: #ec3924;
                display: inline-block;
                font-size: 7px;
                line-height: 17px;
                text-align: center;
                min-width: 55px;
                height: 17px;
                padding: 0 3px;
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
}
</style>
