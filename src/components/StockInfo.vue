<template lang="">

<StockSearch @search-event="handleSearchEvent" />
<div id="stockinfo">
    <div class="items-stretch">
        <h2 class="self-auto">您所查詢的股票資訊</h2>
    </div>
    <div class="flex flex-row content-center">

        <div class="p-8">
            <article class="group w-64 p-4 rounded bg-gray-200">
                <h3 class="text-lg font-bold">公司名稱</h3>
                <p class='group-hover:text-blue-400'>公司名稱</p>
            </article>
        </div>

        <div class="p-8">
            <article class="group w-64 p-4 rounded bg-gray-200">
                <h3 class="text-lg font-bold">股票號碼</h3>
                <p class='group-hover:text-blue-400'>{{stock_Id}}</p>
            </article>
        </div>

        <div class="p-8">
            <article class="group w-64 p-4 rounded bg-gray-200">
                <h3 class="text-lg font-bold">選擇區間</h3>
                <p class='group-hover:text-blue-400'>{{start_Date}}</p>
                ~
                <p class='group-hover:text-blue-400'>{{end_Date}}</p>
            </article>
        </div>
    </div>
    <button @click="searchdata">下一步</button>
    <TrainingButton/>
    <!-- <button-next></button-next> -->

</div>
</template>

<script>
import TrainingButton from "./TrainingButton.vue";
import StockSearch from "./Stocksearch.vue";

export default {
    name: "app",
    components: {
        TrainingButton,
        StockSearch,
    },
    data(){
        return{
            stock_Id : '',
            start_Date : '',
            end_Date : ''
        }
    },
    methods: {
        searchdata() {
            console.log('Next Step.');
            // 查詢資料並返回結果
        },
        handleSearchEvent(data){
            console.log(data)
            this.stock_Id = data.id
            this.start_Date = data.start
            this.end_Date = data.end
        },
    },
}
</script>

<style lang="">

</style>
