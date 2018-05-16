<template>
<div class="select-tab">
 <meaning-label></meaning-label>
 <div class="box-content">
 <TabBox 
 :name="'全部歌单'" 
 :boxstyle="styles">
 </TabBox>
 <TabBox 
 :name="'全部歌单'" 
 :boxstyle="styles">
 </TabBox>
 <TabBox 
 :name="'全部歌单'" 
 :boxstyle="styles">
 </TabBox>
  <TabBox 
 :name="'全部歌单'" 
 :boxstyle="styles">
 </TabBox>
  <TabBox 
 :name="'全部歌单'" 
 :boxstyle="styles">
 </TabBox>
  <TabBox 
 :name="'全部歌单'" 
 :boxstyle="styles">
 </TabBox>
 </div>
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
              width:''
          }
      }
  }
};
</script>

<style lang="scss" scoped>
.box-content{
    display: inline-block;
    vertical-align: top;
    width: 80%
}
</style>


