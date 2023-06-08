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
import axios from "axios";
import TrainingButton from "../components/TrainingButton.vue";
import { ref, onMounted, proxyRefs } from "vue";

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
const rows = [
  {
    "model_id": "0",
    "name": "Model One",
    "stock_code": "102",
    "start_time": "2023-04-01",
    "end_time": "2023-04-02",
    "data_clean": "Standard",
    "tech": "Standard",
  },
  {
    "model_id": "1",
    "name": "Model Two",
    "stock_code": "103",
    "start_time": "2023-05-01",
    "end_time": "2023-04-02",
    "data_clean": "Standard",
    "tech": "Standard",
  },
];

// 選擇之模型資料(預設空值)
let selected_model = ref('');

// 點擊時取得選擇的model資料(資料為ref時)
// function getModelId(modelid){
//   for (const row of rows.value) {
//     const rawData = JSON.parse(JSON.stringify(row));
//     // 確認id一樣再取得model資料
//     if (rawData.model_id == modelid){
//       selected_model = rawData;
//     }
//   }

// 點擊時取得選擇的model資料
function getModelId(modelid){
for (let i = 0;i < rows.length; i++) {
  const rawData = rows[i];
  // 確認id一樣再取得model資料
  if (rawData.model_id == modelid){
    selected_model = rawData;
    console.log('model_id is',modelid,selected_model);
  }
}

// 傳送資料至回測頁面(失敗，找不到router)
// this.$router.push({
//   name: 'Predict',
//   path: '/predict',
//   params: selected_model
// });

}

function getModelList() {
  // axios
  //   .get("http://127.0.0.1:5000/api/user/show/pretrain_model")
  //   .then((response) => {
  //     rows.value = response.data;
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
}

onMounted(getModelList);


</script>

<style>
/* 添加Tailwind CSS的類名或自定義樣式 */
</style>
