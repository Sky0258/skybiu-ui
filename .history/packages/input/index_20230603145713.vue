<template>
  <div :class="tClass">
    <input
      type="text"
      :value="modelValue"
      @input="input"
      :placeholder="placeholder"
      :disabled="disabled"
    />
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
//   min-width: 240px;
  input {
    width: 100%;
    font-size: 14px;
    border: $border solid 1px;
    color: $fontColor;
    // padding: 10px;
    // border-radius: 8px;
    transition: all 0.15s ease;
    &:focus {
      outline: $outline solid 1px;
    }
  }
}
.t-input-disabled {
    input {
        cursor: no-drop;
        opacity: 0.7;
    }
}

</style>