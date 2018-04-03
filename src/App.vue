<template>
  <div id="app">
  <!-- <div id="header">
    <h1><a href="~/Home/Index">华蝶管理平台</a></h1>
    <a id="menu-trigger" href="#"><i class="fa fa-bars"></i></a>
  </div> -->
  <!-- <div id="user-nav">
    <ul class="btn-group" style="width: auto; margin: 0px;">
        <li class="btn"><a href="#none"><i class="fa fa-user"></i> <span class="text"></span></a></li>
        <li class="btn dropdown" id="menu-messages">
            <a href="#" data-toggle="dropdown" data-target="#menu-messages" class="dropdown-toggle">
                <i class="fa fa-envelope"></i> <span class="text message-title">消息</span> <span class="label label-danger message-total" style="display:none"></span> <b class="caret"></b>
            </a>
            <ul class="dropdown-menu messages-menu" style="width:160px;">
                <li class="message-item">
                    <a href="#"><span class="text" style="color:#666;">暂无新消息</span></a>
                </li>
            </ul>
        </li>
        <li class="btn"><a href="#none" onclick="javascript:showChangepwd();"><i class="fa fa-cog"></i> <span class="text">修改密码</span></a></li>
        <li class="btn"><a href="#none" id="exitsystem"><i class="fa fa-share"></i> <span class="text">退出系统</span></a></li>
    </ul>
</div> -->
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
