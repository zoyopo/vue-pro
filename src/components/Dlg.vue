<template>
  <div class="dialog" v-show="dlgShow" :style="dlgSize">
    <div class="dlg-header"></div>
    <div class="dlg-img" v-show="picShow">
        <img id="logoPic" src="../assets/logo.png"/>
    </div>
    <div class="dlg-btn">
        <button class="btn btn-login">手机号登录</button>
        <button class="btn btn-register">注册</button>
    </div>
    <div class="dlg-other">
    <div class="dlg-other-title">——————其他登录方式——————</div>
    <div class="dlg-other-icon">
        <!--待优化写成参数，先写死-->
        <div class="login-icon"><i class="fa fa-weibo"></i><!--修复inline-block的空隙问题-->
         </div><div class="login-icon"><i class="fa fa-wechat"></i>
          </div><div class="login-icon"><i class="fa fa-qq"></i>
           </div><div class="login-icon"><i class="fa fa-google-plus"></i></div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
     name:'Dlg',
    props:{
        //是否显示弹框
        dlgShow:{
            type:Boolean,
            default:()=>false            
        },
        //是否显示图片
        picShow:{
            type:Boolean,
            default:()=>false
        },
        //dlg框尺寸
        dlgSize:{
            type:Object,
            default:function(){

                return{
                    width:'200px',
                    height:'400px',
                    positon:'absolute',
                    left:'calc(50% - 100px)',
                    top:'calc(50% - 200px)',
                    'z-index':'9999',
                   
                }
            }
        }

    }  

}
</script>

<style lang="scss" scoped>
.btn{
    display: block;
    width: 80%;
    margin: 0 auto;
    border-radius: 10px;
    &:first-child{
        margin-top: 20%;
    }
    &:last-child{
        margin-top: 1%;
    }
}
#logoPic{
    width: 32%;
    margin: 33% auto;
    display: block;

}
.login-icon{
    display: inline-block;
    width: 25%;
    text-align: center;
    font-size: 1.2rem;
}
.dlg-other-title{
    font-size: 0.1em;
    /* margin: 3px auto; */
    /* width: 100%; */
    text-align: center;
    margin-top: 6%;
}
.dlg-other-icon{
    margin-top: 6%;
}
</style>
