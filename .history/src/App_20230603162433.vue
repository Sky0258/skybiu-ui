<template>
   <div>
      <tInput placeholder="请输入" clean v-model="val"></tInput>
      <tInput placeholder="请输入" disabled></tInput>
      <p>{{ val }}</p>
   </div>
</template>

<script setup>

import { ref } from 'vue'
import tInput from '../packages/input/index.vue'
const val = ref("");

</script>

<style lang='scss' scoped>

</style>