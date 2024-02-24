<template>
    <div class="scanController animate__animated animate__bounce animate__delay-0.5s animate__bounceInLeft">
        <div class="font-bold text-2xl flex flex-col ">
            <span>扫一扫</span>
            <span>加我微信<SwapRightOutlined /></span>
        </div>
        <a-image
    :width="100"
    
    src="https://english-1309979517.cos.ap-nanjing.myqcloud.com/scan.jpg"
  />
    </div>
</template>
<script setup>

</script>
<style scoped>
.scanController {
    width: 350px;
    height: 150px;
    @apply flex justify-around items-center bg-light-50 rounded-2xl mt-6 bg-blend-lighten shadow-lg bg-opacity-100;
}
.scanController:hover{
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px !important;
}

</style>