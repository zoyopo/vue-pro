<template>
  <div class="dialog" v-show="dlgShow" :style="dlgSize">
    <div class="dlg-header"></div>
    <div class="dlg-img" v-show="picShow">

    </div>
    <div class="dlg-btn">
        <button class="btn btn-login">手机号登录</button>
        <button class="btn btn-register">注册</button>
    </div>
    <div class="dlg-other">

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
                    'z-index':'9999'
                }
            }
        }

    }  

}
</script>

<style>

</style>
