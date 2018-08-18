<template>
  <transition name='slide'>
    <div class="songdetail">
      <top-area :info="info"></top-area>
      <table-area :songsList="songList"></table-area>
    </div>
  </transition>
</template>

<script>
import TableArea from "components/FindMusic/SongSheetsDetail/TableArea";
import TopArea from "components/FindMusic/SongSheetsDetail/TopArea";
import { getSheetDetail } from "api/api.js";

export default {
 
  data(){
    return{
      info:{
        creator:{}
      },
      songList:[]
    }
  },
  components: {
    TableArea,
    TopArea
  },
  activated() {
    let id = this.$route.params.id;
    this.getDetail(id);
  },
  deactivated() {
    this.info=null;
    this.songList=[];
  },
  methods: {
    async getDetail(id) {
      let data = await getSheetDetail(id);
      //debugger
     // console.log(data);
     let info={
       coverImgUrl:data.coverImgUrl,
       name:data.name,
       createTime:data.createTime,
       trackCount:data.trackCount,
       playCount:data.playCount,
       description:data.description,
       tags:data.tags,
       creator:{
         avatarUrl:data.creator.avatarUrl,
         backgroundUrl:data.creator.backgroundUrl,
         nickname:data.creator.nickname
       }
     }
     this.info=info;
     data.tracks.forEach(element => {
       let d=(element.duration/1000).toFixed()*1;
       element.singer=element.artists.map(t=>t.name).join('/')//歌手
       element.albumName=element.album.name;
       element.duration=Math.floor(d/60)+':'+(d%60<10?'0'+d%60:d%60); 
     });
    this.songList=data.tracks;
    }
  }
};
</script>
<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all ease-in 0.3s;
}
.slide-enter,
.slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>

