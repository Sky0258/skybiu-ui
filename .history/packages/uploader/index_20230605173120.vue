<template>
   <div class="t-uploader" :message = "message" @click="open">
        <input type="file" style="display: none" ref="files" @change="getFile" multiple>
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
import { computed, watch,ref, reactive } from "vue";

const props = defineProps({
    message: String,
    onsuccess: Function,
    onerror: Function
})
const files = ref(null);
const open = () => {
    files.value.click();
}
const fileList = reactive([]);
const getFile = (e) => {
    console.log(e.target.files);
    fileList.unshift(...e.target.files);
}
// watch(data,() => {
//     alert('发生改变')
// })

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