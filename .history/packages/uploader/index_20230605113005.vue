<template>
   <div class="t-uploader">
        <i class="iconfont">&#xe889;</i>
   </div>
</template>
<script>
export default {
    name: "tUploader"
}
</script>

<script setup>

</script>

<style lang='scss' scoped>
.t-uploader {
    width: 180px;
    height: 180px;
    border: $border dashed 2px;
    button {
        border: 0;
        background-color: #fff;
        font-size: 60px;
        font-weight: 100;
    }
}
</style>