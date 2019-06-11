<template>
  <div class="classify">
    <p>商品分类</p>
    <div class="munu_all">
      <ul class="meun_classify wrapper" ref="wrapper">
        <van-sidebar :active-key="activeKey" @change="onChange">
          <van-sidebar-item title="运动 户外"/>
          <van-sidebar-item title="美妆 护肤"/>
          <van-sidebar-item title="个护 清理"/>
          <van-sidebar-item title="钟表 珠宝"/>
          <van-sidebar-item title="运动 户外"/>
          <van-sidebar-item title="美妆 护肤"/>
          <van-sidebar-item title="个护 清理"/>
          <van-sidebar-item title="钟表 珠宝"/>
          <van-sidebar-item title="运动 户外"/>
          <van-sidebar-item title="美妆 护肤"/>
          <van-sidebar-item title="个护 清理"/>
          <van-sidebar-item title="钟表 珠宝"/>
          <van-sidebar-item title="运动 户外"/>
          <van-sidebar-item title="美妆 护肤"/>
          <van-sidebar-item title="个护 清理"/>
          <van-sidebar-item title="钟表 珠宝"/>
          <van-sidebar-item title="运动 户外"/>
          <van-sidebar-item title="美妆 护肤"/>
          <van-sidebar-item title="美妆 护肤"/>
        </van-sidebar>
      </ul>
      <ul class="classify_content">
        <li v-for="(list,index) in lists" :key="index">
          <img :src="list.image">
          <p>{{list.label}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "",
  data() {
    return {
      activeKey: 0,
      lists: [
        {
          url: "https://m.cdclass.net",
          image:
            "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png",
          label: "分类一"
        },
        {
          url: "https://m.cdclass.net",
          image:
            "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png",
          label: "分类一"
        },
        {
          url: "https://m.cdclass.net",
          image:
            "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png",
          label: "分类一"
        },
        {
          url: "https://m.cdclass.net",
          image:
            "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png",
          label: "分类一"
        },
        {
          url: "https://m.cdclass.net",
          image:
            "https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png",
          label: "分类一"
        }
      ]
    };
  },
  created() {
    console.log("=====分类==>");
  },
  methods: {
    onChange(key) {
      this.activeKey = key;
    }
  },
  mounted() {
    this.$eventBus.$emit("changeTag", 1);
    //设置滚动盒子的高度
    const meun_classify = document.querySelector(".meun_classify");
    const classify_content = document.querySelector(".classify_content");
    const bodyheight = document.documentElement.clientHeight;
    meun_classify.style.height = bodyheight - 10 + "px";
    classify_content.style.height = bodyheight - 10 + "px";
    this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {})
      })
  }
};
</script>

<style scoped lang="scss">
.classify {
  .munu_all {
    display: flex;
    .meun_classify {
      width: 25%;
      flex-wrap: wrap;
      // overflow: scroll;
    }
    .meun_classify::-webkit-scrollbar {
      width: 0 !important;
    }
    .classify_content::-webkit-scrollbar {
      width: 0 !important;
    }
    .classify_content {
      width: 75%;
      display: flex;
      flex-wrap: wrap;
      // overflow: scroll;
      li {
        width: 50%;
        height: 150px;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        img {
          width: 80px;
          height: 80px;
        }
      }
    }
  }
}
</style>
