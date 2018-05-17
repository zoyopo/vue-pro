<template>
    <div class="header">
        <span>{{name}}</span>

    </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "选择标签"
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  //border-radius: 5px;
  border-bottom: solid 1px;
  height: 40px;
  display: table;//垂直居中
  span {
    padding-left: 4%;
    vertical-align: middle;
    display: table-cell;
  }
}
</style>

