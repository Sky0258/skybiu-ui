<template>
   <div class="t-uploader" :message = "message" @click="open">
        <input type="file" style="display:none" ref="files" @change="getFile(e)" accept=".doc,.docx,.pdf,.ai,.psd">
        <i class="iconfont">&#xe889;</i><br>
        <span>将文件拖到此处，或<a>点击上传</a></span>
   </div>
   <span class="message">{{ props.message }}</span>
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

const open = () => {
    const f = document.querySelector('input')
    f.click();
}

const getFile = (e) => {
    alert('1111111')
    console.log(this);
}
</script>

<style lang='scss' scoped>
.t-uploader {
    width: 190px;
    height: 190px;
    border: $border dashed 2px;
    i {
        display: inline-block;
        margin: 54px 0 10px 68px;
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
.message {
    font-size: 13px;
    color: $fontColor;
}
</style>