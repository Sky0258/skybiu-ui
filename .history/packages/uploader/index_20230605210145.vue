<template>
   <div class="t-uploader" :message = "message" @click="open">
        <input type="file" style="display: none" ref="files" @change="getFile" :multiple="multiple">
        <i class="iconfont">&#xe889;</i><br>
        <span>将文件拖到此处，或<a>点击上传</a></span>
   </div>
   <span class="message">{{ props.message }}</span>
   <div class="fileList">
    <li v-for="(item,index) in fileList" :key="index" class="animate__animated animate__fadeInDown">
        <span><i class="iconfont">&#xe6cc;</i>{{ item.name }}</span>
        <i class="iconfont" @click="deleteFile(index)">&#xe600;</i>
    </li>
   </div>

   <img src="http://127.0.0.1:5173/72a9d627-e5bc-4b6b-bdfc-f65d235c3c17" alt="">
</template>
<script>
export default {
    name: "tUploader"
}
</script>

<script setup>
import { computed, watch,ref, reactive } from "vue";
const emit = defineEmits(['change','update:files'])

const props = defineProps({
    message: String,
    multiple: Boolean,
    onsuccess: Function,
    onerror: Function
})
const files = ref(null);
const open = () => {
    files.value.click();
}
const fileList = reactive([]);
const getFile = (e) => {
    // console.log(e.target.files);
    fileList.unshift(...e.target.files);
    // console.log(e.target.files[0].value);
    emit('change',fileList);

    const file = e.target.files[0]; 
    let url;
    if (window.createObjectURL!=undefined) { // basic
        url = window.createObjectURL(file) ;
    } else if (window.URL!=undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file) ;
    } else if (window.webkitURL!=undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file) ;
    }
    console.log(url);
}
const deleteFile = (index) => {
    fileList.splice(index,1);
}
</script>

<style lang='scss' scoped>
.t-uploader {
    width: 190px;
    height: 190px;
    cursor: pointer;
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
    font-size: 12px;
    color: $fontColor;
}
.fileList {
    list-style: none;
    font-size: 13px;
    width: 230px;
    margin-top: 5px;
    li {
        display: inline-block;
        width: 230px;
        height: 30px;
        line-height: 30px;
        display: flex;
        justify-content: space-between;
        i {
            font-size: 7px;
            cursor: pointer;
            &:hover {
                color: $primary;
            }
        }
        span {
            i {
                font-size: 16px;
                color: $fontColor;
                margin-right: 3px;
            }
        }
    }
}
</style>