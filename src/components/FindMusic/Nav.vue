<template>
<!--root-->
 <div class="nav">
     <ul id="findMusic-nav-ul">
         <li class="findMusic-nav-li" v-for="item in navList"><a :href="item.navHref">{{item.navTitle}}</a></li>
     </ul>
     
     
</div>
</template>

<script>
export default {
    props:{

        navList:{
            type:Object,
            default:function(){

                return[{
                    navTitle:'推荐',
                    navHref:''
                },{
                    navTitle:'排行榜',
                    navHref:''
                },{
                    navTitle:'歌单',
                    navHref:''
                },{
                    navTitle:'主播电台',
                    navHref:''
                },
                {
                     navTitle:'最新音乐',
                    navHref:""
                }]
            }
        }

    }


}
</script>

<style lang="scss" scoped>
.nav{
    width: 100%;
    ul{
        li{display: inline-block;margin-left: 10%}
        li:first-child{margin-left: 0;}
    }

}


</style>
