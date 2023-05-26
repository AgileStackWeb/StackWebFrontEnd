<template>

<stock-info></stock-info>
<<<<<<< HEAD
<stock-info-box></stock-info-box>

<!-- <div v-if="searchResult !== null" id="sres">
    <div id="sres">
    查詢結果：{{ searchResult }}
</div> -->
</template>

<script lang="ts">
import {
    RouterLink,
    RouterView
} from 'vue-router'

import SearchStock from "./SearchStock.vue";
import StockInfo from "./StockInfo.vue";
import StockInfoBox from "./StockInfoBox.vue";

=======

</template>

<script lang="ts">

import SearchStock from "./SearchStock.vue";
import StockInfo from "./StockInfo.vue";
>>>>>>> a8922a9fa31e1407c195316a23d140b65cb8f9e8

import {
    createApp,
    ref,
} from 'vue';

export default {
    name: "app",
    components: {
        SearchStock,
<<<<<<< HEAD
        StockInfo,
        StockInfoBox
=======
        StockInfo
>>>>>>> a8922a9fa31e1407c195316a23d140b65cb8f9e8
    },

}
const app = createApp({
            setup() {
                const stocknum = ref('hello');

                function selfUpdate(val) {
                    stocknum.value = val;
                    alert(val)
                }

                return {
                    stocknum,
                    selfUpdate
                };
            }
        });

app.component('my-component', SearchStock);

app.mount('#app');
</script>

<style scoped>

</style>
