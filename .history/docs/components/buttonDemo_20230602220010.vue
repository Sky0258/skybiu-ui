<template>
   <div>
      <tButton>默认</tButton>
      <tButton type="success">成功</tButton>
      <tButton type="warning">警告</tButton>
      <tButton type="danger">危险</tButton>
      <tButton type="info">信息</tButton>
      <tButton type="primary">主要按钮</tButton>
      <br>
      <tButton disabled>默认</tButton>
      <tButton type="success" disabled>成功</tButton>
      <tButton type="warning" disabled>警告</tButton>
      <tButton type="danger" disabled>危险</tButton>
      <tButton type="info" disabled>信息</tButton>
      <tButton type="primary" disabled>主要按钮</tButton>
      <br>
      <tButton type="primary" size="small">主要按钮</tButton>
      <tButton type="primary" size="middle">主要按钮</tButton>
      <tButton type="primary" size="large" onclick="open">主要按钮</tButton>
      <tButton type="success" circle>成功</tButton>
      <tButton type="success" circle size="large">成功</tButton>
   </div>
</template>

<script setup>
   const open = function() {
      alert('111111');
   }
</script>

<style lang='scss' scoped>
   div {
      float: left;
   }
   button {
      margin: 10px;
   }
</style>