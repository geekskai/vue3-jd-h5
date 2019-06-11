<template>
  <div class="classify">
    <p>商品分类</p>
    <div class="munu_all">
      <div class="meun_classify" ref="meun_classify">
        <ul>
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
      </div>
      <div class="classify_content" ref="classify_content">
        <ul>
          <li v-for="(list,index) in lists" :key="index">
            <img :src="list.image">
            <p>{{list.label}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
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
    meun_classify.style.height = bodyheight - 50 + "px";
    classify_content.style.height = bodyheight - 50 + "px";
    this.$nextTick(() => {
      this.scroll_menu = new BScroll(this.$refs.meun_classify, {});
      this.scroll_content = new BScroll(this.$refs.classify_content, {});
    });
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
      li {
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #ffffff;
        color: #333;
        background-color: #f8f8f8;
        font-size: 14px;
      }
    }
    .classify_content {
      width: 75%;
      ul {
        display: flex;
        flex-wrap: wrap;

        li {
          width: 50%;
          justify-content: center;
          align-items: center;
          font-size: 15px;

          img {
            width: 80px;
            height: 80px;
          }

          .cubeic-add,
          .cubeic-remove {
            font-size: 18px;
            color: red;
          }
        }
      }
    }
  }
}
</style>
