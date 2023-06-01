<template>
  <!-- <div>
    <b-table striped hover :items="items"></b-table>
  </div> -->
  <div>
    <table class="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column"
            class="py-2 px-4 border-b"
          >
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id" class="hover:bg-gray-100">
          <td
            v-for="column in columns"
            :key="column"
            class="py-2 px-4 border-b"
          >
            {{ row[column] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
// import { ref } from "vue";
// const item = ref([]);

// item = [
//   { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
//   { age: 21, first_name: "Larsen", last_name: "Shaw" },
//   { age: 89, first_name: "Geneva", last_name: "Wilson" },
//   { age: 38, first_name: "Jami", last_name: "Carney" },
// ];
// export default {
//   props: {
//     columns: {
//       type: Array,
//       required: true
//     },
//     rows: {
//       type: Array,
//       required: true
//     }
//   }
// };
</script>
