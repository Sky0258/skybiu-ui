<template>
   <div class="t-input">
        <input type="text" :value="modelValue" @input="input" />
   </div>
</template>
<script>
export default {
    name: "tInput"
}
</script>

<script setup>
// 数据双向绑定
const emit = defineEmits(["update:modelValue"])
const props = defineProps({
    modelValue: String | Number,
});

const input = (e) => {
    emit("update:modelValue", e.target.value);
}
</script>

<style lang='scss' scoped>
    .t-input {
        display: inline-block;
        min-width: 240px;
        input {
            width: 100%;
            font-size: 14px;
            border: $border solid 1px;
            color: $fontColor;
            padding: 10px;
            &:focus {
                outline: $outline solid 1px;
            }
        }
    }
</style>