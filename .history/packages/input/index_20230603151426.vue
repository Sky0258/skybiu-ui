<template>
  <div :class="tClass">
    <input
      type="text"
      :value="modelValue"
      @input="input"
      :placeholder="placeholder"
      :disabled="disabled"
    />
    <i class="iconfont">&#xe613;</i>
  </div>
</template>
<script>
export default {
  name: "tInput",
};
</script>

<script setup>
import { computed } from "vue";

// 数据双向绑定
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: String | Number,
  placeholder: String,
  disabled: Boolean,
});

// 在数据变化的时候抛出去
const input = (e) => {
  emit("update:modelValue", e.target.value);
};

const tClass = computed(() => {
  return [
    "t-input",
    {
      "t-input-disabled": props.disabled,
    },
  ];
});
</script>

<style lang='scss' scoped>
.t-input {
  display: inline-block;
  min-width: 240px;
  input {
    width: 90%;
    font-size: 14px;
    border: $border solid 1px;
    color: $fontColor;
    padding: 10px;
    border-radius: 8px;
    transition: all 0.15s ease;
    &:focus {
      outline: $outline solid 1px;
    }
  }
}
.t-input-disabled {
    input {
        cursor: no-drop;
        opacity: 0.5;
    }
}
/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: 'iconfont';  /* Project id 3141904 */
  src: url('//at.alicdn.com/t/font_3141904_z7yk1wblmpi.woff2?t=1643419043169') format('woff2'),
       url('//at.alicdn.com/t/font_3141904_z7yk1wblmpi.woff?t=1643419043169') format('woff'),
       url('//at.alicdn.com/t/font_3141904_z7yk1wblmpi.ttf?t=1643419043169') format('truetype');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
</style>