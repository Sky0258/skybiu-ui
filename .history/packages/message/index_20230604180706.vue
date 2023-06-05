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
    return [
        "t-message",
        "animate__animated animate__fadeInDown"
    ]
})

const open = ()=> {
    
}
</script>

<style lang='scss' scoped>
.t-message {
    position: absolute;
    top: 20px;
    left: 50%;
    -webkit-transform: translateX(-50%)!important;
    // transform: translateX(-50%) ;
    min-width: 60px;
    display: inline-block;
    padding: 5px 20px;
    line-height: 30px;
    text-align: center;
    border: $primary solid 1px;
    font-size: 14px;
}
</style>