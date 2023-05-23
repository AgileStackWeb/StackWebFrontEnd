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
</template>

<style scoped>

</style>
