<template>
  <div>
    <button @click="alertmsg">{{ msg }}</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const msg = ref("開始訓練");

function alertmsg() {
  console.log("Training Success.");
  alert("訓練成功");
}
</script>
