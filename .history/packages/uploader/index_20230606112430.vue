<template>
  <div class="container" v-if="type == 'imgUploader'">
    <ul class="imageList">
      <li v-for="(src, index) in imgList" :key="index" class="animate__animated animate__fadeInUp">
        <img :src="src" alt="" />
        <i class="iconfont imgDelete" @click="deleteImg(index)">&#xe718;</i>
        <span class="cover"></span>
      </li>
    </ul>
    <div class="upContain">
        <div class="t-uploader" :message="message" @click="open">
        <input
            type="file"
            style="display: none"
            ref="files"
            @change="getImgFile"
            :multiple="multiple"
            :accept="acceptType"
        />
        <i class="iconfont">&#xe889;</i><br />
        <span>将文件拖到此处，或<a>点击上传</a></span>
        </div>
        <span class="message">{{ props.message }}</span>
    </div>
  </div>

  <div v-if="type == 'fileUploader'">
    <tButton :type="buttonType" @click="open"><slot></slot></tButton>
        <input
            type="file"
            style="display: none"
            ref="files"
            @change="getFile"
            :multiple="multiple"
            :accept="acceptType"
         />
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
    show: Boolean,
    type: {
        type: String,
        default: 'imgUploader'
    },
    acceptType: {
        type: String,
        default: 'image/jpeg'
    },
    buttonType: {
        type: String,
        default: 'primary'
    },
    fileList: Array,
    imgList: Array,
});
const files = ref(null);
const open = () => {
  files.value.click();
};


const getImgFile = (e) => {
    const files = e.target.files;
    for(const file of files) {
        getSrc(file)
        .then((res) => {
        props.imgList.push(res);
        })
        .catch((err) => {
        console.log(err);
        });
    }
}

const getFile = (e) => {
    props.onsuccess(e);
//   fileList.unshift(...e.target.files);
//   emit("change", fileList);

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
  props.fileList.splice(index, 1);
};

const deleteImg = (index) => {
  props.imgList.splice(index, 1);
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
    margin: 54px 0 10px 77px;
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
    width: 300px;
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
//   flex-wrap : wrap;
  margin: 0;
  li {
    list-style: none;
    position: relative;
    cursor: pointer;
    &:hover .cover{
        display: block;
    }
    &:hover .imgDelete{
        display: block;
    }
    img {
      width: 190px;
      height: 190px;
      
    }
  }
}
.cover {
    display: inline-block;
    position: absolute;
    width: 190px;
    height: 193px;
    background-color: black;
    opacity: 0.5;
    display: none;
    top: 0;
}
.imgDelete {
    display: none;
    position: absolute;
    top: 80px;
    right: 80px;
    font-size: 32px;
    cursor: pointer;
    z-index: 10;
    color: white;
    &:hover {
        color: $primary;
    }
}
</style>