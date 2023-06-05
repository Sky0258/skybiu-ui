<template>
   <div>
        <div :class = "tClass"><slot></slot></div>
   </div>
</template>
<script>
export default {
  name: "tMessage",
};
</script>
<script setup>
import { computed } from "vue";

</script>

<style lang='scss' scoped>

</style>