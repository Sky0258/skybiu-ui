<template>
  <div :class="tClass">
    <input
      type="text"
      :value="modelValue"
      @input="input"
      :placeholder="placeholder"
      :disabled="disabled"
    />
    <i class="iconfont">&#xe661;</i>
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
@font-face {font-family: 'iconfont';
    src: url('iconfont.eot');
    src: url('iconfont.eot?#iefix') format('embedded-opentype'),
    url('iconfont.woff') format('woff'),
    url('iconfont.ttf') format('truetype'),
    url('iconfont.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
</style>