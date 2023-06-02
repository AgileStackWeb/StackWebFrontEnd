<template>
  <div class="p-4">
    <table class="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th
            class="py-2 px-4 border-b bg-violet-200"
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
          <td class="py-2 px-4 border-b" style="color: #5A4888">
            {{ item.player }}
          </td>
          <td class="py-2 px-4 border-b" style="color: #5A4888">
            {{ item.age }}
          </td>
          <td class="py-2 px-4 border-b" style="color: #5A4888">
            {{ item.country }}
          </td>
        </tr>
      </tbody>
    </table>
    <TrainingButton></TrainingButton>
    <ProgressBar class="text-neutral-800">
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
    player: "Stephen Curry",
    age: 35,
    country: "USA",
  },
  {
    player: "Lebron James",
    age: 38,
    country: "USA",
  },
  {
    player: "Kevin Durant",
    age: 34,
    country: "USA",
  },
  {
    player: "Giannis Antetokounmpo",
    age: 28,
    country: "Greece",
  },
]);
</script>
