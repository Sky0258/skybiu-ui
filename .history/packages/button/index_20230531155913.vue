<template>
   <div>
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
</style>