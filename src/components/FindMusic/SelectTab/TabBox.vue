<template>
  <div :class="tabStyle" :style="boxstyle" @click="tabClick(name)">
    {{name}}
    <div class="selected-icon" v-show="isSelected"></div>
    <div class="tick" v-show="isSelected"></div>
  </div>
</template>

<script>
export default {
  name: "tabbox",
  props: {
    name: {
      type: String,
      default: ""
    },
    boxstyle: {
      type: Object,
      defalult: {}
    },
    activeName:{
      type:String,
      defalult:""
    }
  },
  data() {
    return {
      // isSelected: false,
      // tabStyle: {
      //   "selected-box": false,
      //   "unselected-box": true
      // }
    };
  },
  methods: {
    tabClick(name) {
      this.isSelected = true;     
      this.$emit("getTabName", name);//将name传给父组件，渲染时名称一致的加上样式
      //console.log(this)
    }
   
  },
  computed:{
    tabStyle(){
      return{
        "selected-box":this.activeName===this.name,
        "unselected-box":this.activeName!==this.name
      }     
    },
    isSelected(){
        return this.activeName===this.name?true:false
      }
  }
};
</script>

<style lang="scss" scoped>
.tab-box {
  display: inline-block;
  position: relative;
  text-align: center;

  padding: 1%;
  font-size: 1rem;
  width: 20%;
}
.unselected-box {
  border: solid 1px #b9a7a76b;
  @extend .tab-box;
}
.selected-box {
  border: solid 1px #5ddb14;
  @extend .tab-box;
}
.selected-icon {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-color: #5ddb14 transparent;
  border-width: 0 0 20px 25px;
  border-style: solid;
}
.tick {
  position: absolute;
  right: 0;
  bottom: 0;
  color: #fff;
  &::after {
    content: "✓";
  }
}
</style>

