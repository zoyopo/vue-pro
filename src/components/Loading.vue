<template>
  <div class="loading">
    <img :src="'../static/Img/FindMusic/loading.gif'" alt="">
    <div>
    <span class="laoding-msg">加载中...</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loading',
    data () {
      return {
        
      }
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .loading{
  
    z-index:121;
    width: 100%;
    height: 100%;
    /* background: rgba(0,0,0,0.3); */
    /* display: table-cell; */
    vertical-align: middle;
    text-align: center;
  }
  .loading img{
   margin-top: 12rem;
  }
  .loading-msg{
    text-align: center;
  }
</style>