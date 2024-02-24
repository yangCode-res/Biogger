<template>
    <div class="bannerContainer">
        <div class="flex items-center flex-col leftBanner">
            <div class="flex items-center justify-between showBox box1" @click="handleToPlaceShow">
                <span class="text-light-50 font-bold text-2xl flex flex-col">
                    <span>
                        归档
                    </span>
                    <span class="decoration-line">

                    </span>
                </span>
                <svg t="1706987291263" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="11397" width="64" height="64">
                    <path
                        d="M159.3 846.4c-5.3 0-10.6-2.1-14.6-6.3-7.2-7.6-7.3-19.5-0.2-27.2 0.4-0.5 42.3-46.6 80.9-126 35.4-72.8 75.2-189.4 64-331.5-0.5-5.8 1.5-11.6 5.7-15.7 4.1-4.1 9.7-6.2 15.5-5.8h2.1c7.9 0 37.1-1.2 82.2-17.1 58-20.4 118.4-56.1 179.4-106 8-6.5 19.5-5.9 26.8 1.3l195 195c3.9 3.9 6 9.2 5.8 14.8-0.2 5.5-2.6 10.7-6.8 14.4-0.3 0.3-30.8 27.5-59 70.1-25.3 38.1-53.9 96.8-46.8 160.3 0.6 5.7-1.2 11.5-5.1 15.7-3.9 4.3-9.5 6.6-15.2 6.5h-5.7c-50.7 0-312.5 7.4-491.3 153.1-3.8 2.9-8.3 4.4-12.7 4.4z m171.2-473.5c2.9 60.2-2.4 120.5-15.7 179.4-11.9 52.5-30.1 104.2-54.2 153.5-8 16.5-16.2 31.5-24.1 45.2 20.9-11.4 42.8-21.9 65.8-31.4 48.2-20.1 101.3-36.3 157.7-48.2 83.3-17.6 154.2-21.5 188.1-22.3-0.3-26.8 4.2-54.4 13.5-82.1 9.3-27.8 23.3-55.9 41.7-83.5 18.4-27.6 37.3-49 50.1-62.2l-168-168.2c-59.9 47-119.5 81.1-177.3 101.4-33.9 12-60.3 16.6-77.6 18.4zM867.2 362.6c-5.1 0-10.2-2-14.1-5.9L635.6 139.1c-7.8-7.8-7.8-20.5 0-28.3 7.8-7.8 20.5-7.8 28.3 0l217.5 217.5c7.8 7.8 7.8 20.5 0 28.3-3.9 4-9 6-14.2 6z"
                        fill="#ffffff" p-id="11398"></path>
                    <path
                        d="M393.5 615.4c-5.2 0-10.4-2-14.4-6.1-7.7-7.9-7.5-20.6 0.4-28.3l213.2-206.7c7.9-7.7 20.6-7.5 28.3 0.4 7.7 7.9 7.5 20.6-0.4 28.3L407.4 609.8c-3.8 3.8-8.9 5.6-13.9 5.6zM856.7 920.5h-700c-11 0-20-9-20-20s9-20 20-20h699.9c11 0 20 9 20 20s-8.9 20-19.9 20z"
                        fill="#ffffff" p-id="11399"></path>
                </svg>
            </div>
            <div class="flex items-center justify-between showBox box2" @click="handleToYearsStatics">
                <span class="text-light-50 font-bold text-2xl flex flex-col">
                    <span>
                        2024
                    </span>
                    <span class="decoration-line">

                    </span>
                </span>
                <svg t="1706988567154" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="12619" width="64" height="64">
                    <path
                        d="M512.7 64.5c-170.5 0-309.3 138.8-309.3 309.3 0 122 69.8 230.2 179.4 280.7v35.6c0 15.4 12.5 27.9 27.9 27.9h204.1c15.4 0 27.9-12.5 27.9-27.9v-35.6C752.2 604 822 495.8 822 373.8c0-170.6-138.8-309.3-309.3-309.3z m91.9 545.6c-10.7 4.2-17.8 14.5-17.8 26v26.1H438.6v-26.1c0-11.5-7.1-21.8-17.8-26-98.2-38.2-161.6-131-161.6-236.3 0-139.8 113.7-253.5 253.5-253.5S766.2 234 766.2 373.8c0 105.3-63.4 198-161.6 236.3z"
                        fill="#ffffff" p-id="12620"></path>
                    <path
                        d="M722.1 326.5c-2.3-10-12.2-16.3-22.2-14.1-10 2.3-16.3 12.2-14 22.2 2.9 12.7 4.3 25.9 4.3 39.1 0 6.7-0.4 13.6-1.2 20.3-1.2 10.2 6.2 19.4 16.4 20.6 0.7 0.1 1.5 0.1 2.2 0.1 9.3 0 17.4-7 18.4-16.5 0.9-8.1 1.4-16.4 1.4-24.5-0.1-15.9-1.9-31.8-5.3-47.2zM685 245.9c-31.9-42.9-78.1-72.2-130.2-82.5-10-2-19.9 4.6-21.9 14.6-2 10.1 4.5 19.9 14.6 21.9 43 8.5 81.3 32.8 107.6 68.3 3.6 4.9 9.2 7.5 14.9 7.5 3.9 0 7.8-1.2 11.1-3.7 8.3-6.3 10-17.9 3.9-26.1zM580.8 753.6H441.3c-15.4 0-27.9 12.5-27.9 27.9 0 15.4 12.5 27.9 27.9 27.9h139.5c15.4 0 27.9-12.5 27.9-27.9 0-15.4-12.5-27.9-27.9-27.9zM566.1 840.7H459.2c-15.4 0-27.9 12.5-27.9 27.9 0 15.4 12.5 27.9 27.9 27.9h106.9c15.4 0 27.9-12.5 27.9-27.9 0-15.4-12.5-27.9-27.9-27.9zM536.4 923.5h-47.5c-10.3 0-18.6 8.3-18.6 18.6s8.3 18.6 18.6 18.6h47.5c10.3 0 18.6-8.3 18.6-18.6 0-10.2-8.3-18.6-18.6-18.6zM609.4 364.7c-9.6-3.7-20.4 0.9-24.1 10.5l-72.6 183.6-62.5-158.2h77.6c10.3 0 18.6-8.4 18.6-18.6 0-10.3-8.3-18.6-18.6-18.6h-105c-0.5 0-0.9 0.1-1.4 0.1-0.7 0.1-1.4 0.1-2.1 0.2-0.7 0.1-1.4 0.4-2.1 0.6-0.4 0.1-0.9 0.2-1.3 0.3-0.1 0.1-0.1 0.1-0.2 0.1-0.7 0.3-1.4 0.7-2.1 1.1-0.4 0.2-0.8 0.4-1.2 0.7-0.6 0.3-1.1 0.8-1.6 1.3-0.4 0.3-0.9 0.6-1.2 1-0.5 0.5-0.9 1-1.3 1.5-0.3 0.4-0.7 0.8-1 1.2-0.5 0.7-0.8 1.4-1.1 2.1-0.2 0.4-0.4 0.7-0.6 1.1-0.3 0.6-0.4 1.2-0.6 1.9-0.2 0.5-0.4 1-0.5 1.6-0.1 0.5-0.1 0.9-0.2 1.4-0.1 0.8-0.2 1.5-0.2 2.3v0.2c0 0.4 0.1 0.9 0.1 1.3 0 0.7 0.1 1.4 0.2 2.2l0.6 2.1c0.1 0.4 0.2 0.9 0.4 1.3l88.8 224.7c2.9 7.3 9.9 11.8 17.3 11.8 0.4 0 0.7-0.1 1.1-0.1 0.4 0 0.7 0.1 1.1 0.1 7.4 0 14.4-4.5 17.3-11.8L619.8 389c3.8-9.7-0.9-20.5-10.4-24.3z"
                        fill="#ffffff" p-id="12621"></path>
                </svg>
            </div>
        </div>
        <div class="flex scrollContainer " ref="scrollContainer">
            <div v-for="(item, index) in paperList" :key="index" class="paperBox" @click="handleGetDetail(item)">
            <div class="image-container">
                <a-image :width="250" :src="item.coverimageurl" :preview="false"></a-image>
                <div class="overlay">
                    <div class="text">
                        {{ item.summary }}
                    </div>
                </div>
            </div>
            <p class="font-bold text-lg Paper-title">{{ item.title }}</p>
            
        </div>
        <DoubleRightOutlined class=" icon-right" @click="scrollLeft" ref="iconRef"/>
        <DoubleLeftOutlined  class="icon-left" @click="scrollRight"/>
        </div>
        
    </div>
