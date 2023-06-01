<template>
  <div class="p-4">
    <table class="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b" style="background-color:#E9E4F8; color: #8D7FB1;">Name</th>
          <th class="py-2 px-4 border-b" style="background-color:#E9E4F8; color: #8D7FB1;">Age</th>
          <th class="py-2 px-4 border-b" style="background-color:#E9E4F8; color: #8D7FB1;">Location</th>
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
  </div>
</template>

<script setup>
import TrainingButton from "../components/TrainingButton.vue";
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

<style>
/* 添加Tailwind CSS的類名或自定義樣式 */
</style>
