<template>
    <div class="informationContainer component">
        <div>
            <span class="flex items-center">
                <icon :style="{ color: 'hotpink' }">
                    <template #component>
                        <svg t="1708369714997" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="6815" width="30" height="30">
                            <path
                                d="M150.49401 1023.559869a42.648328 42.648328 0 0 1-26.868447-75.914023l75.061057-60.560626a85.296656 85.296656 0 0 1 97.664671-6.823732A426.483279 426.483279 0 1 0 85.668551 501.117853a414.541747 414.541747 0 0 0 65.678425 238.830636 42.648328 42.648328 0 0 1-72.075674 45.633711A498.558953 498.558953 0 0 1 0.371895 498.558953a511.779935 511.779935 0 1 1 253.331068 455.484142l-76.340507 60.134142a42.648328 42.648328 0 0 1-26.868446 9.382632zM554.800158 682.373246v-213.241639a42.648328 42.648328 0 1 0-85.296656 0v213.241639a42.648328 42.648328 0 0 0 85.296656 0z m-85.296656-341.186623a42.648328 42.648328 0 1 0 42.648328-42.648328 42.648328 42.648328 0 0 0-42.648328 42.648328z"
                                fill="#3E2AD1" p-id="6816"></path>
                        </svg>
                    </template>
                </icon>
                <span class="text-dark-50 text-xl ml-1 font-bold font-serif">网站信息</span>
            </span>
        </div>
        <div class="flex flex-col mt-4 font-serif font-semibold">
            <span class="flex items-center justify-between text-dark-50 text-lg ">
                <span>文章数目:</span>
                <span>{{ stats.totalPosts }}</span>
            </span>
            <span class="flex items-center justify-between text-dark-50 text-lg ">
                <span>已运行时间:</span>
                <span>{{daysDiff}}天</span>
            </span>
            <span class="flex items-center justify-between text-dark-50 text-lg ">
                <span>本站总字数:</span>
                <span>{{ stats.totalWords / 1000 }}k</span>
            </span>
            <span class="flex items-center justify-between text-dark-50 text-lg ">
                <span>最后更新时间:</span>
                <span>{{ lastUpdate }}</span>
            </span>
        </div>
    </div>
</template>
<script setup>
import { ref, onBeforeMount } from 'vue'
import Icon, { HomeOutlined } from '@ant-design/icons-vue';
import { getBlogPostStats, getLatestArticles } from "~/api/blogpost.js"

var startDate = new Date("2024-02-10T00:00:00"); // 假设从午夜开始计算

// 获取当前日期
var currentDate = new Date();

// 计算时间差，结果是毫秒
var delta = currentDate - startDate;
const daysDiff = Math.floor(delta / (1000 * 60 * 60 * 24));



const lastUpdate = ref("")
const stats = ref({})

onBeforeMount(() => {
    getBlogPostStats().then((res) => {
        stats.value = res.data
    })
    getLatestArticles().then((res) => {
        lastUpdate.value = res.data
    })
})
</script>
<style scoped>
.informationContainer {
    padding: 10px;
    position: relative;
    top: 150px;
    width: 350px;
    height: 200px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important;
    @apply rounded-xl;
}

.informationContainer:hover {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px !important;
}</style>