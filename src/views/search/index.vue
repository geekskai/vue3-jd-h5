<template>
  <div class="search-box">
    <div class="search-header">
      <span class="btn-left" @click="goBack">
        <svg-icon icon-class="left-btn"></svg-icon>
      </span>

      <div class="search-con">
        <svg-icon class="search-icon" icon-class="search"></svg-icon>
        <input v-focus placeholder="搜索、关键词" v-model="searchText" />
      </div>
      <span @click="getSearch">搜索</span>
    </div>

    <div class="search-content">
      <div class="hot-list">
        <span class="hot-words">热搜词</span>
        <div>
          <span
            class="hot-detail"
            v-for="(item, index) in hotData"
            @click="selectTag(item.title)"
            :key="index"
            :class="{ hot: item.hot }"
            >{{ item.title }}
            <svg-icon v-if="item.hot == 1" icon-class="hot"></svg-icon>
          </span>
        </div>
      </div>

      <div class="search-list history-list">
        <div class="history-search">
          <span>历史搜索</span>
          <span @click="deleteHistory">
            <svg-icon icon-class="icon-delete"></svg-icon>
          </span>
        </div>
        <div class="histort-search">
          <span
            v-for="(item, index) in searchHistory"
            @click="selectTag(item)"
            :key="index"
            >{{ item }}</span
          >
        </div>
      </div>
    </div>
    <popup
      :popup-title="popupTitle"
      :popup-show="popupShow"
      @cancelPopup="cancelPopup"
      @confirmPopup="confirmPopup"
    ></popup>
  </div>
</template>

<script>
import popup from "../../components/popup/index";
// import {hotData} from "../../service/getData";
import { getStore, dedupe, ModalHelper } from "../../utils/util";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      searchText: "",
      hotData: [],
      popupTitle: "",
      popupShow: false
    };
  },
  created() {
    let searchHistory = getStore("searchHistory");
    console.log(searchHistory);
    if (!searchHistory) {
      searchHistory = [];
    }
    this.$store.commit("search/setHistory", searchHistory);
    this.getSelectTags();
  },
  computed: {
    ...mapState({
      searchHistory: state => state.search.searchHistory
    })
  },
  methods: {
    ...mapMutations(["search/setHistory"]),
    getSelectTags() {
      this.$http.get("http://test.happymmall.com/search/hot").then(res => {
        this.hotData = res.data.data;
      });
    },
    getSearch() {
      let keyword = this.searchText.replace(/^\s+|\s+$/g, ""); //去除两头空格
      if (!keyword) {
        alert("请输入搜索内容");
        return;
      }
      this.selectTag(keyword);
    },
    selectTag(keyword) {
      //   this.$router.push("/product-list?keyword=" + keyword + "&categoryId=0");
      this.$store.commit("search/addHistory", keyword);
      this.$store.commit("search/setHistory", dedupe(this.searchHistory));
    },
    deleteHistory() {
      this.popupTitle = "确定删除搜索历史吗？";
      this.popupShow = true;
    },
    confirmPopup() {
      this.$store.commit("search/setHistory", []);
      this.cancelPopup();
    },
    cancelPopup() {
      ModalHelper.beforeClose();
      this.popupShow = false;
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    }
  },
  components: {
    popup
  }
};
</script>

<style lang="scss" type="text/scss" scoped>
@import "../../styles/mixin.scss";
.search-box {
  width: 100%;
  height: 100vh;
  background-color: rgba(239, 239, 244, 1);
  font-size: 30px;
  padding-top: 45px;
  .search-header {
    @include fj;
    width: 100%;
    height: 44px;
    box-sizing: border-box;
    .btn-left {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 16px;
    }
    .icon-left {
      width: 10%;
      font-size: 16px;
      color: #252525;
      font-weight: bold;
    }
    .search-con {
      width: 70%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 10px;
      font-size: 16px;
      background: #f7f7f7;
      border-radius: 4px;
      @include boxSizing;
      .iconfont {
        font-size: 16px;
      }
      input {
        font-size: 16px;
        background: #f7f7f7;
        padding-left: 50px;
        width: 100%;
      }
    }
    span {
      padding-right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: #d8182d;
      font-size: 16px;
    }
  }
  .search-content {
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
    .hot-list {
      .hot-words {
        position: relative;
        color: #d8182d;
        font-size: 14px;
      }
      .hot-detail {
        font-size: 13px;
        color: #686868;
        border: 1px solid #979797;
        padding: 2px 10px;
        margin-right: 16px;
        border-radius: 3px;
        display: inline-block;
      }
      .hot-detail.hot {
        border: 1px solid #d8182d;
        color: #d8182d;
        .svg-icon {
          width: 12px;
          height: 14px;
        }
      }
    }
    .search-list {
      width: 100%;
      .histort-search {
        span {
          font-size: 14px;
          color: #686868;
          padding: 2px 10px;
          margin-right: 16px;
          margin-bottom: 10px;
          display: block;
        }
      }
      &.history-list {
        margin-bottom: 20px;
        .history-search {
          font-size: 14px;
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          color: #d8182d;
        }
        .icon-delete {
          width: 16px;
          height: 16px;
          float: right;
        }
      }

      //   div {
      //     margin-top: 10px;
      //     display: flex;
      //     flex-shrink: 0;
      //     flex-wrap: nowrap;
      //   }
    }
  }
  .modal {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 90%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    @include borderRadius(20px);
    p {
      width: 100%;
      height: 200px;
      text-align: center;
      line-height: 200px;
    }
    div {
      display: flex;
      width: 100%;
      height: 100px;
      span {
        width: 50%;
        height: 100%;
        text-align: center;
        line-height: 100px;
        color: #000;
        background: #fff;
        border-bottom-left-radius: 20px;
        &:nth-child(2) {
          color: #fff;
          background: $red;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 20px;
        }
      }
    }
  }
}
</style>
