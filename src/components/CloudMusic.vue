<template>
<div class="CloudMusic">
  <Nav></Nav>
  <PanelPart ></PanelPart>
   <FindMusic></FindMusic>
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
       FindMusic
   }


}
</script>

<style>

</style>
