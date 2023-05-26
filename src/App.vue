<script>
import StockSearch from './components/Stocksearch.vue'
import MainPage from './components/MainPage.vue'

export default {
    components: {
        StockSearch,
        MainPage
    }
}
</script>

<template>
<div id="app">
    <StockSearch />
    <div class="h-12"></div>
    <MainPage />
</div>
</template>

<style scoped>

</style>
