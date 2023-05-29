<template>
<div class="">
    <div class="box-border m-7 bg-white">
        <h2 class="section-title relative h-fit w-fit" style="color:#8D7FB1;">查詢股票資訊</h2>

        <div class="relative h-fit w-fit m-5">
            <label for="stock-code">股票號碼 :</label>
            <input id="stock-code" class="box-border" v-model="stockCode" type="text">
        </div>
        <div class="relative h-fit w-fit m-5">
            <label for="range">選擇區間 :</label>
            <input id="range" class="box-border" type="date" v-model="startDate">
            <span class="m-3">~</span>
            <input type="date" class="box-border" v-model="endDate">
        </div>
        <button @click="search">查詢<font-awesome-icon class="icon" :icon="['fas', 'magnifying-glass']" /></button>
        
    </div>
</div>
</template>

<script>


export default {
    name: 'App',
    component:{
        
    },
    data() {
        return {
            stockCode: '',
            startDate: '',
            endDate: ''
        }
    },
    methods: {
        search() {
            const data = {
                'id': this.stockCode,
                'start': this.startDate,
                'end': this.endDate
            }

            this.$emit('search-event', data);
            console.log('Search...');
        }
    }
}
</script>
