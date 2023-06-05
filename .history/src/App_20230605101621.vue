<template>
   <div>
      <tMessage  id="one" type="success">这是一条成功调用的信息</tMessage>
      <tMessage  id="one" type="info" title="成功" show="false">这是一条成功调用的信息</tMessage>
      <button @click="open">点击</button>
      <h1 class="animate__animated animate__fadeInDown">dddddddddddd</h1>
      <tInput clean v-model="val"></tInput>
   </div>
</template>

<script setup>

import { ref } from 'vue'
import tMessage from '../packages/message/index.vue'
import tInput from '../packages/input/index.vue'
const val = ref("");

const open = () => {
   const one = document.querySelector("#one");
   if(one.style.display == "none") {
      one.style="display: block";
   }else {
      one.style="display: none";
   }
   
}
</script>

<style lang='scss'>


</style>