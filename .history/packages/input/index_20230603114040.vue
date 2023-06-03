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
        min-width: 300px;
        button {
            width: 100%;
            font-size: 14px;
            border: red($color: #000000) solid 1px;
        }
    }
</style>