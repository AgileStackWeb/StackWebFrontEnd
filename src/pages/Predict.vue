<template>
  <div class="box-border p-7 bg-white">
    <button class="rounded-full bg-violet-300" style="">
      <router-link
        class="text-white hover:text-blue px-3 py-2 rounded-md text-sm font-medium"
        to="/modellist"
        >上一頁</router-link
      >
    </button>
    <div class="relative h-fit w-fit m-5">
      <label for="range">選擇區間 :</label>
      <input id="range" class="box-border" type="date" v-model="startDate" />
      <span class="p-3">~</span>
      <input type="date" class="box-border" v-model="endDate" />
    </div>
    <button @click="produceData">
      開始預測
      <font-awesome-icon class="icon" :icon="['fas', 'magnifying-glass']" />
    </button>
  </div>
  <div>
    <br />
    <h2>{{ startDate }} ~ {{ endDate }}</h2>
    <h2>預測結果</h2>
  </div>
</template>

<script setup>
import { ref , onMounted} from "vue";
const startDate = ref("");
const endDate = ref("");

//從模型列表中取得資料
// onMounted(() => {
//   // 在组件挂载后执行的逻辑
//   const backTestData = {
//     sel_id : $route.params.model_id,
//     sel_sc : $route.params.stock_code,
//     sel_st : $route.params.start_time,
//     sel_et : $route.params.end_time,
//     sel_dc : $route.params.data_clean
//   }
//   console.log(backTestData);
//   console.log('Component mounted');
// });



// 送出回測資料到pretrain_model API
//function postModelData(){
  // axios
  //   .post("http://127.0.0.1:5000/api/user/use/pretrain_model/img",{
  //     model_id: selected_model.model_id,
  //     stock_code: selected_model.stock_code,
  //     start_time: selected_model.start_time,
  //     end_time: selected_model.end_time,
  //     data_clean: selected_model.data_clean,
  //   })
  //   // .then((response) => {
  //   //   rows.value = response.data;
  //   //   console.log(response);
  //   // })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  //console.log('backTestData',backTestData);
//}


function produceData() {
  const data = {
    start: startDate.value,
    end: endDate.value,
  };
  console.log("Predict Data", data);
  alert("訓練成功!");
}
</script>
