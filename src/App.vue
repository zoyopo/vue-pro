<template>
  <div id="app">
 
    <router-view></router-view>
  </div>   
</template>

<script>
export default {
  name: "app" 
};
</script>
<!--scoped会导致当页面的样式无法作用于全局-->
<style lang="scss"> 
@import 'common/sass/font-awesome.scss';
$testColor: #000;
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 // text-align: center;
  color: $testColor;
  margin:0 10%;
  box-sizing: border-box;
}
</style>
