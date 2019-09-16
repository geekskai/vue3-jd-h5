<template>
  <div class="search-box">
    <div class="search-header">
      <span class="btn-left" @click="$router.go(-1)">
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
            class="hot-detail hot"
            v-for="(item,index) in hotSerach"
            @click="handleHotSerach(item.productCategoryId)"
            :key="index"
          >
            {{item.productCategoryName}}
            <svg-icon icon-class="hot"></svg-icon>
          </span>
        </div>
      </div>
      <div class="search-list history-list">
        <div class="history-search">
          <span>历史搜索</span>
          <span @click="deleteHistory(0)">
            <svg-icon icon-class="icon-delete"></svg-icon>
          </span>
        </div>
        <div class="histort-search">
          <span
            v-for="(item,index) in historySearch"
            @click="handleGoHistory(item)"
            :key="index"
          >{{item}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListScroll from "../../components/scroll/ListScroll";
export default {
  name: "search",
  components: {
    ListScroll
  },
  data() {
    return {
      searchText: "",
      // seclectActive: false,
      hotSerach: [],
      serarchResult: [],
      page: 1,
      historySearch: []
    };
  },
  created() {
    this.initData();
  },
  methods: {
    handleGoHistory(item) {
      this.$router.push({
        path: `/search/searchReault`,
        query: {
          // categoryId: categoryId,
          searchWord: item
        }
      });
    },
    initData() {
      this.$http
        .get(
          `/api/product/hotAndHistorySearch?merchantShopId=${
            this.$route.query.merchantShopId
              ? this.$route.query.merchantShopId
              : ""
          }`
        )
        .then(response => {
          this.historySearch = response.data.content.historySearch;
          this.hotSerach = response.data.content.hotSerach;
        });
    },
    handleHotSerach(categoryId) {
      this.$router.push({
        path: `/search/searchReault`,
        query: {
          categoryId: categoryId,
          merchantShopId: this.$route.query.merchantShopId || ""
        }
      });
    },
    getSearch() {
      let keyword = this.searchText.replace(/^\s+|\s+$/g, ""); //去除两头空格
      if (!keyword) {
        this.$toast({
          mask: false,
          duration: 1000,
          message: "请输入搜索内容"
        });
        return;
      }
      this.$router.push({
        path: `/search/searchReault`,
        query: {
          searchWord: keyword,
          merchantShopId: this.$route.query.merchantShopId
        }
      });
    },

    deleteHistory() {
      this.$dialog
        .confirm({
          title: "提示！",
          message: "确认删除所有历史搜索吗？"
        })
        .then(() => {
          this.$http
            .post(`/api/product/delHistorySearch?type=0`)
            .then(response => {
              this.$toast({
                mask: false,
                duration: 1000,
                message: "删除成功！"
              });
              this.initData();
            });
        });
    }
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    }
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
      color: #ec3924;
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
        color: #ec3924;
        font-size: 14px;
      }
      .hot-detail {
        font-size: 13px;
        color: #686868;
        border: 1px solid #979797;
        padding: 2px 10px;
        margin-right: 10px;
        border-radius: 3px;
        display: inline-block;
      }
      .hot-detail.hot {
        border: 1px solid #ec3924;
        color: #ec3924;
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
          color: #ec3924;
        }
        .icon-delete {
          width: 16px;
          height: 16px;
          float: right;
        }
      }
    }
  }
}
</style>
