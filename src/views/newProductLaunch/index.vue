<template>
  <div class="new-product-launch">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <div class="header-content">新品首发</div>
      <span class="share-btn">
        <svg-icon icon-class="share-btn-black"></svg-icon>
      </span>
    </header>

    <div class="my-swiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(img ,index) in images2" :key="index">
          <img class="slide-img" :src="img.imgUrl" alt />
        </swiper-slide>
      </swiper>
    </div>

    <div class="page-tabs">
      <van-tabs
        :swipe-threshold="4"
        title-inactive-color="#3a3a3a"
        title-active-color="#D8182D"
        background="#FFFFFF"
        v-model="active"
        animated
        swipeable
        :line-width="0"
      >
        <van-tab v-for="(item,index) in tabList" :title="item.name" :key="index">
          <!-- <div class="slot-box"> -->
          <div class="slot-title" slot="title">
            <p class="tab-title">{{item.title}}</p>
            <span class="tab-name">{{item.name}}</span>
          </div>
          <!-- </div> -->
          <section class="goods-box search-wrap">
            <ul class="goods-content">
              <li v-for="(item,index) in list" :key="index">
                <router-link tag="div" to="/classify/product">
                  <img :src="item.img" />
                </router-link>
                <div class="goods-layout">
                  <div class="goods-title">{{item.name}}</div>
                  <span class="goods-div">{{item.title}}</span>
                  <div class="goods-desc">
                    <span class="goods-price">
                      <i>{{item.price}}</i>
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
  </div>
</template>

<script>
export default {
  name: "newProductLaunch", // 新品首发
  data() {
    return {
      active: "1",
      tabList: [
        {
          title: "精选",
          name: "最近很火"
        },
        {
          title: "手机",
          name: "新机速递"
        },
        {
          title: "电器",
          name: "3C家电"
        },
        {
          title: "时尚",
          name: "美妆穿搭"
        },
        {
          title: "生活",
          name: "居家日用"
        }
      ],
      list: [
        {
          name: "多功能料理机",
          img: require("../../assets/image/home/test1.png"),
          title: "限量套装 新品上市",
          price: "$125"
        },
        {
          name: "遥控制空调扇",
          img: require("../../assets/image/home/test2.png"),
          title: "限量套装 新品上市",
          price: "$245"
        },
        {
          name: "时尚双肩包",
          img: require("../../assets/image/home/test3.png"),
          title: "限量套装 新品上市",
          price: "$21"
        },
        {
          name: "商务行李箱",
          img: require("../../assets/image/home/test4.png"),
          title: "限量套装 新品上市",
          price: "$218"
        },
        {
          name: "无线消噪耳机",
          img: require("../../assets/image/home/test5.png"),
          title: "限量套装 新品上市",
          price: "$218"
        },
        {
          name: "无线蓝牙耳机",
          img: require("../../assets/image/home/test6.png"),
          title: "限量套装 新品上市",
          price: "$218"
        }
      ],
      images2: [
        {
          imgUrl: require("../../assets/image/home/banner5.jpg"),
          categoryId: 100018
        },
        {
          imgUrl: require("../../assets/image/home/banner6.jpg"),
          categoryId: 100008
        },
        {
          imgUrl: require("../../assets/image/home/banner7.jpg"),
          categoryId: 100016
        },
        {
          imgUrl: require("../../assets/image/home/banner8.jpg"),
          categoryId: 100035
        }
      ],
      swiperOption: {
        loop: true,
        autoplay: false,
        effect: "coverflow",
        coverflowEffect: {
          rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
          stretch: -20, //每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
          depth: 100, // slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
          modifier: 1, //  depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
          slideShadows: false // 开启slide阴影。默认 true
        }
      }
    };
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.new-product-launch {
  .page-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    // background: linear-gradient(#874bfe, #efefef);
    height: 250px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
    .btn-left {
      position: fixed;
      left: 16px;
      top: 14px;
    }
    .header-content {
      text-align: center;
      font-size: 18px;
      color: #3a3a3a;
      font-weight: 600;
      flex: 1;
    }
    .share-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      .svg-icon {
        width: 20px;
        height: 20px;
      }
    }
  }
  .my-swiper {
    margin-top: 60px;
    width: 100%;
    .swiper-slide-active {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-slide-prev {
      right: -16%;
    }
    .swiper-slide-next {
      left: -5%;
    }
    .slide-img {
      width: 333px;
      height: 200px;
      border-radius: 5px;
    }
  }
  .page-tabs {
    /deep/ .van-tabs--line .van-tabs__wrap {
      height: 50px;
    }
    /deep/ .van-tab {
      line-height: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    /deep/ .van-tab--active {
      display: flex;
      justify-content: center;
      .tab-title {
        border: 1px solid #d8182d;
        border-radius: 10px 10px;
      }
    }
    .slot-title {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .tab-title {
        font-size: 14px;
        font-weight: 600;
        display: inline-block;
        width: 40px;
      }
      .tab-name {
        font-size: 10px;
        display: inline-block;
      }
    }

    .goods-box {
      padding: 16px;
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
          // background: url('../../assets/image/back-show.png') no-repeat center center;
          // background-size:100% 100%;
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
              font-size: 14px;
              color: #d8182d;
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
