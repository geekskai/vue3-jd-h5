<template>
  <div class="my-focus">
    
    <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <img src="../../assets/icons/left-green-white.png" alt />
        <!-- <svg-icon icon-class="green-btn"></svg-icon> -->
      </span>
      <i>商品</i>
      <i>店铺</i>
    </cm-header>

    <ul class="list-item">
      <li class="card-item">
        <div class="card-img">
          <img src="../../assets/image/premiumRanking/demo1.png" />
        </div>
        <ul class="card-info">
          <li class="info-top">
            <div class="item-title">高解析度无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳</div>
            <span class="item-desc">轻量化设计，重量轻到超乎你的想象，让你行车过程更加…</span>
          </li>
          <li class="info-buttom">
            <p class="item-price">22人关注</p>
            <span class="item-attention" @click="isLike=!isLike">
              <svg-icon v-if="isLike" icon-class="heart-full"></svg-icon>
              <svg-icon v-else icon-class="heart-null"></svg-icon>
            </span>
          </li>
        </ul>
      </li>
      <li class="card-item">
        <div class="card-img">
          <img src="../../assets/image/premiumRanking/demo1.png" />
        </div>
        <ul class="card-info">
          <li class="info-top">
            <div class="item-title">高解析度无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳</div>
            <span class="item-desc">轻量化设计，重量轻到超乎你的想象，让你行车过程更加…</span>
          </li>
          <li class="info-buttom">
            <p class="item-price">221人关注</p>
            <span class="item-attention" @click="isLike=!isLike">
              <svg-icon v-if="isLike" icon-class="heart-full"></svg-icon>
              <svg-icon v-else icon-class="heart-null"></svg-icon>
            </span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyFocus", // 我的关注
  data() {
    return {
      active: "1",
      isLike: true
    };
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.my-focus {
  background-color: #efefef;
  min-height: 812px;
  padding: 0 16px;
  .list-item {
    margin-top: 70px;
    .card-item {
      margin: 20px auto;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      font-size: 14px;
      padding: 14px;
      .card-img {
        width: 110px;
        height: 110px;
      }
      .card-info {
        display: flex;
        height: 110px;
        justify-content: space-between;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 15px;
        .info-top {
          .item-title {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 14px;
            color: #3a3a3a;
            font-weight: 600;
            width: 200px;
          }
          .item-desc {
            font-size: 11px;
            color: #3a3a3a;
            opacity: 0.6;
          }
        }
        .info-buttom {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          .item-price {
            font-size: 11px;
            color: #fe4f70;
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
