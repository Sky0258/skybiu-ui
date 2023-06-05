<template>
   <div>
      <tMessage  id="one">1</tMessage>
      <button @click="open">点击</button>
      <h1 class="animate__animated animate__fadeInDown">dddddddddddd</h1>
   </div>
</template>

<script setup>

import { ref } from 'vue'
import tMessage from '../packages/message/index.vue'
const val = ref("");

const open = () => {
   const one = document.querySelector("#one");
   alert('11111111')
   one.style="display: none";
}
</script>

<style lang='scss' scoped>
</style>