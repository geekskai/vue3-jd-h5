<template>
  <div class="my-focus">
    <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <img src="../../assets/icons/left-green-white.png" />
        <!-- <svg-icon icon-class="green-btn"></svg-icon> -->
      </span>
      <div>我的关注</div>
    </cm-header>
    <van-tabs
      color="#000"
      line-width="36"
      v-model="active"
      background="#efefef"
      swipeable
      title-active-color="#3A3A3A"
    >
      <van-tab title="商品">
        <ul class="list-item">
          <van-swipe-cell :right-width="60" :on-close="onClose" name="111">
            <li class="card-item">
              <div class="card-img">
                <img src="../../assets/image/home/demo3.png" />
              </div>
              <ul class="card-info">
                <li class="info-top">
                  <div class="item-title">高解析度无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳</div>
                  <span class="item-desc">22人关注</span>
                </li>
                <li class="info-buttom">
                  <b class="item-focus">￥777</b>
                  <span>
                    <van-tag color="#EC3924" size="large" plain>找相似</van-tag>
                  </span>
                </li>
              </ul>
            </li>
            <template slot="right">
              <van-button square type="danger">
                取消
                <br />关注
              </van-button>
            </template>
          </van-swipe-cell>
        </ul>
      </van-tab>
      <van-tab title="店铺">
        <ul class="shop-list">
          <van-swipe-cell :right-width="120" :on-close="onClose" name="111">
            <li class="card-item">
              <div class="card-img">
                <img class="item-img" src="../../assets/image/home/demo11.png" />
              </div>
              <ul class="card-info">
                <li class="info-top">
                  <b class="item-title">大众专卖店</b>
                  <span class="item-desc">1869人关注</span>
                </li>
                <li class="info-buttom">
                  <svg-icon icon-class="three-point"></svg-icon>
                </li>
              </ul>
            </li>
            <template slot="right">
              <van-button square type="danger" text="取消关注"></van-button>
              <van-button square type="primary" text="置顶店铺"></van-button>
            </template>
          </van-swipe-cell>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "MyFocus", // 我的关注
  data() {
    return {
      active: 0,
      isLike: true
    };
  },
  created() {},
  methods: {
    onClose(clickPosition, instance, detail) {
      this.$http
        .post(`/api/message/updateMessage`, { ids: [detail.name], type: 1 })
        .then(response => {
          this.$toast({
            mask: false,
            duration: 1000,
            message: "删除成功！"
          });
        });
      instance.close();
      this.inintData();
    }
  }
};
</script>

<style scoped lang="scss">
.my-focus {
  background-color: #efefef;
  min-height: 812px;
  padding: 0 16px;
  /deep/ .van-tab--active {
    font-size: 18px;
    font-weight: 600;
  }
  .list-item {
    padding-top: 16px;
    /deep/ .van-button--danger {
      height: 100%;
      width: 60px;
    }
    /deep/ .van-swipe-cell {
      border-radius: 0 8px 8px 0;
      -webkit-backface-visibility: hidden;
      -webkit-transform: translate3d(0, 0, 0);
    }
    .card-item {
      border-radius: 8px 0 0 8px;
      background: url("../../assets/image/back-show.png") no-repeat center
        center;
      background-size: 102% 100%;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      font-size: 14px;
      .card-img {
        margin: 14px;
        width: 110px;
        height: 110px;
      }
      .card-info {
        display: flex;
        height: 110px;
        justify-content: space-between;
        flex-direction: column;
        align-items: flex-start;
        .info-top {
          margin-top: 14px;
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
          .item-desc {
            font-size: 11px;
            color: #949497;
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
  .shop-list {
    padding-top: 16px;
    /deep/ .van-button--danger {
      height: 100%;
      width: 60px;
    }
    /deep/ .van-button--primary {
      height: 100%;
      width: 60px;
      background-color: #e9c146;
      border: 0.026667rem solid #e9c146;
    }
    /deep/ .van-swipe-cell {
      border-radius: 0 8px 8px 0;
      -webkit-backface-visibility: hidden;
      -webkit-transform: translate3d(0, 0, 0);
    }
    .card-item {
      border-radius: 8px 0 0 8px;
      background: url("../../assets/image/back-show.png") no-repeat center
        center;
      background-size: 102% 100%;
      background-color: #fff;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 14px;
      .card-img {
        padding: 16px;
        .item-img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
        }
      }
      .card-info {
        display: flex;
        height: 110px;
        justify-content: space-between;
        align-items: center;
        .info-top {
          .item-title {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size: 17px;
            color: #3a3a3a;
            font-weight: 600;
            width: 200px;
            margin-bottom: 5px;
            padding-right: 15px;
          }
          .item-desc {
            font-size: 11px;
            color: #949497;
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
}
</style>
