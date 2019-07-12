<template>
  <div class="country-region">
    <header class="header-box">
      <div class="header-search">
        <svg-icon class="search-icon" icon-class="search"></svg-icon>
        <router-link tag="span" class="search-title" to="./search">搜索</router-link>
      </div>
    </header>
    <section class="index-box">
      <van-index-bar :index-list="indexList" highlight-color='#3C96FF'>
        <van-index-anchor class="letter-idnex" index="Z">Z</van-index-anchor>
        <van-cell title="中国+86" />
        <van-cell title="中国香港+852" />
        <van-cell title="中国香港+853" />
        <van-cell title="中国台湾+886" />

        <van-index-anchor class="letter-idnex" index="G">G</van-index-anchor>
        <van-cell title="冈比亚+220" />
        <van-cell title="刚果+242" />
        <van-cell title="哥伦比亚+57" />
        <van-cell title="冈比亚+220" />
        <van-cell title="刚果+242" />
        <van-cell title="哥伦比亚+57" />
        <van-cell title="冈比亚+220" />
        <van-cell title="刚果+242" />
        <van-cell title="哥伦比亚+57" />
        <van-cell title="冈比亚+220" />
        <van-cell title="刚果+242" />
        <van-cell title="哥伦比亚+57" />
      </van-index-bar>
    </section>
  </div>
</template>

<script>
export default {
  name: "countryRegion",
  data() {
    return {
      indexList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K','Z']
    };
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.country-region {
  height: 100%;
  padding-bottom: 45px;
  .header-box {
    background-color: #c9c9cd;
    padding: 16px;
    .header-search {
      background-color: #fff;
      height: 100px;
      width: 100%;
      border-radius: 3px;
      display: flex;
      height: 40px;
      line-height: 40px;
      color: #232326;
      .search-icon {
        line-height: 30px;
        padding: 8px;
      }
      .search-title {
        font-size: 16px;
        color: #dbdbdb;
        width: 100%;
      }
    }
  }
  .index-box {
    // padding-left: 10px;
    /deep/ .letter-idnex{
        padding-left: 10px;
        font-size: 20px;
        font-weight: 600;
    }
  }
}
</style>
