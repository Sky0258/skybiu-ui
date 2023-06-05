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

const close = ()=> {
    // this.style.display = "none";
    console.log(this);
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

@font-face {
  font-family: 'iconfont';  /* Project id 3141904 */
  src: url('//at.alicdn.com/t/c/font_3141904_uo7xckqk3g.woff2?t=1685885518971') format('woff2'),
       url('//at.alicdn.com/t/c/font_3141904_uo7xckqk3g.woff?t=1685885518971') format('woff'),
       url('//at.alicdn.com/t/c/font_3141904_uo7xckqk3g.ttf?t=1685885518971') format('truetype');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
</style>