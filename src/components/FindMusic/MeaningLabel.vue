<template>
<div class="meaning-label">
    <i :class="iconClass"></i> <span>{{name}}</span>
</div>
</template>

<script>
export default {
data(){

},
props:{
    name:{
        type:String,
        default:"语种"
    },
    iconClass:{
        type:String,
        default:"fa fa-heartbeat"
    }
}

}
</script>

<style lang="scss" scoped>

</style>

