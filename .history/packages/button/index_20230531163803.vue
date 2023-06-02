<template>
   <div class="t-button">
        <button><slot></slot></button>
   </div>
</template>
<script>
export default {
    name: 'tButton'
}
</script>
<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'default'
    }
})

console.log(props.name);
</script>

<style lang='scss' scoped>
button {
    outline: none;
    border: 0;
    background: none;
    cursor: pointer;
}
.t-button {
    button {
        padding: 12px 24px;
        border-radius: 4px;
        border: 1px solid #e0e0e0;
    }
}
</style>