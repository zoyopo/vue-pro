<template>
  <div class="findmusiccontent">
    <div v-if="picArray.length>0">
      <slide :loop='loop' :autoPlay='autoPlay' :picArray="picArray">

      </slide>
    </div>
    <box v-bind:contentArray="contentArray" v-bind:boxStyle="boxStyle" :partTitle="partTitle" @getItemId="showDetail">
      <span class="listenIcon">115万&nbsp;
        <i class="fa fa-headphones"></i>
      </span>
    </box>
    <box v-bind:contentArray="videoArray" v-bind:boxStyle="videoBoxStyle" :partTitle="'独家放送'">
      <span class="videoIcon">
        <i class="fa fa-video-camera"></i>
      </span>
    </box>
  </div>
</template>

<script>
import Slide from "@/components/Slider.vue";
import Box from "@/components/FindMusic/Box";
import { mapGetters } from 'vuex';
import {getFirstScreenData} from "api/api.js"
export default {
  name: "findmusic",
  components: {
    Slide,
    //Nav,
    Box
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.scroll = new BScroll(this.$refs.wrapper, {});
    // });
  },
  created() {
    // this.getBannerData();
    // this.getPersonalizedData();
    //debugger
    this.getAllData();
  },
  methods: {
    showDetail(item){
      //console.log(item)
      this.$router.push(`/SongSheetsDetail/${item.id}`) 
    },
    
    getAllData() {
      let vm = this;
      getFirstScreenData()//封装了获取数据的方法
        .then(
         function(res) {
          
            let banner=res[1];
            let personalized=res[0];
            let privateContent=res[2];
            
            if (banner.data.code == "200") {
              vm.picArray = banner.data.banners;
            }
            if (personalized.data.code == "200") {
              vm.contentArray = personalized.data.result.slice(0, 8); //土鳖法，截取前八
            }
            if (privateContent.data.code == "200") {
              privateContent.data.result.forEach(element => {
                element.picUrl = element.sPicUrl;
              });
              vm.videoArray = privateContent.data.result;
            }
          })
        ;
    }
  },

  data() {
    return {
      loop: true,
      autoPlay: true,
      boxStyle: {
        box: { height: "100px" }
      },
      videoBoxStyle: {
        box: { width: "29%" }
      },
      picArray: [],
      videoArray: [],
      partTitle: "推荐歌单",
      contentArray: [
        // {
        //   id: 2205772978,
        //   type: 0,
        //   name: "“一切都明明白白，但我们仍匆匆错过”",
        //   copywriter: "编辑推荐：最大的遗憾，就是你的遗憾与我有关",
        //   picUrl:
        //     "http://p1.music.126.net/qUTZl3WqEaqhivfgF-5kvg==/109951163274328586.jpg",
        //   canDislike: false,
        //   playCount: 1187439.4,
        //   trackCount: 103,
        //   highQuality: false,
        //   alg: "featured"
        // }
      ]
    };
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
</style>
