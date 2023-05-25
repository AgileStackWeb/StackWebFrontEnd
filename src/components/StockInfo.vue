<template lang="">
<div id="stockinfo">
    <h2>您所查詢的股票資訊</h2>
    <h3>公司名稱</h3>

    <h3>股票號碼</h3>

    <h3>選擇區間</h3>
    <stock-info-box></stock-info-box>
    <stock-info-box></stock-info-box>
    <stock-info-box></stock-info-box>
    <!-- <button @click="searchdata">下一步</button> -->
    <button-next></button-next>

</div>
</template>

<script>
import {
    createApp
} from 'vue';
import StockInfoBox from "./StockInfoBox.vue";
export default {
    
}
// export default {
//     name: "app",
//     components: {
//         StockInfoBox,
//         'button-next': {
//             template: `<button @click="searchdata">下一步</button>`,
//             methods: {
//                 searchdata() {
//                     alert('click button.');
//                     // 查詢資料並返回結果
//                 }
//             }
//         }
//     },
// }

// const button = createApp({});
// button.component('button-next', {
//     template: `<button>下一步</button>`,
//     data() {},
//     props: {},
//     computed: {},
//     methods: {
//         searchdata: function () {
//             //查詢得到searchResult 
//             alert('click button.')
//             return searchResult
//         }
//     }
// });
// app.mount('#stockinfo');

// const app = createApp({
//     components: {
//         StockInfoBox,
//         'button-next': {
//             template: `<button @click="searchdata">下一步</button>`,
//             methods: {
//                 searchdata() {
//                     alert('click button.');
//                     // 查詢資料並返回結果
//                 }
//             }
//         }
//     }
// });

// app.mount('#stockinfo');
</script>

<style lang="">

</style>
