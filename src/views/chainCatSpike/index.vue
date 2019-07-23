<template>
  <ul class="chain-cat-spike">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <img src="../../assets/icons/left-green-white.png" alt />
      </span>
      <div class="header-content">链猫秒杀</div>
      <div class="option-btns">
        <span class="search-btn">
          <svg-icon class="search-icon" icon-class="search"></svg-icon>
        </span>
        <span class="therr-point-icon">
          <svg-icon icon-class="therr-point"></svg-icon>
        </span>
      </div>
    </header>

    <ul class="page-tabs">
      <van-tabs
        :swipe-threshold="4"
        title-inactive-color="#fff"
        title-active-color="#fff"
        background="transparent"
        v-model="active"
        animated
        :border="false"
        swipeable
        :line-width="0"
      >
        <van-tab v-for="(item,index) in tabList" :title="item.name" :key="index">
          <div class="slot-title" slot="title">
            <p class="tab-title">{{item.title}}</p>
            <span class="tab-name">{{item.name}}</span>
          </div>

          <main class="main-box">
            <ul class="card-box" v-for="(item,index) in cardList" :key="index">
              <aside>
                <img class="card-img" src="../../assets/image/premiumRanking/demo1.png" />
              </aside>
              <ul class="card-right">
                <li class="item-title">
                  <cite class="card-cite">{{item.title}}</cite>
                  <small class="card-small">{{item.name}}</small>
                </li>
                <div class="item-bottom">
                  <li class="item-desc">
                    <b class="item-price">{{item.price}}</b>
                    <button class="my-btn">去抢购</button>
                  </li>
                  <li class="item-desc">
                    <del class="item-del">{{item.oldPrice}}</del>
                    <!-- <button class="my-btn">进度条</button> -->
                    <!-- <progress class="lm-progress" value="22" max="100"></progress> -->
                  </li>
                </div>
              </ul>
            </ul>
          </main>
        </van-tab>
      </van-tabs>
    </ul>
  </ul>
</template>

<script>
export default {
  name: "chainCatSpike", // 链猫秒杀
  data() {
    return {
      active: "1",
      cardList: [
        {
          title: "【玻尿酸巨补水新款面膜】大大发送的发送到发顺丰",
          name: "迪丽热巴同款",
          price: "￥200",
          oldPrice: "￥400"
        },
        {
          title: "【玻尿酸巨补水新款面膜】大大发送的发送到发顺丰",
          name: "迪丽热巴同款",
          price: "￥200",
          oldPrice: "￥400"
        },
        {
          title: "【玻尿酸巨补水新款面膜】大大发送的发送到发顺丰",
          name: "迪丽热巴同款",
          price: "￥200",
          oldPrice: "￥400"
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
          title: "10:00",
          name: "抢购中"
        },
        {
          title: "12:00",
          name: "即将开始"
        },
        {
          title: "14:00",
          name: "即将开始"
        },
        {
          title: "16:00",
          name: "即将开始"
        },
        {
          title: "18:00",
          name: "即将开始"
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
.chain-cat-spike {
  .page-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(#d8182d, #efeff4);
    height: 250px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
    .btn-left {
      position: fixed;
      left: 16px;
      top: 5px;
    }
    .header-content {
      text-align: center;
      font-size: 18px;
      color: #ffffff;
      font-weight: 600;
      flex: 1;
    }
    .option-btns {
      position: fixed;
      right: 16px;
      display: flex;
      flex-direction: row;
      align-items: center;
      .therr-point-icon {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .search-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 20px;
        .svg-icon {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  .page-tabs {
    margin-top: 70px;
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
          .item-bottom {
            width: 100%;
            .item-desc {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding-right: 16px;
              padding-top: 7px;
              .item-price {
                font-size: 17px;
                color: #d8182d;
              }
              .item-del {
                font-size: 13px;
              }
              .lm-progress {
                width: 70px;
                height: 10px;
                border-radius: 5px;
                color: #d8182d;
                display: inline-block;
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
  }
}
</style>
