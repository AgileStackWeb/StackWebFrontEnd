<template>
  <div class="box-border p-7 bg-white">
    <div class="relative h-fit w-fit m-5">
      <label for="range">選擇區間 :</label>
      <input id="range" class="box-border" type="date" v-model="startDate" />
      <span class="p-3">~</span>
      <input type="date" class="box-border" v-model="endDate" />
    </div>
    <button @click="produceData">
      開始預測
      <font-awesome-icon class="icon" :icon="['fas', 'magnifying-glass']" />
    </button>
  </div>
  <div>
    <br />
    <h2>{{ startDate }} ~ {{ endDate }}</h2>
    <h2>預測結果</h2>
  </div>
</template>

<script setup>
import { ref } from "vue";
const startDate = ref("");
const endDate = ref("");
function produceData() {
  const data = {
    start: startDate.value,
    end: endDate.value,
  };
  console.log("Predict Data", data);
  alert("訓練成功!");
}
</script>
