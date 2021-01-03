<template>
  <ul class="new-product-launch" id="new-product-launch">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <!-- <svg-icon icon-class="green-btn"></svg-icon> -->
        <img src="../../assets/icons/left-green-white.png" alt />
      </span>
      <div class="header-content">新品首发</div>
      <span class="share-btn" @click="show = true">
        <svg-icon icon-class="share-btn-black"></svg-icon>
      </span>
    </header>

    <div class="my-swiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(img, index) in images2" :key="index">
          <img class="slide-img" :src="img.imgUrl" alt />
        </swiper-slide>
      </swiper>
    </div>

    <ul class="new-product-tags">
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
        <van-tab
          v-for="(item, index) in tabList"
          :title="item.name"
          :key="index"
        >
          <template #title>
            <div class="slot-title">
              <p class="tab-title">{{ item.title }}</p>
              <span class="tab-name">{{ item.name }}</span>
            </div>
          </template>

          <main class="main-box">
            <ul class="card-box" v-for="(item, index) in cardList" :key="index">
              <aside>
                <img
                  class="card-img"
                  src="../../assets/image/premiumRanking/demo1.png"
                />
              </aside>
              <ul class="card-right">
                <li class="item-title">
                  <cite class="card-cite">{{ item.title }}</cite>
                  <small class="card-small">{{ item.name }}</small>
                </li>
                <li class="item-desc">
                  <b class="item-price">{{ item.price }}</b>
                  <button class="my-btn">去抢购</button>
                </li>
              </ul>
            </ul>
          </main>
        </van-tab>
      </van-tabs>
    </ul>
    <van-popup
      v-model="show"
      round
      :overlay="false"
      get-container="#new-product-launch"
      position="bottom"
      :style="{ height: '47%' }"
    >
      <article>
        <van-divider
          :style="{
            borderColor: 'rgb(58, 58, 58,.14)',
            color: '#3A3A3A',
            padding: '0 10px',
            margin: '15px 0'
          }"
          >分享到</van-divider
        >
        <ul class="share-list">
          <li class="share-item">
            <svg-icon icon-class="we-char"></svg-icon>
            <span class="share-text">微信好友</span>
          </li>
          <li class="share-item">
            <svg-icon icon-class="we-chat-friends"></svg-icon>
            <span class="share-text">朋友圈</span>
          </li>
          <li class="share-item">
            <svg-icon icon-class="we-blog"></svg-icon>
            <span class="share-text">新浪微博</span>
          </li>
          <li class="share-item">
            <svg-icon icon-class="qq-icon"></svg-icon>
            <span class="share-text">QQ好友</span>
          </li>
          <li class="share-item">
            <svg-icon icon-class="qq-space"></svg-icon>
            <span class="share-text">QQ空间</span>
          </li>
          <li class="share-item">
            <svg-icon icon-class="copy-link"></svg-icon>
            <span class="share-text">复制链接</span>
          </li>
        </ul>
        <li class="cancle-btn" @click="show = false">
          <b class="cancle-text">取消</b>
        </li>
      </article>
    </van-popup>
  </ul>
</template>

<script>
export default {
  name: "newProductLaunch", // 新品首发
  setup() {
    return {
      active: "1",
      show: false,
      cardList: [
        {
          title: "【玻尿酸巨补水新款面膜】大大发送的发送到发顺丰",
          name: "迪丽热巴同款",
          price: "￥200"
        },
        {
          title: "【玻尿酸巨补水新款面膜】大大发送的发送到发顺丰",
          name: "迪丽热巴同款",
          price: "￥200"
        },
        {
          title: "【玻尿酸巨补水新款面膜】大大发送的发送到发顺丰",
          name: "迪丽热巴同款",
          price: "￥200"
        },
        {
          title: "【玻尿酸巨补水新款面膜】大大发送的发送到发顺丰",
          name: "迪丽热巴同款",
          price: "￥200"
        },
        {
          title: "【玻尿酸巨补水新款面膜】大大发送的发送到发顺丰",
          name: "迪丽热巴同款",
          price: "￥200"
        }
      ],
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
  }
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
    margin-top: 70px;
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
  .new-product-tags {
    padding-top: 10px;
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
    .main-box {
      margin: 16px;
      .card-box {
        padding: 16px;
        border-radius: 8px;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: inherit;
        margin-top: 10px;
        .card-img {
          width: 110px;
          height: 110px;
          display: inline-block;
        }
        .card-right {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          align-items: flex-start;
          padding-left: 10px;
          .item-title {
            display: flex;
            flex-direction: column;
            .card-cite {
              font-size: 13px;
              color: #3a3a3a;
              padding-bottom: 6px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              width: 200px;
            }
            .card-small {
              font-size: 11px;
              color: #d8182d;
            }
          }
          .item-desc {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding-right: 16px;
            .item-price {
              font-size: 17px;
              color: #d8182d;
            }
            .my-btn {
              background-color: #d8182d;
              border-radius: 2px;
              width: 74px;
              height: 24px;
              color: #fff;
              font-size: 11px;
              text-align: center;
            }
          }
        }
      }
    }
  }
  .share-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 10px;
    .share-item {
      padding: 10px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 12px;
      color: #3a3a3a;
      .svg-icon {
        width: 40px;
        height: 40px;
      }
      .share-text {
        padding-top: 6px;
      }
    }
  }
  .cancle-btn {
    padding-top: 20px;
    text-align: center;
    color: #3a3a3a;
    font-size: 14px;
    .cancle-text {
      display: inline-block;
      width: 290px;
      font-size: 14px;
      font-weight: 600;
      padding-top: 13px;
      border: 0 solid #3a3a3a1a;
      border-top-width: 1px;
    }
  }
}
</style>
