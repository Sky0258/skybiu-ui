<template>
    <div class="base">
        <div :class="tClass">
            <slot></slot>
        </div>
    </div>
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
        "animate__animated animate__fadeInDown success"
    ]
})

const open = ()=> {
    
}
</script>

<style lang='scss' scoped>
.base {
    text-align: center;
    position: absolute;
    width: 100%;
    top: 20px;
}
.t-message {
    min-width: 60px;
    display: inline-block;
    padding: 5px 20px;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
    font-size: 14px;
}
.success {
    background-color: #f0f9eb;
    border: #67c23a solid 1px;
    color: #909399;
}
</style>