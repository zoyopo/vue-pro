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

<style lang="scss">
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
