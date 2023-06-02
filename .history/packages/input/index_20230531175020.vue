<template>
   <div>
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
const emit = defineEmits(["update: modelValue"])
const props = defineProps({
    modelValue: String | Number,
});

const input = (e) => {
    emit("update: modelValue", e.target.value);
}
</script>

<style lang='scss' scoped>

</style>