<template>
   <div>
        <button :class="tClass"><slot></slot></button>
   </div>
</template>
<script>
export default {
    name: 'tButton'
}
</script>
<script setup>
import { computed } from 'vue'
// 获取 type 值
const props = defineProps({
    type: {
        type: String,
        default: 'default'  // 默认值 default
    },
    disabled: Boolean
})

// 计算 class 名
const tClass = computed(() => {
    return [
        "t-button",
        `t-button-${props.type}` ,
        props.disabled? 't-button-disabled':''
    ]
})

</script>

<style lang='scss' scoped>
div {
    float: left;
    margin: 6px;
}
button {
    outline: none;
    border: 0;
    background: none;
    cursor: pointer;
}
.t-button {
    padding: 10px 18px;
    border-radius: 10px;
    border: 1px solid #e0e0e0;
    color: white;
    font-size: 14px;
    &:hover,&:focus {
        opacity: 0.8;
    }
}
.t-button-default {
    color: black;
}
.t-button-success {
    background-color: $success;
}
.t-button-warning {
    background-color: $warning;
}
.t-button-danger {
    background-color: $danger;
}
.t-button-info {
    background-color: $info;
}
.t-button-primary {
    background-color: $primary;
}

.t-button-disabled {
    opacity: 0.4;
    cursor: no-drop;
    &:hover,&:focus {
        opacity: 0.4;
    }
}
</style>