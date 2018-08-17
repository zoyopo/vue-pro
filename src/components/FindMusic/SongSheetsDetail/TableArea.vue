<!--<template>
<div class="table">
 <v-client-table :name="'搜索'" :data="tableData" :columns="columns" :options="options"></v-client-table>
  <a slot="edit" slot-scope="props" class="fa fa-edit" :href="edit(props.row.id)">edit</a>
  </div>
</template>-->

<!-- <script>
// //import {ServerTable, ClientTable, Event} from 'vue-tables-2'
// export default {
//   components: {
//    //ClientTable
//   },
//   data() {
//     return {
//        columns: ['id', 'name', 'age'],
//         tableData: [
//             { id: 1, name: "John", age: "20" },
//             { id: 2, name: "Jane", age: "24" },
//             { id: 3, name: "Susan", age: "16" },
//             { id: 4, name: "Chris", age: "55" },
//             { id: 5, name: "Dan", age: "40" }
//         ],
//         options: {
//             // see the options API
//         }
//     };
//   }
// };

// </script>

// <style lang="scss" scoped>
// @import url("https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css");

// </style>-->
  <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
      type="index"
       >
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </template>

  <script>
  import 'element-ui/lib/theme-chalk/index.css'
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    }
  </script>