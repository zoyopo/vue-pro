<template>
    <div class="meaning-label" :style="labelStyle">
        <i :class="iconClass"></i>
        <span>{{name}}</span>
    </div>
</template>

<script>
export default {
  data() {},
  props: {
    name: {
      type: String,
      default: "语种"
    },
    iconClass: {
      type: String,
      default: "fa fa-heartbeat"
    },
    labelStyle: {
      type: Object,
      default: {
        display: "inline-block",
        "margin-right": "5%",
        'margin-left':'2%'
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

