<template>
    <StockInfo/>
</template>

<script lang="ts">
import StockInfo from "./StockInfo.vue";

import {
    createApp,
    ref,
} from 'vue';

export default {
    name: "app",
    components: {
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

app.mount('#app');
</script>

<style scoped>

</style>
