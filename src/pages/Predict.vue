<template>
  <div class="box-border p-7 bg-white">
    <button class="rounded-full bg-violet-300" style="">
      <router-link
        class="text-white hover:text-blue px-3 py-2 rounded-md text-sm font-medium"
        to="/modellist"
        >上一頁</router-link
      >
    </button>
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
    <h1>預測結果 {{ price }}</h1>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { postResultPriceApi, postResultImgApi } from "../js/API";
import { useRoute } from "vue-router";

const startDate = ref("");
const endDate = ref("");
const route = useRoute();
const price = ref("");

function resultImg() {
  console.log(route.params.id);
  postResultImgApi({
    model_id: route.params.id,
    stock_code: route.params.code,
    data_clean: route.params.clean,
    start_time: startDate.value,
    end_time: endDate.value,
  });
}
function resultPrice() {
  postResultPriceApi({
    model_id: route.params.id,
    stock_code: route.params.code,
    data_clean: route.params.clean,
  }).then((response) => {
    price.value = response.data;
  });
}

function produceData() {
  const data = {
    start: startDate.value,
    end: endDate.value,
  };
  console.log("Predict Data", data);
  alert("訓練成功!");
  //resultImg()
  resultPrice();
}
</script>
