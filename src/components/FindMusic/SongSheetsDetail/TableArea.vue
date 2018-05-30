<template>
<div class="table">
 <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table>
  <a slot="edit" slot-scope="props" class="fa fa-edit" :href="edit(props.row.id)">edit</a>
  </div>
</template>

<script>
//import {ServerTable, ClientTable, Event} from 'vue-tables-2'
export default {
  components: {
   //ClientTable
  },
  data() {
    return {
       columns: ['id', 'name', 'age'],
        tableData: [
            { id: 1, name: "John", age: "20" },
            { id: 2, name: "Jane", age: "24" },
            { id: 3, name: "Susan", age: "16" },
            { id: 4, name: "Chris", age: "55" },
            { id: 5, name: "Dan", age: "40" }
        ],
        options: {
            // see the options API
        }
    };
  }
};

</script>

<style lang="scss" scoped>
@import url("https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css");
//@import '../assets/btsrp.scss';
//@import 'btsrp.scss';
</style>
