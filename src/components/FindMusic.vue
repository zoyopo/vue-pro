<template>
    <div class="findmusic">
        <slide :loop ='loop' :autoPlay='autoPlay'>
            <div class="slider-item"><img src="../assets/logo.png"/></div>
            <div class="slider-item"><img src="../assets/test1.jpg"/></div>
            <div class="slider-item"><img src="../assets/test2.jpg"/></div>
            <div class="slider-item"><img src="../assets/logo.png"/></div>
        </slide>
    </div>
</template>
<script>
    import Slide from '@/components/Slider.vue'
    export default {
        name:'findmusic',
        components:{
            Slide
        },
        data (){
            return {
                loop:true,
                autoPlay:true
            }
        }
    }
</script>

<style>

</style>
