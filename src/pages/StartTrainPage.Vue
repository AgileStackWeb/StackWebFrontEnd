<script>
  import Table from '../components/Table.vue';
  export default {
    components: {
      Table
    }
};
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
  
  <div id='app' class="container" style="text-align: center;">
      <h5 class="card-title">所有資料的設定</h5>
      <table style="align-content: center;">
        <thead>
          <tr>
            <th>ID</th>
            <th>名稱</th>
            <th>價錢</th>
          </tr>
        </thead>
        <tbody>
          <TableRow v-for="item in tableData" :key="item.name" :data="item"></TableRow>
        </tbody>
      </table>
  </div>
  </template> 


