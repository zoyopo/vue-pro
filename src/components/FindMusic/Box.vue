<template>

  <div class="box1" :style="boxStyle">
    <div class="part-title" v-show="titleShow">
      {{partTitle}}<span class="get-more">更多&gt;</span>
    </div>
    <div class="box" :style="boxStyle.box"   v-bind:key="index" v-for="(item,index) in contentArray" @click="showBig(item)" :id="item.id">
   
    <div class="box-content">
      <div class="box-content-pic">
        <slot>
      
        </slot>
        <img-loading class="pic" :src="item.picUrl"></img-loading>
        <!-- <img class="pic" :src="'../static/'+item.picUrl" :id="item.id" alt="暂无图片" @click="showPicInfo"> -->
      </div>
      <div class="box-content-words">
        {{item.name}}
      </div>
       
    </div>
    <!-- <div class="box-option">
    
    </div> -->
    </div>
  </div>
</template>

<script>
import imgLoading from "@/components/ImgLoading";
export default {
  name: "box",
  components: {
    imgLoading
  },
  props: {
    partTitle: {
      type: String,
      default: ""
    },
    titleShow:{
      type:Boolean,
      default:true
    },
    contentArray: {
      type: Array,
      default: function() {
        return [
          {
            title: "",
            words: "",
            id: 0
          }
        ];
      }
    },
    boxStyle: {
      type: Object,
      default: function() {
        return {
          box: {
            height: "auto"
          },
          box1: {
            height: "auto"
          }
        };
      }
    }
  },
  mounted: function() {},
  methods: {
    showPicInfo: function(event) {
      //console.log(obj);
      //alert();
      //event.target is the dom object of associated with the event
      console.log(event.target.className);
    },
    showBig: function(item) {
      //event.preventDefault();

      //var id = event.target.id;
      //debugger;
      this.$emit("getItemId", item);
    }
  }
};
</script>


<style lang="scss" scoped>
/*标题*/
.part-title {
  margin-left: 4%;
  border-bottom: solid 1px;
  width: 94%;
  margin-top: 3%;
  position: relative;
  font-size: 1.2rem;
  .get-more {
    position: absolute;
    right: 0;
    font-size: 0.8rem;
    bottom: 0;
  }
}

.box {
  display: inline-block;
  //width: 25%;
  width: 21%;
  //min-width: 600px;
  margin-top: 1rem;
  //border: solid 1px #745d5d;
  // border-right: solid 0px #745d5d;
  // border-top:solid 1px #745d5d;
  // border-bottom: solid 1px #745d5d;
  font-size: 1rem; //去除间隙，外层div用的fontsize置位0
  line-height: 24px;
  //max-height: 200px;
  text-align: left;
  padding-left: 3.5%;
  height: 120px;
  position: relative;
}

.pic {
  width: 100%;
  //color:rgba(32, 32, 32, 0.116);
}
.box-title {
  //text-align: left;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 6px 0;
}
.author-icon {
  width: 5%;
}
.box-author {
  margin-top: 5px;
  //height: 50px;
  //flex实现图片垂直居中
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  //-webkit-justify-content: center;
  // justify-content: center;
}
.author-description {
  display: inline-block;
  margin-left: 5px;
}
.box-content-words {
  overflow: hidden;
  // position: absolute;
  /* text-overflow: ellipsis; */
  /* white-space: nowrap; */
  // -webkit-line-clamp: 3;
  // display: -webkit-box;
  // -webkit-box-orient: vertical;
  height: 75px;
}

.box-content-pic {
  position: relative;
  .listenIcon {
    position: absolute;
    right: 0;
    top: 0;
    background: #888177;
    font-size: 0.5em;
  }
  .videoIcon {
    position: absolute;
    left: 6px;
    top: 2px;
    font-size: 1em;
    color: #fff;
    background: #888177;
    border-radius: 13px;
    background-color: #342e2e;
    width: 12%;
    opacity: 0.5;
    i{margin-left: 14%;}
  }
}
</style>




