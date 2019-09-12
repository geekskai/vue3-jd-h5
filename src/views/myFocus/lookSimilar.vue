<template>
  <div class="look-similar">
    <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <img src="../../assets/icons/left-green-white.png" />
        <!-- <svg-icon icon-class="green-btn"></svg-icon> -->
      </span>
      <div>看相似</div>
    </cm-header>
    <ul class="list-item">
      <li class="card-item">
        <div class="card-img">
          <img src="../../assets/image/premiumRanking/demo1.png" />
        </div>
        <ul class="card-info">
          <li class="info-top">
            <div class="item-title">高解析度无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳</div>
          </li>
          <li class="info-buttom">
            <b class="item-focus">￥777</b>
          </li>
        </ul>
      </li>
    </ul>
    <van-divider
      :style="{ color: '#3A3A3A', borderColor: '#979797',fontSize:'15px', padding: '0 16px' }"
    >
      <b>更多相似推荐</b>
    </van-divider>
    <div ref="similarWrapper">
      <!-- :scroll-data="tabItemLists" -->
      <list-scroll
        ref="listScroll"
        :pullup="true"
        @scrollToEnd="handleScrollToEnd"
        :pulldown="true"
      >
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
      </list-scroll>
    </div>
  </div>
</template>

<script>
export default {
  name: "lookSimilar",
  data() {
    return {
      tabItemLists: [],
      active: 0,
      pageNum: 1
    };
  },
  created() {
    this.initData();
  },
  mounted() {
    this.setHomeWrapperHeight();
  },
  methods: {
    initData() {
      this.$http
        .get(
          `/api/index/choiceness?type=${this.active}&clientType=0&pageNum=${this.pageNum}&pageSize=30`
        )
        .then(response => {
          this.tabItemLists.push(...response.data.content);
        });
    },
    // 当滑块滑动到底部的时候。
    handleScrollToEnd() {
      this.pageNum++;
      this.initData();
    },
    //动态设置searc-wrap的高
    setHomeWrapperHeight() {
      let $screenHeight = document.documentElement.clientHeight;
      this.$refs.similarWrapper.style.height = $screenHeight - 50 + "px";
    }
  }
};
</script>

<style scoped lang="scss">
.look-similar {
  background-color: #efefef;
  min-width: 100%;
  padding: 0 16px;
  .list-item {
    .card-item {
      padding: 16px;
      border-radius: 8px;
      background: url("../../assets/image/back-show.png") no-repeat center
        center;
      background-size: 102% 100%;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      .card-img {
        width: 110px;
        height: 110px;
      }
      .card-info {
        display: flex;
        padding-left: 16px;
        height: 110px;
        justify-content: space-between;
        flex-direction: column;
        .info-top {
          .item-title {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size: 14px;
            color: #3a3a3a;
            font-weight: 600;
            width: 200px;
            margin-bottom: 5px;
            padding-right: 15px;
          }
        }
        .info-buttom {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 15px;
          .item-focus {
            font-size: 15px;
            color: #ec3924;
            font-weight: 600;
            padding-bottom: 2px;
            margin-right: 10px;
          }
        }
      }
    }
  }
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
        min-height: 165px;
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
</style>
