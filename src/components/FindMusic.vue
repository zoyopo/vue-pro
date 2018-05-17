<template>
  <div class="findmusic" ref="wrapper">
    <Nav></Nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- <MusicContent></MusicContent> -->
  </div>
</template>
<script>
import Nav from "@/components/FindMusic/Nav.vue";
import BScroll from "better-scroll";
import MusicContent from "@/components/FindMusic/FindMusicContent.vue";
export default {
  name: "findmusic",
  components: {
    //Slide,
    Nav,
    // Box
    MusicContent
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {});
    });
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
