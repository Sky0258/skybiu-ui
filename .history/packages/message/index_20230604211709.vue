<template>
    <div class="message-base">
        <div :class="tClass" :type="type">
            <span>{{ props.clean }} </span>
            <slot></slot>
            <i :class="iconClass" @click="close">&#xe661;</i>
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
    round: Boolean,
    clean: Boolean
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
           "clean": props.clean
        }
    ]
})

const close = ()=> {
    const div = document.querySelector(".message-base");
    div.style.display = "none";
}
</script>

<style lang='scss' scoped>
.message-base {
    text-align: center;
    position: absolute;
    width: 99%;
    top: 20px;
}
.t-message {
    min-width: 60px;
    display: inline-block;
    padding: 7px 23px;
    line-height: 30px;
    text-align: left;
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
    display: none;
    cursor: pointer;
    font-size: 13px;
    margin-left: 30px;
    color: #c1c5cd;
    &:hover {
        color: $primary;
    }
}
.clean {
    display: inline-block;
}
</style>