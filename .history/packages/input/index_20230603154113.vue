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
div {
    position: relative;
}
.t-input {
  display: inline-block;
  min-width: 240px;
  border: $border solid 1px;
  border-radius: 8px;
  transition: all 0.15s ease;
  &:focus {
      outline: $outline solid 1px;
  }
  input {
    width: 80%;
    border: none;
    font-size: 14px;
    color: $fontColor;
    padding: 10px;
    outline: none;;
  }
}
.t-input-disabled {
    input {
        cursor: no-drop;
        opacity: 0.5;
    }
}
i {
    position: absolute;
    top: 32%;
    right: 13px;
}

@font-face {
  font-family: 'iconfont';  /* Project id 3141904 */
  src: url('//at.alicdn.com/t/c/font_3141904_vf0akqscesc.woff2?t=1685776538316') format('woff2'),
       url('//at.alicdn.com/t/c/font_3141904_vf0akqscesc.woff?t=1685776538316') format('woff'),
       url('//at.alicdn.com/t/c/font_3141904_vf0akqscesc.ttf?t=1685776538316') format('truetype');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:13px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
</style>