// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VuerResource from 'vue-resource'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
// eleme
import Element1 from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
//
axios.defaults.baseURL = 'http:localhost:3000';
Vue.prototype.$axios=axios;
Vue.config.productionTip = false
Vue.use(VuerResource)
Vue.use(Mint)
Vue.use(Element1)

// Vue.use(Button)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})

// var Child = {
// //   template: '<div class="dialog-content">\
// //         <div class="row">\
// //             <div class="col-xs-12 nopadding">\
// //                 <div class="widget-box">\
// //                     <div class="widget-title">\
// //                         <h5>礼品信息</h5>\
// //                     </div>\
// //                     <div class="widget-content">\
// //                         <div class="row">\
// //                             <div class="col-sm-12">\
// //                                 <table cellpadding="3" cellspacing="0" border="0" class="inputform">\
// //                                         <tr>\
// //                                             <td class="td-label"><label for="GiftName">礼品名称</label></td>\
// //                                             <td class="td-control">\
// //                                                <input type="text" val="{{GiftName}}" class="form-control"/>\
// //                                             </td>\
// //                                             <td class="td-label"><label for="Integral">兑换积分</label></td>\
// //                                             <td class="td-control">\
// //                                             <input type="text" val="{{Integral}}" class="form-control"/>\
// //                                             </td>\
// //                                         </tr>\
// //                                         <tr>\
// //                                             <td class="td-label"><label for="Description">礼品描述</label></td>\
// //                                             <td class="td-control" colspan="3">\
// //                                             <input type="text" val="{{Description}}" class="form-control"/>\
// //                                             </td>\
// //                                         </tr>\
// //                                     </table>\
// //                             </div>\
// //                         </div>\
// //                     </div>\
// //                 </div>\
// //             </div>\
// //         </div>\
// //         <div class="row">\
// //             <div class="col-xs-12" data-autosize="true" style="padding:0;">\
// //                 <table id="datagrid" fit="true"></table>\
// //             </div>\
// //         </div>\
// //     </div>',
//   todo: {
//     GiftName: '',
//     Integral: '',
//     Description: ''
//   }
// }
