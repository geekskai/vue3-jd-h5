<template>
  <div class="classify">
    <!-- <p class="header">商品分类</p> -->
    <div class="munu_all">
      <div class="meun_classify" ref="meun_classify">
        <ul>
          <li
            v-for="(list,index) in tabslabel"
            :key="index"
            @click="selectList(index)"
            :class="list.active?'active':''"
          >{{list.label}}</li>
        </ul>
      </div>
      <div class="classify_content" ref="classify_content">
        <ul>
          <li v-for="(tag,index) in tags" :key="index">
            <img :src="tag.image" alt>
            <p>
              {{tag.label}}
              <i class="cubeic-add" @click="addToCart($event,tag)"></i>
            </p>
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
      tags: [],
      tabslabel: [
        {
          label: "热门推荐",
          active: true
        },
        {
          label: "手机数码",
          active: false
        },
        {
          label: "电脑办公",
          active: false
        },
        {
          label: "计生情趣",
          active: false
        },
        {
          label: "美妆护肤",
          active: false
        },

        {
          label: "个人清洁",
          active: false
        },
        {
          label: "汽车生活",
          active: false
        },
        {
          label: "男装",
          active: false
        },
        {
          label: "女装",
          active: false
        },
        {
          label: "超市",
          active: false
        },
        {
          label: "户外运动",
          active: false
        },
        {
          label: "男装",
          active: false
        },
        {
          label: "女装",
          active: false
        },
        {
          label: "超市",
          active: false
        },
        {
          label: "户外运动",
          active: false
        },
        {
          label: "其他",
          active: false
        }
      ]
    };
  },
  created() {
    this.getClassify(0);
  },
  methods: {
    selectList(index) {
      this.tabslabel.forEach((tab, idx) => {
        if (idx === index) {
          tab.active = true;
        } else {
          tab.active = false;
        }
      });
      this.getClassify(index);
    },
    async getClassify(index) {
      const { data } = await this.$http.get("/api/classify", {
        params: { type: index }
      });
      this.tags = data.data;
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
      this.scroll_menu = new BScroll(this.$refs.meun_classify, { click: true });
      this.scroll_content = new BScroll(this.$refs.classify_content, {
        click: true
      });
    });
  }
};
</script>

<style scoped lang="scss">
.classify {
  .header {
    background-color: #ffffff;
  }
  .munu_all {
    display: flex;
    .meun_classify {
      width: 25%;
      text-align: center;
      flex-wrap: wrap;
      li {
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #ffffff;
        color: #333;
        background-color: #f8f8f8;
        font-size: 14px;
      }
      .active {
        background-color: #ffffff;
        color: #e93b3d;
      }
    }
    .classify_content {
      text-align: center;
      width: 75%;
      ul {
        background-color: #ffffff;
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
