<template>
<div class="CloudMusic">
  <Nav></Nav>
  <!--flex布局-->
  <div class="mainPart">
  <PanelPart ></PanelPart>
  
   <FindMusic></FindMusic>

  </div>
  <aplayer autoplay
  :music="{
    title: 'secret base~君がくれたもの~',
    artist: 'Silent Siren',
    src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
    pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
  } " class="player"
/>
</div>
</template>

<script>

import  Nav from '@/components/Nav'
import PanelPart from '@/components/PanelPart'
 import FindMusic from '@/components/FindMusic'
import Aplayer from 'vue-aplayer'
export default {
   components:{
       Aplayer,
       Nav,
       PanelPart,
       FindMusic,
       //Box
   }


}
</script>

<style lang="scss" scoped>
.mainPart{
    display: flex;
    // width:200px;
     align-items:flex-start;//垂直方向按起始点对齐
}
.player{
    margin: 0;
    border: solid 1px;
    border-top: none;
}
</style>
