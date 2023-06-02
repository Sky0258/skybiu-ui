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
const props = defineProps({
    modelValue: String | Number,
});

const input = (e) => {
    // console.log(e)
}
</script>

<style lang='scss' scoped>

</style>