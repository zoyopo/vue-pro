<template>
  <transition name='slide'>
    <div class="songdetail">
      <top-area :info="info"></top-area>
      <table-area></table-area>
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
      }
    }
  },
  components: {
    TableArea,
    TopArea
  },
  created() {
    let id = this.$route.params.id;
    this.getDetail(id);
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
    //  this.info.coverImgUrl=data.coverImgUrl;
    //  this.info.name=data.name;
    //  this.info.creator.avatarUrl=data.creator.avatarUrl;
    //  this.info.creator.backgroundUrl=data.creator.backgroundUrl;
    //  this.info.creator.nickname=data.creator.nickname;
    //  this.info.createTime=data.createTime;
    //  this.info.trackCount=data.trackCount;
    //  this.info.playCount=description.playCount;
    //  this.info.description=data.description;
    //  this.info.tags=data.tags;
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