</template>
<script setup>
import { ref,onBeforeMount } from 'vue';
import {
    DoubleRightOutlined,
    DoubleLeftOutlined
} from '@ant-design/icons-vue';
import {getPostList} from '~/api/blogpost.js'
import { useRouter, } from 'vue-router'
const router = useRouter()
const handleToPlaceShow=()=>{
    router.push('/place')
}
const handleToYearsStatics=()=>{
    router.push('/yearsStatics')
}
const handleGetDetail=(content)=>{
    const id=content.articleID
    router.push(`/article/${id}`)
}
onBeforeMount(()=>{
    getPostList().then(res=>{
        paperList.value=res.data;
    })
})
const scrollContainer=ref(null)
const scrollLeft = () => {
    const scrollAmount=100;
    if(scrollContainer.value){
        scrollContainer.value.scrollLeft+=scrollAmount;
    }
}
const scrollRight = () => {
    const scrollAmount=100;
    if(scrollContainer.value){
        scrollContainer.value.scrollLeft-=scrollAmount;
    }
}
const paperList = ref([
])
</script>
<style scoped>
@keyframes scroll-left {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}
.scrollContainer{
    overflow: hidden;
    position: relative;
    @apply flex items-center;
}
.icon-right{
    position: sticky;
    right: 0;
    z-index: 10;
    @apply cursor-pointer text-2xl text-light-500;
}
.icon-left{
    position: sticky;
    left: 0;
    z-index: 20;
    @apply cursor-pointer text-2xl text-light-50;
}
.bannerContainer {
    position: relative;
    padding: 5px;
    top: 10px;
    width: 90%;
    height: 240px;
    overflow-x: auto;
    scroll-behavior: smooth;  /* 平滑滚动 */
    @apply flex items-center;
}

