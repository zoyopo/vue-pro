<template>
    <div class="findmusic">
        <Nav></Nav>
        <slide :loop ='loop' :autoPlay='autoPlay'>
            <div class="slider-item"><img src="../assets/logo.png"/></div>
            <div class="slider-item"><img src="../assets/test1.jpg"/></div>
            <div class="slider-item"><img src="../assets/test2.jpg"/></div>
            <div class="slider-item"><img src="../assets/logo.png"/></div>
        </slide>
    <box v-bind:contentArray="contentArray" v-bind:boxStyle="boxStyle"></box>
    </div>
</template>
<script>
import Nav from "@/components/FindMusic/Nav.vue";
import Slide from "@/components/Slider.vue";
import Box from "@/components/FindMusic/Box";
export default {
  name: "findmusic",
  components: {
    Slide,
    Nav,
    Box
  },

  data() {
    return {
      loop: true,
      autoPlay: true,
      boxStyle: {
        box: { height: "100px" }
      },
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
  width: calc(100% - 201px);
  border-right: 1px solid;
  height: 550px;
  overflow-y: scroll;
  border-bottom: 1px solid;
}
</style>
