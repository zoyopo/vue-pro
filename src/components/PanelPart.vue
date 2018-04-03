<template>
  <div class="panelpart">
      
      <!--利用两个循环进行左边各项的加载-->
    <div class="panel-body">
        <ul v-for="rows in panelRowList" class="ul-left">
          <div class="panel-title">
          {{rows.title}}
           </div>
            <li class="panel-row" v-for="row in rows.rows">
                <a :href="row.rowHref">
                    <i :class="row.rowIcon"></i>
                    <span>{{row.rowName}}</span>
                    <span v-if="row.rowBadge"><i class=""></i></span>
                </a>
            </li>           
        </ul>   

    </div>
    <!--音乐信息框-->
    <div class="music-board">
      <div class="music-pic"><img id="music-img" :src="boardInfo.boardPic"></div>
      <div class="music-description">
        <div class="music-title"><span>{{boardInfo.boardTitle}}</span><span class="music-option music-share"><i :class="boardInfo.shareIcon"></i></span></div>
        <div class="music-singer"><span>{{boardInfo.boardSinger}}</span><span class="music-option music-like"><i :class="boardInfo.likeIcon"></i></span></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {},
  methods: {},

  props: {
    //左侧下方board信息
    boardInfo: {
      type: Object,
      default: function() {
        return {
          boardPic: "../static/Img/PanelPart/test2.jpg",
          boardTitle: "不露声色11111111",
          boardSinger: "张信哲",
          likeIcon:'fa fa-heart-o',
          shareIcon:'fa fa-share-square-o'
        };
      }
    },

    //左侧panel数据
    panelRowList: {
      type: Array,
      default: function() {
        return [
          {
            title: "推荐",
            rows: [
              {
                rowName: "发现音乐",
                rowIcon: "fa fa-music",
                rowHref: "",
                rowBadge: false
              },
              {
                rowName: "私人FM",
                rowIcon: "fa fa-podcast",
                rowHref: "",
                rowBadge: false
              },
              {
                rowName: "MV",
                rowIcon: "fa fa-television",
                rowHref: "",
                rowBadge: false
              },
              {
                rowName: "朋友",
                rowIcon: "fa fa-users",
                rowHref: "",
                rowBadge: false
              }
            ]
          },
          {
            title: "我的音乐",
            rows: [
              {
                rowName: "本地音乐",
                rowIcon: "fa fa-music",
                rowHref: "",
                rowBadge: false
              },
              {
                rowName: "下载管理",
                rowIcon: "fa fa-podcast",
                rowHref: "",
                rowBadge: false
              },
              {
                rowName: "我的音乐云盘",
                rowIcon: "fa fa-television",
                rowHref: "",
                rowBadge: false
              },
              {
                rowName: "我的电台",
                rowIcon: "fa fa-users",
                rowHref: "",
                rowBadge: false
              },
              {
                rowName: "我的收藏",
                rowIcon: "fa fa-users",
                rowHref: "",
                rowBadge: false
              }
            ]
          }
        ];
      }
    }
    // panelTitle: {
    //   type: String,
    //   default: function() {
    //     return "测试111";
    //   }
    // }
  },
  mounted: function() {
    this.cutMusicInfo();
  },
  methods: {
    //音乐信息过长
    cutMusicInfo: function(){
      let boardTitle = this.boardInfo.boardTitle;
      let boardSinger = this.boardInfo.boardSinger;
      if (boardTitle.length > 3) {
        boardTitle = this.cutMethods(boardTitle, 3);
      }
      if (boardSinger.length > 4) {
        boardSinger = this.cutMethods(boardSinger, 3);
      }
      this.boardInfo.boardTitle = boardTitle;
      this.boardInfo.boardSinger = boardSinger;
    },
    //应该写一个watch方法进行监测
    cutMethods: (ele, index)=> {
      //验证类型
      if (typeof ele === "string" && typeof index === "number") {
        return ele.substring(0, index) + "..";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.ul-left {
  //width: 20%;
  text-align: left;
  // margin-left: 10%;
  li {
    //
    margin-top: 5px;
    margin-left: 10%;
  }
}

.panelpart {
  //width: 20%;
  border: 1px solid;
  max-width: 200px;
}
.panel-title {
  text-align: left;
}
//

.music-board {
  position: relative; //分享收藏居左
  margin-top: 10%;
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
  }
}
.panel-row {
  list-style: none; //去圆点
  a {
    text-decoration: none; //去掉下划线
  }
}
</style>

