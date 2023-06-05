<template>
    <div class="base">
        <div :class="tClass" :type="type">
            <slot></slot>
            <i :class="iconClass">&#xe661;</i>
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
    type: String,
    round: Boolean
})

const tClass = computed(() => {
    return [
        "t-message",
        "animate__animated animate__fadeInDown",
        props.type,
        {
            "round": props.round
        }
    ]
})

const iconClass = computed(() => {
    return [
        "iconfont",
        {
           "clean": (props.clean && props.modelValue)
        }
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
    background-color: #edf2fc;
}
.round {
    border-radius: 8px;
}
i {
    // display: none;
    cursor: pointer;
    color: #c1c5cd;
    &:hover {
        color: $primary;
    }
}
.clean {
    display: block;
}
</style>