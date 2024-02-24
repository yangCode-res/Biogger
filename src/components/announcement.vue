<template>
    <div class="flex flex-col justify-center items-center announcementContainer">
        <span class="flex items-center title ">
            <icon :style="{ color: 'hotpink' }">
                <template #component>
                    <svg t="1706891139311" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="4256" width="30" height="30">
                        <path
                            d="M844.544 908.8H191.5392c-61.696 0-111.7696-50.0224-111.7696-111.7696v-107.2128h876.4928v107.2128c0 61.7472-50.0224 111.7696-111.7184 111.7696z"
                            fill="#ffa115" p-id="4257"></path>
                        <path
                            d="M853.8624 268.4416h-87.2448l-163.1232-145.1008c-48.6912-43.3152-122.2656-43.4688-171.1616-0.3584L267.4176 268.4416H182.1696c-73.4208 0-133.12 59.6992-133.12 133.12v404.8384c0 73.4208 59.6992 133.12 133.12 133.12h671.6928c73.4208 0 133.12-59.6992 133.12-133.12V401.5616c0-73.4208-59.6992-133.12-133.12-133.12zM472.9856 169.0624c25.6-22.5792 64.1536-22.4768 89.7024 0.2048l111.5136 99.1744h-313.856l112.64-99.3792z m452.5568 637.3376c0 39.5264-32.1536 71.68-71.68 71.68H182.1696c-39.5264 0-71.68-32.1536-71.68-71.68V401.5616c0-39.5264 32.1536-71.68 71.68-71.68h671.6928c39.5264 0 71.68 32.1536 71.68 71.68v404.8384z"
                            fill="#474A54" p-id="4258"></path>
                        <path
                            d="M756.1216 479.744H271.7184c-16.9472 0-30.72 13.7728-30.72 30.72s13.7728 30.72 30.72 30.72h484.4544c16.9472 0 30.72-13.7728 30.72-30.72s-13.7728-30.72-30.7712-30.72zM611.4304 659.1488H271.7184c-16.9472 0-30.72 13.7728-30.72 30.72s13.7728 30.72 30.72 30.72h339.712c16.9472 0 30.72-13.7728 30.72-30.72s-13.7728-30.72-30.72-30.72z"
                            fill="#474A54" p-id="4259"></path>
                    </svg>
                </template>
            </icon>
            <span class="text-2xl  text-amber-600 font-bold ml-1 font-serif">公告</span>
        </span>
        <div class="text-lg text-dark-400 font-medium text-center font-momo font-semibold leading-relaxed" >
            <p>欢迎来到『CountSheep』的小站</p>
            <p>(￣▽￣)～■干杯□～(￣▽￣)</p>
            <p>如果有什么加载不出来或者其它滴小bug</p>
            <p>「刷新网页/Ctrl+F5」应该、也许能解决.</p>
            
        </div>
    </div>
</template>
<script setup>
import Icon, { HomeOutlined } from '@ant-design/icons-vue';
</script>
<style scoped>

.announcementContainer {
    position: relative;
    top: 30px;
    width: 350px;
    height: 200px;
    background-color: rgba(255,255,255,1);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important;
    @apply  rounded-xl shadow-lg bg-opacity-50;
}
.announcementContainer:hover{
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px !important;
}
</style>