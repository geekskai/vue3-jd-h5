<template>
  <div class="progress-bar">
       <div class="progress-bar">
        <div class='box'>
            <div class='clip' id="context">
            </div>
        </div>
        <span><span id="number">55</span><i>%</i></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  data() {
    return {};
  },
  created() {},
  methods: {
      processbar(){
          
      }
  }
};
</script>

<style scoped lang="scss">
.progress-bar {
    .progress-bar {
        display: inline-block;
    }

    .progress-bar span {
        font-size: 12px;
        vertical-align: middle;
        color: #3385ff;
    }

    .box {
        border-radius: 30px;
        width: 100px;
        height: 10px;
        background-color: #f9f7f7;
        border: 1px solid #f1f0f0;
        padding: 0px 2px;
        display: inline-block;
    }

    .clip {
        background: -webkit-linear-gradient(left, #44e5ff, #02c8e8);
        background: -o-linear-gradient(right, #44e5ff, #02c8e8);
        background: -moz-linear-gradient(right, #44e5ff, #02c8e8);
        background: linear-gradient(to right, #44e5ff, #02c8e8);
        width: 55px;
        margin: 1px 0px;
        box-shadow: 0px 0px 2px #0dd2ea;
        height: 8px;
        border-radius: 20px;
    }
}
</style>
