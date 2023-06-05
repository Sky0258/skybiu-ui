<template>
    <div :class="tClass"><slot></slot></div>
</template>
<script>
export default {
  name: "tMessage",
};
</script>
<script setup>
import { computed } from "vue";

const props = defineProps({

})

const tClass = computed(() => {
    retrun [
        "t-message"
    ]
})
</script>

<style lang='scss' scoped>
.t-message {
    width: 250px;
    height: 30px;
    border: $primary solid 1px;
}
</style>