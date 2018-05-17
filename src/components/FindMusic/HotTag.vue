<template>
    <div class="hottag">
     <span class="tag-title">{{tagTitle}}：</span>
    
     <div class="tag-content" v-for="(item,index) in tags" :key="index">
       {{item.name}}
     </div>
    </div>
</template>

<script>
export default {
  name: "HotTag",
  data() {
    return {
      tagTitle: "热门标签"
      // tags: []
    };
  },
  props: {
    tags: {
      type: Array,
      default: []
    }
  },
  mounted() {},
  methods: {
    // promises() {
    //   let vm = this;
    //   return {
    //     tagData: vm.$axios.get("/playlist/hot")
    //   };
    // },
    // getData() {
    //   let vm = this;
    //   this.promises()
    //     .tagData.then(res => {
    //       vm.tags = res.data.tags;
    //     })
    //     .catch(err => {});
    // }
  }
};
</script>

<style lang="scss" scoped>
.hottag {
  margin-top: 10px;
  .tag-content {
    display: inline-block;
    padding-left: 2%;
    padding-right: 2%;
    text-align: center;
    font-size: 0.8rem;
    border-right: 1px solid;
    &:last-child {
      border: none;
    }   
  }
   .tag-title {
      font-size: 0.8rem;
      margin-left: 3.5%;
    }
}
</style>
