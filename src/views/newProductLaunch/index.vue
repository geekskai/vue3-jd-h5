<template>
  <div class="new-product-launch">
    <header class="page-header">
      <span class="green-btn" @click="$router.go(-1)">
        <svg-icon icon-class="transparent-btn"></svg-icon>
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
  </div>
</template>

<script>
export default {
  name: "newProductLaunch", // 新品首发
  data() {
    return {
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
    .return-btn {
      display: flex;
      justify-content: center;
      align-items: center;
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
      right: -28%;
    }
    .swiper-slide-next {
      left: -8%;
    }
    .slide-img {
      width: 300px;
      height: 200px;
      border-radius: 5px;
    }
  }
}
</style>
