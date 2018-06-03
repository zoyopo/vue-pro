<template>
     <el-card :body-style="bodyStyle">
      <img src="../../../assets/logo.png" class="image">
      <div  class="img-content clearfix">
        <span>好吃的汉堡</span>
        <div class="bottom">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
</template>

<script>
export default {
 data() {
    return {
      currentDate: new Date(),
      bodyStyle:{
          width:'80%'
      }
    };
  }
}
</script>

<style lang="scss" scoped>
 .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 50%;
    display: block;
    float: left;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .img-content{
      padding: 14px;
     // float: left;
  }
</style>

