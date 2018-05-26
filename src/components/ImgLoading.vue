<template>
    
    <img v-lazy="src||url" 
    
    /> 
    <!-- <i v-else class="fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom"></i> -->
</template>
<script>
    export default {
        props: ['src'], // 父组件传过来所需的url
        data() {
            return {
                 url: "../static/Img/FindMusic/loading.gif",
                // 已经不用此方法来loading，改用fontawsome
                isShowImg:false//通过控制隐藏显示来loading
            }
        }
        // ,
        // mounted() {
        //     var newImg = new Image()
        //     newImg.src = this.src
        //     newImg.onerror = () => {    // 图片加载错误时的替换图片
        //        // newImg.src = './static/Img/FindMusic/imgerror.gif'
        //     }
        //     newImg.onload = () => { // 图片加载成功后把地址给原来的img
        //         this.url = newImg.src
        //         this.isShowImg=true
        //     }
        // }
    }
</script>