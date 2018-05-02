<template>
  <div class="dialog" v-show="dlgShow" :style="dlgSize">
    <div class="dlg-header"></div>
    <div class="dlg-img" v-show="picShow">
        <img id="logoPic" src="../assets/logo.png"/>
    </div>
    <div class="dlg-btn" v-show="loginWayChooseIsShow">
        <button class="btn btn-login" @click="showPhoneLogin">手机号登录</button>
        <button class="btn btn-register">注册</button>
    </div>
    <div class="phone-login" v-show="phoneLoginIsShow">
        <i class="fa fa-mobile-phone"></i><input v-focus class="input" type="text" v-model="phone" placeholder="请输入手机号" />
        <i class="fa fa-key fa-fw"></i><input v-validate="validateKey" @blur="pwdVali" v-model="password"  class="input" type="password" placeholder="请输入密码"/>
       <div class="auto-login-area"> 
         <input type="checkbox" class="auto-login-check"/><span class="is-auto-login">自动登录</span>
         </div>

    </div>
    <div class="dlg-other" v-show="otherLoginAreaIsShow">
    <div class="dlg-other-title">——————其他登录方式——————</div>
    <div class="dlg-other-icon">
        <!--待优化写成参数，先写死-->
        <div class="login-icon"><i class="fa fa-weibo"></i><!--修复inline-block的空隙问题-->
         </div><div class="login-icon"><i class="fa fa-wechat"></i>
          </div><div class="login-icon"><i class="fa fa-qq"></i>
           </div><div class="login-icon"><i class="fa fa-google-plus"></i></div>
    </div>
    </div>

        <button class="phone-login-button" v-show="!otherLoginAreaIsShow" @click="phoneLoginClick">登录</button>
    
  </div>
</template>

<script>
export default {
  name: "Dlg",
  directives: {
    focus: {
      // 指令的定义
      update: function(el) {
        //alert('updated')
        // el.focus();
      }
    },
    validate: function(val, oldVal) {
      //let s = JSON.stringify;
      // alert(s(val) + "<br />" + s(oldVal));
    }
  },
  props: {
    //是否显示弹框
    dlgShow: {
      type: Boolean,
      default: () => false
    },
    //是否显示图片
    picShow: {
      type: Boolean,
      default: () => false
    },
    //dlg框尺寸
    dlgSize: {
      type: Object,
      default: function() {
        return {
          width: "200px",
          height: "400px",
          positon: "absolute",
          left: "calc(50% - 100px)",
          top: "calc(50% - 200px)",
          "z-index": "9999"
        };
      }
    }
  },
  data() {
    return {
      validateKey: "111",
      phoneLoginIsShow: false,
      loginWayChooseIsShow: true,
      otherLoginAreaIsShow: true,
      phone: "",
      password: ""
    };
  },
  methods: {
    showPhoneLogin: function() {
      this.phoneLoginIsShow = true;
      this.loginWayChooseIsShow = false;
      this.otherLoginAreaIsShow = false;
    },
    pwdVali: function() {
      this.validateKey = "4546";
    },
    phoneLoginClick: function() {
      var that = this;
      this.$axios
        .get("http://localhost:3000/login/cellphone", {
          params: {
            phone: this.phone,
            password: this.password,
            xhrFields: "{ withCredentials: true }"
          }
        })
        .then(function(res) {
          console.log(res);
        
             that.$axios.get(
               "http://localhost:3000/user/playlist",

              {
                params: {
                  xhrFields: "{ withCredentials: true }",
                  uid:res.data.account.id
                }
              }
             ).then(function(playlistInfo){

               console.log(playlistInfo)
             })
         
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  display: block;
  width: 80%;
  margin: 0 auto;
  border-radius: 10px;
  &:first-child {
    margin-top: 20%;
  }
  &:last-child {
    margin-top: 1%;
  }
}
#logoPic {
  width: 32%;
  margin: 33% auto;
  display: block;
}
.login-icon {
  display: inline-block;
  width: 25%;
  text-align: center;
  font-size: 1.2rem;
}
.dlg-other-title {
  font-size: 0.1em;
  /* margin: 3px auto; */
  /* width: 100%; */
  text-align: center;
  margin-top: 6%;
}
.dlg-other-icon {
  margin-top: 6%;
}

.phone-login {
  margin-top: -50px;
  position: relative;
  .input {
    display: block;
    width: 80%;
    margin: 0 auto;
    line-height: 28px;
    height: 28px;
    padding-left: 20px;
    //border-radius: 0px;
  }

  //   .pwd-input {
  //     display: block;
  //     width: 80%;
  //     margin: 0 auto;
  //     line-height: 28px;
  //     height: 28px;
  //   }
  .fa-mobile-phone {
    position: absolute;
    left: 20px;
    top: 8px;
  }
  .fa-key {
    left: 20px;
    position: absolute;
    top: 44px;
    font-size: 10px;
  }
  .auto-login-area {
    margin-top: 6px;
    .is-auto-login {
      font-size: 10px;
    }
    .auto-login-check {
      margin-left: 5%;
    }
  }
}

.phone-login-button {
  width: 80%;
  margin: 0 auto;
  display: block;
  background: #249a28;
  border-radius: 5px;
  margin-top: 14px;
  height: 26px;
}
</style>
