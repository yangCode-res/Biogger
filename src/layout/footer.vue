<template>
<div class="footerContainer">
    <p>欢迎来到CountSheep</p>
    <p class="ml-2">自 2024-2-10 建站以来，小站已苟活 {{ daysDiff }} 天 {{ hours }} 时 {{ minutes }} 分 ( =•ω•= )m</p>
    <a-avatar src="https://english-1309979517.cos.ap-nanjing.myqcloud.com/6455d1bfafd151cd19db3c2a744b6bf.jpg"
            style="width: 60px;height: 60px;" class="mt-2"/>
</div>
</template>
<script setup>
var startDate = new Date("2024-02-10T00:00:00"); // 假设从午夜开始计算

// 获取当前日期
var currentDate = new Date();

// 计算时间差，结果是毫秒
var delta = currentDate - startDate;
const daysDiff = Math.floor(delta / (1000 * 60 * 60 * 24));

// 将毫秒转换为小时
var hours = Math.floor(delta / 1000 / 60 / 60);

// 计算剩余的分钟
var minutes = Math.floor((delta / 1000 / 60) % 60);



</script>
<style scoped>
.footerContainer{
    padding: 40px;
    position: relative;
    width: 100%;
    height: 200px;
    z-index: 200;
    background: linear-gradient(-90deg,#ee7752,#e73c7e,#23a6d5,#23d5ab); /* 深灰色 */
    background-size: 300% 300%;
    animation: gradientBG 10s ease infinite;
    @apply flex items-center justify-center text-light-900 text-xl font-bold flex-col;
}
@keyframes gradientBG {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>