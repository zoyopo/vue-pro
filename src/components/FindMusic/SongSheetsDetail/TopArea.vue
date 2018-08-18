<template>
  <el-card :body-style="bodyStyle">
    <div class="image">
      
      <img v-lazy="info.coverImgUrl" class="">
    </div>
    <div class="right-area">
      <div class="img-content clearfix">
        <span class="title">{{info.name}}</span>
        <span class="song-num-playnum">歌曲数:{{info.trackCount}}/播放数:{{info.playCount}}</span>
        <div class="bottom">
          <span><img id="creator" :src="info.creator.avatarUrl" />
            <span>{{info.creator.nickname}}</span>
          </span>
          <span class="time">{{ info.createTime|timeStamp2DateStr }}</span>
        </div>
      </div>
      <!--操作按钮-->
      <div class="btn-group">
        <el-button type="success" icon="el-icon-circle-plus-outline" size="mini">操作按钮</el-button>
        <el-button type="success" icon="el-icon-edit" size="mini">操作按钮</el-button>
        <el-button type="success" icon="el-icon-share" size="mini">操作按钮</el-button>
        <el-button type="success" icon="el-icon-download" size="mini">操作按钮</el-button>
      </div>

      <!--label area -->
      <div class="tag">
        <label>标签：</label>
        <span>{{info.tags.join('/')}}</span>
      </div>
      <!--introduction area -->
      <div class="introduction">
        <label>简介：</label>
        <span>{{info.description}}</span>
      </div>
    </div>
  </el-card>
</template>

<script>
import { timeStamp2DateStr } from "filter/filter";
export default {
  filters: {
    timeStamp2DateStr: timeStamp2DateStr
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      currentDate: new Date(),
      bodyStyle: {
        width: "100%",
        overflow: "hidden"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.right-area{
  overflow: hidden;
}
.time {
  font-size: 13px;
  color: #999;
  display: table-cell;
  vertical-align: bottom;
  padding-left: 10px;
}

.bottom {
  font-size: 13px;
  margin-top: 8px;
  line-height: 12px;
  display: table;
  #creator {
    width: 20px;
    // display: block;
  }
}

.button {
  //padding: 0;
  //float: right;
}

.image {
  width: 24%;
  display: block;
  float: left;
  img {
    width: 100%;
  }
}

.clearfix:before,
  // .clearfix:after {
  //     display: table;
  //     content: "";
  // }
  
  .clearfix:after {
  clear: both;
}
.img-content {
  padding: 14px;
  float: left;
  width: 60%;
  position: relative;
  .song-num-playnum {
    font-size: 0.8rem;
    position: absolute;
    right: -140px;
    top: 20px;
  }
  .title {
    font-size: 1.5rem;
  }
}
.btn-group {
  width:  100%;
  float: left;
  padding-left: 14px;
}
.tag {
  float: left;
  padding-left: 14px;
  padding-top: 5px;
  width: 63%;
  font-size: 0.8rem;
}
.introduction {
  float: left;
  padding-left: 14px;
  padding-top: 5px;
  width: 90%;
  font-size: 0.8rem;
}
</style>

