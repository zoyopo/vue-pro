<template>
    <div class="tab-box" :style="boxstyle">
        {{name}}
        <div class="selected-icon"></div>
        <div class="tick"></div>
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
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-box {
  display: inline-block;
  position: relative;
  text-align: center;
  border: solid 1px #b9a7a76b;
  padding: 1%;
}
.selected-box {
  border: solid 1px #5ddb14;
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

