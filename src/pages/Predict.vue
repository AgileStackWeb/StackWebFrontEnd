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
    <img :src="(path)">
  </div>
  <div>
    <button @click="resultPrice">
      預測明天股價
      <font-awesome-icon class="icon" :icon="['fas', 'magnifying-glass']" />
    </button>
    <br />
    <h1 class="relative h-fit w-fit m-5"> 預測明天股價結果 {{ price }}</h1>
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
const path = ref('http://127.0.0.1:5000/images/65b8aad4-c3ec-41e4-8223-5436daa21fa0.jpg');
const loading = ref("");

function resultImg() {
  loading.value = "Loading";
  console.log(route.params.id);
  postResultImgApi({
    model_id: route.params.id,
    stock_code: route.params.code,
    data_clean: route.params.clean,
    start_time: startDate.value,
    end_time: endDate.value,
  }).then((response) => {
    path.value = 'http://127.0.0.1:5000/images/' + response.data;
  });
}
function resultPrice() {
  postResultPriceApi({
    model_id: route.params.id,
    stock_code: route.params.code,
    data_clean: route.params.clean,
  }).then((response) => {
    price.value = response.data.toFixed(2);
  });
}

function produceData() {
  const data = {
    start: startDate.value,
    end: endDate.value,
  };
  resultImg()
}
</script>
