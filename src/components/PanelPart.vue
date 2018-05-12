<template>
  <div class="panelpart">
      
      <!--利用两个循环进行左边各项的加载-->
    <div class="panel-body" ref="wrapper">
        <ul v-for="(rows,index) in panelRowList" :key="index" class="ul-left">
          <div class="panel-title">
          {{rows.title}}
           </div>
            <li class="panel-row" v-for="(row,index) in rows.rows" :key="index">
                <a :href="row.href">
                    <i :class="row.icon"></i>
                    <span>{{row.name}}</span>
                    <span v-if="row.badge"><i class=""></i></span>
                </a>
            </li>           
        </ul>
        <!--我创建的的歌单-->   
          <!-- <ul  class="ul-left" v-if="playList.lengh>0">
             <div class="panel-title">
               创建的歌单
             </div>
            <li class="panel-row" v-for="row in playList">
                <a href="">
                    <i :class="row.icon"></i>
                    <span>{{row.name}}</span>
                  
                </a>
            </li>

          </ul> -->
    </div>
    <!--音乐信息框-->
    <!-- <div class="music-board">
      <div class="music-pic"><img id="music-img" :src="boardInfo.boardPic"></div>
      <div class="music-description">
        <div class="music-title"><span>{{boardInfo.boardTitle}}</span><span class="music-option music-share"><i :class="boardInfo.shareIcon"></i></span></div>
        <div class="music-singer"><span>{{boardInfo.boardSinger}}</span><span class="music-option music-like"><i :class="boardInfo.likeIcon"></i></span></div>
      </div>
    </div> -->
    <broadInfo :boardInfo="broadInfo"></broadInfo>
  </div>

</template>

<script>
import BScroll from "better-scroll";
//let scroll = new BScroll('.panel-body')
import broadInfo from "@/components/FindMusic/broadInfo"
export default {
  components:{
    broadInfo
  },
  data() {
    return {
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
    };
  },
  methods: {},
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {});
    });
    this.cutMusicInfo();
  },

  filters:{
    cutTitle:(value)=>{
       if (!value) return ''

    }

  },
  props: {
    

    //左侧panel数据
    panelRowList: {
      type: Array,
      default: function() {
        return [
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
        ];
      }
    },
    playList: {
      type: Array,
      default: () => []
    }
  
  },
  // mounted: function() {

  // },
  methods: {
    //音乐信息过长
    cutMusicInfo: function() {
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
    //应该写一个watch方法进行监测//filter
    cutMethods: (ele, index) => {
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
.panel-body {
  overflow-y: scroll;
  height: 488px;
}
.panelpart {
  //width: 20%;
  border: 1px solid;
  max-width: 250px;
  // display: inline-block;
  // height: 550px;
  // overflow-y: scroll;
  border-top: none;
}
.panel-title {
  text-align: left;
}
//

// .music-board {
//   position: relative; //分享收藏居左
//   //margin-top: 10%;
//   border-top: solid 1px;
//   padding: 5% 0;
//   .music-pic {
//     // width: 10%;
//     display: inline-block;
//     width: 40%;

//     #music-img {
//       width: 75%;
//       margin-left: 5%;
//     }
//   }
//   .music-description {
//     display: inline-block;
//     text-align: left;
//     font-size: 14px;
//     .music-option {
//       position: absolute;
//       right: 4px;
//     }
//   }
// }
.panel-row {
  list-style: none; //去圆点
  text-overflow: ellipsis;
    height: 24px;
    overflow: hidden;
    white-space: nowrap;
  a {
    text-decoration: none; //去掉下划线
  }
}
</style>

