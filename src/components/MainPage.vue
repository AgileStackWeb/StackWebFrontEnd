<template>

<div>
<StockInfo />
</div>

</template>

<script lang="ts">

import SearchStock from "./SearchStock.vue";
import StockInfo from "./StockInfo.vue";

import {
    createApp,
    ref,
} from 'vue';

export default {
    name: "app",
    components: {
        SearchStock,
        StockInfo
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
