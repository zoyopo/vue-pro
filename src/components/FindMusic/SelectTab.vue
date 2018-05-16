<template>
<div class="select-tab">
 <meaning-label></meaning-label>
 <TabBox 
 :name="'全部歌单'" 
 :boxstyle="styles">
 </TabBox>
</div>
</template>

<script>
import TabBox from "@/components/FindMusic/TabBox";
import MeaningLabel from "@/components/FindMusic/MeaningLabel";
export default {
  components: {
    TabBox,
    MeaningLabel
  },
  methods:{},
  data(){
      return{
          styles:{
              width:'60%'
          }
      }
  }
};
</script>

<style>
</style>
