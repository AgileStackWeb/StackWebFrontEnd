<template lang="">
<div id="stockinfo">
<<<<<<< HEAD
    <h1>您所查詢的股票資訊</h1>
    <stock-info-box></stock-info-box>
    <stock-info-box></stock-info-box>
    <stock-info-box></stock-info-box>
    <!-- <button @click="searchdata">下一步</button> -->
    <button-next></button-next>
=======
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
                <p class='group-hover:text-blue-400'>股票號碼</p>
            </article>
        </div>

        <div class="p-8">
            <article class="group w-64 p-4 rounded bg-gray-200">
                <h3 class="text-lg font-bold">選擇區間</h3>
                <p class='group-hover:text-blue-400'>選擇區間</p>
            </article>
        </div>
    </div>
    <button @click="searchdata">下一步</button>
    <!-- <button-next></button-next> -->
>>>>>>> a8922a9fa31e1407c195316a23d140b65cb8f9e8

</div>
</template>

<script>
import {
    createApp
} from 'vue';
import StockInfoBox from "./StockInfoBox.vue";
<<<<<<< HEAD
=======

>>>>>>> a8922a9fa31e1407c195316a23d140b65cb8f9e8
export default {
    name: "app",
    components: {
        StockInfoBox,
<<<<<<< HEAD
    }
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
=======

        methods: {
            searchdata() {
                alert('click button.');
                // 查詢資料並返回結果
            }
        },
    }
}
>>>>>>> a8922a9fa31e1407c195316a23d140b65cb8f9e8

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

<<<<<<< HEAD
const app = createApp({
    components: {
        StockInfoBox,
        'button-next': {
            template: `<button @click="searchdata">下一步</button>`,
            methods: {
                searchdata() {
                    alert('click button.');
                    // 查詢資料並返回結果
                }
            }
        }
    }
});

app.mount('#stockinfo');
=======
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
>>>>>>> a8922a9fa31e1407c195316a23d140b65cb8f9e8
</script>

<style lang="">

</style>
