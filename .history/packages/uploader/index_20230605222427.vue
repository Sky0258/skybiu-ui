<template>
  <div class="container animate__animated animate__fadeInDown">
    <ul class="imageList">
      <li v-for="(src, index) in srcList" :key="index">
        <img :src="src" alt="" />
      </li>
    </ul>
    <div class="t-uploader" :message="message" @click="open">
      <input
        type="file"
        style="display: none"
        ref="files"
        @change="getFile"
        :multiple="multiple"
      />
      <i class="iconfont">&#xe889;</i><br />
      <span>将文件拖到此处，或<a>点击上传</a></span>
    </div>
    <span class="message">{{ props.message }}</span>
    <div class="fileList">
      <li
        v-for="(item, index) in fileList"
        :key="index"
        class="animate__animated animate__fadeInDown"
      >
        <span><i class="iconfont">&#xe6cc;</i>{{ item.name }}</span>
        <i class="iconfont" @click="deleteFile(index)">&#xe600;</i>
      </li>
    </div>
  </div>
</template>
<script>
export default {
  name: "tUploader",
};
</script>

<script setup>
import { computed, watch, ref, reactive } from "vue";
const emit = defineEmits(["change", "update:files"]);

const props = defineProps({
  message: String,
  multiple: Boolean,
  onsuccess: Function,
  onerror: Function,
});
const files = ref(null);
const open = () => {
  files.value.click();
};

const fileList = reactive([]);
const srcList = reactive([]);

const getFile = (e) => {
  fileList.unshift(...e.target.files);
  emit("change", fileList);
  const file = e.target.files[0];

  getSrc(file)
    .then((res) => {
      srcList.unshift(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

function getSrc(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
  });
}
const deleteFile = (index) => {
  fileList.splice(index, 1);
};
</script>

<style lang='scss' scoped>
.container {
    display: flex;
}
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
.imageList {
  display: flex;
  li {
    list-style: none;
    img {
      width: 190px;
      height: 190px;
    }
  }
}
</style>