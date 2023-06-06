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
const fileList = reactive([]);

const success = (e) => {
  fileList.unshift(...e.target.files);
};

const error = () => {
  alert("错误提示");
};
</script>

<style lang='scss' scoped>
</style>