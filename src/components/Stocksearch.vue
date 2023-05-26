<template>
  <div>
    <h2>股票查詢</h2>
    
    <div>
      <label for="stock-code">股票號碼:</label>
      <input id="stock-code" v-model="stockCode" type="text">
    </div>
    
    <div>
      <label for="range">資料區間:</label>
      <input id="range" type="date" v-model="startDate">
      <span>至</span>
      <input type="date" v-model="endDate">
    </div>

    <button @click="nextStep">下一步</button>
    <button @click="search">查詢</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stockCode: '',
      startDate: '',
      endDate: ''
    }
  },
  methods: {
    nextStep() {
      // 在這裡實作下一步的邏輯
      console.log('Next step...');
    },
    search() {
      // console.log(this.stockCode);
      // console.log(this.startDate);
      // console.log(this.endDate);

      //在這裡實作查詢邏輯

      const data = {
        'id' : this.stockCode,
        'start' : this.startDate,
        'end' : this.endDate
      }
      // console.log(data);
      this.$emit('search-event', data);
      console.log('Search...');
    }
  }
}
</script>