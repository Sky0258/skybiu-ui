<template>
   <div>
         <tButton>点击我</tButton>
        <tButton type="success">点击我</tButton>
        <tInput v-model="val"></tInput>
        <p> {{ val }}</p>


        <hr>
        <button-demo></button-demo>
   </div>
</template>

<script setup>

import { ref } from 'vue'
import buttonDemo from '../docs/components/buttonDemo.vue';
const val = ref("");

</script>

<style lang='scss' scoped>

</style>