<template>
  <div class="p-4">
    <table class="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th
            class="py-2 px-4 border-b"
            style="background-color: #e9e4f8; color: #8d7fb1"
          >
            模型名稱
          </th>
          <th
            class="py-2 px-4 border-b"
            style="background-color: #e9e4f8; color: #8d7fb1"
          >
            股票號碼
          </th>
          <th
            class="py-2 px-4 border-b"
            style="background-color: #e9e4f8; color: #8d7fb1"
          >
            公司名稱
          </th>
          <th
            class="py-2 px-4 border-b"
            style="background-color: #e9e4f8; color: #8d7fb1"
          >
            選取時間區間
          </th>
          <th
            class="py-2 px-4 border-b"
            style="background-color: #e9e4f8; color: #8d7fb1"
          >
            選擇模型：預設XGB
          </th>
          <th
            class="py-2 px-4 border-b"
            style="background-color: #e9e4f8; color: #8d7fb1"
          >
            選擇資料清洗： 預設Standard
          </th>
          <th
            class="py-2 px-4 border-b"
            style="background-color: #e9e4f8; color: #8d7fb1"
          >
            選擇技術指標：預設 純量價
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item" class="hover:bg-gray-100">
          <td class="py-2 px-4 border-b" style="color: #5a4888">
            {{ item.modelName }}
          </td>
          <td class="py-2 px-4 border-b" style="color: #5a4888">
            {{ item.stockNumber }}
          </td>
          <td class="py-2 px-4 border-b" style="color: #5a4888">
            {{ item.companyName }}
          </td>
          <td class="py-2 px-4 border-b" style="color: #5a4888">
            {{ item.dateRange }}
          </td>
          <td class="py-2 px-4 border-b" style="color: #5a4888">
            {{ item.chooseModel }}
          </td>
          <td class="py-2 px-4 border-b" style="color: #5a4888">
            {{ item.dataCleaning }}
          </td>
          <td class="py-2 px-4 border-b" style="color: #5a4888">
            {{ item.technicalIndicators }}
          </td>
        </tr>
      </tbody>
    </table>
    <TrainingButton></TrainingButton>
    <ProgressBar class="text-slate-950">
      已訓練 28 %
      <!-- :currentVal="val" :minVal="min" :maxVal="max" v-slot="{ percent }" > -->
      <!-- 已下載 {{ percent }} % -->
    </ProgressBar>
  </div>
</template>

<script setup>
import TrainingButton from "../components/TrainingButton.vue";
import ProgressBar from "../components/ProgressBar.vue";
import { ref } from "vue";
const items = ref([
  {
    modelName: "克林姆",
    stockNumber: "0201",
    companyName: "克林姆股份有限公司",
    dateRange: "2023/02/11~2023/04/12",
    chooseModel: "XGB",
    dataCleaning: "Standard",
    technicalIndicators: "純量價",
  },
  {
    modelName: "牧牧",
    stockNumber: "0313",
    companyName: "牧牧豬式會社",
    dateRange: "2022/12/13~2023/01/05",
    chooseModel: "XGB",
    dataCleaning: "Standard",
    technicalIndicators: "純量價",
  },
  {
    modelName: "Meiko",
    stockNumber: "1231",
    companyName: "Meiko Inc",
    dateRange: "2019/12/31~2020/01/10",
    chooseModel: "XGB",
    dataCleaning: "Standard",
    technicalIndicators: "純量價",
  },
  {
    modelName: "芝麻糊",
    stockNumber: "0113",
    companyName: "芝麻糊公司",
    dateRange: "2023/03/11~2023/11/12",
    chooseModel: "XGB",
    dataCleaning: "Standard",
    technicalIndicators: "純量價",
  },
]);
</script>

<style>
/* 添加Tailwind CSS的類名或自定義樣式 */
</style>
