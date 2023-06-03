<template>
   <div>
      <tInput placeholder="请输入" clean v-model="val" type="text"></tInput>
      <tInput placeholder="请输入" disabled v-model="val"></tInput>
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