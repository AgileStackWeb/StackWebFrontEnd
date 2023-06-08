<template>
  <div class="p-4">
    <table class="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th
            class="py-2 px-4 border-b"
            style="background-color: #e9e4f8; color: #8d7fb1"
          >
            按鈕
          </th>
          <th
            v-for="column in columns"
            :key="column.id"
            class="py-2 px-4 border-b"
            style="background-color: #e9e4f8; color: #8d7fb1"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id" class="hover:bg-gray-100">
          <td :key="row.model_id" @click="getModelId(row.model_id)" class="py-2 px-4 border-b" style="color: #5a4888">
            <router-link
              class="text-purple hover:text-blue px-3 py-2 rounded-md text-sm font-medium"
              to="/predict"
            >
              <font-awesome-icon
                class="icon"
                :icon="['fas', 'magnifying-glass']"
              />
            </router-link>
          </td>
          <td
            v-for="column in columns"
            :key="column.id"
            class="py-2 px-4 border-b"
            style="color: #5a4888"
          >
            {{ row[column.field] }}
          </td>
        </tr>
      </tbody>
    </table>
    <TrainingButton></TrainingButton>
  </div>
</template>

<script setup>

import TrainingButton from "../components/TrainingButton.vue";
import { ref, onMounted, proxyRefs } from "vue";
import { getModelApi } from "../js/API";

function getData(){
  rows.value = getModelApi({}).then(response => console.log(response))
  console.log(rows.value)
}

onMounted(getData)

// 固定的欄位名稱
const columns = ref([
  {
    id: 1,
    label: "模型編號",
    field: "model_id",
  },
  {
    id: 2,
    label: "模型名稱",
    field: "name",
  },
  {
    id: 3,
    label: "股票號碼",
    field: "stock_code",
  },
  {
    id: 4,
    label: "開始時間",
    field: "start_time",
  },
  {
    id: 5,
    label: "結束時間",
    field: "end_time",
  },
  {
    id: 6,
    label: "資料清洗",
    field: "data_clean",
  },
  {
    id: 7,
    label: "技術指標",
    field: "tech",
  },
]);

//欄位假資料
const rows = ref([]);
</script>