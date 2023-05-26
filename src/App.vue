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
    <!-- <StockSearch /> -->
    <div class="h-12"></div>
    <MainPage />
</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
