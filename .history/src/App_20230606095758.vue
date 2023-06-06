<template>
   <div>
      <tUploader message="只能上传jpg/png文件，且不超过500kb" :onsuccess="success" :onerror="error" @change="change" multiple type="fileUploader" :fileList="fileList">点击上传文件</tUploader>
   </div>
</template>

<script setup>

import { ref,reactive } from 'vue'
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
const fileList = reactive([]);
const success = (e) => {
    fileList.unshift(...e.target.files);
}

const error = () => {
   alert('bbbbbbb')
}

const change = (files) => {
   console.log(files);
}
</script>

<style lang='scss'>


</style>