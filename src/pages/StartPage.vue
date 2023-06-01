<template>
  <div>
    <router-view></router-view>
  </div>

  <StockSearch @search-event="handleSearchEvent" />
  <div id="stockinfo">
    <div class="items-stretch">
      <h2 class="section-title text-gray-700 underline">您所查詢的股票資訊</h2>
    </div>
    <div class="flex flex-row content-center">
      <div class="p-6">
        <article class="group w-64 box-border">
          <h3 class="text-lg font-bold box-title">公司名稱</h3>
          <section class="box-content">
            <p class="">公司名稱</p>
          </section>
        </article>
      </div>

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
    <button @click="searchdata">下一步</button>
    <br /><br />
    <h2>訓練資料表格</h2>
    <br />
    <TrainingButton />
  </div>
</template>

<script setup>
import { ref } from "vue";
import TrainingButton from "../components/TrainingButton.vue";
import StockSearch from "../components/Stocksearch.vue";

const stock_Id = ref("");
const start_Date = ref("");
const end_Date = ref("");

function searchdata() {
  console.log("Next Step.");
}
function handleSearchEvent(data) {
  console.log(data);
  stock_Id.value = data.id;
  start_Date.value = data.start;
  end_Date.value = data.end;
}
</script>
