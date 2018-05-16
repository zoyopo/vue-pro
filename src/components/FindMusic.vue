<template>
    <div class="findmusic" ref="wrapper">
        <Nav></Nav>
       <router-view></router-view>
    </div>
</template>
<script>
import Nav from '@/components/FindMusic/Nav'
export default {
  name: "findmusic",
  components:{
    Nav
  }
};
</script>

<style lang="scss" scoped>
.findmusic {
  //display: inline-block;
  width: calc(100% - 250px);
  border-right: 1px solid;
  height: 561px;
  overflow-y: scroll;
  border-bottom: 1px solid;
}
</style>
