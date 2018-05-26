<template>
    <div class="select-tab" :style="tabStyle">
        <Header></Header>
        <TabBox @getTabName="getTabName" :name="allName" :boxstyle="allStyles" :activeName="activeName">
        </TabBox>
        <!-- <div v-if="Object.keys(categories).length>0"> -->
        <div class="label-content" v-for="(item,index) in categories" :key="index">
            <meaning-label :name="item.name"></meaning-label>
            <div class="box-content">
                <TabBox @getTabName="getTabName" :name="_item.name" :boxstyle="styles" v-for="(_item,_index) in item.categoryList" :key="_index" :activeName="activeName">
                </TabBox>               
            </div>
        </div>
       
    </div>
</template>

<script>
import TabBox from "@/components/FindMusic/SelectTab/TabBox";
import MeaningLabel from "@/components/FindMusic/SelectTab/MeaningLabel";
import Header from "@/components/FindMusic/SelectTab/Header";
export default {
  components: {
    TabBox,
    MeaningLabel,
    Header
  },
  methods: {},
  data() {
    return {
      allName:"全部歌单",
      activeName:"全部歌单",
      styles: {
        width: ""
      },
      allStyles: {
        width: "94%",
        margin: "2px 1.5%"
      },
      _categories: {}
    };
  },
  mounted() {
    this.categories = this.$store.state.CategoriesInfo.categories;
  },
  props: {
    tabStyle: {
      type: Object,
      default: {}
    },
    categories: {
      type:Array,
      default: []
    }
  },
  methods: {
    // getcategoriesById(id) {
    //   return this.$store.getter.getcategoriesById(id);
    // }
    getTabName(name){
      this.activeName=name;
      this.$emit('getTabName',name)
    }
  },
  computed: {
    // categories() {
    //   return this.$store.state.CategoriesInfo.categories;
    // },
    // all() {
    //   return this.$store.state.CategoriesInfo.all;
    // }
  }
};
</script>

<style lang="scss" scoped>
.box-content {
  display: inline-block;
  vertical-align: top;
  width: 75%;
  font-size: 0;
}
.label-content {
  margin-top: 10px;
}
</style>


