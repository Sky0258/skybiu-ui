<template>
  <div :class="tClass">
    <input
      :type="type"
      :value="modelValue"
      @input="input"
      :placeholder="placeholder"
      :disabled="disabled"
    />
    <i :class="iconStyle" @click="cleanInput">&#xe661;</i>
  </div>
</template>
<script>
import '../style/icon.css'
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
  clean: Boolean,
  type: String
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

const iconStyle = computed(() => {
    return [
        "iconfont",
        {
           "clean": (props.clean && props.modelValue)
        }
    ]
})

const cleanInput = () =>{
    emit("update:modelValue", '');
}

</script>

<style lang='scss' scoped>
@import url('../style/icon.css');
div {
    position: relative;
}
.t-input {
  display: inline-block;
  min-width: 240px;
  padding: 10px;
  border: $border solid 1px;
  border-radius: 8px;
  transition: all 0.15s ease;
  &:focus {
      outline: $outline solid 1px;
  }
  input {
    width: 90%;
    border: none;
    font-size: 14px;
    color: $fontColor;
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
    display: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 13px;
    cursor: pointer;
    color: #c1c5cd;
    &:hover {
        color: $primary;
    }
}
.clean {
    display: block;
}

</style>