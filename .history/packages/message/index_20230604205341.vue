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
    border-radius: 8px;
    font-size: 14px;
    color: #606266;
}
.success {
    background-color: #e3fcd5;
    border: #e1f3d8 solid 1px;
}
.error {
    background-color: #fde2e2;
    border: #f56c6c solid 1px;
}
.warning {
    background-color: #faecd8;
    border: #e6a23c solid 1px;
}
.info {
    background-color: #e9e9eb;
    border: #909399 solid 1px;
    color: black;
}
</style>