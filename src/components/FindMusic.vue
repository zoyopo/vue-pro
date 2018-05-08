<template>
    <div class="findmusic" ref="wrapper">
        <Nav></Nav>
        <div v-if="picArray.length>0">
        <slide :loop ='loop' :autoPlay='autoPlay' :picArray="picArray">           
          
        </slide>
        </div>
    <box v-bind:contentArray="contentArray" v-bind:boxStyle="boxStyle"></box>
    </div>
</template>
<script>
import Nav from "@/components/FindMusic/Nav.vue";
import Slide from "@/components/Slider.vue";
import Box from "@/components/FindMusic/Box";
import BScroll from "better-scroll";
export default {
  name: "findmusic",
  components: {
    Slide,
    Nav,
    Box
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {});
    
    });
      
  },
  created() {
    this.getBannerData();
  },
  methods: {
    getBannerData: function() {
      let that = this;
      this.$axios
        .get("/banner")
        .then(res => {
          that.picArray = res.data.banners;
        });
        //this.$forceUpdate();
    }
  },

  data() {
    return {
      loop: true,
      autoPlay: true,
      boxStyle: {
        box: { height: "100px" }
      },
      picArray: [],
      contentArray: [
        {
          words: "It's long ",
          title: "Don't be afraid,we are in a team",
          picUrl: "Img/PanelPart/test2.jpg",
          id: 1,
          author: "zhangyp"
        },
        {
          words: "It's long time no see my cousins.",
          title: "Don't be afraid,we are in a team",
          picUrl: "Img/PanelPart/test2.jpg",
          id: 2,
          author: "zhangyp"
        },
        {
          words: "It's long time no see my cousins.",
          title: "Don't be afraid,we are in a team",
          picUrl: "Img/PanelPart/test2.jpg",
          id: 2,
          author: "zhangyp"
        },
        {
          words: "It's long time no see my cousins.",
          title: "Don't be afraid,we are in a team",
          picUrl: "Img/PanelPart/test2.jpg",
          id: 2,
          author: "zhangyp"
        },
        {
          words: "It's long time no see my cousins.",
          title: "Don't be afraid,we are in a team",
          picUrl: "Img/PanelPart/test2.jpg",
          id: 2,
          author: "zhangyp"
        },
        {
          words: "It's long time no see my cousins111111122222222.",
          title: "Don't be afraid,we are in a team",
          picUrl: "Img/PanelPart/test2.jpg",
          id: 2,
          author: "zhangyp"
        },
        {
          words: "It's long time no see my cousins111111111111111111.",
          title: "Don't be afraid,we are in a team",
          picUrl: "Img/PanelPart/test2.jpg",
          id: 2,
          author: "zhangyp"
        },
        {
          words: "It's long time no see my cousins1111.",
          title: "Don't be afraid,we are in a team",
          picUrl: "Img/PanelPart/test2.jpg",
          id: 2,
          author: "zhangyp"
        },
        {
          words: "It's long time no see my cousins111111111.",
          title: "Don't be afraid,we are in a team",
          picUrl: "Img/PanelPart/test2.jpg",
          id: 2,
          author: "zhangyp"
        }

        // {
        //   words: "This is words part of the content 2",
        //   title: "This is the title part 2",
        //   picUrl: "logo.png",
        //   id: 2
        // },
        //  {
        //   words: "This is words part of the content 3",
        //   title: "This is the title part 3",
        //   picUrl: "logo.png",
        //   id: 3
        // },
        //  {
        //   words: "This is words part of the content 4",
        //   title: "This is the title part 4",
        //   picUrl: "logo.png",
        //   id: 4
        // }
      ],
      content1: {
        words: "This is words part of the content",
        title: "This is the title part",
        picUrl: "Img/PanelPart/test2.jpg",
        id: 1
      }
    };
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
