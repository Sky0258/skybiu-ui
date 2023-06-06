<template>
   <div class="t-uploader">
        <i class="iconfont">&#xe889;</i><br>
        <span>将文件拖到此处，或<a>点击上传</a></span>
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
    i {
        display: inline-block;
        margin: 63px;
        font-size: 40px;
        color: $fontColor;
        cursor: pointer;
        &:hover {
            color: $primary;
        }
    }
}
</style>