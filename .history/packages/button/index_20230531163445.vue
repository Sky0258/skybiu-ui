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

</script>

<style lang='scss' scoped>
button {
    outline: none;
    border: none;
}
.t-button {
    button {
        padding: 12px 24px;
        border-radius: 4px;
        border: 1px solid #e0e0e0;
    }
}
</style>