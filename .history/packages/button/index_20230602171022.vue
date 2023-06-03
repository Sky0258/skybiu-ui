<template>
   <div :class="tClass">
        <button><slot></slot></button>
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
    }
})

// 计算 class 名
const tClass = computed(() => {
    return [
        "t-button",
        `t-button-${props.type}` 
    ]
})

</script>

<style lang='scss' scoped>
button {
    outline: none;
    border: 0;
    background: $primary;
    cursor: pointer;
}
.t-button {
    button {
        padding: 12px 20px;
        border-radius: 4px;
        border: 1px solid #e0e0e0;
        color: white;
        font-size: 14px;
        &:hover,&:focus {
            opacity: 0.8;
        }
    }
}
.t-button-default {
    button {
        color: black;
    }
}
.t-button-success {
    button {
        background-color: $success;
    }
}
</style>