<template>
  <div>
    <tUploader
      message="只能上传jpg/png文件，且不超过500kb"
      :onsuccess="success"
      :onerror="error"
      @change="change"
      multiple
      :fileList="fileList"
      :imgList="imgList"
    ></tUploader>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const imgList = reactive([]);

const success = (e) => {
  alert("成功提示");
};

const error = () => {
  alert("错误提示");
};
</script>

<style lang='scss' scoped>
</style>