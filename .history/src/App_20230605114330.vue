<template>
   <div>
      <tUploader message="1111111111"></tUploader>
   </div>
</template>

<script setup>

import { ref } from 'vue'
import tMessage from '../packages/message/index.vue'
import tInput from '../packages/input/index.vue'
import tUploader from '../packages/uploader/index.vue'
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