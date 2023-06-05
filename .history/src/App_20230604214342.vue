<template>
   <div>
      <tMessage  id="one" type="success">这是一条成功调用的信息</tMessage>
      <tMessage  id="one" type="info" title="成功" show="false">这是一条成功调用的信息</tMessage>
      <button @click="open">点击</button>
      <h1 class="animate__animated animate__fadeInDown">dddddddddddd</h1>
   </div>
</template>

<script setup>

import { ref } from 'vue'
import tMessage from '../packages/message/index.vue'
const val = ref("");

const open = () => {
   const one = document.querySelector("#one");
   if(one.style.display == "none") {
      one.style="display: block";
   }else {
      one.style="display: none";
   }
   
}
</script>

<style lang='scss'>
@font-face {
  font-family: 'iconfont';  /* Project id 3141904 */
  src: url('//at.alicdn.com/t/c/font_3141904_uo7xckqk3g.woff2?t=1685885518971') format('woff2'),
       url('//at.alicdn.com/t/c/font_3141904_uo7xckqk3g.woff?t=1685885518971') format('woff'),
       url('//at.alicdn.com/t/c/font_3141904_uo7xckqk3g.ttf?t=1685885518971') format('truetype');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}

</style>