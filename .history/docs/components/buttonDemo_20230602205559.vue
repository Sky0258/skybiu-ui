<template>
   <div>
      <tButton>默认</tButton>
      <tButton type="success">成功</tButton>
      <tButton type="warning" @click="alert('22222')">警告</tButton>
      <tButton type="danger" disabled @click="alert('111111')">危险</tButton>
      <tButton type="info">信息</tButton>
      <tButton type="primary">主要按钮</tButton>
   </div>
</template>

<script setup>
   // import tButton from '../../packages/button/index'
</script>

<style lang='scss' scoped>
   
</style>