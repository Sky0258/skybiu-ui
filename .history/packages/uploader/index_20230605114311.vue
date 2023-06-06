<template>
   <div class="t-uploader" :message = "message">
        <i class="iconfont">&#xe889;</i><br>
        <span>将文件拖到此处，或<a>点击上传</a></span>
   </div>
   <span>{{ props.message }}</span>
</template>
<script>
export default {
    name: "tUploader"
}
</script>

<script setup>
import { computed } from "vue";

const props = defineProps({
    message: String
})
</script>

<style lang='scss' scoped>
.t-uploader {
    width: 180px;
    height: 180px;
    border: $border dashed 2px;
    i {
        display: inline-block;
        margin: 54px 0 10px 63px;
        font-size: 35px;
        color: $fontColor;
        cursor: pointer;
        &:hover {
            color: $primary;
        }
    }
    span {
        font-size: 12px;
        color: $fontColor;
        display: inline-block;
        width: 100%;
        text-align: center;
    }
    a {
        cursor: pointer;
        color: $primary;
    }
}
</style>