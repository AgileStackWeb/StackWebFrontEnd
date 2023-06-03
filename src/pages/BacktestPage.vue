<template lang="">
<div>
    <div class="box-border p-7 bg-white">
        <div class="relative h-fit w-fit m-5">
            <label for="range">選擇區間 :</label>
            <input id="range" class="box-border" type="date" v-model="startDate" />
            <span class="p-3">~</span>
            <input type="date" class="box-border" v-model="endDate" />
        </div>
        <button @click="search">
            回測
            <font-awesome-icon class="icon" :icon="['fas', 'magnifying-glass']" />
        </button>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="">

</style>
