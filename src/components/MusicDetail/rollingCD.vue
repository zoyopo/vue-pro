<template>
    <div id="img">
        <div class="img-span">
            <img :src="picUrl" />
        </div>
    </div>
</template>

<script>
export default {
    name:"rollingCd",
    data(){
        return{

        }
    },
    props:{
        picUrl:{
            type:String,
            default:"../../assets/logo.png"
        }
    }

};
</script>

<style lang="scss" scoped>
#img {
  animation: 15s linear infinite CDturn;
  display: block;
  margin: 55px 25px;
  height: 300px;
  border-radius: 50%;
  width: 300px;
  border: solid 1px;
  display: inline-block;
  background: #363333;
  display: inline-block;
  /*3秒转一圈，均速，无限，应用CDturn样式*/
  .img-span {
    border: solid 1px;
    border-radius: 50%;
    width: 250px;
    height: 250px;
    margin: 0 auto;
    /* display: table-cell; */
    /* vertical-align: middle; */
    margin: 24px 24px;
    background: #fff;
    img {
      position: absolute;
      left: 50px;
      top: 75px;
    }
  }
}

@keyframes CDturn {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

