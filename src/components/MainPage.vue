<template>

<stock-info></stock-info>
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


import {
    createApp,
    ref,
} from 'vue';

export default {
    name: "app",
    components: {
        SearchStock,
        StockInfo,
        StockInfoBox
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
