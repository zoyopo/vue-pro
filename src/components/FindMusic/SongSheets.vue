<template>
<div class="songsheets">
  <select-tab></select-tab>
    <Tags 
    :tags="tags">
    </Tags>
    <box 
    v-bind:contentArray="contentArray" 
    v-bind:boxStyle="boxStyle" 
    :partTitle="partTitle" :titleShow="false">
        <span class="listenIcon">115万&nbsp;<i class="fa fa-headphones"></i></span>
    </box>
  </div>
</template>

<script>
import Tags from "@/components/FindMusic/HotTag";
import Box from "@/components/FindMusic/Box";
import SelectTab from '@/components/FindMusic/SelectTab'

export default {
  components: {
    Box,
    Tags,
    SelectTab
  },
  data() {
    return {
      tags:[],
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
        {
          id: 2205772978,
          type: 0,
          name: "“一切都明明白白，但我们仍匆匆错过”",
          copywriter: "编辑推荐：最大的遗憾，就是你的遗憾与我有关",
          picUrl:
            "http://p1.music.126.net/qUTZl3WqEaqhivfgF-5kvg==/109951163274328586.jpg",
          canDislike: false,
          playCount: 1187439.4,
          trackCount: 103,
          highQuality: false,
          alg: "featured"
        }
      ]
    };
  },
  mounted() {},
  created() {
    // this.getBannerData();
    // this.getPersonalizedData();
    this.getData();
  },
  methods: {
    promises() {
      let vm = this;
      return {
        playlistData: vm.$axios.get("/top/playlist", {
          params: {
            limit: 10,
            order: "new"
          }
        }),
        tagData: vm.$axios.get("/playlist/hot")
      };
    },
    getData() {
      let vm = this;
      this.promises()
        .playlistData.then(res => {
          if (res.data.code == "200") {
            res.data.playlists.forEach(element => {
              element.picUrl = element.coverImgUrl;
            });
            vm.contentArray = res.data.playlists;
          } else {
            console.log("error");
          }
        })
        .catch(err => console.log(err));
      vm.$axios
        .all([vm.promises().playlistData, vm.promises().tagData])
        .then(
          vm.$axios.spread(function(playlistData, tagData) {
            // Both requests are now complete
            // console.log(acct);
            // console.log(perms);
            if (playlistData.data.code == "200") {
              vm.contentArray = playlistData.data.playlists;
            }
            if (tagData.data.code == "200") {
              vm.tags = tagData.data.tags; 
            }
          })
        )
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>
