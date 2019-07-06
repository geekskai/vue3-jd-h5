<template>
    <div class="search-box">
        <div class="search-header">
            <i class="iconfont icon-left" @click="goBack"></i>
            <div class="search-con">
                <i class="iconfont icon-search"></i>
                <input v-focus placeholder="双十一狂欢" v-model="searchText" />
            </div>
            <span @click="getSearch">搜索</span>
        </div>
        <div class="search-content">
            <div class="search-list history-list">
                <p>最近搜索
                    <i class="iconfont icon-delete" @click="deleteHistory"></i>
                </p>
                <div>
                    <span v-for="item in searchHistory" @click="selectTag(item)">{{item}}</span>
                </div>
            </div>
            <div class="search-list hot-list">
                <p>热门搜索</p>
                <div>
                    <span v-for="item in hotData" :class="{'hot' : item.hot}" @click="selectTag(item.title)">{{item.title}}</span>
                </div>
            </div>
        </div>
      <!-- <popup :popup-title="popupTitle"
             :popup-show="popupShow"
             @cancelPopup="cancelPopup"
             @confirmPopup="confirmPopup"></popup> -->
    </div>
</template>

<script>
    // import popup from '../../components/common/popup'
    // import {hotData} from "../../service/getData";
    import {getStore,dedupe} from "../../utils/util";
    import {mapState,mapMutations} from 'vuex'
    export default {
        data() {
            return {
                searchText: '',
                hotData: [],
                popupTitle: '',
                popupShow: false
            }
        },
        created(){
            let searchHistory = getStore('searchHistory')
            console.log(searchHistory)
            if(!searchHistory){
                searchHistory = []
            }
            this['search/addHistory'](searchHistory);
            this.getSelectTags()
        },
        computed: {
            ...mapState({
               searchHistory: state => state.searchHistory
            })
        },
        methods: {
            ...mapMutations([
                'search/addHistory'
            ]),
            getSelectTags(){
                this.$http.get('http://test.happymmall.com/search/hot').then((res)=>{
                    this.hotData = res.data.data
                })
            },
            getSearch(){
                let keyword = this.searchText.replace(/^\s+|\s+$/g,"")   //去除两头空格
                if(!keyword){
                    alert('请输入搜索内容')
                    return
                }
                this.selectTag(keyword)
            },
            selectTag(keyword){
                this.searchHistory.unshift(keyword)
                this.$router.push('/product-list?keyword='+keyword+'&categoryId=0')
                this['search/addHistory'](dedupe(this.searchHistory))
            },
            deleteHistory(){
              this.popupTitle = '确定删除搜索历史吗？'
                this.popupShow = true
            },
          confirmPopup(){
            this['search/addHistory']([])
            this.cancelPopup()
          },
          cancelPopup(){
            ModalHelper.beforeClose()
            this.popupShow = false
          },
            goBack(){
                this.$router.go(-1)
            }
        },
        directives: {
            focus: {
                // 指令的定义
                inserted: function (el) {
                    el.focus()
                }
            }
        },
        components: {
            // popup
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    @import "../../styles/mixin.scss";
    .search-box{
        width: 100%;
        font-size: 30px;
        .search-header{
            @include fj;
            width: 100%;
            height: 90px;
            padding: 15px 30px 15px 20px;
            box-sizing: border-box;
            @include border-1px(#dcdcdc);
            .icon-left{
                width: 10%;
                font-size: 50px;
              color: #252525;
              font-weight: bold;
            }
            .search-con{
                width: 76%;
                height: 100%;
                line-height: 60px;
                margin-left: -20px;
                padding-left: 30px;
                font-size: 26px;
                background: #F7F7F7;
                border-radius: 40px;
                @include boxSizing;
                .iconfont{
                    font-size: 36px;
                    padding-right: 20px;
                }
                input{
                    font-size: 24px;
                    background: #F7F7F7;
                }
            }
            span{
                width: 12%;
                text-align: center;
                height: 100%;
                line-height: 60px;
                color: #fff;
                font-size: 26px;
                background: #E93B3D;
                border-radius: 10px;
            }
        }
        .search-content{
            width: 100%;
            padding: 0 30px 0 30px;
            box-sizing: border-box;
            .search-list{
                width: 100%;
                &.history-list{
                    margin-bottom: 20px;
                }
                p{
                    position: relative;
                    padding: 20px 0;
                    .icon-delete{
                        position: absolute;
                        right: 0;
                        top: 20px;
                        font-size: 34px;
                    }
                }
                div {
                    display: flex;
                    flex-shrink: 0;
                    flex-wrap: wrap;
                    span{
                        padding: 8px 26px;
                        margin: 0 20px 20px 0;
                        font-size: 24px;
                        color: #686868;
                        background: #F0F2F5;
                        border-radius: 10px;
                        &.hot{
                            color: #E93B3D;
                        }
                    }
                }
            }
        }
        .modal{
            position: absolute;
            left: 50%;
            top: 50%;
            width: 90%;
            transform:translate(-50%, -50%);
            background: #ffffff;
            @include borderRadius(20px);
            p{
                width: 100%;
                height: 200px;
                text-align: center;
                line-height: 200px;
            }
            div{
                display: flex;
                width: 100%;
                height: 100px;
                span{
                    width: 50%;
                    height: 100%;
                    text-align: center;
                    line-height: 100px;
                    color: #000;
                    background: #fff;
                    border-bottom-left-radius: 20px;
                    &:nth-child(2){
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
