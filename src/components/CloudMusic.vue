<template>
<div class="CloudMusic">
  <!--bug之登录弹出界面时音乐会停掉-->
  <Nav v-on:showLoginDlg="showLoginDlg" ></Nav>
  <!--flex布局-->
  <div class="mainPart">
    
  <PanelPart :playList="playListInfo"></PanelPart>
  
   <FindMusic></FindMusic>

  </div>
  <aplayer autoplay
  :music="{
    title: 'secret base~君がくれたもの~',
    artist: 'Silent Siren',
    src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
    pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
  } " class="player"
 />
  <dlg :dlgShow="dlgshow" :dlgSize="dlgsize" :picShow="picshow" v-on:returnPlayList="loginReturnInfo"></dlg>
</div>
</template>

<script>
import { mapState } from "vuex";
import dlg from "@/components/Dlg";
import Nav from "@/components/Nav";
import PanelPart from "@/components/PanelPart";
import FindMusic from "@/components/FindMusic";
import Aplayer from "vue-aplayer";
export default {
  components: {
    Aplayer,
    Nav,
    PanelPart,
    FindMusic,
    //Box
    dlg
  },
  mounted() {
   
    
        this.getPlayListInfo();
      
    
  },
  methods: {
    showLoginDlg: function() {
      this.dlgshow = true;
    },
    loginReturnInfo(info){
      this.playListInfo=info.playlist;
       this.dlgshow = info.dlgshow;
    },
    getPlayListInfo() {
      //debugger
      var vm = this;
      var hasUserInfo = sessionStorage.getItem("userInfo") != null;

      if (hasUserInfo) {
        var userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

        var userId = userInfo.account.id;

        this.$axios
          .get("/user/playlist", {
            params: { uid: userId }
          })
          .then(res => {
            var newList = res.data.playlist.forEach(function(item, index) {
            index === 0? (item.icon = "fa fa-heart-o")
                : (item.icon = "fa fa-music");
            });
            vm.playListInfo = res.data.playlist;
            vm.$store.commit("storePlayListInfo", newList);
          })
          .catch(error => console.log(error));
      }
    }
  },
  data() {
    return {
      dlgshow: false,
      //很奇怪我的default没有生效
      dlgsize: {
        width: "250px",
        height: "400px",
        position: "absolute",
        left: "calc(50% - 125px)",
        top: "calc(50% - 200px)",
        "z-index": "9999",
        background: "#7a7460",
        opacity: 0.95
      },
      picshow: true,
      playListInfo: []
    };
  }
};
</script>

<style lang="scss" scoped>
.CloudMusic {
  max-width: 768px;
  margin: 0 auto;
}
.mainPart {
  display: flex;
  // width:200px;
  align-items: flex-start; //垂直方向按起始点对齐
}
.player {
  margin: 0;
  border: solid 1px;
  border-top: none;
}
</style>
