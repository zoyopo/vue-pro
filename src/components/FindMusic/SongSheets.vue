<template>
  <div class="songsheets">
    <button class="select-button" @click="showTab">{{buttonName}}
      <i class="fa fa-angle-down"></i>
    </button>

    <select-tab @getTabName="getTabName" v-show="tabIsShow" :tabStyle="tabStyle" :categories="categoriesData"></select-tab>

    <Tags :tags="tags">
    </Tags>
    <box v-bind:contentArray="contentArray" v-bind:boxStyle="boxStyle" :partTitle="partTitle" :titleShow="false">
      <span class="listenIcon">115万&nbsp;
        <i class="fa fa-headphones"></i>
      </span>
    </box>
  </div>
</template>

<script>
import Tags from "@/components/FindMusic/HotTag";
import Box from "@/components/FindMusic/Box";
import SelectTab from "@/components/FindMusic/SelectTab";

export default {
  components: {
    Box,
    Tags,
    SelectTab
  },
  data() {
    return {
      tabIsShow: false,
      tabStyle: {
        position: "absolute",
        background: "#fff",
        "z-index": "100",
        border: "solid 1px #9e9797",
        "border-radius": "5px",
        left: "3.5%",
        top: "60px",
        height: "350px",
        "overflow-y": "auto",
        width:'90%'
      },
      tags: [],
      boxStyle: {
        box: { height: "100px" }
      },
      buttonName: "全部歌单",
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
      ],
      categories: {},
      categoriesData: []
    };
  },
  mounted() {},
  created() {
    // this.getBannerData();
    // this.getPersonalizedData();
    this.getData();
  },
  methods: {
    getTabName(name){
      this.tabIsShow=false;
      this.buttonName=name;
    },
    promises() {
      let vm = this;
      return {
        playlistData: vm.$axios.get("/top/playlist", {
          params: {
            limit: 10,
            order: "new"
          }
        }),
        tagData: vm.$axios.get("/playlist/hot"),
        songCategoriesData: vm.$axios.get("/playlist/catlist") //歌单分类
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
        .all([
          vm.promises().playlistData,
          vm.promises().tagData,
          vm.promises().songCategoriesData
        ])
        .then(
          vm.$axios.spread(function(playlistData, tagData, categoriesData) {
            // Both requests are now complete
            // console.log(acct);
            // console.log(perms);
            if (playlistData.data.code == "200") {
              vm.contentArray = playlistData.data.playlists;
            }
            if (tagData.data.code == "200") {
              vm.tags = tagData.data.tags;
            }
            if (categoriesData.data.code == "200") {
              //先把数据存入vuex
               var data = categoriesData.data;
              vm.$store.commit("storeCategoriesInfo",data);
             //debugger
              //var categories = data.categories;
              for (let item in categoriesData.data.categories) {
                let list = categoriesData.data.sub.filter((_item) =>{return _item.category == item});
                let data = { name: categoriesData.data.categories[item], categoryList: list };
                vm.categoriesData.push(data);
              }
            }
          })
        )
        .catch(err => console.log(err));
    },
    showTab() {
      this.tabIsShow = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.select-button {
  margin-top: 4%;
  margin-left: 3.5%;
  background: #ffffffc5;
  border: solid 1px #41493749;
  border-radius: 2px;
  width: 15%;
  height: 26px;
  line-height: 26px;
  .fa-angle-down {
    padding-left: 10%;
  }
}
.songsheets {
  position: relative;
}
</style>

