<template>
  <StockSearch @search-event="handleSearchEvent" />
  <div id="stockinfo">
    <div class="items-stretch">
      <h2 class="section-title text-gray-700 underline">您所查詢的股票資訊</h2>
    </div>
    <div class="flex flex-row content-center">
      <div class="p-6">
        <article class="group w-64 box-border">
          <h3 class="text-lg font-bold box-title">股票號碼</h3>
          <section class="box-content">
            <p class="">{{ stock_Id }}</p>
          </section>
        </article>
      </div>

      <div class="p-6"> 
        <article class="group w-64 box-border">
          <h3 class="text-lg font-bold box-title">選擇區間</h3>
          <section class="box-content">
            <p class="">{{ start_Date }}</p>
            <p class="">~</p>
            <p class="">{{ end_Date }}</p>
          </section>
        </article>
      </div>
    </div>
    <div class="relative h-fit w-fit">
      <label for="stock-code">模型名稱 :</label>
      <input
        id="model_name"
        class="box-border"
        v-model="model_name"
        type="text"
      />
    </div>
    <router-link to="/starttrain">
      <button @click="searchdata">下一步</button></router-link
    >
    <button @click="postInputData">開始訓練</button>
    <h1>{{ loading }}</h1>
    <h1>{{ errorMessage }}</h1>
    <br /><br />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { startApi } from "../js/API";
import TrainingButton from "../components/TrainingButton.vue";
import StockSearch from "../components/Stocksearch.vue";

const stock_Id = ref("");
const start_Date = ref("");
const end_Date = ref("");
const loading = ref("");
const errorMessage = ref("");

function searchdata() {
  console.log("Next Step.");
}
function handleSearchEvent(data) {
  console.log(data);
  stock_Id.value = data.id;
  start_Date.value = data.start;
  end_Date.value = data.end;
}

function postInputData() {
  loading.value = "Loading";
  errorMessage.value = "";

  startApi({
    stock_code: stock_Id.value,
    start_time: start_Date.value,
    end_time: end_Date.value,
    model_name: model_name.value,
    data_clean: "standard",
    model_type: "SVR",
    technical_indicator: "price",
  })
    // .then((response) => loading.value="")
    .catch(function (error) {
      console.log(error.message);
      errorMessage.value = error.message;
    })
    .finally(() => (loading.value = ""));
}

// function a(x) {
//   return x + 1
// }
// a = x => x + 1
// a = (x) => x + 1
// a = x => {
//   return x + 1
// }
</script>
