<template>
    <div class="base">
        <div :class="tClass" :type="type">
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
    type: String
})

const tClass = computed(() => {
    return [
        "t-message",
        "animate__animated animate__fadeInDown",
        props.type,

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
    padding: 5px 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
    font-size: 14px;
}
.success {
    background-color: #f0f9eb;
    border: #e1f3d8 solid 1px;
    color: #606266;
}
</style>