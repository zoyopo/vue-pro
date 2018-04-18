<template>
<div class="CloudMusic">
  <!--bug之登录弹出界面时音乐会停掉-->
  <Nav v-on:showLoginDlg="showLoginDlg"></Nav>
  <!--flex布局-->
  <div class="mainPart">
  <PanelPart ></PanelPart>
  
   <FindMusic></FindMusic>

  </div>
  <aplayer autoplay
  :music="{
    title: 'secret base~君がくれたもの~',
    artist: 'Silent Siren',
    src: 'http://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
    pic: 'http://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
  } " class="player"
 />
  <dlg :dlgShow="dlgshow" :dlgSize="dlgsize" :picShow="picshow"></dlg>
</div>
</template>

<script>
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
  methods: {
    showLoginDlg: function() {
        this.dlgshow=true;
      
    }
  },
  data() {
    return {
      dlgshow: false,
      //很奇怪我的default没有生效
      dlgsize: {
                    width:'250px',
                    height:'400px',
                    position:'absolute',
                    left:'calc(50% - 125px)',
                    top:'calc(50% - 200px)',
                    'z-index':'9999',
                    background:'#7a7460',
                    opacity: 0.95
                },
      picshow: true
    };
  }
};
</script>

<style lang="scss" scoped>
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