.paperBox {
    position: relative;
    flex: 0 0 auto;
    margin: 6px;
    width: 248px;
    overflow: hidden;
    height: 208px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px !important;
    /* box-shadow: 0 2px 2px 2px rgba(7, 17, 27, 0.06); */
    /* border: 3px solid rgba(56, 211, 203, 0.8); */
    @apply flex items-center flex-col cursor-pointer rounded-xl;
}
.image-container{
    position: relative;
    width: 100%;
    height: 170px;
}
.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(0, 0, 0, 0.5) !important;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    @apply text-light-50 text-lg font-bold;
}

.paperBox:hover .overlay {
    opacity: 1;
}
.paperBox:hover .Paper-title{
    @apply  bg-gray-300 text-dark-50 opacity-30;
}
.Paper-title {
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
    bottom: 0;
    height: 45px;
    align-items: center;
    @apply bg-light-300 text-dark-50 bg-opacity-90 font-serif;
    /* background: rgba(0, 0, 0, 0.6); */
}

.showBox {
    margin: 5px;
    padding: 10px;
    width: 250px;
    height: 100px;

    @apply rounded-xl cursor-pointer;
}

.decoration-line {
    width: 30px;
    height: 3px;
    transition: width 1s ease-in-out;
    @apply bg-light-50 mt-1;
}

.showBox:hover .decoration-line {
    width: 60px;
}

.icon {
    transition: transform 1s ease-in-out;
    transition: rotate 1s ease-in-out;
}

.showBox:hover .icon {
    rotate: 10deg;
    transform: scale(1.2);
}

.box1 {
    background: linear-gradient(to right, #00868Bdb, #3fc1c9db);
}

.box2 {
    background: linear-gradient(to right, #0A5ABEdb, #2fcbffdb);
}</style>