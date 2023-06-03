<template>
   <div>
      <tButton>默认</tButton>
      <tButton type="success">成功按钮</tButton>
      <tButton type="warning">警告按钮</tButton>
      <tButton type="danger">危险按钮</tButton>
      <tButton type="info">信息按钮</tButton>
      <tButton type="primary">主要按钮</tButton>
      <br>
      <tButton disabled>默认</tButton>
      <tButton type="success" disabled>成功按钮</tButton>
      <tButton type="warning" disabled>警告按钮</tButton>
      <tButton type="danger" disabled>危险按钮</tButton>
      <tButton type="info" disabled>信息按钮</tButton>
      <tButton type="primary" disabled>主要按钮</tButton>
      <br>
      <tButton type="primary" size="small">主要按钮</tButton>
      <tButton type="primary" size="middle">主要按钮</tButton>
      <tButton type="primary" size="large" onclick="open">主要按钮</tButton>
      <tButton type="success" circle size="small">成功</tButton>
      <tButton type="success" circle>成功</tButton>
      <tButton type="success" circle size="large">成功</tButton>
   </div>
   <br>
</template>

<script setup>
</script>

<style lang='scss' scoped>
   div {
      display: flex;
      flex-wrap: wrap;
   }
   
</style>