<template>
<div class="CloudMusic">
  <!--bug之登录弹出界面时音乐会停掉-->
  <Nav v-on:showLoginDlg="showLoginDlg" ></Nav>
  <!--flex布局-->
  <div class="mainPart"> 
  <PanelPart v-if="panelRowList.length>0" :panelRowList="panelRowList"></PanelPart> 
  <keep-alive>
  <router-view></router-view>
  </keep-alive>

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
import tableBody from '@/components/TableBody'
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
    loginReturnInfo(info) {
     this.changePlayListInfo(info.playlist);
      this.dlgshow = info.dlgshow;
      this.getRecommendList();
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
          
            vm.changePlayListInfo(res.data.playlist);
            vm.$store.commit("storePlayListInfo", res.data.playlist);
          })
          .catch(error => console.log(error));
      }
    },
    changePlayListInfo(info){
      if(!(info instanceof Array)){
        return;
      }
        info.forEach(function(item, index) {
              index === 0
                ? (item.icon = "fa fa-heart-o")
                : (item.icon = "fa fa-music");
            });

            var playList=
              {
                title: "我创建的歌单",
                rows: info
              }
            
            this.panelRowList.push(playList);

    },
    getRecommendList(){
      var vm=this;
      this.$axios
          .get("/recommend/resource",{
            params:{
              xhrFields:'{ withCredentials: true }'
            }
          })
          .then(res=>{
            console.log(res);
          })
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
      playListInfo: [],

      panelRowList: [
        {
          title: "推荐",
          rows: [
            {
              name: "发现音乐",
              icon: "fa fa-music",
              href: "",
              badge: false
            },
            {
              name: "私人FM",
              icon: "fa fa-podcast",
              href: "",
              badge: false
            },
            {
              name: "MV",
              icon: "fa fa-television",
              href: "",
              badge: false
            },
            {
              name: "朋友",
              icon: "fa fa-users",
              href: "",
              badge: false
            }
          ]
        },
        {
          title: "我的音乐",
          rows: [
            {
              name: "本地音乐",
              icon: "fa fa-music",
              href: "",
              badge: false
            },
            {
              name: "下载管理",
              icon: "fa fa-podcast",
              href: "",
              badge: false
            },
            {
              name: "我的音乐云盘",
              icon: "fa fa-television",
              href: "",
              badge: false
            },
            {
              name: "我的电台",
              icon: "fa fa-users",
              href: "",
              badge: false
            },
            {
              name: "我的收藏",
              icon: "fa fa-users",
              href: "",
              badge: false
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.CloudMusic {
 max-width: 968px;
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
