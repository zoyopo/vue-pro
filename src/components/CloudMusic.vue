<template>
<div class="CloudMusic">
  <Nav></Nav>
  <!--flex布局-->
  <div class="mainPart">
  <PanelPart ></PanelPart>
  
   <FindMusic></FindMusic>

  </div>
</div>
</template>

<script>

import  Nav from '@/components/Nav'
import PanelPart from '@/components/PanelPart'
 import FindMusic from '@/components/FindMusic'

export default {
   components:{

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

</style>
