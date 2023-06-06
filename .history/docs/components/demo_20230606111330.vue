<template>
   <div>
        <tUploader message="只能上传，且不超过500kb" :onsuccess="success" :onerror="error" @change="change" multiple  :fileList="fileList" :imgList="imgList" type="fileUploader">点击上传文件</tUploader>
   </div>
</template>

<script setup>

</script>

<style lang='scss' scoped>

</style>