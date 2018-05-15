<template>
    <div class="nav">
      <div class="nav-left">
        <div class="cloudmsc-logo">
          <img class="logo" src="../assets/logo.png" alt="图片暂无"/>
        </div>
        <div class="cloudmsc-title">
          云音乐
        </div>
      </div>
      <div class="nav-center">
        <div>
          <button id="btn-prev" @click="prev" >&lt;</button>        
          <button id="btn-next" @click="next">&gt;</button>
        </div>
        <div>
          <input type="search" class="input-search"  placeholder="请输入你想要的music"/>
        </div>
       </div>
      <div class="nav-right">
        <!-- <div class="user-info"> -->
        <div class="user_info">
          <!-- <div > -->
          <img v-if="Object.keys(userInfo).length!==0" class="user-pic" :src="userInfo.profile.avatarUrl" alt="图片暂无"/>
            <img v-else-if="Object.keys(storedInfo).length!==0" class="user-pic" :src="storedInfo.profile.avatarUrl" alt="图片暂无"/>
          
          <!-- </div> -->
          <!-- <div >  -->
          <i  v-else @click="loginClick" class="fa fa-user-circle-o"></i>
          <!-- </div> -->
          <div class="user-name"><i @click="loginClick" class="fa fa-sort-desc"></i></div>
        </div>
       
          <!-- <div class="user-name">&nbsp;<i class="fa fa-sort-desc"></i></div>   -->
        <!-- </div> -->
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="user-skin"><i class="fa fa-user-o"></i></div>
           <div class="user-mail"><i class="fa fa-envelope-o"></i></div>
           <div class="user-setting"><i class="fa fa-cog fa-fw"></i></div>
      </div>
     
    </div>
   
</template>

<script>

// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from 'vuex'
//import router from './router'
export default {
  components:{
    
  },
  
  data() {
    return {
      num: 1,
      //userInfo:{}
      storedInfo:sessionStorage.getItem('userInfo')==null?{}:JSON.parse(sessionStorage.getItem('userInfo'))
    };
  },
  methods: {
    increment() {
      return (this.num += 1);
    },
    loginClick(){
       this.$emit("showLoginDlg");
      //alert(1)
    },
    prev(){
      router.go(-1)
    },
    next(){
    router.go(1)
    }
  }
  ,

  computed:mapState({
    userInfo:state=>state.userInfo  
    
  }) 
};
</script>

<style lang="scss" scoped >
// @import './static/scss/font-awesome.scss';
$flex-display: flex;
.nav {
  width: 100%;
  min-width: 720px;
  background: #d61b1b;
  /* margin: 0 20%; */
  height: 49px;
  line-height: 49px;
  border-radius: 7px;
  display: $flex-display;
}
.nav-left {
  display: $flex-display;
  width: 10%;
  margin-left: 1%;
  display: -webkit-flex;
  /* 垂直居中 */
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  /* -- */
}
.cloudmsc-title {
  flex: 2;
}
/*
为了能和登录图标并排显示
*/
.user-name{
  display: inline-block;
}

.logo-common{
  flex: 1;
  width: 20px;
  display: block;
}
.logo {
@extend .logo-common;
  margin-top: -4px;
}

.nav-center {
  display: $flex-display;
  width: 40%;
  margin-left: 10%;
}


#btn-next {
  margin-left: -10%;
}
.btn-area {
  border-radius: 2px;
  border: solid 1px;
}
.input-search{
  border-radius: 5px;

}
.nav-right{
  display: $flex-display;
   /* 垂直居中 */
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  /* -- */
}
.user-pic{
  flex: 1;
  width: 20px;
}
.user-info,.user-skin,.user-mail,.user-setting{flex: 1;width: 80px;}
</style>

