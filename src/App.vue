<<<<<<< HEAD
<script lang="ts">

import MainPage from "./components/MainPage.vue";

export default {
    name: "app",
    components: {
        MainPage,
    },
};
</script>

<template>
<header>

    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">

        <HelloWorld msg="You did it!" />
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </div> -->
</header>

<div id="app">
    <main-page></main-page>
</div>
<!-- <RouterView /> -->
=======
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
>>>>>>> a8922a9fa31e1407c195316a23d140b65cb8f9e8
</template>



<style scoped>

</style>
