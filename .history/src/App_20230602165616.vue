<template>
   <div>
         <tButton>点击我</tButton>
        <tButton type="success">点击我</tButton>
        <tInput v-model="val"></tInput>
        <p> {{ val }}</p>

   </div>
</template>

<script setup>

import { ref } from 'vue'

const val = ref("");

</script>

<style lang='scss' scoped>

</style>