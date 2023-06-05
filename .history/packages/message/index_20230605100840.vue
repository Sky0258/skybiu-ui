<template>
    <div class="message-base" >
        <div :class="tClass" :type="type" :title="title">
            <span v-if="props.title">{{ props.title }}<br></span>
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
    type: {
        type: String,
        default: 'info'
    },
    round: Boolean,
    clean: Boolean,
    title: String,
    show: {
        show: String,
        default: true
    }
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
        },
        {
            "title": props.title
        }
    ]
})

const close = (event)=> {
    event.target.parentNode.style.display = "none";
}
</script>

<style lang='scss' scoped>
.message-base {
    text-align: center;
    // position: absolute;
    width: 99%;
    top: 20px;
    z-index: 10;
    margin: 12px 0;
}
.t-message {
    min-width: 60px;
    display: inline-block;
    padding: 7px 25px;
    line-height: 30px;
    text-align: left;
    font-size: 14px;
}
.success {
    background-color: #e3fcd5;
    border: #67c23a solid 1px;
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
    font-size: 14px;
    margin-left: 30px;
    color: #c1c5cd;
    &:hover {
        color: #409EFF;
    }
}
.clean {
    display: inline-block;
}
.clean.title {
    font-size: 22px;
}
span {
    font-weight: 600;
}

</style>