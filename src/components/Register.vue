<template>
<div class="register">
    <mt-header fixed title="用户绑定"></mt-header>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="registerData.userName" v-bind:style="styleObject"></mt-field>
    <mt-field label="邮箱" placeholder="请输入邮箱" type="email"  v-model="registerData.email" v-bind:style="styleObject"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="registerData.passWord" v-bind:style="styleObject"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel"  v-bind:attr='{maxlength: 11}' v-model="registerData.mobile" v-bind:style="styleObject"></mt-field>
    <!--必须使用v-bind进行属性绑定 否则参数是string而不是对象 -->
   <!-- <mt-cell title="性别" align="left"  v-bind:style="styleObject" ><mt-switch v-model="registerData.gender"></mt-switch></mt-cell> -->
    <mt-button type="primary" @click="Binding">绑定</mt-button>
   
</div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      registerApi: "http://localhost:5000/api/values/UserRegister",
      registerData: {
        userName: "",
        email: "",
        passWord: "",
        mobile: "",
        gender: 0
      },
      styleObject: {
        color: "#000"
        // fontSize: "13px"
      },
      sexStyleObject: {
        color: "#000",
        // fontSize: "13px"
        "text-align": "left"
      }
    };
  },
  methods: {
    // 绑定的ajax方法
    Binding: function() {
      this.$http({
        url: this.registerApi,
        method: "post",
        params: { u: JSON.stringify(this.registerData) },
        headers: { "Content-Type": "json" }
      }).then(
        function(res) {
          //请求成功
          console.log(res);
        },
        function(res) {
          //请求失败
        }
      );
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
<<style lang="scss" scoped>
$altrerColor:#000;
.mint-header{
   background-color:#795548;
    
}
.mint-button--normal{
  width:100%;
  margin-top: 22%;
  
}
.mint-cell-title{
  color:$altrerColor;
  
}

</style>
