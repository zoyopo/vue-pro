<template>
    <div class="test">
     
      <mt-header fixed title="">
         <router-link to="/" slot="left">
         <mt-button icon="back">返回</mt-button>
         </router-link>
         <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
       <mt-header title="固定在顶部">

       </mt-header>
      <mt-tab-container v-model="active" v-bind:swipeable="isSwipe">
      <mt-tab-container-item id="外卖">
        <ul>
        <li v-for="item in list" :key="item">
          <img v-lazy="item">
        </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="订单">
      <mt-cell v-for="n in 5" title="tab-container 2" :key="n"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="发现">
        <mt-cell v-for="n in 7" title="tab-container 3" :key="n"></mt-cell>
      </mt-tab-container-item>
      </mt-tab-container>
      <mt-tabbar v-model="selected">
      
      <mt-tab-item id="外卖" @click="Switch">

    <img slot="icon" src="../assets/logo.png">
    外卖
  </mt-tab-item>
  <mt-tab-item id="订单">
    <img slot="icon" src="../assets/logo.png">
    订单
  </mt-tab-item>
  <mt-tab-item id="发现">
    <img slot="icon" src="../assets/logo.png">
    发现
  </mt-tab-item>
  <mt-tab-item id="我的">
    <img slot="icon" src="../assets/logo.png">
    我的
  </mt-tab-item>
  </mt-tabbar>
     
</div>
 
</template>
<script>
export default {
  name: "test",
  data() {
    return {
      // combo:'',
      isSwipe: true,
      selected: "外卖",
      active: "外卖",
      first: 1,
      second: "on",
      last: {},
      testArray: ["The Pianoer", "on", "the sea"],
      api: "http://localhost:5000/api/values",
      list: []
    };
  },
  methods: {
    //每次都会进行调用，不进行缓存
    add: function() {
      this.first++;
      console.log(this.first);
    },
    Switch: function() {
      this.active = "外卖";
    },
    //用vue-resource加载调用api接口加载数据
    vueSourceM: function() {
      this.$http.get(this.api).then(function(response) {
        this.last = response.data;
        this.$toast({ message: "成功获取api数据！", position: "top" });
      });
    }
  },
  computed: {
    //计算,会缓存计算出的结果
    combo: function() {
      return this.first + " " + this.second;
    }
  },
  watch: {
    //观察data中的值，当发生变化时触发一个函数

    last: function(oldval, newval) {
      this.testArray.push(newval.userName);
    },
    //#region 下面tab与container内容进行联动
    selected: function(newval, oldval) {
      this.active = newval;
    },
    active: function(newval) {
      this.selected = newval;
    }
    //#endregion
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$Color: #ccc;
$FontSize: 2em;
$side: left;
.test {
  color: darken($Color, 9%);
  font-size: $FontSize;
  border-#{$side}-radius: 5px;
  // ul{
  //   li{

  //   }
  // }
}
ul li {
  float: none;
}
</style>



