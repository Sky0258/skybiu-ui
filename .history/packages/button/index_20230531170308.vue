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
const props = defineProps({
    type: {
        type: String,
        default: 'default'
    }
})
const tClass = computed(() => {
    return [
        "t-button",
        props.type == "" ? "" : `t-button-${props.type}` 
    ]
})
console.log(props.type);
</script>

<style lang='scss' scoped>
button {
    outline: none;
    border: 0;
    background: none;
    color: white;
    cursor: pointer;
}
.t-button {
    button {
        padding: 12px 24px;
        border-radius: 4px;
        border: 1px solid #e0e0e0;
    }
}
.t-button-default {
    button {
        color: black;
    }
}
.t-button-success {
    button {
        background-color: #67c23a;
    }
}
</style>