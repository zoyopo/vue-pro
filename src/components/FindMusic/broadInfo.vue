<template>
  <!--音乐信息框-->
  <div class="music-board">
    <div class="music-pic"><img id="music-img" :src="boardInfo.boardPic"></div>
    <div class="music-description">
      <div class="music-title">
        <span>{{boardInfo.boardTitle|limitLength|paramsValidate}}</span>
        <span class="music-option music-share">
          <i :class="boardInfo.shareIcon"></i>
        </span>
      </div>
      <div class="music-singer">
        <span>{{boardInfo.boardSinger|limitLength|paramsValidate}}</span>
        <span class="music-option music-like">
          <i :class="boardInfo.likeIcon"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //左侧下方board信息
    boardInfo: {
      type: Object,
      default: function() {
        return {
          boardPic: "../static/Img/PanelPart/test2.jpg",
          boardTitle: "不露声色11111111",
          boardSinger: "张信哲",
          likeIcon: "fa fa-heart-o",
          shareIcon: "fa fa-share-square-o"
        };
      }
    }
  },
  filters: {
    limitLength: function(str) {
      //debugger

      let bytesCount = 0;
      for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (/^[\u0000-\u00ff]$/.test(c)) {
          //匹配双字节
          bytesCount += 1;
        } else {
          bytesCount += 2;
        }
        if (bytesCount >= 14) {
          str = str.substring(0, i) + "...";
          break;
        }
      }
      return str;
    },
    paramsValidate: str => {
      if (!str) {
        return "";
      }
      if (!(typeof str === "string")) {
        return;
      }
      return str;
    }
  },
  methods: {
    checkStringCount(str, limit) {
      let bytesCount = 0;
      for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (/^[\u0000-\u00ff]$/.test(c)) {
          //匹配双字节
          bytesCount += 1;
        } else {
          bytesCount += 2;
        }
        if (bytesCount >= limit) {
          str = str.substr(0, i);
          break;
        }
      }
      return str;
    },
    paramsValidate(value, type) {
      if (!value) {
        return "";
      }
      if (!(value instanceof type)) {
        return;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.music-board {
  position: relative; //分享收藏居左
  //margin-top: 10%;
  border-top: solid 1px;
  padding: 5% 0;
  .music-pic {
    // width: 10%;
    display: inline-block;
    width: 40%;

    #music-img {
      width: 75%;
      margin-left: 5%;
    }
  }
  .music-description {
    display: inline-block;
    text-align: left;
    font-size: 14px;
    .music-option {
      position: absolute;
      right: 4px;
      
    }
    .music-share{
      top:24px;
    }
  }
}
</style>
