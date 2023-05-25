<template lang="">
<div>
    <label for="stocknumber">股票號碼:</label>
    {{stocknb}}
    <input type="text" id="stocknumber" v-model="stocknum" placeholder="輸入數字" />
</div>
<div>
    <label for="start">選擇區間:</label>
    <input type="date" id="stockstart" name="trip-start" value="2022-05-23" min="2000-01-01" max="2023-05-23">~
    <input type="date" id="stockend" name="trip-end" value="2022-05-23" min="2000-01-01" max="2023-05-23">

    <button @click="searchdata">查詢</button>
</div>
</template>

<script>
import {
    createApp,
    ref,
    defineComponent
} from 'vue';

export default {
    name: 'App',
    props: {
        stockNb: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const stocknum = ref(props.stocknb);

        function searchdata() {
            alert('YEAH')
            // 触发自定义事件 'update'，并传递 message 的值
            this.$emit('search', stocknum.value);
        }

        return {
            stocknum,
            searchdata
        };
    },
    // setup() {
    //     const stocknum = ref('');
    //     const searchResult = ref(null);

    //     // function searchdata() {
    //     //     // 在這裡執行你的查詢邏輯
    //     //     // 這個例子中，我們只是將輸入的數字設置為查詢結果
    //     //     searchResult.value = stocknum.value;
    //     //     alert('clicked.')
    //     //     // alert(searchResult.value)
    //     //     console.log(searchResult.value)
    //     // }

    //     return {
    //         stocknum,
    //         searchResult,
    //         searchdata
    //     };
    // }
};

</script>

<style lang=""></style>
