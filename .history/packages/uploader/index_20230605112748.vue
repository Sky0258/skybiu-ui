<template>
   <div class="t-uploader">
        <button>+</button>
   </div>
</template>
<script>
export default {
    name: "tUploader"
}
</script>

<script setup>

</script>

<style lang='scss' scoped>
.t-uploader {
    width: 180px;
    height: 180px;
    border: $border dashed 2px;
    button {
        border: 0;
        background-color: none;
        font-size: 20px;
    }
}
</style>