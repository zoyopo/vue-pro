<template>
  <div class="findmusic" ref="wrapper">
    <Nav></Nav>
     <loading v-show="isLoading"></loading>
    <keep-alive>       
      <router-view v-show="!isLoading"></router-view>
    </keep-alive>
    <!-- <MusicContent></MusicContent> -->
  </div>
</template>
<script>
import Nav from "@/components/FindMusic/Nav.vue";
import BScroll from "better-scroll";
import MusicContent from "@/components/FindMusic/FindMusicContent.vue";
import Loading from "@/components/Loading";
import { mapGetters } from 'vuex';
export default {
  name: "findmusic",
  components: {
    //Slide,
    Nav,
    // Box
    MusicContent,
    Loading
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {});
    });
  },
  computed:{
    //用vuex来控制是否要进行loading
    ...mapGetters([
      'isLoading'
    ])
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
